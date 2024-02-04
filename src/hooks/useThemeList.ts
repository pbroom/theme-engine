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
import { immer } from 'zustand/middleware/immer';
import {
    createThemeColor,
    ThemeColorData,
    ThemeColorDataSchema,
} from './useThemeColor';
import {
    calculateEndColor,
    ColorData,
    ColorDataSchema,
    createColorFrom,
} from './useColor';
import {
    AliasData,
    AliasDataSchema,
    AliasGroupData,
    AliasGroupDataSchema,
    createAlias,
    createAliasGroup,
} from './useAliasGroup';
import { findIndex } from 'lodash';

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

const AliasActionsSchema = z.object({
    add: z.function().args(AliasDataSchema, z.void()),
    update: z.function().args(z.string(), AliasDataSchema, z.void()),
    remove: z.function().args(z.string(), z.void()),
    set: z.object({
        all: z.function().args(AliasDataSchema, z.void()),
        id: z.function().args(z.string(), z.void()),
        name: z.function().args(z.string(), z.void()),
        lightModeTone: z.function().args(z.number(), z.void()),
        darkModeTone: z.function().args(z.number(), z.void()),
    }),
    data: AliasDataSchema,
});

const AliasGroupActionsSchema = z.object({
    add: z.function().args(AliasGroupDataSchema, z.void()),
    duplicate: z.function().args(z.string(), z.void()),
    update: z.function().args(z.string(), AliasGroupDataSchema, z.void()),
    remove: z.function().args(z.string(), z.void()),
    set: z.object({
        all: z.function().args(AliasGroupDataSchema, z.void()),
        id: z.function().args(z.string(), z.void()),
        name: z.function().args(z.string(), z.void()),
        aliases: z.function().args(z.array(z.string()), z.void()),
        themeColorIds: z.function().args(z.array(z.string()), z.void()),
    }),
    alias: z.function().args(z.string(), z.void()),
    data: AliasGroupDataSchema,
});

const ThemeColorActionsSchema = z.object({
    add: z.function().args(ThemeColorDataSchema, z.void()),
    duplicate: z.function().args(z.string(), z.void()),
    update: z.function().args(z.string(), ThemeColorDataSchema, z.void()),
    remove: z.function().args(z.string(), z.void()),
    set: z.object({
        all: z.function().args(ThemeColorDataSchema, z.void()),
        id: z.function().args(z.string(), z.void()),
        name: z.function().args(z.string(), z.void()),
        sourceHex: z.function().args(z.string(), z.void()),
        sourceColor: z.function().args(ColorDataSchema, z.void()),
        endColor: z.function().args(ColorDataSchema, z.void()),
        tones: z.function().args(z.array(z.number()), z.void()),
        hueCalc: z.function().args(z.string(), z.void()),
        chromaCalc: z.function().args(z.string(), z.void()),
        aliasGroup: z.function().args(AliasGroupDataSchema, z.void()),
    }),
    aliasGroup: z.function().args(z.string(), z.void()),
    data: ThemeColorDataSchema,
});

const ThemeActionsSchema = z.object({
    add: z.function().args(ThemeDataSchema, z.void()),
    duplicate: z.function().args(z.string(), z.void()),
    update: z.function().args(z.string(), ThemeDataSchema, z.void()),
    remove: z.function().args(z.string(), z.void()),
    set: z.object({
        all: z.function().args(ThemeDataSchema, z.void()),
        id: z.function().args(z.string(), z.void()),
        name: z.function().args(z.string(), z.void()),
        themeColors: z.function().args(z.array(ThemeColorDataSchema), z.void()),
        aliasGroups: z.function().args(z.array(AliasGroupDataSchema), z.void()),
    }),

    themeColor: z.function().args(z.string(), z.void()),
    aliasGroup: z.function().args(z.string(), z.void()),
    data: ThemeDataSchema,
});

const ThemeListActionsSchema = z.object({
    set: z.object({
        all: z.function().args(ThemeListDataSchema, z.void()),
        id: z.function().args(z.string(), z.void()),
        themes: z.function().args(z.array(ThemeDataSchema), z.void()),
    }),
    theme: z.function().args(z.string(), z.void()),
    data: ThemeListDataSchema,
});

