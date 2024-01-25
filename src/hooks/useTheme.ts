import z from 'zod';
import { create, StateCreator } from 'zustand';
import { nanoid } from 'nanoid';
import {
    createThemeColor,
    ThemeColorData,
    ThemeColorDataSchema,
} from './useThemeColor';
import {
    AliasGroupDataSchema,
    aliasGroupData,
    aliasGroupActions,
    type AliasGroupData,
    type AliasGroupActions,
    createAliasGroup,
    AliasCrud,
} from './useAliasGroup';

export {
    createThemeColor,
    createTheme,
    defaultThemeColors,
    ThemeDataSchema,
    ThemeActionsSchema,
    type ThemeData,
    type ThemeActions,
    type ThemeColorData,
    type ThemeColorCrud,
    type AliasGroupCrud,
    type Theme,
    useTheme,
};

const sourceHex = '397456';

const defaultThemeColors: ThemeColorData[] = [
    createThemeColor(sourceHex, 'Primary'),
    createThemeColor('ffff00', 'Secondary', '', 'c/4'),
    createThemeColor('00ff00', 'Tertiary', 'h+60', 'c*0.6'),
    createThemeColor('00ffff', 'neutral', '', 'c/12'),
    createThemeColor('ff00ff', 'neutralVariant', '', 'c/8'),
    createThemeColor('ff0000', 'error', '25', '89'),
];
const defaultAliasGroups: AliasGroupData[] = [createAliasGroup()];

/**
 * Creates a theme object with the specified parameters.
 * @param id - The ID of the theme. Defaults to a generated ID.
 * @param name - The name of the theme. Defaults to 'Theme'.
 * @param themeColors - An array of theme color data. Defaults to defaultThemeColors.
 * @param aliasGroups - An array of alias group data. Defaults to defaultAliasGroups.
 * @returns The created theme object.
 */
const createTheme = (
    id: string = nanoid(12),
    name: string = 'Theme',
    themeColors: ThemeColorData[] = defaultThemeColors,
    aliasGroups: AliasGroupData[] = defaultAliasGroups,
): ThemeData => {
    return {
        id: id,
        name: name,
        themeColors: themeColors,
        aliasGroups: aliasGroups,
    };
};

const defaultThemeColor: ThemeColorData = createThemeColor();

const ThemeDataSchema = z.object({
    id: z.string(),
    name: z.string(),
    themeColors: z.array(ThemeColorDataSchema),
    aliasGroups: z.array(AliasGroupDataSchema),
});

type ThemeData = z.infer<typeof ThemeDataSchema>;

const ThemeActionsSchema = z.object({
    set: z.object({
        all: z.function().args(ThemeDataSchema, z.void()),
        id: z.function().args(z.string(), z.void()),
        name: z.function().args(z.string(), z.void()),
        themeColors: z.function().args(z.array(ThemeColorDataSchema), z.void()),
        aliasGroups: z.function().args(z.array(AliasGroupDataSchema), z.void()),
    }),
    data: z.function(),
});

type ThemeActions = z.infer<typeof ThemeActionsSchema>;

const themeData: StateCreator<ThemeData> = () => ({
    id: nanoid(12),
    name: 'Theme',
    themeColors: [createThemeColor()],
    aliasGroups: [],
});

const themeActions: StateCreator<ThemeActions> = (set, get) => ({
    set: {
        all: (themeData) => set((state) => ({ ...state, ...themeData })),
        id: (id) => set((state) => ({ ...state, id })),
        name: (name) => set((state) => ({ ...state, name })),
        themeColors: (themeColors) =>
            set((state) => ({ ...state, themeColors })),
        aliasGroups: (aliasGroups) =>
            set((state) => ({ ...state, aliasGroups })),
    },
    data: () => {},
});

const ThemeColorCrudSchema = z.object({
    themeColor: z.object({
        add: z.function().args(ThemeColorDataSchema, z.void()),
        duplicate: z.function().args(z.string(), z.void()),
        update: z.function().args(z.string(), ThemeColorDataSchema, z.void()),
        remove: z.function().args(z.string(), z.void()),
    }),
});

