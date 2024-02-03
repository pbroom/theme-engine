import '!./dist/tailwind.css';
import {
    Textbox,
    Dropdown,
    DropdownOption,
    render,
} from '@create-figma-plugin/ui';
import { h } from 'preact';
import TabGroup from './components/tabs';
import {
    useThemeColor,
    ThemeColorData,
    createThemeColor,
} from './hooks/useThemeColor';
import { nanoid } from 'nanoid';
import {
    useTheme,
    defaultThemeColors,
    ThemeData,
    createTheme,
} from './hooks/useTheme';
import { useEffect, useState } from 'react';
import { useThemeList } from './hooks/useThemeList';
import { useRef } from 'preact/hooks';

export const Plugin = () => {
    const themeList = useThemeList();
    console.log(themeList);
    const [currentThemeId, setCurrentThemeId] = useState<string>(
        `${themeList.themes[0].id}`,
    );
    const findThemeById = (id: string) => {
        const theme = themeList.themes.find((theme) => theme.id === id);
        if (!theme) {
            throw new Error(`Theme with id ${id} not found`);
        }
        return theme;
    };
    const currentTheme: ThemeData = findThemeById(currentThemeId);

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
        },
    ];
    console.log(themeListMenuOptions);
    const handleOptionSelect = (
        event: h.JSX.TargetedEvent<HTMLInputElement>,
    ) => {
        const selectedValue = event.currentTarget.value;
        if (selectedValue === 'New theme...') {
            const newThemeName = `Theme ${Object.keys(themeList.themes).length + 1}`;
            const newTheme = createTheme(nanoid(12), newThemeName);
            themeList.theme.add(newTheme);
            setCurrentThemeId(newTheme.id);
            console.log(themeList);
        }
        if (selectedValue === 'Rename...') {
            setIsEditing(true);
        }
        if (selectedValue === 'Duplicate') {
            const newTheme = {
                ...currentTheme,
                id: nanoid(12),
                name: `${currentTheme.name} copy`,
            };
            themeList.theme.add({ ...newTheme });
            setCurrentThemeId(newTheme.id);
        }
        if (selectedValue === 'Delete') {
            const themeToDelete = currentThemeId;
            // find the id of the next theme in the list that doesn't match the current theme
            const nextThemeId = themeList.themes.find(
                (theme) => theme.id !== currentThemeId,
            )?.id;
            if (!nextThemeId) {
                const newTheme = createTheme(nanoid(12), 'New theme');
                themeList.theme.add(newTheme);
                setCurrentThemeId(newTheme.id);
            } else {
                setCurrentThemeId(nextThemeId);
            }
            themeList.theme.remove(themeToDelete);
        }
        if (
            selectedValue !== 'New theme...' &&
            selectedValue !== 'Rename...' &&
            selectedValue !== 'Duplicate' &&
            selectedValue !== 'Delete'
        ) {
            setCurrentThemeId(selectedValue);
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
        if (!currentTheme.name) {
            themeList.theme.update(currentThemeId, {
                ...currentTheme,
                name: pickRandomName(names),
            });
        }
    };
    const onSetThemeData = (themeData: ThemeData) => {
        themeList.theme.update(currentThemeId, themeData);
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
                                value={findThemeById(currentThemeId).name}
                                onChange={(e) =>
                                    themeList.theme.update(currentThemeId, {
                                        ...currentTheme,
                                        name: e.currentTarget.value,
                                    })
                                }
                                onBlur={handleTextboxBlur}
                                onKeyDown={handleTextboxKeyDown}
                                onfocusout={handleTextboxBlur}
                                placeholder="Theme name"
                            />
                        ) : (
                            <Dropdown
                                value={currentThemeId}
                                options={themeListMenuOptions}
                                onChange={handleOptionSelect}
                            />
                        )}
                    </div>
                    <TabGroup
                        themeData={findThemeById(currentThemeId)}
                        onSetThemeData={onSetThemeData}
                    />
                </div>
                <button
                    title="Build theme"
                    className="build-button z-50 flex h-full w-32 items-center justify-center font-medium"
                    onClick={(e) => console.log(themeList)}
                >
                    Build Theme
                </button>
            </div>
        </div>
    );
};

// Exporting the Plugin component wrapped in the render function
export default render(Plugin);
