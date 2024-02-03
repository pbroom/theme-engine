import z from 'zod';
import { create, State, StateCreator, StoreMutatorIdentifier } from 'zustand';
import { nanoid } from 'nanoid';
import { customAlphabet } from 'nanoid';
import {
    ThemeDataSchema,
    type ThemeData,
    createTheme,
    defaultThemeColors2,
} from './useTheme';

export {
    createThemeList,
    ThemeListDataSchema,
    ThemeListActionsSchema,
    type ThemeListData,
    type ThemeListActions,
    useThemeList,
};

const defaultThemes: ThemeData[] = [
    createTheme(nanoid(12), 'banana'),
    createTheme(nanoid(12), 'Theme 2', defaultThemeColors2),
];

/**
 * Creates a theme list with the specified ID and themes.
 * @param id The ID of the theme list. Defaults to a randomly generated ID.
 * @param themes An array of ThemeData objects representing the themes in the list. Defaults to the defaultThemes array.
 * @returns An object representing the theme list, with an ID and an array of themes.
 */
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
        all: z.function().args(ThemeListDataSchema, z.void()),
        id: z.function().args(z.string(), z.void()),
        themes: z.function().args(z.array(ThemeDataSchema), z.void()),
    }),
    theme: z.object({
        add: z.function().args(ThemeDataSchema, z.void()),
        duplicate: z.function().args(z.string(), z.void()),
        update: z.function().args(z.string(), ThemeDataSchema, z.void()),
        remove: z.function().args(z.string(), z.void()),
    }),
    data: ThemeListDataSchema,
});

type ThemeListActions = z.infer<typeof ThemeListActionsSchema>;

const themeListData: StateCreator<ThemeListData> = () => ({
    id: nanoid(12),
    themes: defaultThemes,
});

/**
 * Creates a state creator for theme list actions.
 * @param set - The state setter function.
 * @returns An object containing theme list actions.
 */
const themeListActions: StateCreator<ThemeListActions> = (set) => ({
    set: {
        all: (themeListData) =>
            set((state) => ({ ...state, ...themeListData })),
        id: (id) => set((state) => ({ ...state, id })),
        themes: (themes) => set((state) => ({ ...state, themes })),
    },
    theme: {
        add: (theme) => set((state) => ({ ...state })),
        duplicate: (id) => set((state) => ({ ...state })),
        update: (id, theme) => set((state) => ({ ...state })),
        remove: (id) => set((state) => ({ ...state })),
    },
    data: { id: '', themes: [] },
});

/**
 * Creates a state object for managing a list of themes.
 * @param set - The state setter function provided by the state hook.
 * @param ...a - Additional arguments passed to the state creator.
 * @returns The state object with theme list data and actions.
 */
const themeList: StateCreator<ThemeListData & ThemeListActions> = (
    set,
    get,
    ...a
) => ({
    ...themeListData(set, get, ...a),
    ...themeListActions(set, get, ...a),
    data: {
        id: themeListData(set, get, ...a).id,
        themes: themeListData(set, get, ...a).themes,
    },
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
});

const useThemeList = create<ThemeListData & ThemeListActions>((set, ...a) => ({
    ...themeList(set, ...a),
}));
