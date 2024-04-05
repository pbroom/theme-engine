import { Plugin } from './app';
import { h } from 'preact';
import {
    MessageProvider,
    createMassageStore,
    initialization,
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

    const messageStore = useRef(createMassageStore()).current;
    const message = useStore(messageStore);

    const [messageCount, setMessageCount] = useState(0);

    const [initialThemeData, setInitialThemeData] = useState<
        null | ThemeData[]
    >(null);

    onmessage = async (event) => {
        const newMessage = await event.data.pluginMessage;
        console.log('ROOT UI RECEIVED:', newMessage);
        console.log('ROOT UI RECEIVED:', messageCount);
        message.setMessage(newMessage);
        setMessageCount((count) => count + 1);
    };

    const handlePluginDataMessage = async (message: any) => {
        const pluginData = await message.data;
        const pluginDataParsed: Array<ThemeData> = await JSON.parse(pluginData);
        console.log('%cpluginData:', 'color: #6DFF6A', pluginDataParsed);
        const themeData = pluginDataParsed ? pluginDataParsed : defaultThemes;
        setInitialThemeData(themeData);
    };

    useEffect(() => {
        console.log('MESSAGE:', message);
        if (message.type === 'pluginData') {
            if (message.data === null) {
                console.log('No plugin data');
                setIsInitialized(true);
                return;
            }
            console.log('handling: ', message.type);
            handlePluginDataMessage(message);
        }
    }, [message]);

    useEffect(() => {
        console.log('initialThemeData:', initialThemeData);
        if (initialThemeData) {
            setIsInitialized(true);
        }
    }, [initialThemeData]);

    if (isInitialized && initialThemeData !== null) {
        const themeListId = nanoid(12);
        const themeListStore = useRef(
            createThemeListStore({ id: themeListId, themes: initialThemeData }),
        ).current;
        if (!themeListStore) {
            throw new Error('Missing ThemeListContext.Provider in the tree');
        }
        const themeList = useStore(themeListStore);

        const themeId = themeList.themes[0].id;
        console.log('The FIRST themeId:', themeId);
        const themeColorId = themeList.themes[0].themeColors[0].id;

        return (
            <MessageProvider type={''} data={null}>
                <ThemeListProvider id={themeListId} themes={initialThemeData}>
                    <IdProvider themeId={themeId} themeColorId={themeColorId}>
                        <Plugin />
                    </IdProvider>
                </ThemeListProvider>
            </MessageProvider>
        );
    }
    return <div className="p-2">Loading...</div>;
};

export default render(Ui);
