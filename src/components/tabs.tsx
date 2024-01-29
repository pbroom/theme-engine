/* eslint-disable */
import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
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
} from '../lib/color-utils';
import { hexFromHct } from '../hooks/useColor';
import { AliasList } from './primitives-tab/alias';
import { ThemeColorSelect } from './primitives-tab/theme-color-select';
import { AliasData } from '../hooks/useAliasGroup';
import { Theme, ThemeData, useTheme } from '../hooks/useTheme';
import { nan } from 'zod';
import { nanoid } from 'nanoid';

type TabGroupProps = {
    themeData: ThemeData;
    onSetThemeData: (themeData: ThemeData) => void;
    className?: string;
};

const CopyPlusIcon = CopyPlus as any;

const TabGroup = ({ themeData, onSetThemeData, className }: TabGroupProps) => {
    const [tabValue, setTabValue] = useState<string>('Primitives');
    const [currentThemeColorId, setCurrentThemeColorId] = useState<string>(
        `${themeData.themeColors[0].id}`,
    );
    const findThemeColorById = (id: string) => {
        const theme = themeData.themeColors.find((theme) => theme.id === id);
        if (!theme) {
            throw new Error(`Theme with id ${id} not found`);
        }
        return theme;
    };
    const currentThemeColor: ThemeColorData =
        findThemeColorById(currentThemeColorId);
    const theme: Theme = useTheme();
    const themeColor: ThemeColor = useThemeColor();
    useEffect(() => {
        theme.set.all(themeData);
        themeColor.set.all(themeData.themeColors[0]);
        console.log('themeData: ', themeData);
    }, []);

    const onSelectThemeColor = (themeColorId: string) => {};

    const [hexColorInput, setHexColorInput] = useState<string>(
        currentThemeColor.sourceColor.sourceHex,
    );
    const [tones, setTones] = useState<string>(
        currentThemeColor.tones.join(', '),
    );
    const hue = () => {
        const sourceHue: number = currentThemeColor.sourceColor.hct.hue;
        const hueCalcInput: string = currentThemeColor.hueCalc;
        const hue: number = calculateHue(sourceHue, hueCalcInput);
        return hue;
    };
    const chroma = () => {
        const sourceChroma: number = currentThemeColor.sourceColor.hct.chroma;
        const chromaCalcInput: string = currentThemeColor.chromaCalc;
        const chroma: number = calculateChroma(sourceChroma, chromaCalcInput);
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

    const newHct = Hct.from(hue(), findMaxChromaForHueAtTone(hue(), 50), 50);

    const chromaHex = hexFromHct(newHct);
    useEffect(() => {
        themeColor.set.tones(getStopsFromString(tones));
        themeColor.set.hueCalc(hueCalcInput);
        themeColor.set.chromaCalc(chromaCalcInput);
    }, [tones, hueCalcInput]);

    useEffect(() => {
        themeColor.set.chromaCalc(chromaCalcInput);
    }, [chromaCalcInput]);

    useEffect(() => {
        const calculatedHue: number = round(
            calculateHue(themeColor.sourceColor.hct.hue, themeColor.hueCalc),
        );
        setHueSlider(calculatedHue);
        if (!themeColor.hueCalc.toLowerCase().includes('h')) {
            themeColor.set.hueCalc(themeColor.sourceColor.hct.hue.toString());
            setHueCalcInput(calculatedHue.toString());
        }

        const calculatedChroma: number = round(
            calculateChroma(
                themeColor.sourceColor.hct.chroma,
                themeColor.chromaCalc,
            ),
        );
        setChromaSlider(calculatedChroma);
        if (!themeColor.chromaCalc.toLowerCase().includes('c')) {
            themeColor.set.chromaCalc(
                themeColor.sourceColor.hct.chroma.toString(),
            );
            setChromaCalcInput(calculatedChroma.toString());
        }
    }, [hexColorInput]);

    const nameTheNameless = () => {
        if (!themeColor.name) {
            themeColor.set.name('Color');
        }
    };
    const onHexColorInput = (e: any) => {
        const newHexColorInput: string = e.currentTarget.value;
        setHexColorInput(newHexColorInput);
        themeColor.set.sourceHex(newHexColorInput);
        // themeColor.sourceColor.setSourceHex(newHexColorInput);

        const calculatedHue: number = round(
            calculateHue(themeColor.sourceColor.hct.hue, themeColor.hueCalc),
        );
        setHueSlider(calculatedHue);
        // if the hueCalcInput is an expression, don't update it
        if (!themeColor.hueCalc.toLowerCase().includes('h')) {
            themeColor.set.hueCalc(
                currentThemeColor.sourceColor.hct.hue.toString(),
            );
            setHueCalcInput(calculatedHue.toString());
        }

        const calculatedChroma: number = round(
            calculateChroma(
                themeColor.sourceColor.hct.chroma,
                themeColor.chromaCalc,
            ),
        );
        setChromaSlider(calculatedChroma);
        if (!themeColor.chromaCalc.toLowerCase().includes('c')) {
            themeColor.set.chromaCalc(
                currentThemeColor.sourceColor.hct.chroma.toString(),
            );
            setChromaCalcInput(calculatedChroma.toString());
        }
    };
    const onHueSliderInput = (e: any) => {
        const newHueCalcInput: number = e.currentTarget.value;
        themeColor.set.hueCalc(newHueCalcInput.toString());
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
        themeColor.set.hueCalc(newHueCalcInput);
        setHueCalcInput(newHueCalcInput);
        setHueSlider(calculatedHue);
        if (newHueCalcInput === '') {
            themeColor.set.hueCalc(themeColor.sourceColor.hct.hue.toString());
            setHueSlider(themeColor.sourceColor.hct.hue);
        }
    };
    const onChromaSliderInput = (e: any) => {
        const newChromaCalcInput: number = e.currentTarget.value;
        themeColor.set.chromaCalc(newChromaCalcInput.toString());
        setChromaCalcInput(newChromaCalcInput.toString());
        setChromaSlider(newChromaCalcInput);
        console.log(themeColor.endColor.hct);
    };
    const onChromaCalcInput = (e: any) => {
        const newChromaCalcInput: string = e.currentTarget.value;
        const calculatedChroma: number = round(
            calculateChroma(
                currentThemeColor.sourceColor.hct.chroma,
                newChromaCalcInput,
            ),
        );
        themeColor.set.chromaCalc(newChromaCalcInput);
        setChromaSlider(calculatedChroma);
        setChromaCalcInput(newChromaCalcInput);
        if (newChromaCalcInput === '') {
            themeColor.set.chromaCalc(
                currentThemeColor.sourceColor.hct.chroma.toString(),
            );
            setChromaSlider(currentThemeColor.sourceColor.hct.chroma);
        }
    };
    const onAddAlias = () => {
        themeColor.alias.add();
        console.log(themeColor.aliasGroup.aliases);
    };
    const onSetAliases = (aliases: AliasData[]) => {
        themeColor.set.aliasGroup({
            ...themeColor.aliasGroup,
            aliases: aliases,
        });
    };

    const onAddThemeColor = () => {
        const newThemeColor: ThemeColorData = createThemeColor();
        theme.themeColor.add(newThemeColor);
        // onSetThemeData(theme);
        console.log(theme.themeColors);
    };

    const themeColorOptions: Array<DropdownOption> = [
        {
            value: 'Duplicate theme color',
        },
        {
            value: 'Delete theme color',
        },
    ];

    const options: Array<TabsOption> = [
        {
            children: (
                <div className="tab-content absolute left-0 top-10 flex w-full flex-row overflow-y-scroll">
                    <div className="flex h-full w-10 flex-col items-center overflow-y-scroll pt-2">
                        <ThemeColorSelect
                            themeColors={theme.themeColors}
                            selectedThemeColor={themeColor.id}
                            onSelectThemeColor={onSelectThemeColor}
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
                                                onChange={(e) =>
                                                    themeColor.set.name(
                                                        e.currentTarget.value,
                                                    )
                                                }
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
                                            hexColor={hexColorInput}
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
                                            value={themeColor.hueCalc}
                                        />
                                        <div
                                            className="hue-slider-bar absolute h-2 rounded-full"
                                            style={`width: 157px; transform: translate(-1px, -4px)`}
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
                                                themeColor.endColor.hct.chroma,
                                            )}{' '}
                                            <span className="opacity-40">
                                                /{' '}
                                                {round(
                                                    findMaxChromaForHueAtTone(
                                                        hue(),
                                                        themeColor.endColor.hct
                                                            .tone,
                                                    ),
                                                )}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="chroma-slider px-2 pb-2">
                                        <RangeSlider
                                            title="Adjust chroma"
                                            maximum={round(
                                                findMaxChromaForHueAtTone(
                                                    hue(),
                                                    themeColor.endColor.hct
                                                        .tone,
                                                ),
                                            )}
                                            minimum={0}
                                            onInput={(e) =>
                                                onChromaSliderInput(e)
                                            }
                                            value={themeColor.chromaCalc}
                                        />
                                        <div
                                            className="chroma-slider-bar absolute h-2 rounded-full"
                                            style={`width: 156px; transform: translate(-1px, -4px); background: linear-gradient(to right, #777, ${chromaHex}`}
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
                                                themeColor.sourceColor.hct
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
                                        themeColor.endColor.hct.hue,
                                        themeColor.endColor.hct.chroma,
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
                                        themeColor.endColor.hct.hue,
                                        themeColor.endColor.hct.chroma,
                                        themeColor.tones,
                                    )})`,
                                }}
                            ></div>
                        </div>
                        <div className="flex grow flex-row border-t border-gridlines">
                            <div className="flex grow justify-between">
                                <span className="p-2">Aliases</span>
                                <IconButton
                                    title="Create alias"
                                    onClick={onAddAlias}
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
                                hue={themeColor.endColor.hct.hue}
                                chroma={themeColor.endColor.hct.chroma}
                                aliases={themeColor.aliasGroup.aliases}
                                onSetAliases={onSetAliases}
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
