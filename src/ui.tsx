import { Plugin } from './app';
import { h } from 'preact';
import { IdProvider } from './hooks/useId';
import { useThemeList } from './hooks/useThemeList';
import { render } from '@create-figma-plugin/ui';
import { ThemeData } from './hooks/useTheme';
import { PluginMessage, pluginData } from './main';

// onmessage = async (event) => {
//     const message = await event.data.pluginMessage;
//     if (message.type === 'pluginData') {
//         console.log('%cpluginData:', 'color: #6DFF6A', message);
//     }
// };
export const Ui = () => {
    // const existingThemeLists: ThemeData[] = JSON.parse(pluginData);

    const themeListStore = useThemeList();
    const themeId = themeListStore.themes[0].id;
    const themeColorId = themeListStore.themes[0].themeColors[0].id;
    // console.log('%cthemeList:', 'color: #6DFF6A', themeListStore);
    return (
        <IdProvider themeId={themeId} themeColorId={themeColorId}>
            <Plugin />
        </IdProvider>
    );
};

export default render(Ui);
