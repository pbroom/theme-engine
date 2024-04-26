import z from 'zod';
import { create, StateCreator } from 'zustand';
import { nanoid } from 'nanoid';
import {
    createThemeColor,
    defaultTones,
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
    createAlias,
    AliasData,
} from './useAliasGroup';
import { subscribeWithSelector } from 'zustand/middleware';

export {
    createThemeColor,
    createTheme,
    defaultThemeColors,
    defaultThemeColors2,
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

const materialNeutralAliases = [
    createAlias(nanoid(12), 'surface', 98, 100, 6, 100),
    createAlias(nanoid(12), 'onSurface', 10, 100, 90, 100),
    createAlias(nanoid(12), 'surfaceContainerLowest', 100, 100, 4, 100),
    createAlias(nanoid(12), 'surfaceContainerLow', 96, 100, 10, 100),
    createAlias(nanoid(12), 'surfaceContainer', 94, 100, 12, 100),
    createAlias(nanoid(12), 'surfaceContainerHigh', 92, 100, 17, 100),
    createAlias(nanoid(12), 'surfaceContainerHighest', 90, 100, 22, 100),
    createAlias(nanoid(12), 'surfaceDim', 87, 100, 6, 100),
    createAlias(nanoid(12), 'surfaceBright', 98, 100, 24, 100),
    createAlias(nanoid(12), 'inverseSurface', 20, 100, 90, 100),
    createAlias(nanoid(12), 'inverseOnSurface', 95, 100, 20, 100),
    createAlias(nanoid(12), 'srim', 0, 100, 0, 100),
    createAlias(nanoid(12), 'shadow', 0, 100, 0, 100),
];

const materialNeutralAliasGroup = {
    ...createAliasGroup(),
    aliases: materialNeutralAliases,
};

const materialNeutralVariantAliases = [
    createAlias(nanoid(12), 'outline', 50, 100, 60, 100),
    createAlias(nanoid(12), 'outlineVariant', 80, 100, 30, 100),
    createAlias(nanoid(12), 'onSurfaceVariant', 30, 100, 80, 100),
];

const materialNeutralVariantAliasGroup = {
    ...createAliasGroup(),
    aliases: materialNeutralVariantAliases,
};

const defaultThemeColors: ThemeColorData[] = [
    createThemeColor(sourceHex, 'primary', '', ''),
    createThemeColor(
        sourceHex,
        'secondary',
        '',
        'c/3',
        defaultTones,
        createAliasGroup(nanoid(12), 'secondary'),
        true,
    ),
    createThemeColor(
        sourceHex,
        'tertiary',
        'h+60',
        'c/2',
        defaultTones,
        createAliasGroup(nanoid(12), 'tertiary'),
        true,
    ),
    createThemeColor(
        sourceHex,
        'neutral',
        '',
        'c/12',
        defaultTones,
        materialNeutralAliasGroup,
        true,
    ),
    createThemeColor(
        sourceHex,
        'neutralVariant',
        '',
        'c/8',
        defaultTones,
        materialNeutralVariantAliasGroup,
        true,
    ),
    createThemeColor(
        sourceHex,
        'error',
        '25',
        '89',
        defaultTones,
        createAliasGroup(nanoid(12), 'error'),
        true,
    ),
];

const tailwindColors = [
    { name: 'slate', color: '475569' },
    { name: 'gray', color: '4b5563' },
    { name: 'zinc', color: '52525b' },
    { name: 'neutral', color: 'a3a3a3' },
    { name: 'stone', color: '78716c' },
    { name: 'red', color: 'dc2626' },
    { name: 'orange', color: 'f97316' },
    { name: 'amber', color: 'f59e0b' },
    { name: 'yellow', color: 'fde047' },
    { name: 'lime', color: 'a3e635' },
    { name: 'green', color: '22c55e' },
    { name: 'emerald', color: '10b981' },
    { name: 'teal', color: '14b8a6' },
    { name: 'cyan', color: '22d3ee' },
    { name: 'sky', color: '38bdf8' },
    { name: 'blue', color: '2563eb' },
    { name: 'indigo', color: '4f46e5' },
    { name: 'violet', color: '7c3aed' },
    { name: 'purple', color: 'a855f7' },
    { name: 'fuchsia', color: 'd946ef' },
    { name: 'pink', color: 'ec4899' },
    { name: 'rose', color: 'f43f5e' },
];

const tailwindTones = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95];

const tailwindAliasTones = [
    { name: '50', value: 95 },
    { name: '100', value: 90 },
    { name: '200', value: 80 },
    { name: '300', value: 70 },
    { name: '400', value: 60 },
    { name: '500', value: 50 },
    { name: '600', value: 40 },
    { name: '700', value: 30 },
    { name: '800', value: 20 },
    { name: '900', value: 10 },
    { name: '950', value: 5 },
];

const tailwindAliases: AliasData[] = [
    createAlias(nanoid(12), '50', 95, 100, 95, 100),
    createAlias(nanoid(12), '100', 90, 100, 90, 100),
    createAlias(nanoid(12), '200', 80, 100, 80, 100),
    createAlias(nanoid(12), '300', 70, 100, 70, 100),
    createAlias(nanoid(12), '400', 60, 100, 60, 100),
    createAlias(nanoid(12), '500', 50, 100, 50, 100),
    createAlias(nanoid(12), '600', 40, 100, 40, 100),
    createAlias(nanoid(12), '700', 30, 100, 30, 100),
    createAlias(nanoid(12), '800', 20, 100, 20, 100),
    createAlias(nanoid(12), '900', 10, 100, 10, 100),
    createAlias(nanoid(12), '950', 5, 100, 5, 100),
];

const defaultThemeColors2: ThemeColorData[] = tailwindColors.map((color) =>
    createThemeColor(
        color.color,
        color.name,
        '',
        '',
        tailwindTones,
        createAliasGroup(
            nanoid(12),
            color.name,
            tailwindAliasTones.map((tone) =>
                createAlias(
                    nanoid(12),
                    `$-${tone.name}`,
                    tone.value,
                    100,
                    tone.value,
                    100,
                ),
            ),
        ),
    ),
);

const defaultAliasGroups: AliasGroupData[] = [];

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
    data: ThemeDataSchema,
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
    data: { id: '', name: '', themeColors: [], aliasGroups: [] },
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
>()(
    subscribeWithSelector((set, get, ...a) => ({
        ...themeData(set, get, ...a),
        ...themeActions(set, get, ...a),
        ...themeColorCrud(set, get, ...a),
        ...aliasGroupCrud(set, get, ...a),
        data: {
            id: themeData(set, get, ...a).id,
            name: themeData(set, get, ...a).name,
            themeColors: themeData(set, get, ...a).themeColors,
            aliasGroups: themeData(set, get, ...a).aliasGroups,
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
                    const themeColor = state.themeColors.find(
                        (c) => c.id === id,
                    );
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
                    const aliasGroup = state.aliasGroups.find(
                        (a) => a.id === id,
                    );
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
    })),
);
