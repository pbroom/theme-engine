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
import { IdContext } from './hooks/useId';

export const Plugin = () => {
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

    // initial theme data
    // useEffect(() => {
    //     const newThemeId = themeList.themes[0].id;
    //     setThemeId(newThemeId);
    //     setThemeColorId(themeList.themes[0].themeColors[0].id);
    // }, []);

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
            setThemeId(newTheme.id);
            console.log(newTheme);
            console.log(themeList);
        }
        if (selectedValue === 'Rename...') {
            setIsEditing(true);
        }
        if (selectedValue === 'Duplicate') {
            const newTheme = {
                ...theme.data,
                id: nanoid(12),
                name: `${theme.data.name} copy`,
            };
            themeList.add.theme(newTheme);
            setThemeId(newTheme.id);
        }
        if (selectedValue === 'Delete') {
            const themeToDelete = themeId;
            // find the id of the next theme in the list that doesn't match the current theme
            const nextThemeId = themeList.themes.find(
                (theme) => theme.id !== themeId,
            )?.id;
            if (!nextThemeId) {
                const newTheme = createTheme(nanoid(12), 'New theme');
                themeList.add.theme(newTheme);
                setThemeId(newTheme.id);
            } else {
                setThemeId(nextThemeId);
            }
            themeList.theme(themeToDelete).remove();
        }
        if (
            selectedValue !== 'New theme...' &&
            selectedValue !== 'Rename...' &&
            selectedValue !== 'Duplicate' &&
            selectedValue !== 'Delete'
        ) {
            setThemeId(selectedValue);
            console.log(selectedValue, themeId);
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
        if (!theme.data.name) {
            theme.setProps.name(pickRandomName(names));
        }
    };
    const onSetThemeData = (themeData: ThemeData) => {
        themeList.theme(themeId).update(themeData);
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
                                value={theme.data.name}
                                onChange={(e) =>
                                    theme.setProps.name(e.currentTarget.value)
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
                    onClick={(e) => console.log(themeList)}
                >
                    Build Theme
                </button>
            </div>
        </div>
    );
};

// Exporting the Plugin component wrapped in the render function
export default Plugin;
