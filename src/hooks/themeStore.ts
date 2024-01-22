import z from 'zod';
import { create, StateCreator } from 'zustand';
import { nanoid } from 'nanoid';
import {
    createThemeColor,
    ThemeColorData,
    ThemeColorDataSchema,
} from './themeColorStore';
import {
    AliasGroupDataSchema,
    aliasGroupData,
    aliasGroupActions,
    type AliasGroupData,
    type AliasGroupActions,
    createAliasGroup,
} from './aliasGroupStore';
import Theme from '../theme';

export {
    createThemeColor,
    createTheme,
    ThemeDataSchema,
    ThemeActionsSchema,
    type ThemeData,
    type ThemeActions,
    useTheme,
};

const defaultThemeColors: ThemeColorData[] = [createThemeColor()];
const defaultAliasGroups: AliasGroupData[] = [createAliasGroup()];

const createTheme = (
    id: string = nanoid(12),
    name: string = 'theme',
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
        id: z.function().args(z.string(), z.void()),
        name: z.function().args(z.string(), z.void()),
        themeColors: z.function().args(z.array(ThemeColorDataSchema), z.void()),
        aliasGroups: z.function().args(z.array(AliasGroupDataSchema), z.void()),
    }),
});

type ThemeActions = z.infer<typeof ThemeActionsSchema>;

const themeData: StateCreator<ThemeData> = () => ({
    id: nanoid(12),
    name: 'Theme',
    themeColors: [createThemeColor()],
    aliasGroups: [],
});

const themeActions: StateCreator<ThemeActions> = (set) => ({
    set: {
        id: (id) => set((state) => ({ ...state, id })),
        name: (name) => set((state) => ({ ...state, name })),
        themeColors: (themeColors) =>
            set((state) => ({ ...state, themeColors })),
        aliasGroups: (aliasGroups) =>
            set((state) => ({ ...state, aliasGroups })),
    },
});

const useTheme = create<
    ThemeData & ThemeActions & AliasGroupData & AliasGroupActions
>((set, ...a) => ({
    ...themeData(set, ...a),
    ...themeActions(set, ...a),
    ...aliasGroupData(set, ...a),
    ...aliasGroupActions(set, ...a),
    themeColor: {
        add: (themeColor: ThemeColorData = defaultThemeColor) =>
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
