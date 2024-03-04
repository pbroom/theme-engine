import '!./dist/tailwind.css';
import {
    Textbox,
    Dropdown,
    DropdownOption,
    render,
} from '@create-figma-plugin/ui';
import { h } from 'preact';
import TabGroup from './components/tabs';
import { nanoid } from 'nanoid';
import { ThemeData, createTheme } from './hooks/useTheme';
import { useContext, useEffect, useState, useRef } from 'preact/hooks';
import { defaultThemes, useThemeList } from './hooks/useThemeList';
import { IdContext, IdState } from './hooks/useId';
import { findIndex, set } from 'lodash';
import { useStore } from 'zustand';
import { Hct } from '@material/material-color-utilities';
import { calculateChroma, calculateHue } from './lib/color-utils';
import { PluginMessage } from './main';
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
                    hct: Hct.from(
                        hue(),
                        chroma(),
                        newThemeColor.sourceColor.hct.tone,
                    ),
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

    const setThemeId = useStore(IdStore, (state: IdState) => state.setThemeId);
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
    const setTheme = themeList.theme(themeId);

    const themeColorIndexRef = useRef(
        themeList.themes[themeIndex].themeColors.findIndex(
            (themeColor) => themeColor.id === themeColorId,
        ),
    );
    const [themeColorIndex, setThemeColorIndex] = useState<number>(
        themeColorIndexRef.current,
    );

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
    ];
    const handleOptionSelect = (
        event: h.JSX.TargetedEvent<HTMLInputElement>,
    ) => {
        const selectedValue = event.currentTarget.value;
        if (selectedValue === 'New theme...') {
            const newThemeName = `Theme ${Object.keys(themeList.themes).length + 1}`;
            const newTheme = createTheme(nanoid(12), newThemeName);
            themeList.add.theme(newTheme);
            // setThemeId(newTheme.id);
            // console.log(newTheme);
            // console.log(themeList);
        }
        if (selectedValue === 'Rename...') {
            setIsEditing(true);
        }
        if (selectedValue === 'Duplicate') {
            const newTheme = {
                ...theme,
                id: nanoid(12),
                name: `${theme.name} copy`,
            };
            themeList.add.theme(newTheme);
            // setThemeId(newTheme.id);
        }
        if (selectedValue === 'Delete') {
            const themeToDelete = themeId;

            setThemeToDelete(themeToDelete);
        }
        if (
            selectedValue !== 'New theme...' &&
            selectedValue !== 'Rename...' &&
            selectedValue !== 'Duplicate' &&
            selectedValue !== 'Delete'
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
    const names = [
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
            setTheme.setProps.name(pickRandomName(names));
        }
    };

    const handleBuildTheme = () => {
        console.log('Build theme');
        const pluginMessage: PluginMessage = {
            theme: theme,
            collectionId: '',
        };
        parent.postMessage(
            {
                pluginMessage: {
                    type: 'build',
                    name: theme.name,
                    color: themeColor.sourceColor.hex,
                    toneStops: themeColor.tones,
                    // collectionId: collectionId,
                },
            },
            '*',
        );
    };
    const [collections, setCollections] = useState<VariableCollection[]>([]);
    onmessage = (event) => {
        const message = event.data.pluginMessage;
        if (message.type === 'localCollections') {
            const collections = message.collections;
            setCollections(collections);
        }
    };

    // Rendering the UI
    return (
        <div id="container-wrap" className="h-full overflow-y-auto">
            <div id="grid-lines" className="absolute inset-0">
                <div className="absolute top-10 h-px w-full bg-gridlines"></div>
                <div className="absolute left-10 h-full w-px bg-gridlines"></div>
                <div className="absolute right-32 h-full w-px bg-gridlines"></div>
            </div>
            <div className="flex h-10 w-full">
                <div className="h-full w-10"></div>
                <div className="flex grow flex-row justify-between pr-2">
                    <div className="flex h-full items-center px-2">
                        {isEditing ? (
                            <Textbox
                                ref={inputRef}
                                value={theme.name}
                                onChange={(e) =>
                                    setTheme.setProps.name(
                                        e.currentTarget.value,
                                    )
                                }
                                onBlur={handleTextboxBlur}
                                onKeyDown={handleTextboxKeyDown}
                                onfocusout={handleTextboxBlur}
                                placeholder="Theme name"
                            />
                        ) : (
                            <Dropdown
                                value={themeId}
                                options={themeListMenuOptions}
                                onChange={handleOptionSelect}
                            />
                        )}
                    </div>
                    <TabGroup
                    // themeData={currentTheme}
                    // onSetThemeData={onSetThemeData}
                    />
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
