import '!./dist/tailwind.css';
import { Textbox, render } from '@create-figma-plugin/ui';
import { h } from 'preact';
import TabGroup from './components/tabs';
import {
    useThemeColor,
    ThemeColorData,
    createThemeColor,
} from './hooks/useThemeColor';
import { nanoid } from 'nanoid';
import { useTheme, defaultThemeColors, ThemeData } from './hooks/useTheme';
import { useEffect, useState } from 'react';
import { create, set } from 'lodash';
import { useThemeList } from './hooks/useThemeList';

export const Plugin = () => {
    const themeList = useThemeList();
    console.log(themeList);
    const theme = useTheme();
    useEffect(() => {
        //TODO: this will need to be dynamic for changing themes
        theme.set.all(themeList.themes[0]);
    }, []);

    const nameTheNameless = () => {
        if (!theme.name) {
            theme.set.name('Theme');
        }
    };
    const onSetThemeData = (themeData: ThemeData) => {
        theme.set.all(themeData);
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
                <div className="flex grow flex-row justify-between">
                    <div className="flex h-full items-center justify-center px-2">
                        {/* <ThemeMenu themes={ThemeList} /> */}
                        <Textbox
                            value={theme.name}
                            onChange={(e) =>
                                theme.set.name(e.currentTarget.value)
                            }
                            onBlur={() => nameTheNameless()}
                            onfocusout={() => nameTheNameless()}
                            placeholder="Theme name"
                        />
                    </div>
                    <TabGroup
                        themeData={theme.data}
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