type AliasActions = z.infer<typeof AliasActionsSchema>;
type AliasGroupActions = z.infer<typeof AliasGroupActionsSchema>;
type ThemeColorActions = z.infer<typeof ThemeColorActionsSchema>;
type ThemeActions = z.infer<typeof ThemeActionsSchema>;
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
    theme: (id: string) => ({
        add: (theme: ThemeData = createTheme()) =>
            set((state) => ({ ...state })),
        duplicate: (id: string) => set((state) => ({ ...state })),
        update: (id: string, theme: ThemeData) =>
            set((state) => ({ ...state })),
        remove: (id: string) => set((state) => ({ ...state })),
        set: {
            all: (themeData: ThemeData) => set((state) => ({ ...state })),
            id: (id: string) => set((state) => ({ ...state })),
            name: (name: string) => set((state) => ({ ...state })),
            themeColors: (themeColors: ThemeColorData[]) =>
                set((state) => ({ ...state })),
            aliasGroups: (aliasGroups: AliasGroupData[]) =>
                set((state) => ({ ...state })),
        },
        themeColor: (id: string) => ({
            add: (themeColor: ThemeColorData = createThemeColor()) =>
                set((state) => ({ ...state })),
            duplicate: (id: string) => set((state) => ({ ...state })),
            update: (id: string, themeColor: ThemeColorData) =>
                set((state) => ({ ...state })),
            remove: (id: string) => set((state) => ({ ...state })),
            set: {
                all: (themeColor: ThemeColorData) =>
                    set((state) => ({ ...state })),
                id: (id: string) => set((state) => ({ ...state })),
                name: (name: string) => set((state) => ({ ...state })),
                sourceHex: (sourceHex: string) =>
                    set((state) => ({ ...state })),
                sourceColor: (sourceColor: ColorData) =>
                    set((state) => ({ ...state })),
                endColor: (endColor: ColorData) =>
                    set((state) => ({ ...state })),
                tones: (tones: number[]) => set((state) => ({ ...state })),
                hueCalc: (hueCalc: string) => set((state) => ({ ...state })),
                chromaCalc: (chromaCalc: string) =>
                    set((state) => ({ ...state })),
                aliasGroup: (aliasGroup: AliasGroupData) =>
                    set((state) => ({ ...state })),
            },
            aliasGroup: (id: string) => ({
                update: (id: string, aliasGroup: AliasGroupData) =>
                    set((state) => ({ ...state })),
                set: {
                    all: (aliasGroup: AliasGroupData) =>
                        set((state) => ({ ...state })),
                    id: (id: string) => set((state) => ({ ...state })),
                    name: (name: string) => set((state) => ({ ...state })),
                    aliases: (aliases: string[]) =>
                        set((state) => ({ ...state })),
                    themeColorIds: (themeColorIds: string[]) =>
                        set((state) => ({ ...state })),
                },
                alias: (id: string) => ({
                    add: (alias: AliasData) => set((state) => ({ ...state })),
                    update: (id: string, alias: AliasData) =>
                        set((state) => ({ ...state })),
                    remove: (id: string) => set((state) => ({ ...state })),
                    set: {
                        all: (alias: AliasData) =>
                            set((state) => ({ ...state })),
                        id: (id: string) => set((state) => ({ ...state })),
                        name: (name: string) => set((state) => ({ ...state })),
                        lightModeTone: (tone: number) =>
                            set((state) => ({ ...state })),
                        darkModeTone: (tone: number) =>
                            set((state) => ({ ...state })),
                    },
                    data: {
                        id: '',
                        name: '',
                        lightModeTone: 0,
                        darkModeTone: 0,
                    },
                }),
                data: { id: '', name: '', aliases: [] },
            }),
            data: {
                id: '',
                name: '',
                sourceHex: '',
                sourceColor: {
                    hct: [0, 0, 0],
                    rgb: [0, 0, 0],
                    hex: '',
                },
                endColor: {
                    hct: [0, 0, 0],
                    rgb: [0, 0, 0],
                    hex: '',
                },
                tones: [],
                hueCalc: '',
                chromaCalc: '',
                aliasGroup: {
                    id: '',
                    name: '',
                    aliases: [],
                },
            },
        }),
        aliasGroup: (id: string) => ({
            add: (aliasGroup: AliasGroupData = createAliasGroup()) =>
                set((state) => ({ ...state })),
            duplicate: (id: string) => set((state) => ({ ...state })),
            update: (id: string, aliasGroup: AliasGroupData) =>
                set((state) => ({ ...state })),
            remove: (id: string) => set((state) => ({ ...state })),
            set: {
                all: (aliasGroup: AliasGroupData) =>
                    set((state) => ({ ...state })),
                id: (id: string) => set((state) => ({ ...state })),
                name: (name: string) => set((state) => ({ ...state })),
                aliases: (aliases: string[]) => set((state) => ({ ...state })),
                themeColorIds: (themeColorIds: string[]) =>
                    set((state) => ({ ...state })),
            },
            alias: (id: string) => ({
                add: (alias: AliasData) => set((state) => ({ ...state })),
                update: (id: string, alias: AliasData) =>
                    set((state) => ({ ...state })),
                remove: (id: string) => set((state) => ({ ...state })),
                set: {
                    all: (alias: AliasData) => set((state) => ({ ...state })),
                    id: (id: string) => set((state) => ({ ...state })),
                    name: (name: string) => set((state) => ({ ...state })),
                    lightModeTone: (tone: number) =>
                        set((state) => ({ ...state })),
                    darkModeTone: (tone: number) =>
                        set((state) => ({ ...state })),
                },
                data: {
                    id: '',
                    name: '',
                    lightModeTone: 0,
                    darkModeTone: 0,
                },
            }),
            data: { id: '', name: '', aliases: [] },
        }),
        data: {
            id: '',
            name: '',
            themeColors: [],
            aliasGroups: [],
        },
    }),
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
    theme: (themeId: string = 'ADD') => ({
        add: (theme: ThemeData = createTheme()) => {
            if (themeId === 'ADD') {
                set((state) => ({
                    ...state,
                    themes: [...state.themes, theme],
                }));
            }
        },
        duplicate: (id: string = themeId) =>
            set((state) => ({
                ...state,
                themes: [
                    ...state.themes,
                    {
                        ...state.themes[
                            findIndex(state.themes, (theme) => theme.id === id)
                        ],
                        id: nanoid(12),
                    },
                ],
            })),
        update: (id: string = themeId, theme: ThemeData) =>
            set((state) => ({
                ...state,
                themes: state.themes.map((existingTheme) =>
                    existingTheme.id === id ? theme : existingTheme,
                ),
            })),
        remove: (id: string = themeId) =>
            set((state) => ({
                ...state,
                themes: [...state.themes.filter((theme) => theme.id !== id)],
            })),
        set: {
            all: (theme: ThemeData) =>
                set((state) => ({
                    ...state,
                    themes: state.themes.map((existingTheme) => {
                        if (existingTheme.id === themeId) {
                            return theme;
                        }
                        return existingTheme;
                    }),
                })),
            id: (id: string) =>
                set((state) => ({
                    ...state,
                    themes: state.themes.map((theme) => {
                        if (theme.id === themeId) {
                            return { ...theme, id: id };
                        }
                        return theme;
                    }),
                })),
            name: (name: string) =>
                set((state) => ({
                    ...state,
                    themes: state.themes.map((theme) => {
                        if (theme.id === themeId) {
                            return { ...theme, name: name };
                        }
                        return theme;
                    }),
                })),
            themeColors: (themeColors: ThemeColorData[]) =>
                set((state) => ({
                    ...state,
                    themes: state.themes.map((theme) => {
                        if (theme.id === themeId) {
                            return { ...theme, themeColors: themeColors };
                        }
                        return theme;
                    }),
                })),
            aliasGroups: (aliasGroups: AliasGroupData[]) =>
                set((state) => ({
                    ...state,
                    themes: state.themes.map((theme) => {
                        if (theme.id === themeId) {
                            return { ...theme, aliasGroups: aliasGroups };
                        }
                        return theme;
                    }),
                })),
        },
        themeColor: (themeColorId: string = 'ADD') => ({
            add: (themeColor: ThemeColorData = createThemeColor()) => {
                if (themeColorId === 'ADD') {
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    themeColors: [
                                        ...theme.themeColors,
                                        themeColor,
                                    ],
                                };
                            }
                            return theme;
                        }),
                    }));
                }
            },
            duplicate: (id: string = themeColorId) =>
                set((state) => ({
                    ...state,
                    themes: state.themes.map((theme) => {
                        if (theme.id === themeId) {
                            const themeColor = theme.themeColors.find(
                                (themeColor) => themeColor.id === id,
                            );
                            if (themeColor) {
                                return {
                                    ...theme,
                                    themeColors: [
                                        ...theme.themeColors,
                                        { ...themeColor, id: nanoid(12) },
                                    ],
                                };
                            }
                        }
                        return theme;
                    }),
                })),
            update: (id: string = themeColorId, themeColor: ThemeColorData) =>
                set((state) => ({
                    ...state,
                    themes: state.themes.map((theme) => {
                        if (theme.id === themeId) {
                            return {
                                ...theme,
                                themeColors: theme.themeColors.map(
                                    (existingThemeColor) =>
                                        existingThemeColor.id === id
                                            ? themeColor
                                            : existingThemeColor,
                                ),
                            };
                        }
                        return theme;
                    }),
                })),
            remove: (id: string = themeColorId) =>
                set((state) => ({
                    ...state,
                    themes: state.themes.map((theme) => {
                        if (theme.id === themeId) {
                            return {
                                ...theme,
                                themeColors: theme.themeColors.filter(
                                    (themeColor) => themeColor.id !== id,
                                ),
                            };
                        }
                        return theme;
                    }),
                })),
            set: {
                all: (themeColor: ThemeColorData) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    themeColors: theme.themeColors.map(
                                        (existingThemeColor) =>
                                            existingThemeColor.id ===
                                            themeColorId
                                                ? themeColor
                                                : existingThemeColor,
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
                id: (id: string) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    themeColors: theme.themeColors.map(
                                        (themeColor) => {
                                            if (
                                                themeColor.id === themeColorId
                                            ) {
                                                return {
                                                    ...themeColor,
                                                    id: id,
                                                };
                                            }
                                            return themeColor;
                                        },
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
                name: (name: string) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    themeColors: theme.themeColors.map(
                                        (themeColor) => {
                                            if (
                                                themeColor.id === themeColorId
                                            ) {
                                                return {
                                                    ...themeColor,
                                                    name: name,
                                                };
                                            }
                                            return themeColor;
                                        },
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
                sourceHex: (sourceHex: string) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    themeColors: theme.themeColors.map(
                                        (themeColor) => {
                                            if (
                                                themeColor.id === themeColorId
                                            ) {
                                                return {
                                                    ...themeColor,
                                                    sourceHex: sourceHex,
                                                    sourceColor: {
                                                        ...themeColor.sourceColor,
                                                        ...createColorFrom().hex(
                                                            sourceHex,
                                                        ),
                                                    },
                                                    endColor: {
                                                        ...themeColor.endColor,
                                                        ...calculateEndColor(
                                                            themeColor
                                                                .sourceColor
                                                                .hct,
                                                            themeColor.hueCalc,
                                                            themeColor.chromaCalc,
                                                        ),
                                                    },
                                                };
                                            }
                                            return themeColor;
                                        },
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
                sourceColor: (sourceColor: ColorData) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    themeColors: theme.themeColors.map(
                                        (themeColor) => {
                                            if (
                                                themeColor.id === themeColorId
                                            ) {
                                                return {
                                                    ...themeColor,
                                                    sourceColor: sourceColor,
                                                    endColor: {
                                                        ...themeColor.endColor,
                                                        ...calculateEndColor(
                                                            sourceColor.hct,
                                                            themeColor.hueCalc,
                                                            themeColor.chromaCalc,
                                                        ),
                                                    },
                                                };
                                            }
                                            return themeColor;
                                        },
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
                endColor: (endColor: ColorData) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    themeColors: theme.themeColors.map(
                                        (themeColor) => {
                                            if (
                                                themeColor.id === themeColorId
                                            ) {
                                                return {
                                                    ...themeColor,
                                                    endColor: endColor,
                                                };
                                            }
                                            return themeColor;
                                        },
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
                tones: (tones: number[]) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    themeColors: theme.themeColors.map(
                                        (themeColor) => {
                                            if (
                                                themeColor.id === themeColorId
                                            ) {
                                                return {
                                                    ...themeColor,
                                                    tones: tones,
                                                };
                                            }
                                            return themeColor;
                                        },
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
                hueCalc: (hueCalc: string) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    themeColors: theme.themeColors.map(
                                        (themeColor) => {
                                            if (
                                                themeColor.id === themeColorId
                                            ) {
                                                return {
                                                    ...themeColor,
                                                    hueCalc: hueCalc,
                                                    endColor: {
                                                        ...themeColor.endColor,
                                                        ...calculateEndColor(
                                                            themeColor
                                                                .sourceColor
                                                                .hct,
                                                            hueCalc,
                                                            themeColor.chromaCalc,
                                                        ),
                                                    },
                                                };
                                            }
                                            return themeColor;
                                        },
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
                chromaCalc: (chromaCalc: string) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    themeColors: theme.themeColors.map(
                                        (themeColor) => {
                                            if (
                                                themeColor.id === themeColorId
                                            ) {
                                                return {
                                                    ...themeColor,
                                                    chromaCalc: chromaCalc,
                                                    endColor: {
                                                        ...themeColor.endColor,
                                                        ...calculateEndColor(
                                                            themeColor
                                                                .sourceColor
                                                                .hct,
                                                            themeColor.hueCalc,
                                                            chromaCalc,
                                                        ),
                                                    },
                                                };
                                            }
                                            return themeColor;
                                        },
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
                aliasGroup: (aliasGroup: AliasGroupData) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    themeColors: theme.themeColors.map(
                                        (themeColor) => {
                                            if (
                                                themeColor.id === themeColorId
                                            ) {
                                                return {
                                                    ...themeColor,
                                                    aliasGroup: aliasGroup,
                                                };
                                            }
                                            return themeColor;
                                        },
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
            },
            aliasGroup: (aliasGroupId: string = '') => ({
                update: (
                    id: string = aliasGroupId,
                    aliasGroup: AliasGroupData,
                ) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    themeColors: theme.themeColors.map(
                                        (themeColor) => {
                                            if (
                                                themeColor.id === themeColorId
                                            ) {
                                                return {
                                                    ...themeColor,
                                                    aliasGroup: aliasGroup,
                                                };
                                            }
                                            return themeColor;
                                        },
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
                set: {
                    all: (aliasGroup: AliasGroupData) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((theme) => {
                                if (theme.id === themeId) {
                                    return {
                                        ...theme,
                                        themeColors: theme.themeColors.map(
                                            (themeColor) => {
                                                if (
                                                    themeColor.id ===
                                                    themeColorId
                                                ) {
                                                    return {
                                                        ...themeColor,
                                                        aliasGroup: aliasGroup,
                                                    };
                                                }
                                                return themeColor;
                                            },
                                        ),
                                    };
                                }
                                return theme;
                            }),
                        })),
                    id: (id: string) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((theme) => {
                                if (theme.id === themeId) {
                                    return {
                                        ...theme,
                                        themeColors: theme.themeColors.map(
                                            (themeColor) => {
                                                if (
                                                    themeColor.id ===
                                                    themeColorId
                                                ) {
                                                    return {
                                                        ...themeColor,
                                                        aliasGroup: {
                                                            ...themeColor.aliasGroup,
                                                            id: id,
                                                        },
                                                    };
                                                }
                                                return themeColor;
                                            },
                                        ),
                                    };
                                }
                                return theme;
                            }),
                        })),
                    name: (name: string) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((theme) => {
                                if (theme.id === themeId) {
                                    return {
                                        ...theme,
                                        themeColors: theme.themeColors.map(
                                            (themeColor) => {
                                                if (
                                                    themeColor.id ===
                                                    themeColorId
                                                ) {
                                                    return {
                                                        ...themeColor,
                                                        aliasGroup: {
                                                            ...themeColor.aliasGroup,
                                                            name: name,
                                                        },
                                                    };
                                                }
                                                return themeColor;
                                            },
                                        ),
                                    };
                                }
                                return theme;
                            }),
                        })),
                    aliases: (aliases: AliasData[]) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((theme) => {
                                if (theme.id === themeId) {
                                    return {
                                        ...theme,
                                        themeColors: theme.themeColors.map(
                                            (themeColor) => {
                                                if (
                                                    themeColor.id ===
                                                    themeColorId
                                                ) {
                                                    return {
                                                        ...themeColor,
                                                        aliasGroup: {
                                                            ...themeColor.aliasGroup,
                                                            aliases: aliases,
                                                        },
                                                    };
                                                }
                                                return themeColor;
                                            },
                                        ),
                                    };
                                }
                                return theme;
                            }),
                        })),
                    themeColorIds: (themeColorIds: string[]) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((theme) => {
                                if (theme.id === themeId) {
                                    return {
                                        ...theme,
                                        themeColors: theme.themeColors.map(
                                            (themeColor) => {
                                                if (
                                                    themeColor.id ===
                                                    themeColorId
                                                ) {
                                                    return {
                                                        ...themeColor,
                                                        aliasGroup: {
                                                            ...themeColor.aliasGroup,
                                                            themeColorIds:
                                                                themeColorIds,
                                                        },
                                                    };
                                                }
                                                return themeColor;
                                            },
                                        ),
                                    };
                                }
                                return theme;
                            }),
                        })),
                },
                alias: (aliasId: string = 'ADD') => ({
                    add: (alias: AliasData = createAlias()) => {
                        if (aliasId === 'ADD') {
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((theme) => {
                                    if (theme.id === themeId) {
                                        return {
                                            ...theme,
                                            themeColors: theme.themeColors.map(
                                                (themeColor) => {
                                                    if (
                                                        themeColor.id ===
                                                        themeColorId
                                                    ) {
                                                        return {
                                                            ...themeColor,
                                                            aliasGroup: {
                                                                ...themeColor.aliasGroup,
                                                                aliases: [
                                                                    ...themeColor
                                                                        .aliasGroup
                                                                        .aliases,
                                                                    alias,
                                                                ],
                                                            },
                                                        };
                                                    }
                                                    return themeColor;
                                                },
                                            ),
                                        };
                                    }
                                    return theme;
                                }),
                            }));
                        }
                    },
                    update: (id: string = aliasId, alias: AliasData) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((theme) => {
                                if (theme.id === themeId) {
                                    return {
                                        ...theme,
                                        themeColors: theme.themeColors.map(
                                            (themeColor) => {
                                                if (
                                                    themeColor.id ===
                                                    themeColorId
                                                ) {
                                                    return {
                                                        ...themeColor,
                                                        aliasGroup: {
                                                            ...themeColor.aliasGroup,
                                                            aliases:
                                                                themeColor.aliasGroup.aliases.map(
                                                                    (
                                                                        existingAlias,
                                                                    ) =>
                                                                        existingAlias.id ===
                                                                        id
                                                                            ? alias
                                                                            : existingAlias,
                                                                ),
                                                        },
                                                    };
                                                }
                                                return themeColor;
                                            },
                                        ),
                                    };
                                }
                                return theme;
                            }),
                        })),
                    remove: (id: string = aliasId) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((theme) => {
                                if (theme.id === themeId) {
                                    return {
                                        ...theme,
                                        themeColors: theme.themeColors.map(
                                            (themeColor) => {
                                                if (
                                                    themeColor.id ===
                                                    themeColorId
                                                ) {
                                                    return {
                                                        ...themeColor,
                                                        aliasGroup: {
                                                            ...themeColor.aliasGroup,
                                                            aliases:
                                                                themeColor.aliasGroup.aliases.filter(
                                                                    (alias) =>
                                                                        alias.id !==
                                                                        id,
                                                                ),
                                                        },
                                                    };
                                                }
                                                return themeColor;
                                            },
                                        ),
                                    };
                                }
                                return theme;
                            }),
                        })),
                    set: {
                        id: (id: string = aliasId) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((theme) => {
                                    if (theme.id === themeId) {
                                        return {
                                            ...theme,
                                            themeColors: theme.themeColors.map(
                                                (themeColor) => {
                                                    if (
                                                        themeColor.id ===
                                                        themeColorId
                                                    ) {
                                                        return {
                                                            ...themeColor,
                                                            aliasGroup: {
                                                                ...themeColor.aliasGroup,
                                                                aliases:
                                                                    themeColor.aliasGroup.aliases.map(
                                                                        (
                                                                            alias,
                                                                        ) =>
                                                                            alias.id ===
                                                                            aliasId
                                                                                ? {
                                                                                      ...alias,
                                                                                      id,
                                                                                  }
                                                                                : alias,
                                                                    ),
                                                            },
                                                        };
                                                    }
                                                    return themeColor;
                                                },
                                            ),
                                        };
                                    }
                                    return theme;
                                }),
                            })),
                        name: (name: string) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((theme) => {
                                    if (theme.id === themeId) {
                                        return {
                                            ...theme,
                                            themeColors: theme.themeColors.map(
                                                (themeColor) => {
                                                    if (
                                                        themeColor.id ===
                                                        themeColorId
                                                    ) {
                                                        return {
                                                            ...themeColor,
                                                            aliasGroup: {
                                                                ...themeColor.aliasGroup,
                                                                aliases:
                                                                    themeColor.aliasGroup.aliases.map(
                                                                        (
                                                                            alias,
                                                                        ) =>
                                                                            alias.id ===
                                                                            aliasId
                                                                                ? {
                                                                                      ...alias,
                                                                                      name,
                                                                                  }
                                                                                : alias,
                                                                    ),
                                                            },
                                                        };
                                                    }
                                                    return themeColor;
                                                },
                                            ),
                                        };
                                    }
                                    return theme;
                                }),
                            })),
                        lightModeTone: (tone: number) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((theme) => {
                                    if (theme.id === themeId) {
                                        return {
                                            ...theme,
                                            themeColors: theme.themeColors.map(
                                                (themeColor) => {
                                                    if (
                                                        themeColor.id ===
                                                        themeColorId
                                                    ) {
                                                        return {
                                                            ...themeColor,
                                                            aliasGroup: {
                                                                ...themeColor.aliasGroup,
                                                                aliases:
                                                                    themeColor.aliasGroup.aliases.map(
                                                                        (
                                                                            alias,
                                                                        ) =>
                                                                            alias.id ===
                                                                            aliasId
                                                                                ? {
                                                                                      ...alias,
                                                                                      lightModeTone:
                                                                                          tone,
                                                                                  }
                                                                                : alias,
                                                                    ),
                                                            },
                                                        };
                                                    }
                                                    return themeColor;
                                                },
                                            ),
                                        };
                                    }
                                    return theme;
                                }),
                            })),
                        darkModeTone: (tone: number) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((theme) => {
                                    if (theme.id === themeId) {
                                        return {
                                            ...theme,
                                            themeColors: theme.themeColors.map(
                                                (themeColor) => {
                                                    if (
                                                        themeColor.id ===
                                                        themeColorId
                                                    ) {
                                                        return {
                                                            ...themeColor,
                                                            aliasGroup: {
                                                                ...themeColor.aliasGroup,
                                                                aliases:
                                                                    themeColor.aliasGroup.aliases.map(
                                                                        (
                                                                            alias,
                                                                        ) =>
                                                                            alias.id ===
                                                                            aliasId
                                                                                ? {
                                                                                      ...alias,
                                                                                      darkModeTone:
                                                                                          tone,
                                                                                  }
                                                                                : alias,
                                                                    ),
                                                            },
                                                        };
                                                    }
                                                    return themeColor;
                                                },
                                            ),
                                        };
                                    }
                                    return theme;
                                }),
                            })),
                    },
                    data: {
                        id: themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].themeColors[
                            findIndex(
                                themeListData(set, get, ...a).themes[
                                    findIndex(
                                        themeListData(set, get, ...a).themes,
                                        (theme) => theme.id === themeId,
                                    )
                                ].themeColors,
                                (themeColor) => themeColor.id === themeColorId,
                            )
                        ].aliasGroup.aliases[
                            findIndex(
                                themeListData(set, get, ...a).themes[
                                    findIndex(
                                        themeListData(set, get, ...a).themes,
                                        (theme) => theme.id === themeId,
                                    )
                                ].themeColors[
                                    findIndex(
                                        themeListData(set, get, ...a).themes[
                                            findIndex(
                                                themeListData(set, get, ...a)
                                                    .themes,
                                                (theme) => theme.id === themeId,
                                            )
                                        ].themeColors,
                                        (themeColor) =>
                                            themeColor.id === themeColorId,
                                    )
                                ].aliasGroup.aliases,
                                (alias) => alias.id === aliasId,
                            )
                        ].id,
                        name: themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].themeColors[
                            findIndex(
                                themeListData(set, get, ...a).themes[
                                    findIndex(
                                        themeListData(set, get, ...a).themes,
                                        (theme) => theme.id === themeId,
                                    )
                                ].themeColors,
                                (themeColor) => themeColor.id === themeColorId,
                            )
                        ].aliasGroup.aliases[
                            findIndex(
                                themeListData(set, get, ...a).themes[
                                    findIndex(
                                        themeListData(set, get, ...a).themes,
                                        (theme) => theme.id === themeId,
                                    )
                                ].themeColors[
                                    findIndex(
                                        themeListData(set, get, ...a).themes[
                                            findIndex(
                                                themeListData(set, get, ...a)
                                                    .themes,
                                                (theme) => theme.id === themeId,
                                            )
                                        ].themeColors,
                                        (themeColor) =>
                                            themeColor.id === themeColorId,
                                    )
                                ].aliasGroup.aliases,
                                (alias) => alias.id === aliasId,
                            )
                        ].name,
                        lightModeTone: themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].themeColors[
                            findIndex(
                                themeListData(set, get, ...a).themes[
                                    findIndex(
                                        themeListData(set, get, ...a).themes,
                                        (theme) => theme.id === themeId,
                                    )
                                ].themeColors,
                                (themeColor) => themeColor.id === themeColorId,
                            )
                        ].aliasGroup.aliases[
                            findIndex(
                                themeListData(set, get, ...a).themes[
                                    findIndex(
                                        themeListData(set, get, ...a).themes,
                                        (theme) => theme.id === themeId,
                                    )
                                ].themeColors[
                                    findIndex(
                                        themeListData(set, get, ...a).themes[
                                            findIndex(
                                                themeListData(set, get, ...a)
                                                    .themes,
                                                (theme) => theme.id === themeId,
                                            )
                                        ].themeColors,
                                        (themeColor) =>
                                            themeColor.id === themeColorId,
                                    )
                                ].aliasGroup.aliases,
                                (alias) => alias.id === aliasId,
                            )
                        ].lightModeTone,
                        darkModeTone: themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].themeColors[
                            findIndex(
                                themeListData(set, get, ...a).themes[
                                    findIndex(
                                        themeListData(set, get, ...a).themes,
                                        (theme) => theme.id === themeId,
                                    )
                                ].themeColors,
                                (themeColor) => themeColor.id === themeColorId,
                            )
                        ].aliasGroup.aliases[
                            findIndex(
                                themeListData(set, get, ...a).themes[
                                    findIndex(
                                        themeListData(set, get, ...a).themes,
                                        (theme) => theme.id === themeId,
                                    )
                                ].themeColors[
                                    findIndex(
                                        themeListData(set, get, ...a).themes[
                                            findIndex(
                                                themeListData(set, get, ...a)
                                                    .themes,
                                                (theme) => theme.id === themeId,
                                            )
                                        ].themeColors,
                                        (themeColor) =>
                                            themeColor.id === themeColorId,
                                    )
                                ].aliasGroup.aliases,
                                (alias) => alias.id === aliasId,
                            )
                        ].darkModeTone,
                    },
                }),
                data: {
                    id: themeListData(set, get, ...a).themes[
                        findIndex(
                            themeListData(set, get, ...a).themes,
                            (theme) => theme.id === themeId,
                        )
                    ].themeColors[
                        findIndex(
                            themeListData(set, get, ...a).themes[
                                findIndex(
                                    themeListData(set, get, ...a).themes,
                                    (theme) => theme.id === themeId,
                                )
                            ].themeColors,
                            (themeColor) => themeColor.id === themeColorId,
                        )
                    ].aliasGroup.id,
                    name: themeListData(set, get, ...a).themes[
                        findIndex(
                            themeListData(set, get, ...a).themes,
                            (theme) => theme.id === themeId,
                        )
                    ].themeColors[
                        findIndex(
                            themeListData(set, get, ...a).themes[
                                findIndex(
                                    themeListData(set, get, ...a).themes,
                                    (theme) => theme.id === themeId,
                                )
                            ].themeColors,
                            (themeColor) => themeColor.id === themeColorId,
                        )
                    ].aliasGroup.name,
                    aliases: themeListData(set, get, ...a).themes[
                        findIndex(
                            themeListData(set, get, ...a).themes,
                            (theme) => theme.id === themeId,
                        )
                    ].themeColors[
                        findIndex(
                            themeListData(set, get, ...a).themes[
                                findIndex(
                                    themeListData(set, get, ...a).themes,
                                    (theme) => theme.id === themeId,
                                )
                            ].themeColors,
                            (themeColor) => themeColor.id === themeColorId,
                        )
                    ].aliasGroup.aliases,
                    themeColorIds: themeListData(set, get, ...a).themes[
                        findIndex(
                            themeListData(set, get, ...a).themes,
                            (theme) => theme.id === themeId,
                        )
                    ].themeColors[
                        findIndex(
                            themeListData(set, get, ...a).themes[
                                findIndex(
                                    themeListData(set, get, ...a).themes,
                                    (theme) => theme.id === themeId,
                                )
                            ].themeColors,
                            (themeColor) => themeColor.id === themeColorId,
                        )
                    ].aliasGroup.themeColorIds,
                },
            }),
            data: {
                id: themeListData(set, get, ...a).themes[
                    findIndex(
                        themeListData(set, get, ...a).themes,
                        (theme) => theme.id === themeId,
                    )
                ].themeColors[
                    findIndex(
                        themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].themeColors,
                        (themeColor) => themeColor.id === themeColorId,
                    )
                ].id,
                name: themeListData(set, get, ...a).themes[
                    findIndex(
                        themeListData(set, get, ...a).themes,
                        (theme) => theme.id === themeId,
                    )
                ].themeColors[
                    findIndex(
                        themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].themeColors,
                        (themeColor) => themeColor.id === themeColorId,
                    )
                ].name,
                sourceHex: themeListData(set, get, ...a).themes[
                    findIndex(
                        themeListData(set, get, ...a).themes,
                        (theme) => theme.id === themeId,
                    )
                ].themeColors[
                    findIndex(
                        themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].themeColors,
                        (themeColor) => themeColor.id === themeColorId,
                    )
                ].sourceHex,
                sourceColor: themeListData(set, get, ...a).themes[
                    findIndex(
                        themeListData(set, get, ...a).themes,
                        (theme) => theme.id === themeId,
                    )
                ].themeColors[
                    findIndex(
                        themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].themeColors,
                        (themeColor) => themeColor.id === themeColorId,
                    )
                ].sourceColor,
                endColor: themeListData(set, get, ...a).themes[
                    findIndex(
                        themeListData(set, get, ...a).themes,
                        (theme) => theme.id === themeId,
                    )
                ].themeColors[
                    findIndex(
                        themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].themeColors,
                        (themeColor) => themeColor.id === themeColorId,
                    )
                ].endColor,
                tones: themeListData(set, get, ...a).themes[
                    findIndex(
                        themeListData(set, get, ...a).themes,
                        (theme) => theme.id === themeId,
                    )
                ].themeColors[
                    findIndex(
                        themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].themeColors,
                        (themeColor) => themeColor.id === themeColorId,
                    )
                ].tones,
                hueCalc: themeListData(set, get, ...a).themes[
                    findIndex(
                        themeListData(set, get, ...a).themes,
                        (theme) => theme.id === themeId,
                    )
                ].themeColors[
                    findIndex(
                        themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].themeColors,
                        (themeColor) => themeColor.id === themeColorId,
                    )
                ].hueCalc,
                chromaCalc: themeListData(set, get, ...a).themes[
                    findIndex(
                        themeListData(set, get, ...a).themes,
                        (theme) => theme.id === themeId,
                    )
                ].themeColors[
                    findIndex(
                        themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].themeColors,
                        (themeColor) => themeColor.id === themeColorId,
                    )
                ].chromaCalc,
                aliasGroup: themeListData(set, get, ...a).themes[
                    findIndex(
                        themeListData(set, get, ...a).themes,
                        (theme) => theme.id === themeId,
                    )
                ].themeColors[
                    findIndex(
                        themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].themeColors,
                        (themeColor) => themeColor.id === themeColorId,
                    )
                ].aliasGroup,
            },
        }),
        aliasGroup: (aliasGroupId: string = 'ADD') => ({
            add: (aliasGroup: AliasGroupData = createAliasGroup()) => {
                if (aliasGroupId === 'ADD') {
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    aliasGroups: [
                                        ...theme.aliasGroups,
                                        aliasGroup,
                                    ],
                                };
                            }
                            return theme;
                        }),
                    }));
                }
            },
            duplicate: (id: string = aliasGroupId) =>
                set((state) => ({
                    ...state,
                    themes: state.themes.map((theme) => {
                        if (theme.id === themeId) {
                            const aliasGroup = theme.aliasGroups.find(
                                (aliasGroup) => aliasGroup.id === id,
                            );
                            if (aliasGroup) {
                                return {
                                    ...theme,
                                    aliasGroups: [
                                        ...theme.aliasGroups,
                                        { ...aliasGroup, id: nanoid(12) },
                                    ],
                                };
                            }
                        }
                        return theme;
                    }),
                })),
            update: (id: string = aliasGroupId, aliasGroup: AliasGroupData) =>
                set((state) => ({
                    ...state,
                    themes: state.themes.map((theme) => {
                        if (theme.id === themeId) {
                            return {
                                ...theme,
                                aliasGroups: theme.aliasGroups.map(
                                    (existingAliasGroup) =>
                                        existingAliasGroup.id === id
                                            ? aliasGroup
                                            : existingAliasGroup,
                                ),
                            };
                        }
                        return theme;
                    }),
                })),
            remove: (id: string = aliasGroupId) =>
                set((state) => ({
                    ...state,
                    themes: state.themes.map((theme) => {
                        if (theme.id === themeId) {
                            return {
                                ...theme,
                                aliasGroups: [
                                    ...theme.aliasGroups.filter(
                                        (aliasGroup) => aliasGroup.id !== id,
                                    ),
                                ],
                            };
                        }
                        return theme;
                    }),
                })),
            set: {
                all: (aliasGroup: AliasGroupData) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    aliasGroups: theme.aliasGroups.map(
                                        (existingAliasGroup) =>
                                            existingAliasGroup.id ===
                                            aliasGroupId
                                                ? aliasGroup
                                                : existingAliasGroup,
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
                id: (id: string) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    aliasGroups: theme.aliasGroups.map(
                                        (aliasGroup) => {
                                            if (
                                                aliasGroup.id === aliasGroupId
                                            ) {
                                                return {
                                                    ...aliasGroup,
                                                    id: id,
                                                };
                                            }
                                            return aliasGroup;
                                        },
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
                name: (name: string) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    aliasGroups: theme.aliasGroups.map(
                                        (aliasGroup) => {
                                            if (
                                                aliasGroup.id === aliasGroupId
                                            ) {
                                                return {
                                                    ...aliasGroup,
                                                    name: name,
                                                };
                                            }
                                            return aliasGroup;
                                        },
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
                aliases: (aliases: AliasData[]) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    aliasGroups: theme.aliasGroups.map(
                                        (aliasGroup) => {
                                            if (
                                                aliasGroup.id === aliasGroupId
                                            ) {
                                                return {
                                                    ...aliasGroup,
                                                    aliases,
                                                };
                                            }
                                            return aliasGroup;
                                        },
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
                themeColorIds: (themeColorIds: string[]) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    aliasGroups: theme.aliasGroups.map(
                                        (aliasGroup) => {
                                            if (
                                                aliasGroup.id === aliasGroupId
                                            ) {
                                                return {
                                                    ...aliasGroup,
                                                    themeColorIds,
                                                };
                                            }
                                            return aliasGroup;
                                        },
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
            },
            alias: (aliasId: string = 'ADD') => ({
                add: (alias: AliasData = createAlias()) => {
                    if (aliasId === 'ADD') {
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((theme) => {
                                if (theme.id === themeId) {
                                    return {
                                        ...theme,
                                        aliasGroups: theme.aliasGroups.map(
                                            (aliasGroup) => {
                                                if (
                                                    aliasGroup.id ===
                                                    aliasGroupId
                                                ) {
                                                    return {
                                                        ...aliasGroup,
                                                        aliases: [
                                                            ...aliasGroup.aliases,
                                                            alias,
                                                        ],
                                                    };
                                                }
                                                return aliasGroup;
                                            },
                                        ),
                                    };
                                }
                                return theme;
                            }),
                        }));
                    }
                },
                update: (id: string = aliasId, alias: AliasData) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    aliasGroups: theme.aliasGroups.map(
                                        (aliasGroup) => {
                                            if (
                                                aliasGroup.id === aliasGroupId
                                            ) {
                                                return {
                                                    ...aliasGroup,
                                                    aliases:
                                                        aliasGroup.aliases.map(
                                                            (existingAlias) =>
                                                                existingAlias.id ===
                                                                id
                                                                    ? alias
                                                                    : existingAlias,
                                                        ),
                                                };
                                            }
                                            return aliasGroup;
                                        },
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
                remove: (id: string = aliasId) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((theme) => {
                            if (theme.id === themeId) {
                                return {
                                    ...theme,
                                    aliasGroups: theme.aliasGroups.map(
                                        (aliasGroup) => {
                                            if (
                                                aliasGroup.id === aliasGroupId
                                            ) {
                                                return {
                                                    ...aliasGroup,
                                                    aliases:
                                                        aliasGroup.aliases.filter(
                                                            (alias) =>
                                                                alias.id !== id,
                                                        ),
                                                };
                                            }
                                            return aliasGroup;
                                        },
                                    ),
                                };
                            }
                            return theme;
                        }),
                    })),
                set: {
                    id: (id: string = aliasId) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((theme) => {
                                if (theme.id === themeId) {
                                    return {
                                        ...theme,
                                        aliasGroups: theme.aliasGroups.map(
                                            (aliasGroup) => {
                                                if (
                                                    aliasGroup.id ===
                                                    aliasGroupId
                                                ) {
                                                    return {
                                                        ...aliasGroup,
                                                        aliases:
                                                            aliasGroup.aliases.map(
                                                                (alias) =>
                                                                    alias.id ===
                                                                    aliasId
                                                                        ? {
                                                                              ...alias,
                                                                              id,
                                                                          }
                                                                        : alias,
                                                            ),
                                                    };
                                                }
                                                return aliasGroup;
                                            },
                                        ),
                                    };
                                }
                                return theme;
                            }),
                        })),
                    name: (name: string) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((theme) => {
                                if (theme.id === themeId) {
                                    return {
                                        ...theme,
                                        aliasGroups: theme.aliasGroups.map(
                                            (aliasGroup) => {
                                                if (
                                                    aliasGroup.id ===
                                                    aliasGroupId
                                                ) {
                                                    return {
                                                        ...aliasGroup,
                                                        aliases:
                                                            aliasGroup.aliases.map(
                                                                (alias) =>
                                                                    alias.id ===
                                                                    aliasId
                                                                        ? {
                                                                              ...alias,
                                                                              name,
                                                                          }
                                                                        : alias,
                                                            ),
                                                    };
                                                }
                                                return aliasGroup;
                                            },
                                        ),
                                    };
                                }
                                return theme;
                            }),
                        })),
                    lightModeTone: (tone: number) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((theme) => {
                                if (theme.id === themeId) {
                                    return {
                                        ...theme,
                                        aliasGroups: theme.aliasGroups.map(
                                            (aliasGroup) => {
                                                if (
                                                    aliasGroup.id ===
                                                    aliasGroupId
                                                ) {
                                                    return {
                                                        ...aliasGroup,
                                                        aliases:
                                                            aliasGroup.aliases.map(
                                                                (alias) =>
                                                                    alias.id ===
                                                                    aliasId
                                                                        ? {
                                                                              ...alias,
                                                                              lightModeTone:
                                                                                  tone,
                                                                          }
                                                                        : alias,
                                                            ),
                                                    };
                                                }
                                                return aliasGroup;
                                            },
                                        ),
                                    };
                                }
                                return theme;
                            }),
                        })),
                    darkModeTone: (tone: number) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((theme) => {
                                if (theme.id === themeId) {
                                    return {
                                        ...theme,
                                        aliasGroups: theme.aliasGroups.map(
                                            (aliasGroup) => {
                                                if (
                                                    aliasGroup.id ===
                                                    aliasGroupId
                                                ) {
                                                    return {
                                                        ...aliasGroup,
                                                        aliases:
                                                            aliasGroup.aliases.map(
                                                                (alias) =>
                                                                    alias.id ===
                                                                    aliasId
                                                                        ? {
                                                                              ...alias,
                                                                              darkModeTone:
                                                                                  tone,
                                                                          }
                                                                        : alias,
                                                            ),
                                                    };
                                                }
                                                return aliasGroup;
                                            },
                                        ),
                                    };
                                }
                                return theme;
                            }),
                        })),
                },
                data: {
                    id: themeListData(set, get, ...a).themes[
                        findIndex(
                            themeListData(set, get, ...a).themes,
                            (theme) => theme.id === themeId,
                        )
                    ].aliasGroups[
                        findIndex(
                            themeListData(set, get, ...a).themes[
                                findIndex(
                                    themeListData(set, get, ...a).themes,
                                    (theme) => theme.id === themeId,
                                )
                            ].aliasGroups,
                            (aliasGroup) => aliasGroup.id === aliasGroupId,
                        )
                    ].aliases[
                        findIndex(
                            themeListData(set, get, ...a).themes[
                                findIndex(
                                    themeListData(set, get, ...a).themes,
                                    (theme) => theme.id === themeId,
                                )
                            ].aliasGroups[
                                findIndex(
                                    themeListData(set, get, ...a).themes[
                                        findIndex(
                                            themeListData(set, get, ...a)
                                                .themes,
                                            (theme) => theme.id === themeId,
                                        )
                                    ].aliasGroups,
                                    (aliasGroup) =>
                                        aliasGroup.id === aliasGroupId,
                                )
                            ].aliases,
                            (alias) => alias.id === aliasId,
                        )
                    ].id,
                    name: themeListData(set, get, ...a).themes[
                        findIndex(
                            themeListData(set, get, ...a).themes,
                            (theme) => theme.id === themeId,
                        )
                    ].aliasGroups[
                        findIndex(
                            themeListData(set, get, ...a).themes[
                                findIndex(
                                    themeListData(set, get, ...a).themes,
                                    (theme) => theme.id === themeId,
                                )
                            ].aliasGroups,
                            (aliasGroup) => aliasGroup.id === aliasGroupId,
                        )
                    ].aliases[
                        findIndex(
                            themeListData(set, get, ...a).themes[
                                findIndex(
                                    themeListData(set, get, ...a).themes,
                                    (theme) => theme.id === themeId,
                                )
                            ].aliasGroups[
                                findIndex(
                                    themeListData(set, get, ...a).themes[
                                        findIndex(
                                            themeListData(set, get, ...a)
                                                .themes,
                                            (theme) => theme.id === themeId,
                                        )
                                    ].aliasGroups,
                                    (aliasGroup) =>
                                        aliasGroup.id === aliasGroupId,
                                )
                            ].aliases,
                            (alias) => alias.id === aliasId,
                        )
                    ].name,
                    lightModeTone: themeListData(set, get, ...a).themes[
                        findIndex(
                            themeListData(set, get, ...a).themes,
                            (theme) => theme.id === themeId,
                        )
                    ].aliasGroups[
                        findIndex(
                            themeListData(set, get, ...a).themes[
                                findIndex(
                                    themeListData(set, get, ...a).themes,
                                    (theme) => theme.id === themeId,
                                )
                            ].aliasGroups,
                            (aliasGroup) => aliasGroup.id === aliasGroupId,
                        )
                    ].aliases[
                        findIndex(
                            themeListData(set, get, ...a).themes[
                                findIndex(
                                    themeListData(set, get, ...a).themes,
                                    (theme) => theme.id === themeId,
                                )
                            ].aliasGroups[
                                findIndex(
                                    themeListData(set, get, ...a).themes[
                                        findIndex(
                                            themeListData(set, get, ...a)
                                                .themes,
                                            (theme) => theme.id === themeId,
                                        )
                                    ].aliasGroups,
                                    (aliasGroup) =>
                                        aliasGroup.id === aliasGroupId,
                                )
                            ].aliases,
                            (alias) => alias.id === aliasId,
                        )
                    ].lightModeTone,
                    darkModeTone: themeListData(set, get, ...a).themes[
                        findIndex(
                            themeListData(set, get, ...a).themes,
                            (theme) => theme.id === themeId,
                        )
                    ].aliasGroups[
                        findIndex(
                            themeListData(set, get, ...a).themes[
                                findIndex(
                                    themeListData(set, get, ...a).themes,
                                    (theme) => theme.id === themeId,
                                )
                            ].aliasGroups,
                            (aliasGroup) => aliasGroup.id === aliasGroupId,
                        )
                    ].aliases[
                        findIndex(
                            themeListData(set, get, ...a).themes[
                                findIndex(
                                    themeListData(set, get, ...a).themes,
                                    (theme) => theme.id === themeId,
                                )
                            ].aliasGroups[
                                findIndex(
                                    themeListData(set, get, ...a).themes[
                                        findIndex(
                                            themeListData(set, get, ...a)
                                                .themes,
                                            (theme) => theme.id === themeId,
                                        )
                                    ].aliasGroups,
                                    (aliasGroup) =>
                                        aliasGroup.id === aliasGroupId,
                                )
                            ].aliases,
                            (alias) => alias.id === aliasId,
                        )
                    ].darkModeTone,
                },
            }),
            data: {
                id: themeListData(set, get, ...a).themes[
                    findIndex(
                        themeListData(set, get, ...a).themes,
                        (theme) => theme.id === themeId,
                    )
                ].aliasGroups[
                    findIndex(
                        themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].aliasGroups,
                        (aliasGroup) => aliasGroup.id === aliasGroupId,
                    )
                ].id,
                name: themeListData(set, get, ...a).themes[
                    findIndex(
                        themeListData(set, get, ...a).themes,
                        (theme) => theme.id === themeId,
                    )
                ].aliasGroups[
                    findIndex(
                        themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].aliasGroups,
                        (aliasGroup) => aliasGroup.id === aliasGroupId,
                    )
                ].name,
                aliases: themeListData(set, get, ...a).themes[
                    findIndex(
                        themeListData(set, get, ...a).themes,
                        (theme) => theme.id === themeId,
                    )
                ].aliasGroups[
                    findIndex(
                        themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].aliasGroups,
                        (aliasGroup) => aliasGroup.id === aliasGroupId,
                    )
                ].aliases,
                themeColorIds: themeListData(set, get, ...a).themes[
                    findIndex(
                        themeListData(set, get, ...a).themes,
                        (theme) => theme.id === themeId,
                    )
                ].aliasGroups[
                    findIndex(
                        themeListData(set, get, ...a).themes[
                            findIndex(
                                themeListData(set, get, ...a).themes,
                                (theme) => theme.id === themeId,
                            )
                        ].aliasGroups,
                        (aliasGroup) => aliasGroup.id === aliasGroupId,
                    )
                ].themeColorIds,
            },
        }),
        data: {
            id: themeListData(set, get, ...a).themes[
                findIndex(
                    themeListData(set, get, ...a).themes,
                    (theme) => theme.id === themeId,
                )
            ].id,
            name: themeListData(set, get, ...a).themes[
                findIndex(
                    themeListData(set, get, ...a).themes,
                    (theme) => theme.id === themeId,
                )
            ].name,
            themeColors: themeListData(set, get, ...a).themes[
                findIndex(
                    themeListData(set, get, ...a).themes,
                    (theme) => theme.id === themeId,
                )
            ].themeColors,
            aliasGroups: themeListData(set, get, ...a).themes[
                findIndex(
                    themeListData(set, get, ...a).themes,
                    (theme) => theme.id === themeId,
                )
            ].aliasGroups,
        },
    }),
});

const useThemeList = create<ThemeListData & ThemeListActions>((set, ...a) => ({
    ...themeList(set, ...a),
}));
