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
    Divider,
} from '@create-figma-plugin/ui';
import { IconPlus32, IconChevronDown16 } from '@create-figma-plugin/ui';
import {
    ThemeColor,
    ThemeColorData,
    createThemeColor,
    useThemeColor,
} from '../hooks/useThemeColor';
import { ceil, round } from 'mathjs';
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
import { calculateEndColor, hexFromHct } from '../hooks/useColor';
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
import { IdContext, IdState } from '../hooks/useId';

import { ThemeActions, ThemeData } from '../hooks/useTheme';
import { useStore } from 'zustand';
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
    if (!IdStore) {
        throw new Error('IdStore is undefined');
    }
    const themeId = useStore(IdStore, (state: IdState) => state.themeId);
    const themeColorId: string = useStore(
        IdStore,
        (state: IdState) => state.themeColorId,
    );
    const setThemeColorId = useStore(
        IdStore,
        (state: IdState) => state.setThemeColorId,
    );

    // themeList state
    const themeListStore = useThemeList;
    const themeList = themeListStore();

    const themeIndexRef = useRef(
        themeList.themes.findIndex((theme) => theme.id === themeId),
    );
    const [themeIndex, setThemeIndex] = useState<number>(themeIndexRef.current);

    // theme state
    const theme = themeListStore((state) => state.themes[themeIndex]);
    const setTheme = themeList.theme;

    const themeColorIndexRef = useRef(
        theme.themeColors.findIndex(
            (themeColor) => themeColor.id === themeColorId,
        ),
    );
    const [themeColorIndex, setThemeColorIndex] = useState<number>(
        themeColorIndexRef.current,
    );

    useEffect(() => {
        // TODO: update themeColorId when themeId changes
        const newThemeIndex = themeList.themes.findIndex(
            (theme) => theme.id === themeId,
        );
        themeIndexRef.current = newThemeIndex;
        const newThemeColorIndex = themeList.themes[
            newThemeIndex
        ].themeColors.findIndex((themeColor) => themeColor.id === themeColorId);
        themeColorIndexRef.current = newThemeColorIndex;

        setThemeIndex(newThemeIndex);
        setThemeColorIndex(newThemeColorIndex);
        setThemeColor(themeColorId).setProps.endColor({
            ...themeColor.endColor,
            hct: Hct.from(hue(), chroma(), themeColor.sourceColor.hct.tone),
        });
        if (themeRef.current !== themeList.themes[newThemeIndex]) {
            console.log(
                '%cthemeRef.current:',
                'color: #FF0000',
                themeRef.current,
            );
            console.log(
                '%cthemes[themeId]:',
                'color: #FF0000',
                themeList.themes[newThemeIndex],
            );
            themeRef.current = themeList.themes[newThemeIndex];
            // setTheme(themeId).setProps.themeColors(
            //     themeList.themes[newThemeIndex].themeColors,
            // );
            const newThemeColorId =
                themeList.themes[newThemeIndex].themeColors[0].id;
            // setThemeColorId(newThemeColorId);
            const newThemeColor = themeList.themes[
                newThemeIndex
            ].themeColors.find(
                (themeColor) => themeColor.id === newThemeColorId,
            );
            if (!newThemeColor) {
                throw new Error('Theme color not found');
            }
            setThemeColor(newThemeColorId).setProps.all({
                ...newThemeColor,
                endColor: {
                    ...newThemeColor.endColor,
                    hct: Hct.from(
                        hue(),
                        chroma(),
                        newThemeColor.sourceColor.hct.tone,
                    ),
                },
            });
        }
        if (
            themeColorRef.current !==
            themeList.themes[newThemeIndex].themeColors[newThemeColorIndex]
        ) {
            themeColorRef.current =
                themeList.themes[newThemeIndex].themeColors[newThemeColorIndex];
        }
    }, [themeId, themeColorId]);

    // themeColor state
    const themeColor =
        themeList.themes[themeIndex].themeColors[themeColorIndex];
    const setThemeColor = themeList.theme(themeId).themeColor;

    const themeRef = useRef(theme);
    const themeColorRef = useRef(themeColor);

    // // Debugging
    // const themeIdRef = useRef(themeId);
    // const themeColorIdRef = useRef(themeColorId);
    // const themeColorIdRef2 = useRef(themeColor.id);
    // const themeColorNameRef = useRef(themeColor.name);
    // const themeColorHexRef = useRef(themeColor.sourceColor.sourceHex);
    // const themeColorHueRef = useRef(themeColor.sourceColor.hct.hue);
    // const themeColorChromaRef = useRef(themeColor.sourceColor.hct.chroma);
    // const themeColorTonesRef = useRef(themeColor.tones);
    // const themeColorHueCalcRef = useRef(themeColor.hueCalc);
    // const themeColorChromaCalcRef = useRef(themeColor.chromaCalc);
    // const themeListRef = useRef(themeList);
    // useEffect(() => {
    //     const logUpdate = (match: boolean) => {
    //         return !match ? 'Updated' : '-';
    //     };
    //     const tableLog = {
    //         themeId: logUpdate(themeId === themeIdRef.current),
    //         themeColorId: logUpdate(themeColorId === themeColorIdRef.current),
    //         'themeColor.id': logUpdate(
    //             themeColor.id === themeColorIdRef2.current,
    //         ),
    //         'themeColor.name': logUpdate(
    //             themeColor.name === themeColorNameRef.current,
    //         ),
    //         'themeColor.sourceColor.sourceHex': logUpdate(
    //             themeColor.sourceColor.sourceHex === themeColorHexRef.current,
    //         ),
    //         'themeColor.sourceColor.hct.hue': logUpdate(
    //             themeColor.sourceColor.hct.hue === themeColorHueRef.current,
    //         ),
    //         'themeColor.sourceColor.hct.chroma': logUpdate(
    //             themeColor.sourceColor.hct.chroma ===
    //                 themeColorChromaRef.current,
    //         ),
    //         'themeColor.tones': logUpdate(
    //             themeColor.tones === themeColorTonesRef.current,
    //         ),
    //         'themeColor.hueCalc': logUpdate(
    //             themeColor.hueCalc === themeColorHueCalcRef.current,
    //         ),
    //         'themeColor.chromaCalc': logUpdate(
    //             themeColor.chromaCalc === themeColorChromaCalcRef.current,
    //         ),
    //         themeIndex: logUpdate(themeIndex === themeIndexRef.current),
    //         themeColorIndex: logUpdate(
    //             themeColorIndex === themeColorIndexRef.current,
    //         ),
    //         themeList: logUpdate(themeList === themeListRef.current),
    //         theme: logUpdate(theme === themeRef.current),
    //         themeColor: logUpdate(themeColor === themeColorRef.current),
    //     };
    //     console.table(tableLog);
    // }, [
    //     themeId,
    //     themeColorId,
    //     themeColor.id,
    //     themeColor.name,
    //     themeColor.sourceColor.sourceHex,
    //     themeColor.sourceColor.hct.hue,
    //     themeColor.sourceColor.hct.chroma,
    //     themeColor.tones,
    //     themeColor.hueCalc,
    //     themeColor.chromaCalc,
    //     themeIndex,
    //     themeColorIndex,
    //     themeList,
    //     theme,
    //     themeColor,
    // ]);
    // // End debugging

    const [hexColorInput, setHexColorInput] = useState<string>(
        themeColor.sourceColor.sourceHex,
    );
    const [tones, setTones] = useState<string>(themeColor.tones.join(', '));
    const hue = () => {
        const hue: number = calculateHue(
            themeList.themes[themeIndex].themeColors[themeColorIndex]
                .sourceColor.hct.hue,
            themeColor.hueCalc,
        );
        return hue;
    };
    const chroma = () => {
        const chroma: number = calculateChroma(
            themeColor.sourceColor.hct.chroma,
            themeColor.chromaCalc,
        );
        return chroma;
    };
    const [hueSlider, setHueSlider] = useState<number>(hue);
    const [hueCalcInput, setHueCalcInput] = useState<string>(
        themeColor.hueCalc,
    );
    const [chromaSlider, setChromaSlider] = useState<number>(chroma);
    const [chromaCalcInput, setChromaCalcInput] = useState<string>(
        themeColor.chromaCalc,
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
        setThemeColor(themeColorId).setProps.tones(getStopsFromString(tones));
        setThemeColor(themeColorId).setProps.hueCalc(hueCalcInput);
        setThemeColor(themeColorId).setProps.chromaCalc(chromaCalcInput);
    }, [tones, hueCalcInput]);

    /**
     * Sets the chroma calculation value in the theme color.
     * @param {string} chromaCalcInput - The input value for chroma calculation.
     */
    useEffect(() => {
        setThemeColor(themeColorId).setProps.chromaCalc(chromaCalcInput);
    }, [chromaCalcInput]);

    /**
     * Updates sliders and inputs for hue and chroma based on the hex color input.
     * If the hue calculation does not include 'h', it updates the hue calculation input with the calculated hue.
     * If the chroma calculation does not include 'c', it updates the chroma calculation input with the calculated chroma.
     * @param hexColorInput The hex color input value.
     */
    useEffect(() => {
        const calculatedHue: number = round(
            calculateHue(themeColor.sourceColor.hct.hue, themeColor.hueCalc),
        );
        setHueSlider(calculatedHue);
        if (!themeColor.hueCalc.toLowerCase().includes('h')) {
            setThemeColor(themeColorId).setProps.hueCalc(
                `${themeColor.sourceColor.hct.hue}`,
            );
            setHueCalcInput(`${calculatedHue}`);
        }

        const calculatedChroma: number = round(
            calculateChroma(
                themeColor.sourceColor.hct.chroma,
                themeColor.chromaCalc,
            ),
        );
        setChromaSlider(calculatedChroma);
        if (!themeColor.chromaCalc.toLowerCase().includes('c')) {
            setThemeColor(themeColorId).setProps.chromaCalc(
                `${themeColor.sourceColor.hct.chroma}`,
            );
            setChromaCalcInput(`${calculatedChroma}`);
        }
    }, [hexColorInput]);

    const nameTheNameless = () => {
        if (!themeColor.name) {
            setThemeColor(themeColorId).setProps.name('Color');
        }
    };
    const roundedHue: number = Math.round(
        calculateHue(themeColor.sourceColor.hct.hue, themeColor.hueCalc),
    );
    const roundedChroma: number = Math.round(
        calculateChroma(
            themeColor.sourceColor.hct.chroma,
            themeColor.chromaCalc,
        ),
    );

    const onSelectThemeColor = (newThemeColorId: string) => {
        setThemeColorId(newThemeColorId);
        console.log('%ctheme.themeColors', 'color: #6AAFFF', theme.themeColors);
    };

    const onAddThemeColor = () => {
        const newId: string = nanoid(12);
        const newThemeColor: ThemeColorData = {
            ...createThemeColor(),
            id: newId,
            name: `Color ${theme.themeColors.length + 1}`,
        };
        setTheme(themeId).add.themeColor(newThemeColor);
        setThemeColorId(newThemeColor.id);
        console.log('%cNEW themeColor ID:', 'color: #6AAFFF', newId);
        console.log(
            '%ctheme.themeColors:',
            'color: #6AAFFF',
            theme.themeColors,
        );
    };

    const onHexColorInput = (e: any) => {
        const newHexColor: string = e.currentTarget.value;
        setHexColorInput(newHexColor);
        setThemeColor(themeColorId).setProps.sourceHex(newHexColor);

        setHueSlider(roundedHue);
        // if the hueCalcInput is an expression, don't update it
        if (!themeColor.hueCalc.toLowerCase().includes('h')) {
            setThemeColor(themeColorId).setProps.hueCalc(
                `${themeColor.sourceColor.hct.hue}`,
            );
            setHueCalcInput(`${roundedHue}`);
        }

        setChromaSlider(roundedChroma);
        if (!themeColor.chromaCalc.toLowerCase().includes('c')) {
            setThemeColor(themeColorId).setProps.chromaCalc(
                `${themeColor.sourceColor.hct.chroma}`,
            );
            setChromaCalcInput(`${roundedChroma}`);
        }
    };

    const onHueSliderInput = (e: any) => {
        const newHueCalcInput: number = e.currentTarget.value;
        setThemeColor(themeColorId).setProps.hueCalc(`${newHueCalcInput}`);
        setHueSlider(newHueCalcInput);
        setHueCalcInput(`${newHueCalcInput}`);
        console.log(
            calculateHue(themeColor.sourceColor.hct.hue, `${newHueCalcInput}`),
        );
    };
    const onHueCalcInput = (e: any) => {
        const newHueCalcInput: string = e.currentTarget.value;
        const calculatedHue: number = calculateHue(
            themeColor.sourceColor.hct.hue,
            newHueCalcInput,
        );
        setThemeColor(themeColorId).setProps.hueCalc(newHueCalcInput);
        setHueCalcInput(newHueCalcInput);
        setHueSlider(calculatedHue);
        if (newHueCalcInput === '') {
            setThemeColor(themeColorId).setProps.hueCalc(
                `${themeColor.sourceColor.hct.hue}`,
            );
            setHueSlider(themeColor.sourceColor.hct.hue);
        }
    };
    const onChromaSliderInput = (e: any) => {
        const newChromaCalcInput: number = e.currentTarget.value;
        setThemeColor(themeColorId).setProps.chromaCalc(
            `${newChromaCalcInput}`,
        );
        setChromaCalcInput(`${newChromaCalcInput}`);
        setChromaSlider(newChromaCalcInput);
        console.log(themeColor.endColor.hct);
    };
    const onChromaCalcInput = (e: any) => {
        const newChromaCalcInput: string = e.currentTarget.value;
        const calculatedChroma: number = round(
            calculateChroma(
                themeColor.sourceColor.hct.chroma,
                newChromaCalcInput,
            ),
        );
        setThemeColor(themeColorId).setProps.chromaCalc(newChromaCalcInput);
        setChromaSlider(calculatedChroma);
        setChromaCalcInput(newChromaCalcInput);
        if (newChromaCalcInput === '') {
            setThemeColor(themeColorId).setProps.chromaCalc(
                `${themeColor.sourceColor.hct.chroma}`,
            );
            setChromaSlider(themeColor.sourceColor.hct.chroma);
        }
    };

    const themeColorOptions: Array<DropdownOption> = [
        {
            value: 'Custom source',
        },
        '-',
        {
            header: 'Drive via',
        },
        {
            value: 'Delete theme color',
        },
    ];

    const maxChroma = useMemo(
        () => Math.max(ceil(findMaxChroma(hue())), 1),
        [themeColor.endColor.hct.hue, themeColorId],
    );

    const [themeColorToDelete, setThemeColorToDelete] = useState<string>('');
    useEffect(() => {
        const themeColorToDeleteExists = theme.themeColors.some(
            (themeColor) => themeColor.id === themeColorToDelete,
        );
        if (themeColorToDeleteExists) {
            setThemeColor(themeColorToDelete).remove();
        }
    }, [themeColorToDelete]);

    const options: Array<TabsOption> = [
        {
            children: (
                <div className="tab-content absolute left-0 top-10 flex w-full flex-row overflow-y-scroll">
                    <div className="flex h-full w-10 flex-col items-center overflow-y-scroll pt-2">
                        <ThemeColorSelect
                            themeColors={
                                themeList.themes[themeIndex].themeColors
                            }
                            selectedThemeColor={themeColorId}
                            onSelectThemeColor={(themeColorId) => {
                                onSelectThemeColor(themeColorId);
                            }}
                        />
                        <div className="min-h-max pb-10 pt-1">
                            <IconButton
                                title="Add color"
                                onClick={onAddThemeColor}
                            >
                                <IconPlus32 />
                            </IconButton>
                        </div>
                    </div>
                    <div className="flex h-full flex-col overflow-hidden">
                        <div className="flex h-24 shrink-0 flex-row">
                            <div className="flex grow flex-row">
                                {/* Section 1A */}
                                <div className="h-full w-344 pt-1">
                                    <div className="flex flex-row">
                                        <div className="flex-1">
                                            <Textbox
                                                title="Color name"
                                                value={themeColor.name}
                                                onChange={(e) => {
                                                    setThemeColor(
                                                        themeColorId,
                                                    ).setProps.name(
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
                                                        ...themeColor,
                                                        id: nanoid(12),
                                                        name: `${themeColor.name} copy`,
                                                    };
                                                setTheme(
                                                    themeId,
                                                ).add.themeColor(newThemeColor);
                                                setThemeColorId(
                                                    newThemeColor.id,
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
                                            disabled={
                                                theme.themeColors.length === 1
                                                    ? true
                                                    : false
                                            }
                                            onClick={() => {
                                                if (
                                                    theme.themeColors.length ===
                                                    1
                                                ) {
                                                    return;
                                                }
                                                const newThemeColorIndex: number =
                                                    Math.abs(
                                                        themeColorIndex - 1,
                                                    );
                                                setThemeColorId(
                                                    theme.themeColors[
                                                        newThemeColorIndex
                                                    ].id,
                                                );
                                                setThemeColorToDelete(
                                                    themeColorId,
                                                );
                                            }}
                                        >
                                            <IconMinus32 />
                                        </IconButton>
                                    </div>
                                    <div className="flex flex-row">
                                        <TextboxColor
                                            title="Source color"
                                            hexColor={
                                                themeColor.sourceColor.sourceHex
                                            }
                                            onHexColorInput={(e) =>
                                                onHexColorInput(e)
                                            }
                                            onOpacityInput={(e) => '100%'}
                                            opacity={'100%'}
                                        />
                                        {/* TODO: Build out ability to choose source color from preceeding themeColors
                                        <Dropdown
                                            title="Source color options"
                                            options={themeColorOptions}
                                            value={'Custom source'}
                                            placeholder="Source color options"
                                            disabled={themeColorIndex === 0}
                                        /> */}
                                    </div>
                                    <div className="flex gap-4 px-2 pt-2 opacity-60">
                                        <Muted title="Source color hue, chroma, tone">
                                            H:{' '}
                                            {round(
                                                themeColor.sourceColor.hct.hue,
                                            )}{' '}
                                            C:{' '}
                                            {round(
                                                themeColor.sourceColor.hct
                                                    .chroma,
                                            )}{' '}
                                            T:{' '}
                                            {round(
                                                themeColor.sourceColor.hct.tone,
                                            )}
                                        </Muted>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="h-full w-32"
                                style={{
                                    background: `linear-gradient(to right, ${hctTonalGradient(
                                        themeColor.sourceColor.hct.hue,
                                        themeColor.sourceColor.hct.chroma,
                                    )})`,
                                }}
                            ></div>
                        </div>
                        <div className="flex h-24 shrink-0 flex-row">
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
                                            value={`${Math.round(calculateHue(themeColor.sourceColor.hct.hue, themeColor.hueCalc))}`}
                                        />
                                        <div
                                            className="hue-slider-bar absolute h-2 rounded-full"
                                            style={`width: 157px; transform: translate(-1px, -4px); background: linear-gradient(to right, ${maxChromaHues}`}
                                        />
                                    </div>
                                    <Textbox
                                        title="Hue expression"
                                        value={themeColor.hueCalc}
                                        onInput={(e) => onHueCalcInput(e)}
                                        placeholder="Hue value or expression"
                                    />
                                    <div className="px-2 py-1 opacity-60">
                                        <Muted>
                                            Source Hue (h) ={' '}
                                            {round(
                                                themeColor.sourceColor.hct.hue,
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
                                                calculateChroma(
                                                    themeColor.sourceColor.hct
                                                        .chroma,
                                                    themeColor.chromaCalc,
                                                ),
                                            )}{' '}
                                            <span className="opacity-40">
                                                / {maxChroma}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="chroma-slider px-2 pb-2">
                                        <RangeSlider
                                            title="Adjust chroma"
                                            maximum={Math.max(maxChroma, 1)}
                                            minimum={0}
                                            onInput={(e) =>
                                                onChromaSliderInput(e)
                                            }
                                            value={`${calculateChroma(themeColor.sourceColor.hct.chroma, themeColor.chromaCalc)}`}
                                        />
                                        <div
                                            className="chroma-slider-bar absolute h-2 rounded-full"
                                            style={`width: 156px; transform: translate(-1px, -4px); background: linear-gradient(to right, #777, ${maxChromaHex}`}
                                        />
                                    </div>
                                    <Textbox
                                        title="Chroma expression"
                                        value={themeColor.chromaCalc}
                                        onInput={(e) => onChromaCalcInput(e)}
                                        placeholder="Chroma value or expression"
                                    />
                                    <div className="px-2 py-1 opacity-60">
                                        <Muted>
                                            Source Chroma (c) ={' '}
                                            {round(
                                                themeColor.sourceColor.hct
                                                    .chroma,
                                            )}
                                        </Muted>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="h-full w-32"
                                // TODO: Fix late state update for endColor
                                style={{
                                    background: `linear-gradient(to right, ${hctTonalGradient(
                                        themeColor.endColor.hct.hue,
                                        themeColor.endColor.hct.chroma,
                                    )})`,
                                }}
                            ></div>
                        </div>
                        <div className="flex h-24 shrink-0 flex-row">
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
                                // TODO: Fix late state update for endColor
                                style={{
                                    background: `linear-gradient(to right, ${
                                        themeColor.tones.length >= 1
                                            ? hctTonalGradient(
                                                  themeColor.endColor.hct.hue,
                                                  themeColor.endColor.hct
                                                      .chroma,
                                                  themeColor.tones,
                                              )
                                            : hctTonalGradient(
                                                  themeColor.endColor.hct.hue,
                                                  themeColor.endColor.hct
                                                      .chroma,
                                                  // an array of 0-100
                                                  Array.from(
                                                      { length: 101 },
                                                      (_, i) => i * 1,
                                                  ),
                                              )
                                    })`,
                                }}
                            ></div>
                        </div>
                        <div className="flex flex-row border-t border-gridlines">
                            <div className="flex grow justify-between">
                                <span className="p-2">Aliases</span>
                                <IconButton
                                    title="Create alias"
                                    onClick={() => {
                                        setThemeColor(themeColorId).add.alias(
                                            createAlias(),
                                        );
                                        console.log(
                                            themeColor.aliasGroup.aliases,
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
                        <div
                            id="alias-list-container"
                            className="flex grow flex-col overflow-y-scroll"
                        >
                            <AliasList
                                hue={themeColor.endColor.hct.hue}
                                chroma={themeColor.endColor.hct.chroma}
                                aliases={themeColor.aliasGroup.aliases}
                                onSetAliases={(aliases: AliasData[]) => {
                                    setThemeColor(
                                        themeColorId,
                                    ).setProps.aliasGroup({
                                        ...themeColor.aliasGroup,
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
