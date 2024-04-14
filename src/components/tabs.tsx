/* eslint-disable */
import { h } from 'preact';
import { useContext, useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { Hct } from '@material/material-color-utilities';
import { CopyPlus } from 'lucide-react';
import {
    IconButton,
    IconMinus32,
    Muted,
    RangeSlider,
    Tabs,
    TabsOption,
    Text,
    Textbox,
    TextboxColor,
    TextboxMultiline,
    DropdownOption,
    VerticalSpace,
    TextboxAutocomplete,
    Bold,
    IconToggleButton,
    IconLinkLinked32,
    IconLinkBreak32,
    IconBlend32,
    IconBlendEmpty32,
} from '@create-figma-plugin/ui';
import { IconPlus32 } from '@create-figma-plugin/ui';
import { ThemeColorData, createThemeColor } from '../hooks/useThemeColor';
import { ceil } from 'mathjs';
import {
    getStopsFromString,
    calculateHue,
    calculateChroma,
    hctTonalGradient,
    findHighestChromaPerHue,
    findMaxChroma,
    randomHex,
} from '../lib/color-utils';
import {
    cleanedHexColor,
    createColorFrom,
    hexFromHct,
} from '../hooks/useColor';
import {
    AliasGroupList,
    AliasList,
    OpacityToggle,
    opacityToggleStore,
} from './primitives-tab/alias';
import { ThemeColorSelect } from './primitives-tab/theme-color-select';
import {
    AliasData,
    AliasGroupData,
    createAlias,
    createAliasGroup,
} from '../hooks/useAliasGroup';
import { nanoid } from 'nanoid';
import { ThemeListContext } from '../hooks/useThemeList';
import _ from 'lodash';
import { IdContext, IdState } from '../hooks/useId';

import { create, useStore } from 'zustand';
import { useSettings } from './settings-tab/useSettings';
import { PluginMessage } from '../main';
// import { pluginThemeData } from '../ui';
import { initialization, useMessageStore } from '../hooks/useMessageProvider';
import { CodeOutput } from './settings-tab/codeOutput';

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
    const setThemeId = useStore(IdStore, (state: IdState) => state.setThemeId);
    const themeColorId: string = useStore(
        IdStore,
        (state: IdState) => state.themeColorId,
    );

    useEffect(() => {
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
        setTones(
            `${themeList.themes[newThemeIndex].themeColors[
                newThemeColorIndex
            ].tones.join(', ')}`,
        );
        if (themeRef.current.id !== themeList.themes[newThemeIndex].id) {
            // console.log('%cNew theme ID', 'color: #6AAFFF', newThemeIndex);
            themeRef.current = themeList.themes[newThemeIndex];
            setThemeColor(themeColorId).setProps.endColor({
                ...themeColor.endColor,
                hct: {
                    hue: hue(),
                    chroma: chroma(),
                    tone: themeColor.sourceColor.hct.tone,
                },
            });
            setThemeColor(themeColorId).setProps.tones(
                themeList.themes[newThemeIndex].themeColors[newThemeColorIndex]
                    .tones,
            );
            setThemeColor(themeColorId).setProps.hueCalc(
                themeList.themes[newThemeIndex].themeColors[newThemeColorIndex]
                    .hueCalc,
            );
            setThemeColor(themeColorId).setProps.chromaCalc(
                themeList.themes[newThemeIndex].themeColors[newThemeColorIndex]
                    .chromaCalc,
            );
            setTheme(themeId).setProps.aliasGroups(
                themeList.themes[newThemeIndex].aliasGroups,
            );
            const newThemeColorId =
                themeList.themes[newThemeIndex].themeColors[0].id;
            const newThemeColor =
                themeList.themes[newThemeIndex].themeColors[newThemeColorIndex];
            if (!newThemeColor) {
                throw new Error('Theme color not found');
            }
            setThemeColor(newThemeColorId).setProps.all({
                ...newThemeColor,
                endColor: {
                    ...newThemeColor.endColor,
                    hct: {
                        hue: hue(),
                        chroma: chroma(),
                        tone: newThemeColor.sourceColor.hct.tone,
                    },
                },
                hueCalc: newThemeColor.hueCalc,
            });
        }
        if (
            themeColorRef.current !==
            themeList.themes[newThemeIndex].themeColors[newThemeColorIndex]
        ) {
            themeColorRef.current =
                themeList.themes[newThemeIndex].themeColors[newThemeColorIndex];
            // console.log(
            //     '%cNew themeColor ID',
            //     'color: #6AAFFF',
            //     newThemeColorIndex,
            // );
            const themeColorToDeleteExists = theme.themeColors.some(
                (themeColor) => themeColor.id === themeColorToDelete,
            );
            if (
                themeColorToDeleteExists &&
                themeColorToDelete !== themeColorId
            ) {
                // console.log(
                //     '%cRemoving themeColor',
                //     'color: #e9590c',
                //     themeColorToDelete,
                // );
                setTheme(themeId).themeColor(themeColorToDelete).remove();
            }
        }
    }, [themeId, themeColorId]);

    const setThemeColorId = useStore(
        IdStore,
        (state: IdState) => state.setThemeColorId,
    );

    // themeList state
    const useThemeListStore = useContext(ThemeListContext);
    if (!useThemeListStore) {
        throw new Error('ThemeListContext is undefined');
    }
    // const themeListStore = useStore(useThemeListStore);
    const themeList = useStore(useThemeListStore, (state) => state);

    const themeIndexRef = useRef(
        themeList.themes.findIndex((theme) => theme.id === themeId),
    );
    const [themeIndex, setThemeIndex] = useState<number>(themeIndexRef.current);

    // theme state
    const theme = themeList.themes[themeIndex];
    const setTheme = themeList.theme;

    const updatePluginData = async () => {
        const pluginMessage = {
            type: 'setPluginData',
            data: `${JSON.stringify(themeList.themes)}`,
        };
        parent.postMessage({ pluginMessage }, '*');
    };

    // This useEffect is to handle the case where the first themeColor is
    // deleted. The themeColor index is 0 so it doesn't update otherwise.
    const themeColorsRef = useRef(theme.themeColors.length);
    useEffect(() => {
        if (
            themeColorsRef.current > theme.themeColors.length &&
            themeColorIndex === 0
        ) {
            // console.log(themeColorsRef.current, theme.themeColors.length);
            setThemeColorId(theme.themeColors[0].id);
        }
        themeColorsRef.current = theme.themeColors.length;
    }, [theme.themeColors]);

    const themeColorIndexRef = useRef(
        theme.themeColors.findIndex(
            (themeColor) => themeColor.id === themeColorId,
        ),
    );
    const [themeColorIndex, setThemeColorIndex] = useState<number>(
        themeColorIndexRef.current,
    );

    // themeColor state
    const themeColor =
        themeList.themes[themeIndex].themeColors[themeColorIndex];
    const setThemeColor = themeList.theme(themeId).themeColor;

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

    const themeRef = useRef(theme);
    const themeColorRef = useRef(themeColor);

    const [hexColorInput, setHexColorInput] = useState<string>(
        themeColor.sourceColor.sourceHex,
    );

    const [isDriven, setIsDriven] = useState<boolean>(false);

    useEffect(() => {
        setThemeColor(themeColorId).setProps.child(!themeColor.child);
        setThemeColor(themeColorId).setProps.sourceHex(
            cleanedHexColor(
                themeList.themes[themeIndex].themeColors[0].endColor.hex,
            ),
        );
    }, [isDriven]);
    useEffect(() => {
        setThemeColor(0).setProps.child(false);
    }, [theme.themeColors[0].id]);

    const [tones, setTones] = useState<string>(themeColor.tones.join(', '));

    const opacityToggle: OpacityToggle = opacityToggleStore();
    const opacityVisibility = opacityToggle.opacityVisibility;
    const setOpacityVisibility = opacityToggle.setOpacityVisibility;

    const handleSetTones = (e: any) => {
        const newFieldValue: string = e.currentTarget.value;
        setTones(newFieldValue);
        const newTonesValue = newFieldValue.toLowerCase().includes('all')
            ? Array.from({ length: 101 }, (_, i) => i)
            : getStopsFromString(newFieldValue);
        setThemeColor(themeColorId).setProps.tones(newTonesValue);
    };

    const handleTonesBlur = () => {
        const newFieldValue = tones.toLowerCase().includes('all')
            ? 'all'
            : themeColor.tones.join(', ');
        setTones(newFieldValue);
    };

    // const [hueSlider, setHueSlider] = useState<number>(hue);
    const [hueCalcInput, setHueCalcInput] = useState<string>(
        themeColor.hueCalc,
    );
    useEffect(() => {
        setThemeColor(themeColorId).setProps.tones(getStopsFromString(tones));
        setThemeColor(themeColorId).setProps.hueCalc(hueCalcInput);
        setThemeColor(themeColorId).setProps.chromaCalc(chromaCalcInput);
    }, [hueCalcInput]);

    // const [chromaSlider, setChromaSlider] = useState<number>(chroma);
    const [chromaCalcInput, setChromaCalcInput] = useState<string>(
        themeColor.chromaCalc,
    );
    useEffect(() => {
        setThemeColor(themeColorId).setProps.chromaCalc(chromaCalcInput);
    }, [chromaCalcInput]);

    const maxChromaHex = hexFromHct(Hct.from(hue(), findMaxChroma(hue()), 50));

    const maxChromaHues = useMemo(() => {
        return findHighestChromaPerHue()
            .map(({ hue, chroma, tone }) => {
                return hexFromHct(Hct.from(hue, chroma, tone));
            })
            .join(', ');
    }, []);

    const nameTheNameless = () => {
        if (!themeColor.name) {
            setThemeColor(themeColorId).setProps.name('Color');
        }
    };

    const onSelectThemeColor = (newThemeColorId: string) => {
        setThemeColorId(newThemeColorId);
    };

    const onAddThemeColor = () => {
        const hex = randomHex();
        const newThemeColor: ThemeColorData = {
            ...createThemeColor(),
            id: nanoid(12),
            sourceHex: hex,
            sourceColor: createColorFrom().hex(hex),
            endColor: createColorFrom().hex(hex),
            name: `Color ${theme.themeColors.length + 1}`,
            tones: [],
            aliasGroup: {
                ...createAliasGroup(),
                id: nanoid(12),
                name: 'Color',
                aliases: [],
            },
        };
        setTheme(themeId).add.themeColor(newThemeColor);
        setThemeColorId(newThemeColor.id);
    };

    const onHexColorInput = (e: any) => {
        const newHexColor: string = e.currentTarget.value;
        setHexColorInput(newHexColor);
        setThemeColor(themeColorId).setProps.sourceHex(newHexColor);
        // set the sourceHex for all themeColors with themeColor.child === true
        if (themeColorIndex === 0) {
            theme.themeColors.forEach((themeColor) => {
                if (themeColor.child) {
                    setThemeColor(themeColor.id).setProps.sourceHex(
                        cleanedHexColor(newHexColor),
                    );
                }
            });
        }
        if (themeColorIndex !== 0) {
            setThemeColor(themeColorId).setProps.child(false);
        }
    };

    useEffect(() => {
        // setHueSlider(calculatedHue);
        if (!themeColor.hueCalc.toLowerCase().includes('h')) {
            const hue: number = Math.round(themeColor.sourceColor.hct.hue);
            setThemeColor(themeColorId).setProps.hueCalc(`${hue}`);
            setHueCalcInput(`${hue}`);
        }

        // setChromaSlider(calculatedChroma);
        if (!themeColor.chromaCalc.toLowerCase().includes('c')) {
            const chroma: number = Math.round(
                themeColor.sourceColor.hct.chroma,
            );
            setThemeColor(themeColorId).setProps.chromaCalc(`${chroma}`);
            setChromaCalcInput(`${chroma}`);
        }
    }, [hexColorInput]);

    const onHueSliderInput = (e: any) => {
        const newHueCalcInput: number = e.currentTarget.value;
        setThemeColor(themeColorId).setProps.hueCalc(`${newHueCalcInput}`);
        // setHueSlider(newHueCalcInput);
        setHueCalcInput(`${newHueCalcInput}`);
        const newHexColor: string = cleanedHexColor(themeColor.endColor.hex);
        if (themeColorIndex === 0) {
            theme.themeColors.forEach((themeColor) => {
                if (themeColor.child) {
                    setThemeColor(themeColor.id).setProps.sourceHex(
                        newHexColor,
                    );
                }
            });
        }
        // console.log(
        //     calculateHue(themeColor.sourceColor.hct.hue, `${newHueCalcInput}`),
        // );
    };
    const onHueCalcInput = (e: any) => {
        const newHueCalcInput: string = e.currentTarget.value;
        const calculatedHue: number = calculateHue(
            themeColor.sourceColor.hct.hue,
            newHueCalcInput,
        );
        setThemeColor(themeColorId).setProps.hueCalc(newHueCalcInput);
        setHueCalcInput(newHueCalcInput);
        // setHueSlider(calculatedHue);
        if (newHueCalcInput === '') {
            setThemeColor(themeColorId).setProps.hueCalc(
                `${themeColor.sourceColor.hct.hue}`,
            );
            // setHueSlider(themeColor.sourceColor.hct.hue);
        }
        const newHexColor: string = cleanedHexColor(themeColor.endColor.hex);
        if (themeColorIndex === 0) {
            theme.themeColors.forEach((themeColor) => {
                if (themeColor.child) {
                    setThemeColor(themeColor.id).setProps.sourceHex(
                        newHexColor,
                    );
                }
            });
        }
    };
    const onChromaSliderInput = (e: any) => {
        const newChromaCalcInput: number = e.currentTarget.value;
        setThemeColor(themeColorId).setProps.chromaCalc(
            `${newChromaCalcInput}`,
        );
        setChromaCalcInput(`${newChromaCalcInput}`);
        const newHexColor: string = cleanedHexColor(themeColor.endColor.hex);
        if (themeColorIndex === 0) {
            theme.themeColors.forEach((themeColor) => {
                if (themeColor.child) {
                    setThemeColor(themeColor.id).setProps.sourceHex(
                        newHexColor,
                    );
                }
            });
        }
        // setChromaSlider(newChromaCalcInput);
        // console.log(themeColor.endColor.hct);
    };
    const onChromaCalcInput = (e: any) => {
        const newChromaCalcInput: string = e.currentTarget.value;
        const calculatedChroma: number = Math.round(
            calculateChroma(
                themeColor.sourceColor.hct.chroma,
                newChromaCalcInput,
            ),
        );
        setThemeColor(themeColorId).setProps.chromaCalc(newChromaCalcInput);
        // setChromaSlider(calculatedChroma);
        setChromaCalcInput(newChromaCalcInput);
        if (newChromaCalcInput === '') {
            setThemeColor(themeColorId).setProps.chromaCalc(
                `${themeColor.sourceColor.hct.chroma}`,
            );
            // setChromaSlider(themeColor.sourceColor.hct.chroma);
        }
        const newHexColor: string = cleanedHexColor(themeColor.endColor.hex);
        if (themeColorIndex === 0) {
            theme.themeColors.forEach((themeColor) => {
                if (themeColor.child) {
                    setThemeColor(themeColor.id).setProps.sourceHex(
                        newHexColor,
                    );
                }
            });
        }
    };

    const maxChroma = useMemo(
        () => Math.max(ceil(findMaxChroma(hue())), 1),
        [themeColor.endColor.hct.hue, themeColorId],
    );

    const [themeColorToDelete, setThemeColorToDelete] = useState<string>('');
    useEffect(() => {
        const themeColorToDeleteExists = theme.themeColors.some(
            (themeColor) => themeColor.id === themeColorToDelete,
        );
        const themeColorToDeleteIndex = theme.themeColors.findIndex(
            (themeColor) => themeColor.id === themeColorToDelete,
        );
        if (
            themeColorToDeleteExists &&
            theme.themeColors.length > 1 &&
            theme.themeColors.length > themeColorToDeleteIndex + 1
        ) {
            const newThemeColorIndex: number = Math.max(
                0,
                theme.themeColors.findIndex(
                    (themeColor) => themeColor.id === themeColorToDelete,
                ) - 1,
            );
            const newThemeColorId = theme.themeColors[newThemeColorIndex].id;
            setThemeColor(newThemeColorId).setProps.child(false);

            setThemeColorId(newThemeColorId);
            setTheme(themeId).themeColor(themeColorToDelete).remove();
            // setFire(true);
        }
        if (
            themeColorToDeleteExists &&
            theme.themeColors.length > 1 &&
            theme.themeColors.length === themeColorToDeleteIndex + 1
        ) {
            const newThemeColorIndex: number = Math.max(
                0,
                theme.themeColors.findIndex(
                    (themeColor) => themeColor.id === themeColorToDelete,
                ) - 1,
            );
            const newThemeColorId = theme.themeColors[newThemeColorIndex].id;
            setThemeColor(newThemeColorId).setProps.child(false);
            setThemeColorId(theme.themeColors[newThemeColorIndex].id);
        }
    }, [themeColorToDelete]);

    const settings = useSettings();
    const overwrite = settings.overwriteVariables;
    const setOverwrite = settings.setOverwriteVariables;
    const bindStyles = settings.bindVariables;
    const setBindStyles = settings.setBindVariables;
    const collectionName = settings.collectionName;
    const setCollectionName = settings.setCollectionName;

    const [collectionOptions, setCollectionOptions] = useState<
        Array<DropdownOption>
    >([
        {
            value: 'Collection 1',
            text: 'Collection 1',
        },
    ]);

    const buildCollections = async (
        data: any,
    ): Promise<
        Array<{
            id: string;
            name: string;
            defaultMode: string;
            modes: Array<{ modeId: string; name: string }>;
        }>
    > => {
        const collections = data.reduce(
            (
                items: Array<{ id: string; name: string }>,
                collection: VariableCollection,
            ) => {
                const existingOption = items.find(
                    (item) => item.name === collection.name,
                );
                if (existingOption) {
                    const count = items.filter(
                        (item) => item.name === collection.name,
                    ).length;
                    items.push({
                        id: collection.id,
                        name: `${collection.name} (${count + 1})`,
                    });
                } else {
                    items.push({
                        id: collection.id,
                        name: collection.name,
                    });
                }
                return items;
            },
            [],
        );
        // console.log('Build Collections:', collections);
        return collections;
    };

    const [collections, setCollections] = useState<VariableCollection[]>([]);

    const handleLocalCollectionsMessage = async (message: any) => {
        const localCollections = await message.collections;
        setCollections(localCollections);
        const collectionOptions: Array<DropdownOption> = message.data.reduce(
            (
                options: Array<{ value: string; text: string }>,
                collection: VariableCollection,
            ) => {
                const existingOption = options.find(
                    (option) => option.value === collection.name,
                );
                if (existingOption) {
                    const count = options.filter(
                        (option) => option.value === collection.name,
                    ).length;
                    options.push({
                        value: `${collection.name} (${count + 1})`,
                        text: collection.id,
                    });
                } else {
                    options.push({
                        value: collection.name,
                        text: collection.id,
                    });
                }
                return options;
            },
            [],
        );
        const dropdownOptions: Array<DropdownOption> = [
            {
                header: 'Existing collections',
            },
            ...collectionOptions,
        ];
        setCollectionOptions(dropdownOptions);
    };
    const handlePreBuildMessage = async (message: any) => {
        const localCollections = message.collections;
        setCollections(localCollections);

        const collections = await buildCollections(message.data);
        // console.log('Collections:', collections);
        const collectionId = collections.find(
            (collection) => collection.name === collectionName,
        )?.id;
        const pluginMessage: PluginMessage = {
            type: 'build',
            data: {
                theme: theme,
                collectionId: collectionId ? collectionId : '',
                collectionName: collectionName,
                overwriteVariables: overwrite,
                bindVariables: bindStyles,
            },
        };
        parent.postMessage({ pluginMessage }, '*');
    };

    const message = useMessageStore();

    useEffect(() => {
        // console.log('message in TABS:', message);
        if (message.type === 'localCollections') {
            handleLocalCollectionsMessage(message);
        }
        if (message.type === 'preBuild') {
            handlePreBuildMessage(message);
        }
    }, [message]);

    // TODO: account for starter plans with one mode
    const getLocalCollections = async () => {
        parent.postMessage(
            { pluginMessage: { type: 'localCollections' } },
            '*',
        );
    };

    const handleCollectionNameInput = (
        event: h.JSX.TargetedEvent<HTMLInputElement>,
    ) => {
        const newValue = event.currentTarget.value;
        // console.log(newValue);
        setCollectionName(newValue);
    };

    const [timeoutState, setTimeoutState] =
        useState<ReturnType<typeof setTimeout>>();

    const appInitialized = initialization().isInitialized;

    useEffect(() => {
        if (appInitialized) {
            // console.log('%cApp initialized', 'color: #FF0000');
            const newTimeout = setTimeout(() => {
                updatePluginData();
            }, 1000);
            setTimeoutState(newTimeout);

            return () => {
                clearTimeout(timeoutState);
            };
        }
    }, [themeList.themes]);

    const handleSwapThemeColor = (
        themeColorId: string,
        swapThemeColorId: string,
    ) => {
        const firstThemeColor = themeList.themes[themeIndex].themeColors[0];
        const isFirstThemeColorChanged =
            themeColorId === firstThemeColor.id ||
            swapThemeColorId === firstThemeColor.id;
        setTheme(themeIndex).setProps.themeColors(
            theme.themeColors.map((themeColor) => {
                const selectedThemeColor = theme.themeColors.find(
                    (themeColor) => themeColor.id === themeColorId,
                );
                const swapThemeColor = theme.themeColors.find(
                    (themeColor) => themeColor.id === swapThemeColorId,
                );
                if (selectedThemeColor && swapThemeColor) {
                    if (
                        themeColor.id === themeColorId ||
                        themeColor.id === swapThemeColorId
                    ) {
                        return themeColor.id === themeColorId
                            ? {
                                  ...swapThemeColor,
                                  child: isFirstThemeColorChanged
                                      ? false
                                      : swapThemeColor.child,
                              }
                            : {
                                  ...selectedThemeColor,
                                  child: isFirstThemeColorChanged
                                      ? false
                                      : selectedThemeColor.child,
                              };
                    }
                }
                return {
                    ...themeColor,
                    child: isFirstThemeColorChanged ? false : themeColor.child,
                };
            }),
        );
        const newThemeColorIndex = themeList.themes[
            themeIndex
        ].themeColors.findIndex((themeColor) => themeColor.id === themeColorId);
        themeColorIndexRef.current = newThemeColorIndex;

        setThemeIndex(themeIndex);
        setThemeColorIndex(newThemeColorIndex);
        setTones(
            `${themeList.themes[themeIndex].themeColors[
                newThemeColorIndex
            ].tones.join(', ')}`,
        );
        if (themeRef.current.id !== themeList.themes[themeIndex].id) {
            // console.log('%cNew theme ID', 'color: #6AAFFF', themeIndex);
            themeRef.current = themeList.themes[themeIndex];
            setThemeColor(themeColorId).setProps.endColor({
                ...themeColor.endColor,
                hct: {
                    hue: hue(),
                    chroma: chroma(),
                    tone: themeColor.sourceColor.hct.tone,
                },
            });
            setThemeColor(themeColorId).setProps.tones(
                themeList.themes[themeIndex].themeColors[newThemeColorIndex]
                    .tones,
            );
            setThemeColor(themeColorId).setProps.hueCalc(
                themeList.themes[themeIndex].themeColors[newThemeColorIndex]
                    .hueCalc,
            );
            setThemeColor(themeColorId).setProps.chromaCalc(
                themeList.themes[themeIndex].themeColors[newThemeColorIndex]
                    .chromaCalc,
            );
            const newThemeColorId =
                themeList.themes[themeIndex].themeColors[0].id;
            const newThemeColor =
                themeList.themes[themeIndex].themeColors[newThemeColorIndex];
            if (!newThemeColor) {
                throw new Error('Theme color not found');
            }
            setThemeColor(newThemeColorId).setProps.all({
                ...newThemeColor,
                endColor: {
                    ...newThemeColor.endColor,
                    hct: {
                        hue: hue(),
                        chroma: chroma(),
                        tone: newThemeColor.sourceColor.hct.tone,
                    },
                },
                hueCalc: newThemeColor.hueCalc,
            });
        }
    };

    const options: Array<TabsOption> = [
        {
            children: (
                <div className="tab-content scrollbar-hide absolute left-0 top-10 flex w-full flex-row overflow-y-scroll">
                    <div className="scrollbar-hide flex h-full w-10 flex-col items-center overflow-y-scroll pt-2">
                        <ThemeColorSelect
                            themeColors={
                                themeList.themes[themeIndex].themeColors
                            }
                            selectedThemeColor={themeColorId}
                            onSelectThemeColor={(themeColorId) => {
                                onSelectThemeColor(themeColorId);
                            }}
                            onSwapThemeColor={handleSwapThemeColor}
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
                    <div className="scrollbar-hide flex h-full flex-col overflow-hidden">
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
                                                    setThemeColor(
                                                        themeColorId,
                                                    ).setProps.aliasGroup({
                                                        ...themeColor.aliasGroup,
                                                        name: e.currentTarget
                                                            .value,
                                                    });
                                                }}
                                                onBlur={() => nameTheNameless()}
                                                onFocusOut={() =>
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
                                                        aliasGroup: {
                                                            ...themeColor.aliasGroup,
                                                            id: nanoid(12),
                                                            aliases:
                                                                themeColor.aliasGroup.aliases.map(
                                                                    (alias) => {
                                                                        return {
                                                                            ...alias,
                                                                            id: nanoid(
                                                                                12,
                                                                            ),
                                                                        };
                                                                    },
                                                                ),
                                                        },
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
                                                setThemeColorToDelete(
                                                    themeColorId,
                                                );
                                            }}
                                        >
                                            <IconMinus32 />
                                        </IconButton>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <div className="w-20 py-px">
                                            <TextboxColor
                                                title="Source color"
                                                hexColor={
                                                    themeColor.sourceColor
                                                        .sourceHex
                                                }
                                                onHexColorInput={(e) =>
                                                    onHexColorInput(e)
                                                }
                                                onOpacityInput={(e) => '100%'}
                                                opacity={'100%'}
                                            />
                                        </div>
                                        <div className="flex flex-grow items-center px-px">
                                            {themeColorId !==
                                                theme.themeColors[0].id && (
                                                <IconToggleButton
                                                    title={
                                                        themeColor.child
                                                            ? `Unlink ${theme.themeColors[0].name} as source color`
                                                            : `Use ${theme.themeColors[0].name} as source color`
                                                    }
                                                    value={
                                                        themeColorIndex === 0
                                                            ? false
                                                            : themeColor.child
                                                    }
                                                    onChange={() =>
                                                        setIsDriven(!isDriven)
                                                    }
                                                >
                                                    {themeColor.child &&
                                                    themeColorId !==
                                                        theme.themeColors[0]
                                                            .id ? (
                                                        <IconLinkLinked32 />
                                                    ) : (
                                                        <IconLinkBreak32 />
                                                    )}
                                                </IconToggleButton>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex gap-4 px-2 pt-2 opacity-60">
                                        <Muted title="Source color hue, chroma, tone">
                                            H:{' '}
                                            {Math.round(
                                                themeColor.sourceColor.hct.hue,
                                            )}{' '}
                                            C:{' '}
                                            {Math.round(
                                                themeColor.sourceColor.hct
                                                    .chroma,
                                            )}{' '}
                                            T:{' '}
                                            {Math.round(
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
                                            {Math.round(hue())}
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
                                            {Math.round(
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
                                            {Math.round(
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
                                            {Math.round(
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
                                        onInput={(e) => handleSetTones(e)}
                                        onBlur={() => handleTonesBlur()}
                                        onFocusOut={() => handleTonesBlur()}
                                        placeholder="Input tones. Use 'all' for tones 0-100."
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
                                <div className="flex">
                                    <IconButton
                                        title={`${opacityVisibility ? 'Hide opacity' : 'Show opacity'}`}
                                        onClick={() => {
                                            setOpacityVisibility(
                                                !opacityVisibility,
                                            );
                                        }}
                                    >
                                        {opacityVisibility ? (
                                            <IconBlendEmpty32 />
                                        ) : (
                                            <IconBlend32 />
                                        )}
                                    </IconButton>
                                    <IconButton
                                        title="Create alias"
                                        onClick={() => {
                                            setThemeColor(
                                                themeColorId,
                                            ).add.alias(createAlias());
                                            // console.log(
                                            //     themeColor.aliasGroup.aliases,
                                            // );
                                        }}
                                    >
                                        <IconPlus32 />
                                    </IconButton>
                                </div>
                            </div>

                            <div className="flex h-8 w-32 items-center justify-around">
                                <span>Light</span>
                                <span>Dark</span>
                            </div>
                        </div>
                        <div
                            id="alias-list-container"
                            className="scrollbar-hide flex grow flex-col overflow-y-scroll"
                        >
                            <AliasList
                                hue={themeColor.endColor.hct.hue}
                                chroma={themeColor.endColor.hct.chroma}
                                aliases={themeColor.aliasGroup.aliases}
                                aliasGroupName={themeColor.aliasGroup.name}
                                themeColorName={themeColor.name}
                                themeId={themeId}
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
                <div className="scrollbar-hide absolute bottom-0 left-0 top-10 w-full overflow-y-scroll border-t border-gridlines bg-fig-bg">
                    <div className="flex w-full flex-row">
                        <div className="flex flex-grow flex-col">
                            <div className="grow">
                                <div className="flex flex-row items-center">
                                    <div className="flex grow flex-row">
                                        {/* Control Area */}
                                        <div className="flex grow items-center justify-between bg-fig-bg px-2 py-2">
                                            <span className="p-2">
                                                <Bold>Alias groups</Bold>
                                            </span>
                                            <div className="flex">
                                                <IconButton
                                                    title="Create alias group"
                                                    onClick={() => {
                                                        setTheme(
                                                            themeId,
                                                        ).add.aliasGroup(
                                                            createAliasGroup(
                                                                nanoid(12),
                                                                'New alias group',
                                                                [],
                                                            ),
                                                        );
                                                    }}
                                                >
                                                    <IconPlus32 />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="flex h-8 w-32 items-center justify-around">
                                        <Muted>Light</Muted>
                                        <Muted>Dark</Muted>
                                    </div> */}
                                </div>
                            </div>
                            <div>
                                <AliasGroupList
                                    aliasGroups={theme.aliasGroups}
                                    themeColors={theme.themeColors}
                                    themeId={themeId}
                                    onSetAliasGroups={(
                                        aliasGroups: AliasGroupData[],
                                    ) =>
                                        setTheme(themeId).setProps.aliasGroups(
                                            aliasGroups,
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ),
            value: 'Aliases',
        },
        {
            children: (
                <div className="scrollbar-hide absolute left-0 top-0 h-full w-full overflow-y-scroll pt-10">
                    <div className="absolute flex h-px w-full flex-row bg-gridlines"></div>
                    <div className="h-full grow bg-fig-bg">
                        <div className="flex h-24 grow flex-row p-1">
                            <div className="flex grow flex-col gap-4 p-4">
                                <div>
                                    <Text>Variable collection name</Text>
                                    <VerticalSpace space="extraSmall" />
                                    <TextboxAutocomplete
                                        onFocus={getLocalCollections}
                                        onInput={handleCollectionNameInput}
                                        onBlur={() => {
                                            if (collectionName === '') {
                                                setCollectionName(
                                                    'Theme Engine',
                                                );
                                            }
                                        }}
                                        onFocusOut={() => {
                                            if (collectionName === '') {
                                                setCollectionName(
                                                    'Theme Engine',
                                                );
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if (
                                                e.key === 'Enter' ||
                                                e.key === 'Escape'
                                            ) {
                                                if (collectionName === '') {
                                                    setCollectionName(
                                                        'Theme Engine',
                                                    );
                                                }
                                            }
                                        }}
                                        options={collectionOptions}
                                        value={collectionName}
                                        placeholder="Collection name"
                                        variant="border"
                                    />
                                </div>
                                <CodeOutput themeData={theme} />
                                {/* <Checkbox
                                    onChange={(e) => {
                                        setOverwrite(!overwrite);
                                    }}
                                    value={overwrite}
                                >
                                    <Text>
                                        Overwrite variables with conflicting
                                        names
                                    </Text>
                                </Checkbox>
                                <Checkbox
                                    onChange={() => {
                                        setBindStyles(!bindStyles);
                                    }}
                                    value={bindStyles}
                                >
                                    <Text>
                                        Bind styles to variables with matching
                                        names
                                    </Text>
                                </Checkbox> */}
                            </div>
                            {/* <div className="h-full w-32"></div> */}
                        </div>
                    </div>
                </div>
            ),
            value: `Settings`,
        },
    ];
    function handleValueChange(newValue: string) {
        // console.log(newValue);
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
