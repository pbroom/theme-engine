import '!./dist/tailwind.css';
import {
    Textbox,
    Dropdown,
    DropdownOption,
    IconPlus32,
} from '@create-figma-plugin/ui';
import { h } from 'preact';
import TabGroup from './components/tabs';
import { nanoid } from 'nanoid';
import {
    ThemeColorData,
    ThemeData,
    createTheme,
    createThemeColor,
} from './hooks/useTheme';
import { useContext, useEffect, useState, useRef } from 'preact/hooks';
import { ThemeListContext } from './hooks/useThemeList';
import { IdContext, IdState } from './hooks/useId';
import { findIndex, set } from 'lodash';
import { useStore } from 'zustand';
import { calculateChroma, calculateHue, randomHex } from './lib/color-utils';
import { useSettings } from './components/settings-tab/useSettings';
import { useMessageStore } from './hooks/useMessageProvider';
import { createAliasGroup } from './hooks/useAliasGroup';
import { createColorFrom } from './hooks/useColor';
import React from 'preact/compat';

export const Plugin = () => {
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

    const [themeImportAvailable, setThemeImportAvailable] =
        useState<boolean>(false);
    const [themeImport, setThemeImport] = useState<ThemeData | null>(null);

    const message = useMessageStore();

    useEffect(() => {
        // console.log('message in TABS:', message);
        if (message.type === 'themeImportReady') {
            setThemeImportAvailable(true);
            setThemeImport(message.data.theme);
        }
        if (message.type === 'noThemeImportReady') {
            setThemeImportAvailable(false);
            setThemeImport(null);
        }
    }, [message]);

    const [themeToDelete, setThemeToDelete] = useState<string>('');
    useEffect(() => {
        const themeToDeleteIndex: number = themeList.themes.findIndex(
            (theme) => theme.id === themeToDelete,
        );
        const newThemeIndex: number = Math.abs(themeIndex - 1);
        const themeToDeleteExists = themeList.themes.some(
            (theme) => theme.id === themeToDelete,
        );
        if (
            themeToDeleteExists &&
            themeToDeleteIndex !== themeList.themes.length - 1
        ) {
            setThemeId(themeList.themes[newThemeIndex].id);
            setThemeColorId(themeList.themes[newThemeIndex].themeColors[0].id);
            themeList.theme(themeToDelete).remove();
        }
        if (
            themeToDeleteExists &&
            themeToDeleteIndex === themeList.themes.length - 1
        ) {
            setThemeId(themeList.themes[newThemeIndex].id);
            setThemeColorId(themeList.themes[newThemeIndex].themeColors[0].id);
        }
    }, [themeToDelete]);

    const setThemeId = useStore(IdStore, (state: IdState) => state.setThemeId);
    const setThemeColorId = useStore(
        IdStore,
        (state: IdState) => state.setThemeColorId,
    );
    // themeList state
    const useThemeListStore = useContext(ThemeListContext);
    if (!useThemeListStore) {
        throw new Error('ThemeListContext is undefined');
    }
    const themeList = useStore(useThemeListStore, (state) => state);

    useEffect(() => {
        const newThemeIndex = themeList.themes.findIndex(
            (theme) => theme.id === themeId,
        );
        themeIndexRef.current = newThemeIndex;
        const newThemeColorIndex = themeList.themes[
            newThemeIndex
        ].themeColors.findIndex((themeColor) => themeColor.id === themeColorId);
        themeColorIndexRef.current = newThemeColorIndex;

        // console.log(
        //     '%cthemeRef.current:',
        //     'color: #FF0000',
        //     themeRef.current.id,
        // );
        // console.log(
        //     '%cthemes[themeId]:',
        //     'color: #FF0000',
        //     themeList.themes[newThemeIndex].id,
        // );
        setThemeIndex(newThemeIndex);
        setThemeColorIndex(newThemeColorIndex);
        if (themeRef.current.id !== themeList.themes[newThemeIndex].id) {
            themeRef.current = themeList.themes[newThemeIndex];
            const newThemeColorId =
                themeList.themes[newThemeIndex].themeColors[0].id;
            const newThemeColor =
                themeList.themes[newThemeIndex].themeColors[newThemeColorIndex];
            if (!newThemeColor) {
                throw new Error('Theme color not found');
            }
            const hue: number = calculateHue(
                themeList.themes[newThemeIndex].themeColors[newThemeColorIndex]
                    .sourceColor.hct.hue,
                newThemeColor.hueCalc,
            );
            const chroma: number = calculateChroma(
                newThemeColor.sourceColor.hct.chroma,
                newThemeColor.chromaCalc,
            );
            setThemeColor(newThemeColorId).setProps.all({
                ...newThemeColor,
                endColor: {
                    ...newThemeColor.endColor,
                    hct: {
                        hue: hue,
                        chroma: chroma,
                        tone: newThemeColor.sourceColor.hct.tone,
                    },
                },
                hueCalc: newThemeColor.hueCalc,
            });
            if (
                themeToDelete &&
                themeToDelete !== themeId &&
                themeList.themes.length ===
                    themeList.themes.findIndex(
                        (theme) => theme.id === themeToDelete,
                    ) +
                        1
            ) {
                themeList.theme(themeToDelete).remove();
            }
        }
        if (
            themeColorRef.current !==
            themeList.themes[newThemeIndex].themeColors[newThemeColorIndex]
        ) {
            themeColorRef.current =
                themeList.themes[newThemeIndex].themeColors[newThemeColorIndex];
        }
    }, [themeId, themeColorId]);

    const themeIndexRef = useRef(
        themeList.themes.findIndex((theme) => theme.id === themeId),
    );
    const [themeIndex, setThemeIndex] = useState<number>(themeIndexRef.current);

    // theme state
    const theme = themeList.themes[themeIndex];
    const setTheme = themeList.theme(themeId);

    const themeColorIndexRef = useRef(
        themeList.themes[themeIndex].themeColors.findIndex(
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

    const themeRef = useRef(theme);
    const themeColorRef = useRef(themeColor);

    const findThemeById = (id: string) => {
        const theme = themeList.themes.find((theme) => theme.id === id);
        if (!theme) {
            throw new Error(`Theme with id ${id} not found`);
        }
        return theme;
    };

    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);
    const handleTextboxBlur = () => {
        setIsEditing(false);
        nameTheNameless();
    };

    const handleTextboxKeyDown = (event: { key: string }) => {
        if (event.key === 'Enter' || event.key === 'Escape') {
            setIsEditing(false);
            nameTheNameless();
        }
    };

    const themeListOptions = themeList.themes.map((theme) => {
        return {
            value: theme.id,
            text: theme.name,
        };
    });
    const themeListMenuOptions: Array<DropdownOption> = [
        ...themeListOptions,
        '-',
        {
            value: 'New theme...',
        },
        {
            value: 'Rename...',
        },
        {
            value: 'Duplicate',
        },
        {
            value: 'Delete',
            disabled: themeList.themes.length === 1,
        },
        '-',
        {
            value: 'Export theme',
        },
        {
            value: 'Import theme',
            disabled: !themeImportAvailable,
        },
    ];
    const handleOptionSelect = (
        event: h.JSX.TargetedEvent<HTMLInputElement>,
    ) => {
        const selectedValue = event.currentTarget.value;
        if (selectedValue === 'New theme...') {
            const newThemeName = `Theme ${Object.keys(themeList.themes).length + 1}`;
            const hex = randomHex();
            const newThemeColor: ThemeColorData = {
                ...createThemeColor(),
                id: nanoid(12),
                sourceHex: hex,
                sourceColor: createColorFrom().hex(hex),
                endColor: createColorFrom().hex(hex),
                name: 'Color',
                tones: [],
                aliasGroup: {
                    ...createAliasGroup(),
                    id: nanoid(12),
                    name: 'Color',
                    aliases: [],
                },
            };
            const newTheme = {
                ...createTheme(),
                id: nanoid(12),
                name: newThemeName,
                themeColors: [newThemeColor],
            };
            themeList.add.theme(newTheme);
            const message = {
                type: 'figmaNotify',
                data: `Added theme: "${newTheme.name}"`,
            };
            parent.postMessage({ pluginMessage: message }, '*');
            // setThemeId(newTheme.id);
        }
        if (selectedValue === 'Rename...') {
            setIsEditing(true);
        }
        if (selectedValue === 'Duplicate') {
            const newThemeAliasGroups = theme.aliasGroups.map((aliasGroup) => {
                return {
                    ...aliasGroup,
                    id: nanoid(12),
                };
            });
            const newTheme = {
                ...theme,
                id: nanoid(12),
                aliasGroups: newThemeAliasGroups,
                name: `${theme.name} copy`,
            };
            // console.log('theme:', theme);
            // console.log('newTheme:', newTheme);
            themeList.add.theme(newTheme);
            const message = {
                type: 'figmaNotify',
                data: `Added theme: "${newTheme.name}"`,
            };
            parent.postMessage({ pluginMessage: message }, '*');
            // setThemeId(newTheme.id);
        }
        if (selectedValue === 'Delete') {
            const themeToDelete = themeId;

            setThemeToDelete(themeToDelete);
        }
        if (selectedValue === 'Export theme') {
            handleExportTheme();
        }
        if (selectedValue === 'Import theme') {
            handleImportTheme();
        }
        if (
            selectedValue !== 'New theme...' &&
            selectedValue !== 'Rename...' &&
            selectedValue !== 'Duplicate' &&
            selectedValue !== 'Delete' &&
            selectedValue !== 'Export theme' &&
            selectedValue !== 'Import theme'
        ) {
            setThemeId(selectedValue);
            const newThemeIndex = findIndex(
                themeList.themes,
                (theme) => theme.id === selectedValue,
            );
            setThemeIndex(newThemeIndex);
            setThemeColorId(themeList.themes[newThemeIndex].themeColors[0].id);
            setThemeColorIndex(0);
            // console.log('%cTHEME_CHANGE', 'color: #FF0000');
            // console.log('%cCURRENT_THEME_ID', 'color: #FF0000', themeId);
            // console.log('%cSELECTED_THEME_ID', 'color: #FF0000', selectedValue);
        }
    };

    function pickRandomName(names: string[]) {
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }
    const themeNames = [
        'Themey McThemeFace', // 8%
        'Mr. Theme', // 8%
        'Theme', // 84%
        'Theme',
        'Theme',
        'Theme',
        'Theme',
        'Theme',
        'Theme',
        'Theme',
        'Theme',
        'Theme',
    ];

    const nameTheNameless = () => {
        if (!theme.name) {
            setTheme.setProps.name(pickRandomName(themeNames));
        }
    };
    const getLocalCollections = async (type: string = 'localCollections') => {
        parent.postMessage({ pluginMessage: { type: type } }, '*');
        // console.log('APP UI SENT:', type);
    };

    const settings = useSettings();
    const overwrite = settings.overwriteVariables;
    const bindStyles = settings.bindVariables;
    const collectionName = settings.collectionName;

    // const getCollectionId = async () => {
    //     const collection = collections.find(
    //         (collection) => collection.name === collectionName,
    //     );
    //     if (collection) {
    //         return collection.id;
    //     }
    //     return '';
    // };

    const handleBuildTheme = async () => {
        await getLocalCollections('preBuild');
    };

    const handleImportTheme = async () => {
        if (themeImport) {
            const newTheme = createTheme(
                nanoid(12),
                themeImport.name,
                themeImport.themeColors,
                themeImport.aliasGroups,
            );
            themeList.add.theme(newTheme);
            setThemeImportAvailable(false);
            const message = {
                type: 'figmaNotify',
                data: `Added theme: "${themeImport.name}"`,
            };
            parent.postMessage({ pluginMessage: message }, '*');
        }
    };

    const handleExportTheme = async () => {
        const pluginMessage = {
            type: 'exportTheme',
            data: theme,
        };
        parent.postMessage({ pluginMessage }, '*');
    };

    // Rendering the UI
    return (
        <div id="container-wrap" className="h-full overflow-y-auto">
            <div
                id="grid-lines"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute top-10 h-px w-full bg-gridlines"></div>
                <div className="absolute left-10 h-full w-px bg-gridlines"></div>
                <div className="absolute right-32 h-full w-px bg-gridlines"></div>
            </div>
            <div className="flex h-10 w-full">
                <div className="h-full w-10">
                    {themeImportAvailable && (
                        <button
                            title="Import theme"
                            className="import-button z-50 flex h-full w-full items-center justify-center font-medium"
                            onClick={() => handleImportTheme()}
                        >
                            <IconPlus32 />
                        </button>
                    )}
                </div>
                {/* TODO: fix layout break when the dropdown takes up more than its allotted space */}
                <div className="flex grow flex-row justify-between pr-2">
                    <div className="flex h-full max-w-36 items-center px-2">
                        {isEditing ? (
                            <Textbox
                                title="Theme name"
                                ref={inputRef}
                                value={theme.name}
                                onChange={(e) =>
                                    setTheme.setProps.name(
                                        e.currentTarget.value,
                                    )
                                }
                                onBlur={handleTextboxBlur}
                                onKeyDown={handleTextboxKeyDown}
                                onFocusOut={handleTextboxBlur}
                                placeholder="Theme name"
                            />
                        ) : (
                            <Dropdown
                                title="Select theme"
                                value={themeId}
                                options={themeListMenuOptions}
                                onChange={handleOptionSelect}
                            />
                        )}
                    </div>
                    <TabGroup />
                </div>
                <button
                    title="Build theme"
                    className="build-button z-50 flex h-full w-32 items-center justify-center font-medium"
                    onClick={() => handleBuildTheme()}
                >
                    Build Theme
                </button>
            </div>
        </div>
    );
};

// Exporting the Plugin component wrapped in the render function
export default Plugin;
