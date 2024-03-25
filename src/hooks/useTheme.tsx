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
    createAlias(nanoid(12), 'surface', 98, 6),
    createAlias(nanoid(12), 'onSurface', 10, 90),
    createAlias(nanoid(12), 'surfaceContainerLowest', 100, 4),
    createAlias(nanoid(12), 'surfaceContainerLow', 96, 10),
    createAlias(nanoid(12), 'surfaceContainer', 94, 12),
    createAlias(nanoid(12), 'surfaceContainerHigh', 92, 17),
    createAlias(nanoid(12), 'surfaceContainerHighest', 90, 22),
    createAlias(nanoid(12), 'surfaceDim', 87, 6),
    createAlias(nanoid(12), 'surfaceBright', 98, 24),
    createAlias(nanoid(12), 'inverseSurface', 20, 90),
    createAlias(nanoid(12), 'inverseOnSurface', 95, 20),
    createAlias(nanoid(12), 'srim', 0, 0),
    createAlias(nanoid(12), 'shadow', 0, 0),
];

const materialNeutralAliasGroup = {
    ...createAliasGroup(),
    name: 'Neutral',
    aliases: materialNeutralAliases,
};

const materialNeutralVariantAliases = [
    createAlias(nanoid(12), 'outline', 50, 60),
    createAlias(nanoid(12), 'outlineVariant', 80, 30),
    createAlias(nanoid(12), 'onSurfaceVariant', 30, 80),
];

const materialNeutralVariantAliasGroup = {
    ...createAliasGroup(),
    name: 'Neutral',
    aliases: materialNeutralVariantAliases,
};

const defaultThemeColors: ThemeColorData[] = [
    createThemeColor(sourceHex, 'primary', '', ''),
    createThemeColor(sourceHex, 'secondary', '', 'c/3'),
    createThemeColor(sourceHex, 'tertiary', 'h+60', 'c/2'),
    createThemeColor(
        sourceHex,
        'neutral',
        '',
        'c/12',
        defaultTones,
        materialNeutralAliasGroup,
    ),
    createThemeColor(
        sourceHex,
        'neutralVariant',
        '',
        'c/8',
        defaultTones,
        materialNeutralVariantAliasGroup,
    ),
    createThemeColor(sourceHex, 'error', '25', '89'),
];

const slate = '475569';
const gray = '4b5563';
const zinc = '52525b';
const neutral = 'a3a3a3';
const stone = '78716c';
const red = 'dc2626';
const orange = 'f97316';
const amber = 'f59e0b';
const yellow = 'fde047';
const lime = 'a3e635';
const green = '22c55e';
const emerald = '10b981';
const teal = '14b8a6';
const cyan = '22d3ee';
const sky = '38bdf8';
const blue = '2563eb';
const indigo = '4f46e5';
const violet = '7c3aed';
const purple = 'a855f7';
const fuchsia = 'd946ef';
const pink = 'ec4899';
const rose = 'f43f5e';

const tailwindTones = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95];

const tailwindAliases = [
    createAlias(nanoid(12), '50', 95, 95),
    createAlias(nanoid(12), '100', 90, 90),
    createAlias(nanoid(12), '200', 80, 80),
    createAlias(nanoid(12), '300', 70, 70),
    createAlias(nanoid(12), '400', 60, 60),
    createAlias(nanoid(12), '500', 50, 50),
    createAlias(nanoid(12), '600', 40, 40),
    createAlias(nanoid(12), '700', 30, 30),
    createAlias(nanoid(12), '800', 20, 20),
    createAlias(nanoid(12), '900', 10, 10),
    createAlias(nanoid(12), '950', 5, 5),
];

const tailwindAliasGroup = {
    ...createAliasGroup(),
    name: 'Tailwindy',
    aliases: tailwindAliases,
};

const defaultThemeColors2: ThemeColorData[] = [
    createThemeColor(slate, 'Slate', '', '', tailwindTones, tailwindAliasGroup),
    createThemeColor(gray, 'Gray', '', '', tailwindTones, tailwindAliasGroup),
    createThemeColor(zinc, 'Zinc', '', '', tailwindTones, tailwindAliasGroup),
    createThemeColor(
        neutral,
        'Neutral',
        '',
        '',
        tailwindTones,
        tailwindAliasGroup,
    ),
    createThemeColor(stone, 'Stone', '', '', tailwindTones, tailwindAliasGroup),
    createThemeColor(red, 'Red', '', '', tailwindTones, tailwindAliasGroup),
    createThemeColor(
        orange,
        'Orange',
        '',
        '',
        tailwindTones,
        tailwindAliasGroup,
    ),
    createThemeColor(amber, 'Amber', '', '', tailwindTones, tailwindAliasGroup),
    createThemeColor(
        yellow,
        'Yellow',
        '',
        '',
        tailwindTones,
        tailwindAliasGroup,
    ),
    createThemeColor(lime, 'Lime', '', '', tailwindTones, tailwindAliasGroup),
    createThemeColor(green, 'Green', '', '', tailwindTones, tailwindAliasGroup),
    createThemeColor(
        emerald,
        'Emerald',
        '',
        '',
        tailwindTones,
        tailwindAliasGroup,
    ),
    createThemeColor(teal, 'Teal', '', '', tailwindTones, tailwindAliasGroup),
    createThemeColor(cyan, 'Cyan', '', '', tailwindTones, tailwindAliasGroup),
    createThemeColor(sky, 'Sky', '', '', tailwindTones, tailwindAliasGroup),
    createThemeColor(blue, 'Blue', '', '', tailwindTones, tailwindAliasGroup),
    createThemeColor(
        indigo,
        'Indigo',
        '',
        '',
        tailwindTones,
        tailwindAliasGroup,
    ),
    createThemeColor(
        violet,
        'Violet',
        '',
        '',
        tailwindTones,
        tailwindAliasGroup,
    ),
    createThemeColor(
        purple,
        'Purple',
        '',
        '',
        tailwindTones,
        tailwindAliasGroup,
    ),
    createThemeColor(
        fuchsia,
        'Fuchsia',
        '',
        '',
        tailwindTones,
        tailwindAliasGroup,
    ),
    createThemeColor(pink, 'Pink', '', '', tailwindTones, tailwindAliasGroup),
    createThemeColor(rose, 'Rose', '', '', tailwindTones, tailwindAliasGroup),
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
