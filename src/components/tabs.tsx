/* eslint-disable */
import { h } from 'preact';
import { useContext, useEffect, useMemo, useRef, useState } from 'preact/hooks';
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
import { nanoid } from 'nanoid';
import {
    ThemeListActions,
    ThemeListData,
    useThemeList,
} from '../hooks/useThemeList';
import _, { create, findIndex, set } from 'lodash';
import { useAtom } from 'jotai';
import { IdContext } from '../hooks/useId';

import { ThemeActions, ThemeData } from '../hooks/useTheme';
// import { useID } from '../hooks/useId';

type TabGroupProps = {
    // themeData: ThemeData;
    // onSetThemeData: (themeData: ThemeData) => void;
    className?: string;
};

const CopyPlusIcon = CopyPlus as any;

const TabGroup = ({ className }: TabGroupProps) => {
    const [tabValue, setTabValue] = useState<string>('Primitives');
    // ID state
    const IdStore = useContext(IdContext);
    const themeId: string = IdStore?.getState().themeId || 'happiness';
    const themeColorId: string =
        IdStore?.getState().themeColorId || 'happiness';
    const setThemeId = (themeId: string) =>
        IdStore?.setState({ themeId: themeId });
    const setThemeColorId = (themeColorId: string) =>
        IdStore?.setState({ themeColorId: themeColorId });

    // themeList state
    const themeListStore = useThemeList;
    const themeList = themeListStore();

    // theme state
    const theme = themeList.theme(themeId);

    // themeColor state
    const themeColor = theme.themeColor(themeColorId);

    // const findThemeById = (id: string) => {
    //     const theme = themeList.themes.find((theme) => theme.id === id);
    //     if (!theme) {
    //         throw new Error(`Theme with id ${id} not found`);
    //     }
    //     return theme;
    // };
    // const findThemeColorById = (id: string): ThemeColorData => {
    //     const theme = theme.data.themeColors.find(
    //         (themeColor) => themeColor.id === id,
    //     );
    //     if (!theme) {
    //         throw new Error(`Theme with id ${id} not found`);
    //     }
    //     return theme;
    // };

    const [hexColorInput, setHexColorInput] = useState<string>(
        themeColor.data.sourceColor.sourceHex,
    );
    const [tones, setTones] = useState<string>(
        themeColor.data.tones.join(', '),
    );
    const hue = () => {
        const hue: number = calculateHue(
            themeColor.data.sourceColor.hct.hue,
            themeColor.data.hueCalc,
        );
        return hue;
    };
    const chroma = () => {
        const chroma: number = calculateChroma(
            themeColor.data.sourceColor.hct.chroma,
            themeColor.data.chromaCalc,
        );
        return chroma;
    };
    const [hueSlider, setHueSlider] = useState<number>(hue);
    const [hueCalcInput, setHueCalcInput] = useState<string>(
        themeColor.data.hueCalc,
    );
    const [chromaSlider, setChromaSlider] = useState<number>(chroma);
    const [chromaCalcInput, setChromaCalcInput] = useState<string>(
        themeColor.data.chromaCalc,
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
        themeColor.setProps.tones(getStopsFromString(tones));
        themeColor.setProps.hueCalc(hueCalcInput);
        themeColor.setProps.chromaCalc(chromaCalcInput);
    }, [tones, hueCalcInput]);

    /**
     * Sets the chroma calculation value in the theme color.
     * @param {string} chromaCalcInput - The input value for chroma calculation.
     */
    useEffect(() => {
        themeColor.setProps.chromaCalc(chromaCalcInput);
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
                themeColor.data.sourceColor.hct.hue,
                themeColor.data.hueCalc,
            ),
        );
        setHueSlider(calculatedHue);
        if (!themeColor.data.hueCalc.toLowerCase().includes('h')) {
            themeColor.setProps.hueCalc(
                themeColor.data.sourceColor.hct.hue.toString(),
            );
            setHueCalcInput(calculatedHue.toString());
        }

        const calculatedChroma: number = round(
            calculateChroma(
                themeColor.data.sourceColor.hct.chroma,
                themeColor.data.chromaCalc,
            ),
        );
        setChromaSlider(calculatedChroma);
        if (!themeColor.data.chromaCalc.toLowerCase().includes('c')) {
            themeColor.setProps.chromaCalc(
                themeColor.data.sourceColor.hct.chroma.toString(),
            );
            setChromaCalcInput(calculatedChroma.toString());
        }
    }, [hexColorInput]);

    const nameTheNameless = () => {
        if (!themeColor.data.name) {
            themeColor.setProps.name('Color');
        }
    };
    const roundedHue: number = round(
        calculateHue(
            themeColor.data.sourceColor.hct.hue,
            themeColor.data.hueCalc,
        ),
    );
    const roundedChroma: number = round(
        calculateChroma(
            themeColor.data.sourceColor.hct.chroma,
            themeColor.data.chromaCalc,
        ),
    );

    const onSelectThemeColor = (themeColorId: string) => {
        setThemeColorId(themeColorId);
        themeColor.setProps.all(themeColor.data);
        console.log(themeColor.data.id);
    };

    const onAddThemeColor = () => {
        const newThemeColor: ThemeColorData = createThemeColor();
        themeList.theme(0).add.themeColor(newThemeColor);
        console.log(theme.data.themeColors);
    };

    // const onUpdateThemeColor = (themeColor: ThemeColorData) => {
    //     theme.themeColor.update(themeColor.data.id, themeColor);
    //     onSetThemeData({
    //         ...themeData,
    //         themeColors: theme.themeColors,
    //     });
    // };

    const onHexColorInput = (e: any) => {
        const newHexColor: string = e.currentTarget.value;
        setHexColorInput(newHexColor);
        themeColor.setProps.sourceHex(newHexColor);

        setHueSlider(roundedHue);
        // if the hueCalcInput is an expression, don't update it
        if (!themeColor.data.hueCalc.toLowerCase().includes('h')) {
            themeColor.setProps.hueCalc(
                themeColor.data.sourceColor.hct.hue.toString(),
            );
            setHueCalcInput(roundedHue.toString());
        }

        setChromaSlider(roundedChroma);
        if (!themeColor.data.chromaCalc.toLowerCase().includes('c')) {
            themeColor.setProps.chromaCalc(
                themeColor.data.sourceColor.hct.chroma.toString(),
            );
            setChromaCalcInput(roundedChroma.toString());
        }
    };
    const onHueSliderInput = (e: any) => {
        const newHueCalcInput: number = e.currentTarget.value;
        themeColor.setProps.hueCalc(`${newHueCalcInput}`);
        setHueSlider(newHueCalcInput);
        setHueCalcInput(`${newHueCalcInput}`);
        console.log(
            calculateHue(
                themeColor.data.sourceColor.hct.hue,
                `${newHueCalcInput}`,
            ),
        );
    };
    const onHueCalcInput = (e: any) => {
        const newHueCalcInput: string = e.currentTarget.value;
        const calculatedHue: number = calculateHue(
            themeColor.data.sourceColor.hct.hue,
            newHueCalcInput,
        );
        themeColor.setProps.hueCalc(newHueCalcInput);
        setHueCalcInput(newHueCalcInput);
        setHueSlider(calculatedHue);
        if (newHueCalcInput === '') {
            themeColor.setProps.hueCalc(
                `${themeColor.data.sourceColor.hct.hue}`,
            );
            setHueSlider(themeColor.data.sourceColor.hct.hue);
        }
    };
    const onChromaSliderInput = (e: any) => {
        const newChromaCalcInput: number = e.currentTarget.value;
        themeColor.setProps.chromaCalc(`${newChromaCalcInput}`);
        setChromaCalcInput(`${newChromaCalcInput}`);
        setChromaSlider(newChromaCalcInput);
        console.log(themeColor.data.endColor.hct);
    };
    const onChromaCalcInput = (e: any) => {
        const newChromaCalcInput: string = e.currentTarget.value;
        const calculatedChroma: number = round(
            calculateChroma(
                themeColor.data.sourceColor.hct.chroma,
                newChromaCalcInput,
            ),
        );
        themeColor.setProps.chromaCalc(newChromaCalcInput);
        setChromaSlider(calculatedChroma);
        setChromaCalcInput(newChromaCalcInput);
        if (newChromaCalcInput === '') {
            themeColor.setProps.chromaCalc(
                themeColor.data.sourceColor.hct.chroma.toString(),
            );
            setChromaSlider(themeColor.data.sourceColor.hct.chroma);
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
        [themeColor.data.endColor.hct.hue],
    );

    const options: Array<TabsOption> = [
        {
            children: (
                <div className="tab-content absolute left-0 top-10 flex w-full flex-row overflow-y-scroll">
                    <div className="flex h-full w-10 flex-col items-center overflow-y-scroll pt-2">
                        <ThemeColorSelect
                            themeColors={theme.data.themeColors}
                            selectedThemeColor={themeColor.data.id}
                            onSelectThemeColor={(themeColorId) => {
                                onSelectThemeColor(themeColorId);
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
                                                value={themeColor.data.name}
                                                onChange={(e) => {
                                                    themeColor.setProps.name(
                                                        e.currentTarget.value,
                                                    );
                                                    console.log(
                                                        themeColor.data.name,
                                                    );
                                                }}
                                                onBlur={() => nameTheNameless()}
                                                onfocusout={() =>
                                                    nameTheNameless()
                                                }
                                                placeholder="Color name"
                                            />
                                            ``
                                        </div>
                                        <IconButton
                                            title={`Duplicate color`}
                                            onClick={() => {
                                                const newThemeColor: ThemeColorData =
                                                    {
                                                        ...themeColor.data,
                                                        id: nanoid(12),
                                                    };
                                                theme.add.themeColor(
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
                                                themeColor.data.sourceColor
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
                                                themeColor.data.sourceColor.hct
                                                    .hue,
                                            )}{' '}
                                            C:{' '}
                                            {round(
                                                themeColor.data.sourceColor.hct
                                                    .chroma,
                                            )}{' '}
                                            T:{' '}
                                            {round(
                                                themeColor.data.sourceColor.hct
                                                    .tone,
                                            )}
                                        </Muted>
                                        <Muted title="End color hue, chroma, tone">
                                            {theme.data.name}
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
                                        themeColor.data.sourceColor.hct.hue,
                                        themeColor.data.sourceColor.hct.chroma,
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
                                            value={themeColor.data.hueCalc}
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
                                                themeColor.data.sourceColor.hct
                                                    .hue,
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
                                                themeColor.data.endColor.hct
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
                                                    themeColor.data.endColor.hct
                                                        .tone,
                                                ),
                                            )}
                                            minimum={0}
                                            onInput={(e) =>
                                                onChromaSliderInput(e)
                                            }
                                            value={themeColor.data.chromaCalc}
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
                                                themeColor.data.sourceColor.hct
                                                    .chroma,
                                            )}
                                        </Muted>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="h-full w-32"
                                style={{
                                    background: `linear-gradient(to right, ${hctTonalGradient(
                                        themeColor.data.endColor.hct.hue,
                                        themeColor.data.endColor.hct.chroma,
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
                                        themeColor.data.endColor.hct.hue,
                                        themeColor.data.endColor.hct.chroma,
                                        themeColor.data.tones,
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
                                        themeColor.add.alias(createAlias());
                                        console.log(
                                            themeColor.data.aliasGroup.aliases,
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
                                hue={themeColor.data.endColor.hct.hue}
                                chroma={themeColor.data.endColor.hct.chroma}
                                aliases={themeColor.data.aliasGroup.aliases}
                                onSetAliases={(aliases: AliasData[]) => {
                                    themeColor.setProps.aliasGroup({
                                        ...themeColor.data.aliasGroup,
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
