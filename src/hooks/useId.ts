import { create } from 'zustand';
import { useThemeList } from './useThemeList';
import { subscribeWithSelector } from 'zustand/middleware';

const themeListStore = useThemeList.getState();

interface CurrentId {
    currentThemeId: string;
    currentThemeColorId: string;
    setCurrentThemeId: (themeId: string) => void;
    setCurrentThemeColorId: (themeColorId: string) => void;
}

export const useCurrentId = create<CurrentId>()(
    subscribeWithSelector((set) => ({
        currentThemeId: themeListStore.themes[0].id,
        currentThemeColorId: themeListStore.themes[0].themeColors[0].id,
        setCurrentThemeId: (themeId) =>
            set({
                currentThemeId: themeId,
                currentThemeColorId: themeListStore.themes.find(
                    (theme) => theme.id === themeId,
                )?.themeColors[0].id,
            }),
        setCurrentThemeColorId: (themeColorId) =>
            set({ currentThemeColorId: themeColorId }),
    })),
);
