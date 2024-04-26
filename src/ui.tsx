import { Plugin } from './app';
import { h } from 'preact';
import {
    MessageProvider,
    createMassageStore,
    initialization,
    useMessageContext,
    useMessageStore,
} from './hooks/useMessageProvider';
import { IdProvider } from './hooks/useId';
import {
    ThemeListData,
    ThemeListProvider,
    createThemeListStore,
    defaultThemes,
} from './hooks/useThemeList';
import { render } from '@create-figma-plugin/ui';
import { useRef, useState } from 'preact/hooks';
import { useStore } from 'zustand';
import { nanoid } from 'nanoid';
import { ThemeData } from './hooks/useTheme';
import { useEffect } from 'react';

export const Ui = () => {
    const isInitialized = initialization((state) => state.isInitialized);
    const setIsInitialized = initialization((state) => state.setIsInitialized);

    const message = useMessageStore();

    const [initialThemeData, setInitialThemeData] = useState<
        null | ThemeData[]
    >(null);

    onmessage = async (event) => {
        const newMessage = await event.data.pluginMessage;
        // console.log('ROOT UI RECEIVED:', newMessage);
        message.setMessage(newMessage);
        // console.log('message:', message);
    };

    const handlePluginDataMessage = async (message: any) => {
        const pluginData = await message.data;
        const pluginDataParsed: Array<ThemeData> | null = pluginData
            ? await JSON.parse(pluginData)
            : null;
        // console.log('%cpluginData:', 'color: #6DFF6A', pluginDataParsed);
        const themeData = pluginDataParsed ? pluginDataParsed : defaultThemes;
        setInitialThemeData(themeData);
    };

    useEffect(() => {
        if (message.type === 'pluginData') {
            if (message.data === null) {
                // console.log('No plugin data');
                setIsInitialized(true);
                return;
            }
            handlePluginDataMessage(message);
        }
        // console.log('message in UI:', message);
    }, [message]);

    useEffect(() => {
        if (initialThemeData) {
            setIsInitialized(true);
        }
    }, [initialThemeData]);

    if (isInitialized && initialThemeData !== null) {
        const themeListId = nanoid(12);
        const themeList = { id: themeListId, themes: initialThemeData };

        const themeId = themeList.themes[0].id;
        const themeColorId = themeList.themes[0].themeColors[0].id;

        return (
            <ThemeListProvider id={themeListId} themes={initialThemeData}>
                <IdProvider themeId={themeId} themeColorId={themeColorId}>
                    <Plugin />
                </IdProvider>
            </ThemeListProvider>
        );
    }
    return <div className="p-2">Loading...</div>;
};

export default render(Ui);
