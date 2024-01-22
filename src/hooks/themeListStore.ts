import z from 'zod';
import { create, StateCreator } from 'zustand';
import { nanoid } from 'nanoid';
import { ThemeDataSchema, type ThemeData, createTheme } from './themeStore';

export {
    createThemeList,
    ThemeListDataSchema,
    ThemeListActionsSchema,
    type ThemeListData,
    type ThemeListActions,
    useThemeList,
};

const defaultThemes: ThemeData[] = [createTheme()];

const createThemeList = (
    id: string = nanoid(12),
    themes: ThemeData[] = defaultThemes,
) => {
    return {
        id: id,
        themes: themes,
    };
};

const ThemeListDataSchema = z.object({
    id: z.string(),
    themes: z.array(ThemeDataSchema),
});

type ThemeListData = z.infer<typeof ThemeListDataSchema>;

const ThemeListActionsSchema = z.object({
    set: z.object({
        id: z.function().args(z.string(), z.void()),
        themes: z.function().args(z.array(ThemeDataSchema), z.void()),
    }),
});

type ThemeListActions = z.infer<typeof ThemeListActionsSchema>;

const themeListData: StateCreator<ThemeListData> = () => ({
    id: nanoid(12),
    themes: defaultThemes,
});

const themeListActions: StateCreator<ThemeListActions> = (set) => ({
    set: {
        id: (id) => set((state) => ({ ...state, id })),
        themes: (themes) => set((state) => ({ ...state, themes })),
    },
});

const useThemeList = create<ThemeListData & ThemeListActions>((set, ...a) => ({
    ...themeListData(set, ...a),
    ...themeListActions(set, ...a),
    theme: {
        add: (theme: ThemeData) =>
            set((state) => ({
                ...state,
                themes: [...state.themes, theme],
            })),
        duplicate: (id: string) =>
            set((state) => {
                const theme = state.themes.find((theme) => theme.id === id);
                return theme
                    ? { ...state, themes: [...state.themes, theme] }
                    : state;
            }),
        update: (id: string, theme: ThemeData) =>
            set((state) => ({
                ...state,
                themes: state.themes.map((t) => (t.id === id ? theme : t)),
            })),
        remove: (id: string) =>
            set((state) => ({
                ...state,
                themes: state.themes.filter((t) => t.id !== id),
            })),
    },
}));
