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

export const Plugin = () => {
    const themeList = useThemeList();
    console.log(themeList);
    const theme = themeList.themes[0];
    const [currentTheme, setCurrentThemeName] = useState<string>(
        `${theme.name}`,
    );
    const themeListOptions: Array<DropdownOption> = themeList.themes.map(
        (theme) => ({
            value: theme.name,
            text: theme.name,
        }),
    );
    const themeListMenuOptions: Array<DropdownOption> = [
        {
            value: 'New theme',
        },
        {
            value: 'Rename',
        },
        {
            value: 'Duplicate',
        },
        {
            value: 'Delete',
        },
        '-',
        {
            header: 'Themes',
        },
        ...themeListOptions,
    ];
    console.log(themeListMenuOptions);
    const handleOptionSelect = (
        event: h.JSX.TargetedEvent<HTMLInputElement>,
    ) => {
        const selectedValue = event.currentTarget.value;
        if (selectedValue === 'New theme') {
            const newThemeName = `Theme ${Object.keys(themeList.themes).length + 1}`;
            const newTheme = createTheme(nanoid(12), newThemeName);
            themeList.theme.add(newTheme);
            setCurrentThemeName(newTheme.name);
            console.log(themeList);
        }
        if (selectedValue === 'Rename') {
            const newThemeName = prompt('New theme name');
            if (newThemeName) {
                themeList.set.themes({
                    ...themeList.themes,
                    [theme.id]: {
                        ...theme,
                        name: newThemeName,
                    },
                });
                setCurrentThemeName(newThemeName);
            }
        }
        if (selectedValue === 'Duplicate') {
            // const newTheme: ThemeData = currentTheme;
        }
        if (selectedValue === 'Delete') {
            const newThemeList = { ...themeList.themes };
            // delete newThemeList[theme.id];
            themeList.set.themes(newThemeList);
            // setCurrentThemeName(Object.values(newThemeList)[0].name);
        } else {
            setCurrentThemeName(selectedValue);
        }
    };

    const { name } = useTheme();

    // const nameTheNameless = () => {
    //     if (!theme.name) {
    //         theme.set.name('Theme');
    //     }
    // };
    const onSetThemeData = (themeData: ThemeData) => {
        themeList.set.themes({
            ...themeList.themes,
            ...themeData,
        });
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
                    <div className="flex h-full items-center justify-between px-2">
                        <Dropdown
                            value={currentTheme}
                            options={themeListMenuOptions}
                            onChange={handleOptionSelect}
                        />
                        {/* <Textbox
                            value={theme.name}
                            onChange={(e) =>
                                theme.set.name(e.currentTarget.value)
                            }
                            onBlur={() => nameTheNameless()}
                            onfocusout={() => nameTheNameless()}
                            placeholder="Theme name"
                        /> */}
                    </div>
                    <TabGroup
                        themeData={theme}
                        onSetThemeData={onSetThemeData}
                    />
                </div>
                <button
                    title="Build theme"
                    className="build-button z-50 flex h-full w-32 items-center justify-center font-medium"
                    onClick={(e) => console.log(themeList)}
                >
                    Build {theme.name}
                </button>
            </div>
        </div>
    );
};

// Exporting the Plugin component wrapped in the render function
export default render(Plugin);
