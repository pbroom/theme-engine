/* eslint-disable */
import { h } from 'preact';
import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { Hct } from '@material/material-color-utilities';
import { CopyPlus } from 'lucide-react';
import {
    IconButton,
    IconMinus32,
    Dropdown,
    Muted,
    RangeSlider,
    Tabs,
    TabsOption,
    Textbox,
    TextboxColor,
    TextboxMultiline,
    DropdownOption,
    createClassName,
} from '@create-figma-plugin/ui';
import { IconPlus32, IconChevronDown16 } from '@create-figma-plugin/ui';
import {
    ThemeColor,
    ThemeColorData,
    createThemeColor,
    useThemeColor,
} from '../hooks/useThemeColor';
import { round } from 'mathjs';
import {
    getStopsFromString,
    calculateHue,
    calculateChroma,
    hctTonalGradient,
    findMaxChromaForHueAtTone,
    findHighestChromaPerHue,
    findMaxChroma,
} from '../lib/color-utils';
import { maxChromaAtTonePerHue } from '../ref';
import { hexFromHct } from '../hooks/useColor';
import { AliasList } from './primitives-tab/alias';
import { ThemeColorSelect } from './primitives-tab/theme-color-select';
import { AliasData } from '../hooks/useAliasGroup';
import { Theme, ThemeData, useTheme } from '../hooks/useTheme';
import { nanoid } from 'nanoid';
import {
    ThemeListActions,
    ThemeListData,
    useThemeList,
} from '../hooks/useThemeList';
import _, { set } from 'lodash';

type TabGroupProps = {
    themeData: ThemeData;
    onSetThemeData: (themeData: ThemeData) => void;
    className?: string;
};

const CopyPlusIcon = CopyPlus as any;