type ThemeColorCrud = z.infer<typeof ThemeColorCrudSchema>;

const themeColorCrud: StateCreator<ThemeColorCrud> = (set) => ({
    themeColor: {
        add: () => set((state) => ({ ...state })),
        duplicate: (id: string) => set((state) => ({ ...state })),
        update: () => set((state) => ({ ...state })),
        remove: (id: string) => set((state) => ({ ...state })),
    },
});

const AliasGroupCrudSchema = z.object({
    aliasGroup: z.object({
        add: z.function().args(z.void()),
        duplicate: z.function().args(z.string(), z.void()),
        update: z.function().args(z.string(), AliasGroupDataSchema, z.void()),
        remove: z.function().args(z.string(), z.void()),
    }),
});

type AliasGroupCrud = z.infer<typeof AliasGroupCrudSchema>;

const aliasGroupCrud: StateCreator<AliasGroupCrud> = (set) => ({
    aliasGroup: {
        add: () => set((state) => ({ ...state })),
        duplicate: () => set((state) => ({ ...state })),
        update: () => set((state) => ({ ...state })),
        remove: () => set((state) => ({ ...state })),
    },
});

type Theme = ThemeData & ThemeActions & ThemeColorCrud & AliasGroupCrud;

/**
 * Creates a state object for managing a theme.
 * @param set - The state setter function provided by the state hook.
 * @param ...a - Additional arguments passed to the state creator.
 * @returns The state object with theme data and actions.
 */
const useTheme = create<
    ThemeData & ThemeActions & ThemeColorCrud & AliasGroupCrud
>((set, get, ...a) => ({
    ...themeData(set, get, ...a),
    ...themeActions(set, get, ...a),
    ...themeColorCrud(set, get, ...a),
    ...aliasGroupCrud(set, get, ...a),
    data: (): ThemeData => {
        const state = get();
        const { id, name, themeColors, aliasGroups } = state;
        const themeData: ThemeData = { id, name, themeColors, aliasGroups };
        return themeData;
    },
    themeColor: {
        add: (
            themeColor: ThemeColorData = {
                ...defaultThemeColor,
                id: nanoid(12),
            },
        ) =>
            set((state) => ({
                ...state,
                themeColors: [...state.themeColors, themeColor],
            })),
        duplicate: (id: string) =>
            set((state) => {
                const themeColor = state.themeColors.find((c) => c.id === id);
                if (themeColor) {
                    const newThemeColor = { ...themeColor, id: nanoid(12) };
                    return {
                        ...state,
                        themeColors: [...state.themeColors, newThemeColor],
                    };
                }
                return state;
            }),
        update: (id: string, themeColor: ThemeColorData) =>
            set((state) => ({
                ...state,
                themeColors: state.themeColors.map((c) =>
                    c.id === id ? themeColor : c,
                ),
            })),
        remove: (id: string) =>
            set((state) => ({
                ...state,
                themeColors: state.themeColors.filter((c) => c.id !== id),
            })),
    },
    aliasGroup: {
        add: () =>
            set((state) => ({
                ...state,
                aliasGroups: [...state.aliasGroups, createAliasGroup()],
            })),
        duplicate: (id: string) =>
            set((state) => {
                const aliasGroup = state.aliasGroups.find((a) => a.id === id);
                if (aliasGroup) {
                    const newAliasGroup = { ...aliasGroup, id: nanoid(12) };
                    return {
                        ...state,
                        aliasGroups: [...state.aliasGroups, newAliasGroup],
                    };
                }
                return state;
            }),
        update: (id: string, aliasGroup: AliasGroupData) =>
            set((state) => ({
                ...state,
                aliasGroups: state.aliasGroups.map((a) =>
                    a.id === id ? aliasGroup : a,
                ),
            })),
        remove: (id: string) =>
            set((state) => ({
                ...state,
                aliasGroups: state.aliasGroups.filter((a) => a.id !== id),
            })),
    },
}));
