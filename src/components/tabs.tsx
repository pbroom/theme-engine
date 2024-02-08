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
import { AliasData, createAlias } from '../hooks/useAliasGroup';
import { Theme, ThemeActions, ThemeData, useTheme } from '../hooks/useTheme';
import { nanoid } from 'nanoid';
import {
    ThemeListActions,
    ThemeListData,
    useThemeList,
} from '../hooks/useThemeList';
import _, { create, findIndex, set } from 'lodash';
import { useAtom } from 'jotai';
import { useCurrentId } from '../hooks/useId';
// import { useID } from '../hooks/useId';

type TabGroupProps = {
    // themeData: ThemeData;
    // onSetThemeData: (themeData: ThemeData) => void;
    className?: string;
};

const CopyPlusIcon = CopyPlus as any;

const TabGroup = ({ className }: TabGroupProps) => {
    const [tabValue, setTabValue] = useState<string>('Primitives');

    const themeListStore = useThemeList;
    const themeList = themeListStore();

    const currentThemeId = useCurrentId.getState().currentThemeId;
    const setCurrentThemeId = (id: string) =>
        useCurrentId.setState({ currentThemeId: id });

    const currentThemeColorId = useCurrentId.getState().currentThemeColorId;
    const setCurrentThemeColorId = (id: string) =>
        useCurrentId.setState({ currentThemeColorId: id });

    const currentTheme: ThemeData = themeListStore
        .getState()
        .theme(currentThemeId).data;

    const currentThemeColor: ThemeColorData = themeList
        .theme(currentThemeId)
        .themeColor(currentThemeColorId).data;

    const useTheme = themeListStore.getState().theme(currentThemeId);
    const useThemeColor = themeList
        .theme(currentThemeId)
        .themeColor(currentThemeColorId);

    // const findThemeById = (id: string) => {
    //     const theme = themeList.themes.find((theme) => theme.id === id);
    //     if (!theme) {
    //         throw new Error(`Theme with id ${id} not found`);
    //     }
    //     return theme;
    // };
    // const findThemeColorById = (id: string): ThemeColorData => {
    //     const theme = currentTheme.themeColors.find((theme) => theme.id === id);
    //     if (!theme) {
    //         throw new Error(`Theme with id ${id} not found`);
    //     }
    //     return theme;
    // };

    const [hexColorInput, setHexColorInput] = useState<string>(
        themeListStore.getState().data.themes[0].themeColors[0].sourceColor.hex,
    );
    const [tones, setTones] = useState<string>(
        currentThemeColor.tones.join(', '),
    );
    const hue = () => {
        const hue: number = calculateHue(
            currentThemeColor.sourceColor.hct.hue,
            currentThemeColor.hueCalc,
        );
        return hue;
    };
    const chroma = () => {
        const chroma: number = calculateChroma(
            currentThemeColor.sourceColor.hct.chroma,
            currentThemeColor.chromaCalc,
        );
        return chroma;
    };
    const [hueSlider, setHueSlider] = useState<number>(hue);
    const [hueCalcInput, setHueCalcInput] = useState<string>(
        currentThemeColor.hueCalc.toString(),
    );
    const [chromaSlider, setChromaSlider] = useState<number>(chroma);
    const [chromaCalcInput, setChromaCalcInput] = useState<string>(
        currentThemeColor.chromaCalc.toString(),
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
        useThemeColor.setProps.tones(getStopsFromString(tones));
        useThemeColor.setProps.hueCalc(hueCalcInput);
        useThemeColor.setProps.chromaCalc(chromaCalcInput);
    }, [tones, hueCalcInput]);

    /**
     * Sets the chroma calculation value in the theme color.
     * @param {string} chromaCalcInput - The input value for chroma calculation.
     */
    useEffect(() => {
        useThemeColor.setProps.chromaCalc(chromaCalcInput);
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
                currentThemeColor.sourceColor.hct.hue,
                currentThemeColor.hueCalc,
            ),
        );
        setHueSlider(calculatedHue);
        if (!currentThemeColor.hueCalc.toLowerCase().includes('h')) {
            useThemeColor.setProps.hueCalc(
                currentThemeColor.sourceColor.hct.hue.toString(),
            );
            setHueCalcInput(calculatedHue.toString());
        }

        const calculatedChroma: number = round(
            calculateChroma(
                currentThemeColor.sourceColor.hct.chroma,
                currentThemeColor.chromaCalc,
            ),
        );
        setChromaSlider(calculatedChroma);
        if (!currentThemeColor.chromaCalc.toLowerCase().includes('c')) {
            useThemeColor.setProps.chromaCalc(
                currentThemeColor.sourceColor.hct.chroma.toString(),
            );
            setChromaCalcInput(calculatedChroma.toString());
        }
    }, [hexColorInput]);

    const nameTheNameless = () => {
        if (!currentThemeColor.name) {
            useThemeColor.setProps.name('Color');
        }
    };
    const roundedHue: number = round(
        calculateHue(
            currentThemeColor.sourceColor.hct.hue,
            currentThemeColor.hueCalc,
        ),
    );
    const roundedChroma: number = round(
        calculateChroma(
            currentThemeColor.sourceColor.hct.chroma,
            currentThemeColor.chromaCalc,
        ),
    );

    const onSelectThemeColor = (themeColorId: string) => {
        setCurrentThemeColorId(themeColorId);
        useThemeColor.setProps.all(currentThemeColor);
        console.log(currentThemeColorId);
    };

    const onAddThemeColor = () => {
        const newThemeColor: ThemeColorData = createThemeColor();
        themeList.theme(0).add.themeColor(newThemeColor);
        console.log(currentTheme.themeColors);
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
        useThemeColor.setProps.sourceHex(newHexColor);

        setHueSlider(roundedHue);
        // if the hueCalcInput is an expression, don't update it
        if (!currentThemeColor.hueCalc.toLowerCase().includes('h')) {
            useThemeColor.setProps.hueCalc(
                currentThemeColor.sourceColor.hct.hue.toString(),
            );
            setHueCalcInput(roundedHue.toString());
        }

        setChromaSlider(roundedChroma);
        if (!currentThemeColor.chromaCalc.toLowerCase().includes('c')) {
            useThemeColor.setProps.chromaCalc(
                currentThemeColor.sourceColor.hct.chroma.toString(),
            );
            setChromaCalcInput(roundedChroma.toString());
        }
    };
    const onHueSliderInput = (e: any) => {
        const newHueCalcInput: number = e.currentTarget.value;
        useThemeColor.setProps.hueCalc(newHueCalcInput.toString());
        setHueSlider(newHueCalcInput);
        setHueCalcInput(newHueCalcInput.toString());
        console.log(
            calculateHue(
                currentThemeColor.sourceColor.hct.hue,
                newHueCalcInput.toString(),
            ),
        );
    };
    const onHueCalcInput = (e: any) => {
        const newHueCalcInput: string = e.currentTarget.value;
        const calculatedHue: number = calculateHue(
            currentThemeColor.sourceColor.hct.hue,
            newHueCalcInput,
        );
        useThemeColor.setProps.hueCalc(newHueCalcInput);
        setHueCalcInput(newHueCalcInput);
        setHueSlider(calculatedHue);
        if (newHueCalcInput === '') {
            useThemeColor.setProps.hueCalc(
                currentThemeColor.sourceColor.hct.hue.toString(),
            );
            setHueSlider(currentThemeColor.sourceColor.hct.hue);
        }
    };
    const onChromaSliderInput = (e: any) => {
        const newChromaCalcInput: number = e.currentTarget.value;
        useThemeColor.setProps.chromaCalc(newChromaCalcInput.toString());
        setChromaCalcInput(newChromaCalcInput.toString());
        setChromaSlider(newChromaCalcInput);
        console.log(currentThemeColor.endColor.hct);
    };
    const onChromaCalcInput = (e: any) => {
        const newChromaCalcInput: string = e.currentTarget.value;
        const calculatedChroma: number = round(
            calculateChroma(
                currentThemeColor.sourceColor.hct.chroma,
                newChromaCalcInput,
            ),
        );
        useThemeColor.setProps.chromaCalc(newChromaCalcInput);
        setChromaSlider(calculatedChroma);
        setChromaCalcInput(newChromaCalcInput);
        if (newChromaCalcInput === '') {
            useThemeColor.setProps.chromaCalc(
                currentThemeColor.sourceColor.hct.chroma.toString(),
            );
            setChromaSlider(currentThemeColor.sourceColor.hct.chroma);
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
        [currentThemeColor.endColor.hct.hue],
    );

    const options: Array<TabsOption> = [
        {
            children: (
                <div className="tab-content absolute left-0 top-10 flex w-full flex-row overflow-y-scroll">
                    <div className="flex h-full w-10 flex-col items-center overflow-y-scroll pt-2">
                        <ThemeColorSelect
                            themeColors={currentTheme.themeColors}
                            selectedThemeColor={currentThemeColorId}
                            onSelectThemeColor={(themeColorId) => {
                                setCurrentThemeColorId(themeColorId);
                                setHueSlider(
                                    themeList
                                        .theme(currentThemeId)
                                        .themeColor(currentThemeColorId).data
                                        .endColor.hct.hue,
                                );
                                setChromaSlider(
                                    currentThemeColor.endColor.hct.chroma,
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
                                                value={currentThemeColor.name}
                                                onChange={(e) => {
                                                    useThemeColor.setProps.name(
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
                                                        ...currentThemeColor,
                                                        id: nanoid(12),
                                                    };
                                                useTheme.add.themeColor(
                                                    newThemeColor,
                                                );
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
                                                currentThemeColor.sourceColor
                                                    .sourceHex
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
                                                currentThemeColor.sourceColor
                                                    .hct.hue,
                                            )}{' '}
                                            C:{' '}
                                            {round(
                                                currentThemeColor.sourceColor
                                                    .hct.chroma,
                                            )}{' '}
                                            T:{' '}
                                            {round(
                                                currentThemeColor.sourceColor
                                                    .hct.tone,
                                            )}
                                        </Muted>
                                        <Muted title="End color hue, chroma, tone">
                                            {currentTheme.name}
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
                                        currentThemeColor.sourceColor.hct.hue,
                                        currentThemeColor.sourceColor.hct
                                            .chroma,
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
                                            value={currentThemeColor.hueCalc}
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
                                                currentThemeColor.sourceColor
                                                    .hct.hue,
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
                                                currentThemeColor.endColor.hct
                                                    .chroma,
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
                                                    currentThemeColor.endColor
                                                        .hct.tone,
                                                ),
                                            )}
                                            minimum={0}
                                            onInput={(e) =>
                                                onChromaSliderInput(e)
                                            }
                                            value={currentThemeColor.chromaCalc}
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
                                                currentThemeColor.sourceColor
                                                    .hct.chroma,
                                            )}
                                        </Muted>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="h-full w-32"
                                style={{
                                    background: `linear-gradient(to right, ${hctTonalGradient(
                                        currentThemeColor.endColor.hct.hue,
                                        currentThemeColor.endColor.hct.chroma,
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
                                        currentThemeColor.endColor.hct.hue,
                                        currentThemeColor.endColor.hct.chroma,
                                        currentThemeColor.tones,
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
                                        useThemeColor.add.alias(createAlias());
                                        console.log(
                                            currentThemeColor.aliasGroup
                                                .aliases,
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
                                hue={currentThemeColor.endColor.hct.hue}
                                chroma={currentThemeColor.endColor.hct.chroma}
                                aliases={currentThemeColor.aliasGroup.aliases}
                                onSetAliases={(aliases: AliasData[]) => {
                                    useThemeColor.setProps.aliasGroup({
                                        ...currentThemeColor.aliasGroup,
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