const TabGroup = ({ themeData, onSetThemeData, className }: TabGroupProps) => {
    const [tabValue, setTabValue] = useState<string>('Primitives');
    const [currentThemeId, setCurrentThemeId] = useState<string>(themeData.id);
    const [currentThemeColorId, setCurrentThemeColorId] = useState<string>(
        `${themeData.themeColors[0].id}`,
    );

    const themeListStore = useThemeList;
    const themeList: ThemeListData & ThemeListActions = themeListStore();
    // const themeStore = useTheme;
    // const theme: Theme = themeStore();
    // const themeColorStore = useThemeColor;
    // const themeColor: ThemeColor = themeColorStore();

    const findThemeById = (id: string) => {
        const theme = themeList.themes.find((theme) => theme.id === id);
        if (!theme) {
            throw new Error(`Theme with id ${id} not found`);
        }
        return theme;
    };
    const currentTheme: ThemeData = findThemeById(currentThemeId);
    const findThemeColorById = (id: string) => {
        const theme = currentTheme.themeColors.find((theme) => theme.id === id);
        if (!theme) {
            throw new Error(`Theme with id ${id} not found`);
        }
        return theme;
    };
    const currentThemeColor: ThemeColorData =
        findThemeColorById(currentThemeColorId);

    // Initialize theme and themeColor with first theme and themeColor
    useEffect(() => {
        theme.set.all(themeListStore.getState().themes[0]);
        console.log(
            themeListStore.getState().themes[0].id,
            themeStore.getState().id,
        );
        themeColor.set.all(themeListStore.getState().themes[0].themeColors[0]);
        console.log(
            themeListStore.getState().themes[0].themeColors[0].id,
            themeColorStore.getState().id,
        );
    }, []);

    // Update themeList when selected theme changes
    const themeDataRef = useRef(themeStore.getState().data);
    useEffect(
        () =>
            themeStore.subscribe((state) => {
                const currentThemeData = themeListStore
                    .getState()
                    .data.themes.find((theme) => theme.id === currentThemeId);
                if (
                    !_.isEqual(themeDataRef.current, currentThemeData) &&
                    currentThemeData
                ) {
                    themeDataRef.current = currentThemeData;
                    themeList.theme.update(currentThemeId, {
                        ...state.data,
                        id: currentThemeId,
                    });
                }
            }),
        [],
    );

    // Update theme when selected themeColor changes

    const themeColorRef = useRef(themeColorStore.getState().data);
    useEffect(
        () =>
            themeColorStore.subscribe((state) => {
                const currentThemeColorData = themeStore
                    .getState()
                    .data.themeColors.find(
                        (themeColor) => themeColor.id === currentThemeColorId,
                    );
                if (
                    !_.isEqual(themeColorRef.current, currentThemeColorData) &&
                    currentThemeColorData
                ) {
                    themeColorRef.current = currentThemeColorData;
                    theme.themeColor.update(currentThemeColorId, {
                        ...state.data,
                        id: currentThemeColorId,
                    });
                }
            }),
        [],
    );

    const sendThemeColorData = () => {
        theme.themeColor.update(
            currentThemeColorId,
            themeColorStore.getState().data,
        );
        themeList.theme.update(currentThemeId, themeStore.getState().data);
    };

    // // Upstream state

    // useEffect(() => {
    //     theme.themeColor.update(currentThemeColorId, themeColor.data);
    // }, [themeColor.data]);

    // const useThemeData: ThemeData = themeStore.getState().data;

    // const useThemeDataRef = useRef(useThemeData);

    // useEffect(
    //     () =>
    //         themeColorStore.subscribe(() => {
    //             if (useThemeDataRef.current !== useThemeData) {
    //                 useThemeDataRef.current = useThemeData;
    //                 onSetThemeData(useThemeData);
    //                 console.log(theme.data.id);
    //                 console.log(themeData.id);
    //             }
    //         }),
    //     [],
    // );

    const [hexColorInput, setHexColorInput] = useState<string>(
        themeColorStore.getState().sourceColor.sourceHex,
    );
    const [tones, setTones] = useState<string>(
        themeColorStore.getState().tones.join(', '),
    );
    const hue = () => {
        const hue: number = calculateHue(
            themeColorStore.getState().sourceColor.hct.hue,
            themeColorStore.getState().hueCalc,
        );
        return hue;
    };
    const chroma = () => {
        const chroma: number = calculateChroma(
            themeColorStore.getState().sourceColor.hct.chroma,
            themeColorStore.getState().chromaCalc,
        );
        return chroma;
    };
    const [hueSlider, setHueSlider] = useState<number>(hue);
    const [hueCalcInput, setHueCalcInput] = useState<string>(
        themeColorStore.getState().hueCalc.toString(),
    );
    const [chromaSlider, setChromaSlider] = useState<number>(chroma);
    const [chromaCalcInput, setChromaCalcInput] = useState<string>(
        themeColorStore.getState().chromaCalc.toString(),
    );

    const maxChromaHex = hexFromHct(Hct.from(hue(), findMaxChroma(hue()), 50));
    const maxChromaHues = useMemo(() => {
        return findHighestChromaPerHue()
            .map(({ hue, chroma, tone }) => {
                return hexFromHct(Hct.from(hue, chroma, tone));
            })
            .join(', ');
    }, []);

    /**
     * Updates the theme color object with the new tones, hue calculation, and chroma calculation when tones or hueCalcInput change.
     * @param {string} tones - The tones string used to set the theme color stops.
     * @param {string} hueCalcInput - The hue calculation input used to set the theme color hue calculation.
     * @param {string} chromaCalcInput - The chroma calculation input used to set the theme color chroma calculation.
     */
    useEffect(() => {
        themeColor.set.tones(getStopsFromString(tones));
        themeColor.set.hueCalc(hueCalcInput);
        themeColor.set.chromaCalc(chromaCalcInput);
    }, [tones, hueCalcInput]);

    /**
     * Sets the chroma calculation value in the theme color.
     * @param {string} chromaCalcInput - The input value for chroma calculation.
     */
    useEffect(() => {
        themeColor.set.chromaCalc(chromaCalcInput);
    }, [chromaCalcInput]);

    /**
     * Updates sliders and inputs for hue and chroma based on the hex color input.
     * If the hue calculation does not include 'h', it updates the hue calculation input with the calculated hue.
     * If the chroma calculation does not include 'c', it updates the chroma calculation input with the calculated chroma.
     * @param hexColorInput The hex color input value.
     */
    useEffect(() => {
        const calculatedHue: number = round(
            calculateHue(
                themeColorStore.getState().sourceColor.hct.hue,
                themeColorStore.getState().hueCalc,
            ),
        );
        setHueSlider(calculatedHue);
        if (!themeColorStore.getState().hueCalc.toLowerCase().includes('h')) {
            themeColor.set.hueCalc(
                themeColorStore.getState().sourceColor.hct.hue.toString(),
            );
            setHueCalcInput(calculatedHue.toString());
        }

        const calculatedChroma: number = round(
            calculateChroma(
                themeColorStore.getState().sourceColor.hct.chroma,
                themeColorStore.getState().chromaCalc,
            ),
        );
        setChromaSlider(calculatedChroma);
        if (
            !themeColorStore.getState().chromaCalc.toLowerCase().includes('c')
        ) {
            themeColor.set.chromaCalc(
                themeColorStore.getState().sourceColor.hct.chroma.toString(),
            );
            setChromaCalcInput(calculatedChroma.toString());
        }
    }, [hexColorInput]);

    const nameTheNameless = () => {
        if (!themeColorStore.getState().name) {
            themeColor.set.name('Color');
        }
    };
    const roundedHue: number = round(
        calculateHue(
            themeColorStore.getState().sourceColor.hct.hue,
            themeColorStore.getState().hueCalc,
        ),
    );
    const roundedChroma: number = round(
        calculateChroma(
            themeColorStore.getState().sourceColor.hct.chroma,
            themeColorStore.getState().chromaCalc,
        ),
    );

    const onSelectThemeColor = (themeColorId: string) => {
        setCurrentThemeColorId(themeColorId);
        themeColor.set.all(currentThemeColor);
        console.log(currentThemeColorId);
    };

    const onAddThemeColor = () => {
        const newThemeColor: ThemeColorData = createThemeColor();
        theme.themeColor.add(newThemeColor);
        console.log(themeStore.getState().themeColors);
    };

    // const onUpdateThemeColor = (themeColor: ThemeColorData) => {
    //     theme.themeColor.update(currentThemeColorId, themeColor);
    //     onSetThemeData({
    //         ...themeData,
    //         themeColors: theme.themeColors,
    //     });
    // };

    const onHexColorInput = (e: any) => {
        const newHexColor: string = e.currentTarget.value;
        setHexColorInput(newHexColor);
        themeColor.set.sourceHex(newHexColor);

        setHueSlider(roundedHue);
        // if the hueCalcInput is an expression, don't update it
        if (!themeColorStore.getState().hueCalc.toLowerCase().includes('h')) {
            themeColor.set.hueCalc(
                themeColorStore.getState().sourceColor.hct.hue.toString(),
            );
            setHueCalcInput(roundedHue.toString());
        }

        setChromaSlider(roundedChroma);
        if (
            !themeColorStore.getState().chromaCalc.toLowerCase().includes('c')
        ) {
            themeColor.set.chromaCalc(
                themeColorStore.getState().sourceColor.hct.chroma.toString(),
            );
            setChromaCalcInput(roundedChroma.toString());
        }
    };
    const onHueSliderInput = (e: any) => {
        const newHueCalcInput: number = e.currentTarget.value;
        themeColor.set.hueCalc(newHueCalcInput.toString());
        setHueSlider(newHueCalcInput);
        setHueCalcInput(newHueCalcInput.toString());
        console.log(
            calculateHue(
                themeColorStore.getState().sourceColor.hct.hue,
                newHueCalcInput.toString(),
            ),
        );
    };
    const onHueCalcInput = (e: any) => {
        const newHueCalcInput: string = e.currentTarget.value;
        const calculatedHue: number = calculateHue(
            themeColorStore.getState().sourceColor.hct.hue,
            newHueCalcInput,
        );
        themeColor.set.hueCalc(newHueCalcInput);
        setHueCalcInput(newHueCalcInput);
        setHueSlider(calculatedHue);
        if (newHueCalcInput === '') {
            themeColor.set.hueCalc(
                themeColorStore.getState().sourceColor.hct.hue.toString(),
            );
            setHueSlider(themeColorStore.getState().sourceColor.hct.hue);
        }
    };
    const onChromaSliderInput = (e: any) => {
        const newChromaCalcInput: number = e.currentTarget.value;
        themeColor.set.chromaCalc(newChromaCalcInput.toString());
        setChromaCalcInput(newChromaCalcInput.toString());
        setChromaSlider(newChromaCalcInput);
        console.log(themeColorStore.getState().endColor.hct);
    };
    const onChromaCalcInput = (e: any) => {
        const newChromaCalcInput: string = e.currentTarget.value;
        const calculatedChroma: number = round(
            calculateChroma(
                themeColorStore.getState().sourceColor.hct.chroma,
                newChromaCalcInput,
            ),
        );
        themeColor.set.chromaCalc(newChromaCalcInput);
        setChromaSlider(calculatedChroma);
        setChromaCalcInput(newChromaCalcInput);
        if (newChromaCalcInput === '') {
            themeColor.set.chromaCalc(
                themeColor.sourceColor.hct.chroma.toString(),
            );
            setChromaSlider(themeColor.sourceColor.hct.chroma);
        }
    };

    const themeColorOptions: Array<DropdownOption> = [
        {
            value: 'Duplicate theme color',
        },
        {
            value: 'Delete theme color',
        },
    ];

    const maxChroma = useMemo(
        () => round(findMaxChroma(hue())),
        [themeColorStore.getState().endColor.hct.hue],
    );

    const options: Array<TabsOption> = [
        {
            children: (
                <div className="tab-content absolute left-0 top-10 flex w-full flex-row overflow-y-scroll">
                    <div className="flex h-full w-10 flex-col items-center overflow-y-scroll pt-2">
                        <ThemeColorSelect
                            themeColors={themeStore.getState().themeColors}
                            selectedThemeColor={currentThemeColorId}
                            onSelectThemeColor={(themeColorId) => {
                                setCurrentThemeColorId(themeColorId);
                                themeColor.set.all(
                                    findThemeColorById(themeColorId),
                                );
                                setHueSlider(
                                    findThemeColorById(themeColorId).endColor
                                        .hct.hue,
                                );
                                setChromaSlider(
                                    findThemeColorById(themeColorId).endColor
                                        .hct.chroma,
                                );
                                console.log(currentThemeColorId, themeColorId);
                            }}
                        />
                        <IconButton title="Add color" onClick={onAddThemeColor}>
                            <IconPlus32 />
                        </IconButton>
                    </div>
                    <div className="h-full grow">
                        <div className="flex h-24 grow flex-row">
                            <div className="flex grow flex-row">
                                {/* Section 1A */}
                                <div className="h-full w-344 pt-1">
                                    <div className="flex flex-row">
                                        <div className="flex-1">
                                            <Textbox
                                                title="Color name"
                                                value={
                                                    themeColorStore.getState()
                                                        .name
                                                }
                                                onChange={(e) => {
                                                    themeColor.set.name(
                                                        e.currentTarget.value,
                                                    );
                                                }}
                                                onBlur={() => nameTheNameless()}
                                                onfocusout={() =>
                                                    nameTheNameless()
                                                }
                                                placeholder="Color name"
                                            />
                                        </div>
                                        <IconButton
                                            title={`Duplicate color`}
                                            onClick={() => {
                                                const newThemeColor: ThemeColorData =
                                                    {
                                                        ...themeColorStore.getState()
                                                            .data,
                                                        id: nanoid(12),
                                                    };
                                                theme.themeColor.add(
                                                    newThemeColor,
                                                );
                                                onSetThemeData({
                                                    ...theme.data,
                                                    id: themeData.id,
                                                });
                                            }}
                                        >
                                            <CopyPlusIcon
                                                size={17}
                                                strokeWidth={1.3}
                                            />
                                        </IconButton>
                                        <IconButton
                                            title={`Remove color from theme`}
                                        >
                                            <IconMinus32 />
                                        </IconButton>
                                    </div>
                                    <div className="flex flex-row">
                                        <TextboxColor
                                            title="Source color"
                                            hexColor={
                                                themeColorStore.getState()
                                                    .sourceColor.sourceHex
                                            }
                                            onHexColorInput={(e) =>
                                                onHexColorInput(e)
                                            }
                                            onOpacityInput={(e) => '100%'}
                                            opacity={'100%'}
                                        />
                                        <Dropdown
                                            title="Source color options"
                                            options={themeColorOptions}
                                            value={null}
                                            placeholder="Color options"
                                        />
                                    </div>
                                    <div className="flex gap-4 px-2 pt-2 opacity-60">
                                        <Muted title="Source color hue, chroma, tone">
                                            H:{' '}
                                            {round(
                                                themeColorStore.getState()
                                                    .sourceColor.hct.hue,
                                            )}{' '}
                                            C:{' '}
                                            {round(
                                                themeColorStore.getState()
                                                    .sourceColor.hct.chroma,
                                            )}{' '}
                                            T:{' '}
                                            {round(
                                                themeColorStore.getState()
                                                    .sourceColor.hct.tone,
                                            )}
                                        </Muted>
                                        <Muted title="End color hue, chroma, tone">
                                            {themeData.name}
                                        </Muted>
                                        {/* <Muted title="End color hue, chroma, tone">
                                            H: {round(themeColor.endColor.hct.hue)} C:{' '}
                                            {round(themeColor.endColor.hct.chroma)} T:{' '}
                                            {round(themeColor.endColor.hct.tone)}
                                        </Muted> */}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="h-full w-32"
                                style={{
                                    background: `linear-gradient(to right, ${hctTonalGradient(
                                        themeColorStore.getState().sourceColor
                                            .hct.hue,
                                        themeColorStore.getState().sourceColor
                                            .hct.chroma,
                                    )})`,
                                }}
                            ></div>
                        </div>
                        <div className="flex h-24 grow flex-row">
                            <div className="flex grow flex-row">
                                {/* Section 2A */}
                                <div className="h-full w-172 grow border-t border-gridlines">
                                    <div className="flex flex-row justify-between">
                                        <span className="p-2">Hue</span>
                                        <span className="p-2">
                                            {round(hue())}
                                        </span>
                                    </div>
                                    <div className="hue-slider px-2 pb-2">
                                        <RangeSlider
                                            title="Adjust hue"
                                            maximum={360}
                                            minimum={0}
                                            onInput={(e) => onHueSliderInput(e)}
                                            value={
                                                themeColorStore.getState()
                                                    .hueCalc
                                            }
                                        />
                                        <div
                                            className="hue-slider-bar absolute h-2 rounded-full"
                                            style={`width: 157px; transform: translate(-1px, -4px); background: linear-gradient(to right, ${maxChromaHues}`}
                                        />
                                    </div>
                                    <Textbox
                                        title="Hue expression"
                                        value={hueCalcInput}
                                        onInput={(e) => onHueCalcInput(e)}
                                        placeholder="Hue value or expression"
                                    />
                                    <div className="px-2 py-1 opacity-60">
                                        <Muted>
                                            Source Hue (h) ={' '}
                                            {round(
                                                themeColorStore.getState()
                                                    .sourceColor.hct.hue,
                                            )}
                                        </Muted>
                                    </div>
                                </div>
                                {/* Section 2B */}
                                <div className="h-full w-172 grow border-l border-t border-gridlines">
                                    <div className="flex flex-row justify-between">
                                        <span className="p-2">Chroma</span>
                                        <span className="p-2">
                                            {round(
                                                themeColorStore.getState()
                                                    .endColor.hct.chroma,
                                            )}{' '}
                                            <span className="opacity-40">
                                                / {maxChroma}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="chroma-slider px-2 pb-2">
                                        <RangeSlider
                                            title="Adjust chroma"
                                            maximum={round(
                                                findMaxChromaForHueAtTone(
                                                    hue(),
                                                    themeColorStore.getState()
                                                        .endColor.hct.tone,
                                                ),
                                            )}
                                            minimum={0}
                                            onInput={(e) =>
                                                onChromaSliderInput(e)
                                            }
                                            value={
                                                themeColorStore.getState()
                                                    .chromaCalc
                                            }
                                        />
                                        <div
                                            className="chroma-slider-bar absolute h-2 rounded-full"
                                            style={`width: 156px; transform: translate(-1px, -4px); background: linear-gradient(to right, #777, ${maxChromaHex}`}
                                        />
                                    </div>
                                    <Textbox
                                        title="Chroma expression"
                                        value={chromaCalcInput}
                                        onInput={(e) => onChromaCalcInput(e)}
                                        placeholder="Chroma value or expression"
                                    />
                                    <div className="px-2 py-1 opacity-60">
                                        <Muted>
                                            Source Chroma (c) ={' '}
                                            {round(
                                                themeColorStore.getState()
                                                    .sourceColor.hct.chroma,
                                            )}
                                        </Muted>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="h-full w-32"
                                style={{
                                    background: `linear-gradient(to right, ${hctTonalGradient(
                                        themeColorStore.getState().endColor.hct
                                            .hue,
                                        themeColorStore.getState().endColor.hct
                                            .chroma,
                                    )})`,
                                }}
                            ></div>
                        </div>
                        <div className="flex h-24 grow flex-row">
                            <div className="flex grow flex-row border-t border-gridlines">
                                {/* Section 3A */}
                                <div className="h-full grow">
                                    <p className="p-2">Tones</p>
                                    <TextboxMultiline
                                        title="Tones"
                                        value={tones}
                                        onInput={(e) =>
                                            setTones(e.currentTarget.value)
                                        }
                                        placeholder="Return tones 0-100"
                                    />
                                </div>
                            </div>
                            <div
                                className="h-full w-32"
                                style={{
                                    background: `linear-gradient(to right, ${hctTonalGradient(
                                        themeColorStore.getState().endColor.hct
                                            .hue,
                                        themeColorStore.getState().endColor.hct
                                            .chroma,
                                        themeColorStore.getState().tones,
                                    )})`,
                                }}
                            ></div>
                        </div>
                        <div className="flex grow flex-row border-t border-gridlines">
                            <div className="flex grow justify-between">
                                <span className="p-2">Aliases</span>
                                <IconButton
                                    title="Create alias"
                                    onClick={() => {
                                        themeColor.alias.add();
                                        console.log(
                                            themeColorStore.getState()
                                                .aliasGroup.aliases,
                                        );
                                    }}
                                >
                                    <IconPlus32 />
                                </IconButton>
                            </div>

                            <div className="flex h-8 w-32 items-center justify-around">
                                <span>Light</span>
                                <span>Dark</span>
                            </div>
                        </div>
                        <div>
                            <AliasList
                                hue={
                                    themeColorStore.getState().endColor.hct.hue
                                }
                                chroma={
                                    themeColorStore.getState().endColor.hct
                                        .chroma
                                }
                                aliases={
                                    themeColorStore.getState().aliasGroup
                                        .aliases
                                }
                                onSetAliases={(aliases: AliasData[]) => {
                                    themeColor.set.aliasGroup({
                                        ...themeColorStore.getState()
                                            .aliasGroup,
                                        aliases: aliases,
                                    });
                                }}
                            />
                        </div>
                    </div>
                </div>
            ),
            value: 'Primitives',
        },
        {
            children: (
                <div className="absolute left-0 top-10 h-full w-full overflow-y-scroll">
                    <div className="flex w-full flex-row border-t border-gridlines">
                        <div className="flex w-10 flex-col items-center gap-2 overflow-y-scroll py-2">
                            <div className=" h-6 w-6 rounded-full bg-gradient-conic outline outline-2 outline-offset-2 outline-fig-blue"></div>
                            <div className=" h-6 w-6 rounded-full bg-gradient-conic outline outline-2 outline-offset-2 outline-fig-blue"></div>
                            <div className=" h-6 w-6 rounded-full bg-gradient-conic outline outline-2 outline-offset-2 outline-fig-blue"></div>
                            <div className=" h-6 w-6 rounded-full bg-gradient-conic opacity-20"></div>
                            <div className=" h-6 w-6 rounded-full bg-gradient-conic opacity-20"></div>
                            <div className=" h-6 w-6 rounded-full bg-gradient-conic outline outline-2 outline-offset-2 outline-fig-blue"></div>
                            <div className=" relative flex h-6 w-6 items-center justify-center rounded-full outline-dashed outline-2 outline-neutral-500">
                                <span className="absolute">
                                    <IconChevronDown16 />
                                </span>
                            </div>
                        </div>
                        <div className="h-full grow">
                            <div className="flex h-24 grow flex-row">
                                <div className="flex grow flex-row"></div>
                                <div className="h-full w-32 bg-gradient-to-r from-white via-indigo-500 via-30% to-black"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-row border-t border-gridlines">
                        <div className="flex w-10 flex-col items-center gap-2 overflow-y-scroll py-2">
                            <div className=" h-6 w-6 rounded-full bg-gradient-conic opacity-20"></div>
                            <div className=" h-6 w-6 rounded-full bg-gradient-conic opacity-20"></div>
                            <div className=" h-6 w-6 rounded-full bg-gradient-conic opacity-20"></div>
                            <div className=" h-6 w-6 rounded-full bg-gradient-conic outline outline-2 outline-offset-2 outline-fig-blue"></div>
                            <div className=" h-6 w-6 rounded-full bg-gradient-conic outline outline-2 outline-offset-2 outline-fig-blue"></div>
                            <div className=" h-6 w-6 rounded-full bg-gradient-conic opacity-20"></div>
                            <div className=" relative flex h-6 w-6 items-center justify-center rounded-full outline-dashed outline-2 outline-neutral-500">
                                <span className="absolute">
                                    <IconChevronDown16 />
                                </span>
                            </div>
                        </div>
                        <div className="h-full grow">
                            <div className="flex h-24 grow flex-row">
                                <div className="flex grow flex-row"></div>
                                <div className="h-full w-32 bg-gradient-to-r from-white via-indigo-500 via-30% to-black"></div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            value: 'Aliases',
        },
    ];
    function handleValueChange(newValue: string) {
        console.log(newValue);
        setTabValue(newValue);
    }
    return (
        <div className={className}>
            <Tabs
                onValueChange={handleValueChange}
                options={options}
                value={tabValue}
            />
        </div>
    );
};

export default TabGroup;
