import '!./dist/tailwind.css';
import { Textbox, render } from '@create-figma-plugin/ui';
import { h } from 'preact';
import TabGroup from './components/tabs';
import { useThemeColor, ThemeColor, ThemeColorData, useThemeColorStore } from './hooks/useThemeColor';
import { nanoid } from 'nanoid';
import { useTheme } from './hooks/useTheme';
import { useEffect } from 'react';
import { Color, SolidColorFromRgbColor, hexFromHct, rgbFromHex, rgbaFromHct, useColor } from './hooks/useColor';
import { set } from 'lodash';

declare global {
    namespace React {
        interface ReactElement {
            nodeName: any;
            attributes: any;
            children: any;
        }
    }
}

export const Plugin = () => {
    const theme = useTheme();
    const themeColor = useThemeColor();
    const primary = themeColor;
    const secondary = themeColor;
    const tertiary = themeColor;
    const neutral = themeColor;
    const neutralVariant = themeColor;
    const error = themeColor;
    const themeColors: ThemeColorData[] = [primary, secondary, tertiary, neutral, neutralVariant, error];
    useEffect(() => {
        primary.set.name('Primary');
        secondary.set.name('Secondary');
        tertiary.set.name('Tertiary');
        neutral.set.name('Neutral');
        neutralVariant.set.name('Neutral Variant');
        error.set.name('Error');
        if (theme.themeColors.length === 0) {
            theme.set.themeColors([primary, secondary, tertiary, neutral, neutralVariant, error]);
        }
        console.log(theme);
    }, []);

    const log = () => {
        theme.set.id(nanoid(6));
        theme.set.addThemeColor(primary);
        console.log(theme);
        console.log(nanoid(6));
    };
    const nameTheNameless = () => {
        if (!theme.name) {
            theme.set.name('Theme');
        }
    };
    const onSetThemeColors = (themeColors: ThemeColorData[]) => {
        theme.set.themeColors(themeColors);
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
                            onChange={(e) => theme.set.name(e.currentTarget.value)}
                            onBlur={() => nameTheNameless()}
                            onfocusout={() => nameTheNameless()}
                            placeholder="Theme name"
                        />
                    </div>
                    <TabGroup themeColors={theme.themeColors} onSetThemeColors={onSetThemeColors} />
                </div>
                <button
                    title="Build theme"
                    className="build-button z-50 flex h-full w-32 items-center justify-center font-medium"
                    onClick={(e) => console.log(theme.themeColors)}
                >
                    Build {theme.name}
                </button>
            </div>
        </div>
    );
};

// Exporting the Plugin component wrapped in the render function
export default render(Plugin);
