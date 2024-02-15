import { Plugin } from './app';
import { h } from 'preact';
import { IdProvider } from './hooks/useId';
import { useThemeList } from './hooks/useThemeList';
import { render } from '@create-figma-plugin/ui';

export const Ui = () => {
    const themeListStore = useThemeList;
    const themeId = themeListStore().themes[0].id;
    const themeColorId = themeListStore().themes[0].themeColors[0].id;
    return (
        <IdProvider themeId={themeId} themeColorId={themeColorId}>
            <Plugin />
        </IdProvider>
    );
};

export default render(Ui);
