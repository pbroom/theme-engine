import z from 'zod';
import { StateCreator, createStore, useStore } from 'zustand';
import { nanoid } from 'nanoid';
import {
    ThemeDataSchema,
    type ThemeData,
    createTheme,
    defaultThemeColors2,
} from './useTheme';
import { createThemeColor, ThemeColorData } from './useThemeColor';
import { calculateEndColor, ColorData, createColorFrom } from './useColor';
import {
    AliasData,
    AliasGroupData,
    createAlias,
    createAliasGroup,
} from './useAliasGroup';
import { createContext, h } from 'preact';
import { useContext, useRef } from 'preact/hooks';

export {
    createThemeList,
    ThemeListDataSchema,
    type ThemeListData,
    type ThemeListActions,
    createThemeListStore,
};

export const defaultThemes: ThemeData[] = [
    createTheme(nanoid(12), 'Material 3'),
    createTheme(nanoid(12), 'Tailwindy', defaultThemeColors2),
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

type SetAliasProps = {
    all: (aliasData: AliasData) => void;
    id: (id: string) => void;
    name: (name: string) => void;
    lightModeTone: (lightModeTone: number) => void;
    darkModeTone: (darkModeTone: number) => void;
};

type AliasActions = {
    update: (aliasData: AliasData) => void;
    remove: () => void;
    setProps: SetAliasProps;
    data: AliasData;
};

type SetAliasGroupProps = {
    all: (aliasGroupData: AliasGroupData) => void;
    id: (id: string) => void;
    name: (name: string) => void;
    aliases: (aliases: AliasData[]) => void;
    themeColorIds: (themeColorIds: string[]) => void;
};

type AliasGroupActions = {
    add: {
        alias: (alias: AliasData) => void;
    };
    duplicate: () => void;
    update: (aliasGroupData: AliasGroupData) => void;
    remove: () => void;
    setProps: SetAliasGroupProps;
    alias: (id: string) => AliasActions;
    data: AliasGroupData;
};

type SetThemeColorProps = {
    all: (themeColorData: ThemeColorData) => void;
    id: (id: string) => void;
    name: (name: string) => void;
    sourceHex: (sourceHex: string) => void;
    sourceColor: (sourceColor: ColorData) => void;
    endColor: (endColor: ColorData) => void;
    tones: (tones: number[]) => void;
    hueCalc: (hueCalc: string) => void;
    chromaCalc: (chromaCalc: string) => void;
    aliasGroup: (aliasGroup: AliasGroupData) => void;
    child: (child: boolean) => void;
};

type ThemeColorActions = {
    add: {
        alias: (alias: AliasData) => void;
    };
    duplicate: () => void;
    update: (themeColorData: ThemeColorData) => void;
    remove: () => void;
    setProps: SetThemeColorProps;
    alias: (id: string) => AliasActions;
    data: ThemeColorData;
};

type SetThemeProps = {
    all: (themeData: ThemeData) => void;
    id: (id: string) => void;
    name: (name: string) => void;
    themeColors: (themeColors: ThemeColorData[]) => void;
    aliasGroups: (aliasGroups: AliasGroupData[]) => void;
};

type ThemeActions = {
    add: {
        themeColor: (themeColor: ThemeColorData) => void;
        aliasGroup: (aliasGroup: AliasGroupData) => void;
    };
    duplicate: () => void;
    update: (themeData: ThemeData) => void;
    remove: () => void;
    setProps: SetThemeProps;
    themeColor: (id: string | number) => ThemeColorActions;
    aliasGroup: (id: string) => AliasGroupActions;
    data: ThemeData;
};

type SetThemeListProps = {
    all: (themeListData: ThemeListData) => void;
    id: (id: string) => void;
    themes: (themes: ThemeData[]) => void;
};

type ThemeListActions = {
    add: {
        theme: (theme: ThemeData) => void;
    };
    setProps: SetThemeListProps;
    theme: (id: string | number) => ThemeActions;
    data: ThemeListData;
};

const themeListId = nanoid(12);

const themeListData: StateCreator<ThemeListData> = () => ({
    // id: themeListId,
    id: 'THEME_LIST_ID',
    themes: defaultThemes,
});

/**
 * Creates a state creator for theme list actions.
 * @param set - The state setter function.
 * @returns An object containing theme list actions.
 */
const themeListActions: StateCreator<ThemeListActions> = (set, get) => ({
    setProps: {
        all: (themeListData) =>
            set((state) => ({ ...state, ...themeListData })),
        id: (id) => set((state) => ({ ...state, id })),
        themes: (themes) => set((state) => ({ ...state, themes })),
    },
    add: {
        theme: () => set((state) => ({ ...state })),
    },
    theme: (themeId: string | number): ThemeActions => {
        const theme: ThemeData | undefined =
            typeof themeId === 'number'
                ? get().data.themes[themeId]
                : get().data.themes.find((theme) => theme.id === themeId);
        if (!theme) {
            throw new Error('theme not found');
        }
        const add = {
            themeColor: () => set((state) => ({ ...state })),
            aliasGroup: () => set((state) => ({ ...state })),
        };
        const duplicate = () => set((state) => ({ ...state }));
        const update = (themeData: ThemeData) => set((state) => ({ ...state }));
        const remove = () => set((state) => ({ ...state }));
        const setProps = {
            all: (themeData: ThemeData) => set((state) => ({ ...state })),
            id: (id: string) => set((state) => ({ ...state })),
            name: (name: string) => set((state) => ({ ...state })),
            themeColors: (themeColors: ThemeColorData[]) =>
                set((state) => ({ ...state })),
            aliasGroups: (aliasGroups: AliasGroupData[]) =>
                set((state) => ({ ...state })),
        };
        const themeColor = (id: string | number): ThemeColorActions => {
            const themeIdIndex =
                typeof themeId === 'number'
                    ? themeId
                    : get().data.themes.find((theme) => theme.id === themeId)
                          ?.id;
            if (!themeIdIndex) {
                throw new Error('theme color not found');
            }
            const themeColor: ThemeColorData | undefined =
                typeof id === 'number'
                    ? get().data.themes[themeIdIndex as number].themeColors[id]
                    : get().data.themes[
                          themeIdIndex as number
                      ].themeColors.find((themeColor) => themeColor.id === id);
            if (!themeColor) {
                throw new Error('theme color not found');
            }
            const add = {
                alias: () => set((state) => ({ ...state })),
            };
            const duplicate = () => set((state) => ({ ...state }));
            const update = (themeColorData: ThemeColorData) =>
                set((state) => ({ ...state }));
            const remove = () => set((state) => ({ ...state }));
            const setProps = {
                all: (themeColorData: ThemeColorData) =>
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
                child: (child: boolean) => set((state) => ({ ...state })),
            };
            const alias = (id: string): AliasActions => {
                const alias: AliasData | undefined =
                    themeColor.aliasGroup.aliases.find(
                        (alias) => alias.id === id,
                    );
                if (!alias) {
                    throw new Error('alias not found');
                }
                const update = (aliasData: AliasData) =>
                    set((state) => ({ ...state }));
                const remove = () => set((state) => ({ ...state }));
                const setProps = {
                    all: (aliasData: AliasData) =>
                        set((state) => ({ ...state })),
                    id: (id: string) => set((state) => ({ ...state })),
                    name: (name: string) => set((state) => ({ ...state })),
                    lightModeTone: (lightModeTone: number) =>
                        set((state) => ({ ...state })),
                    darkModeTone: (darkModeTone: number) =>
                        set((state) => ({ ...state })),
                };
                return {
                    ...alias,
                    update,
                    remove,
                    setProps,
                    data: alias,
                };
            };
            return {
                ...themeColor,
                add,
                duplicate,
                update,
                remove,
                setProps,
                alias,
                data: themeColor,
            };
        };
        const aliasGroup = (id: string) => {
            const aliasGroup: AliasGroupData | undefined =
                theme.aliasGroups.find((aliasGroup) => aliasGroup.id === id);
            if (!aliasGroup) {
                throw new Error('alias group not found');
            }
            const add = {
                alias: () => set((state) => ({ ...state })),
            };
            const duplicate = () => set((state) => ({ ...state }));
            const update = (aliasGroupData: AliasGroupData) =>
                set((state) => ({ ...state }));
            const remove = () => set((state) => ({ ...state }));
            const setProps = {
                all: (aliasGroupData: AliasGroupData) =>
                    set((state) => ({ ...state })),
                id: (id: string) => set((state) => ({ ...state })),
                name: (name: string) => set((state) => ({ ...state })),
                aliases: (aliases: AliasData[]) =>
                    set((state) => ({ ...state })),
                themeColorIds: (themeColorIds: string[]) =>
                    set((state) => ({ ...state })),
            };
            const alias = (id: string): AliasActions => {
                const alias: AliasData | undefined = aliasGroup.aliases.find(
                    (alias) => alias.id === id,
                );
                if (!alias) {
                    throw new Error('alias not found');
                }
                const update = (aliasData: AliasData) =>
                    set((state) => ({ ...state }));
                const remove = () => set((state) => ({ ...state }));
                const setProps = {
                    all: (aliasData: AliasData) =>
                        set((state) => ({ ...state })),
                    id: (id: string) => set((state) => ({ ...state })),
                    name: (name: string) => set((state) => ({ ...state })),
                    lightModeTone: (lightModeTone: number) =>
                        set((state) => ({ ...state })),
                    darkModeTone: (darkModeTone: number) =>
                        set((state) => ({ ...state })),
                };
                return {
                    ...aliasGroup,
                    update,
                    remove,
                    setProps,
                    data: alias,
                };
            };
            return {
                ...aliasGroup,
                add,
                duplicate,
                update,
                remove,
                setProps,
                alias,
                data: aliasGroup,
            };
        };
        const data = {
            id: theme.id,
            name: theme.name,
            themeColors: theme.themeColors,
            aliasGroups: theme.aliasGroups,
        };
        return {
            ...theme,
            add,
            duplicate,
            update,
            remove,
            setProps,
            themeColor,
            aliasGroup,
            data: data,
        };
    },
    data: { id: '', themes: [] },
});

const themeList: StateCreator<ThemeListData & ThemeListActions> = (
    set,
    get,
    ...a
) => ({
    ...themeListData(set, get, ...a),
    ...themeListActions(set, get, ...a),
});

type ThemeListStore = ReturnType<typeof createThemeListStore>;

type ThemeListProviderProps = React.PropsWithChildren<ThemeListData>;

export const ThemeListProvider = ({
    children,
    ...props
}: ThemeListProviderProps) => {
    const storeRef = useRef<ThemeListStore>();
    if (!storeRef.current) {
        storeRef.current = createThemeListStore(props);
    }
    return (
        <ThemeListContext.Provider value={storeRef.current}>
            {children}
        </ThemeListContext.Provider>
    );
};

export function useThemeListContext<T>(
    selector: (state: ThemeListData) => T,
): T {
    const store = useContext(ThemeListContext);
    if (!store) {
        throw new Error('Missing ThemeListContext.Provider in the tree');
    }
    return useStore(store, selector);
}

export const ThemeListContext = createContext<ThemeListStore | null>(null);

const createThemeListStore = (initProps?: Partial<ThemeListData>) => {
    const DEFAULT_PROPS: ThemeListData = {
        id: themeListId,
        themes: defaultThemes,
    };

    return createStore<ThemeListData & ThemeListActions>()(
        (set, get, ...a) => ({
            ...themeList(set, get, ...a),
            ...DEFAULT_PROPS,
            ...initProps,
            data: {
                id: themeList(set, get, ...a).id,
                themes: themeList(set, get, ...a).themes,
            },
            setProps: {
                all: (themeListData) =>
                    set((state) => ({ ...state, ...themeListData })),
                id: (id) => set((state) => ({ ...state, id: id })),
                themes: (themes) =>
                    set((state) => ({ ...state, themes: themes })),
            },
            add: {
                theme: (theme: ThemeData = createTheme()) =>
                    set((state) => ({
                        ...state,
                        themes: [...state.themes, theme],
                    })),
            },
            theme: (themeId: string | number): ThemeActions => {
                const theme: ThemeData | undefined =
                    typeof themeId === 'number'
                        ? get().themes[themeId]
                        : get().themes.find((theme) => theme.id === themeId);
                if (!theme) {
                    throw new Error('theme not found');
                }
                const add = {
                    themeColor: (
                        themeColor: ThemeColorData = createThemeColor(),
                    ) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((t) =>
                                t.id === theme.id
                                    ? {
                                          ...t,
                                          themeColors: [
                                              ...t.themeColors,
                                              themeColor,
                                          ],
                                      }
                                    : t,
                            ),
                        })),
                    aliasGroup: (
                        aliasGroup: AliasGroupData = createAliasGroup(),
                    ) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((t) =>
                                t.id === theme.id
                                    ? {
                                          ...t,
                                          aliasGroups: [
                                              ...t.aliasGroups,
                                              aliasGroup,
                                          ],
                                      }
                                    : t,
                            ),
                        })),
                };
                const duplicate = () =>
                    set((state) => {
                        const theme = state.themes.find(
                            (t) => t.id === themeId,
                        );
                        if (theme) {
                            const newTheme = { ...theme, id: nanoid(12) };
                            return {
                                ...state,
                                themes: [...state.themes, newTheme],
                            };
                        }
                        return state;
                    });
                const update = (themeData: ThemeData) =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.map((t) =>
                            t.id === theme.id ? themeData : t,
                        ),
                    }));
                const remove = () =>
                    set((state) => ({
                        ...state,
                        themes: state.themes.filter((t) => t.id !== theme.id),
                    }));
                const setProps = {
                    all: (themeData: ThemeData) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((t) =>
                                t.id === theme.id ? themeData : t,
                            ),
                        })),
                    id: (id: string) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((t) =>
                                t.id === theme.id ? { ...t, id } : t,
                            ),
                        })),
                    name: (name: string) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((t) =>
                                t.id === theme.id ? { ...t, name } : t,
                            ),
                        })),
                    themeColors: (themeColors: ThemeColorData[]) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((t) =>
                                t.id === theme.id ? { ...t, themeColors } : t,
                            ),
                        })),
                    aliasGroups: (aliasGroups: AliasGroupData[]) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((t) =>
                                t.id === theme.id ? { ...t, aliasGroups } : t,
                            ),
                        })),
                };
                const themeColor = (id: string | number): ThemeColorActions => {
                    const currentTheme = get().theme(themeId).data;
                    const themeColor: ThemeColorData | undefined =
                        typeof id === 'number'
                            ? currentTheme.themeColors[id]
                            : currentTheme.themeColors.find(
                                  (themeColor) => themeColor.id === id,
                              );
                    // console.log(
                    //     '%cPRE-if themeList:',
                    //     'color: #FFDE6A',
                    //     themeList(set, get, ...a),
                    // );
                    if (!themeColor) {
                        // console.log(
                        //     '%cCANNOT FIND themeColor',
                        //     'color: #FF8585',
                        //     id,
                        //     get()
                        //         .theme(themeId)
                        //         .data.themeColors.find((c) => c.id === id)?.name,
                        // );
                        // console.log(
                        //     '%cINSIDE OF theme',
                        //     'color: #FF8585',
                        //     get().themes.find((t) => t.id === themeId)?.name,
                        // );
                        // console.log(
                        //     '%cPOST-if themeList:',
                        //     'color: #FF8585',
                        //     themeList(set, get, ...a),
                        // );
                        // console.log(theme.themeColors);
                        throw new Error(
                            'COULD NOT FIND themeColor with id: ' + id,
                        );
                    }
                    const add = {
                        alias: (alias: AliasData = createAlias()) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              themeColors: t.themeColors.map(
                                                  (c) =>
                                                      c.id === id
                                                          ? {
                                                                ...c,
                                                                aliasGroup: {
                                                                    ...c.aliasGroup,
                                                                    aliases: [
                                                                        ...c
                                                                            .aliasGroup
                                                                            .aliases,
                                                                        alias,
                                                                    ],
                                                                },
                                                            }
                                                          : c,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                    };
                    const duplicate = () =>
                        set((state) => {
                            const themeColor = state.themes
                                .find((t) => t.id === theme.id)
                                ?.themeColors.find((c) => c.id === id);
                            if (themeColor) {
                                const newThemeColor = {
                                    ...themeColor,
                                    id: nanoid(12),
                                };
                                return {
                                    ...state,
                                    themes: state.themes.map((t) =>
                                        t.id === theme.id
                                            ? {
                                                  ...t,
                                                  themeColors: [
                                                      ...t.themeColors,
                                                      newThemeColor,
                                                  ],
                                              }
                                            : t,
                                    ),
                                };
                            }
                            return state;
                        });
                    const update = (themeColorData: ThemeColorData) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((t) =>
                                t.id === theme.id
                                    ? {
                                          ...t,
                                          themeColors: t.themeColors.map((c) =>
                                              c.id === id ? themeColorData : c,
                                          ),
                                      }
                                    : t,
                            ),
                        }));
                    const remove = () =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((t) =>
                                t.id === theme.id
                                    ? {
                                          ...t,
                                          themeColors: t.themeColors.filter(
                                              (c) => c.id !== id,
                                          ),
                                      }
                                    : t,
                            ),
                        }));
                    const setProps = {
                        all: (themeColorData: ThemeColorData) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              themeColors: t.themeColors.map(
                                                  (c) =>
                                                      c.id === id
                                                          ? themeColorData
                                                          : c,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                        id: (id: string) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              themeColors: t.themeColors.map(
                                                  (c) =>
                                                      c.id === id
                                                          ? { ...c, id }
                                                          : c,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                        name: (name: string) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              themeColors: t.themeColors.map(
                                                  (c) =>
                                                      c.id === id
                                                          ? { ...c, name }
                                                          : c,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                        sourceHex: (sourceHex: string) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              themeColors: t.themeColors.map(
                                                  (c) =>
                                                      c.id === id
                                                          ? {
                                                                ...c,
                                                                sourceHex:
                                                                    sourceHex,
                                                                sourceColor: {
                                                                    ...c.sourceColor,
                                                                    ...createColorFrom().hex(
                                                                        sourceHex,
                                                                    ),
                                                                },
                                                                endColor: {
                                                                    ...c.endColor,
                                                                    ...calculateEndColor(
                                                                        createColorFrom().hex(
                                                                            sourceHex,
                                                                        ).hct,
                                                                        c.hueCalc,
                                                                        c.chromaCalc,
                                                                    ),
                                                                },
                                                            }
                                                          : c,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                        sourceColor: (sourceColor: ColorData) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              themeColors: t.themeColors.map(
                                                  (c) =>
                                                      c.id === id
                                                          ? {
                                                                ...c,
                                                                sourceColor,
                                                                endColor: {
                                                                    ...c.endColor,
                                                                    ...calculateEndColor(
                                                                        sourceColor.hct,
                                                                        c.hueCalc,
                                                                        c.chromaCalc,
                                                                    ),
                                                                },
                                                            }
                                                          : c,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                        endColor: (endColor: ColorData) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              themeColors: t.themeColors.map(
                                                  (c) =>
                                                      c.id === id
                                                          ? {
                                                                ...c,
                                                                endColor: {
                                                                    ...c.endColor,
                                                                    ...calculateEndColor(
                                                                        c
                                                                            .sourceColor
                                                                            .hct,
                                                                        c.hueCalc,
                                                                        c.chromaCalc,
                                                                    ),
                                                                },
                                                            }
                                                          : c,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                        tones: (tones: number[]) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              themeColors: t.themeColors.map(
                                                  (c) =>
                                                      c.id === id
                                                          ? { ...c, tones }
                                                          : c,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                        hueCalc: (hueCalc: string) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              themeColors: t.themeColors.map(
                                                  (c) =>
                                                      c.id === id
                                                          ? {
                                                                ...c,
                                                                endColor: {
                                                                    ...c.endColor,
                                                                    ...calculateEndColor(
                                                                        c
                                                                            .sourceColor
                                                                            .hct,
                                                                        hueCalc,
                                                                        c.chromaCalc,
                                                                    ),
                                                                },
                                                                hueCalc:
                                                                    hueCalc,
                                                            }
                                                          : c,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                        chromaCalc: (chromaCalc: string) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              themeColors: t.themeColors.map(
                                                  (c) =>
                                                      c.id === id
                                                          ? {
                                                                ...c,
                                                                endColor: {
                                                                    ...c.endColor,
                                                                    ...calculateEndColor(
                                                                        c
                                                                            .sourceColor
                                                                            .hct,
                                                                        c.hueCalc,
                                                                        chromaCalc,
                                                                    ),
                                                                },
                                                                chromaCalc:
                                                                    chromaCalc,
                                                            }
                                                          : c,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                        aliasGroup: (aliasGroup: AliasGroupData) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              themeColors: t.themeColors.map(
                                                  (c) =>
                                                      c.id === id
                                                          ? {
                                                                ...c,
                                                                aliasGroup,
                                                            }
                                                          : c,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                        child: (child: boolean) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              themeColors: t.themeColors.map(
                                                  (c) =>
                                                      c.id === id
                                                          ? {
                                                                ...c,
                                                                child,
                                                            }
                                                          : c,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                    };
                    const alias = (id: string): AliasActions => {
                        const alias: AliasData | undefined =
                            themeColor.aliasGroup.aliases.find(
                                (alias) => alias.id === id,
                            );
                        if (!alias) {
                            throw new Error('alias not found');
                        }
                        const update = (aliasData: AliasData) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              themeColors: t.themeColors.map(
                                                  (c) =>
                                                      c.id === id
                                                          ? {
                                                                ...c,
                                                                aliasGroup: {
                                                                    ...c.aliasGroup,
                                                                    aliases:
                                                                        c.aliasGroup.aliases.map(
                                                                            (
                                                                                a,
                                                                            ) =>
                                                                                a.id ===
                                                                                id
                                                                                    ? aliasData
                                                                                    : a,
                                                                        ),
                                                                },
                                                            }
                                                          : c,
                                              ),
                                          }
                                        : t,
                                ),
                            }));
                        const remove = () =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              themeColors: t.themeColors.map(
                                                  (c) =>
                                                      c.id === id
                                                          ? {
                                                                ...c,
                                                                aliasGroup: {
                                                                    ...c.aliasGroup,
                                                                    aliases:
                                                                        c.aliasGroup.aliases.filter(
                                                                            (
                                                                                a,
                                                                            ) =>
                                                                                a.id !==
                                                                                id,
                                                                        ),
                                                                },
                                                            }
                                                          : c,
                                              ),
                                          }
                                        : t,
                                ),
                            }));
                        const setProps = {
                            all: (aliasData: AliasData) =>
                                set((state) => ({
                                    ...state,
                                    themes: state.themes.map((t) =>
                                        t.id === theme.id
                                            ? {
                                                  ...t,
                                                  themeColors:
                                                      t.themeColors.map((c) =>
                                                          c.id === id
                                                              ? {
                                                                    ...c,
                                                                    aliasGroup:
                                                                        {
                                                                            ...c.aliasGroup,
                                                                            aliases:
                                                                                c.aliasGroup.aliases.map(
                                                                                    (
                                                                                        a,
                                                                                    ) =>
                                                                                        a.id ===
                                                                                        id
                                                                                            ? aliasData
                                                                                            : a,
                                                                                ),
                                                                        },
                                                                }
                                                              : c,
                                                      ),
                                              }
                                            : t,
                                    ),
                                })),
                            id: (id: string) =>
                                set((state) => ({
                                    ...state,
                                    themes: state.themes.map((t) =>
                                        t.id === theme.id
                                            ? {
                                                  ...t,
                                                  themeColors:
                                                      t.themeColors.map((c) =>
                                                          c.id === id
                                                              ? {
                                                                    ...c,
                                                                    aliasGroup:
                                                                        {
                                                                            ...c.aliasGroup,
                                                                            aliases:
                                                                                c.aliasGroup.aliases.map(
                                                                                    (
                                                                                        a,
                                                                                    ) =>
                                                                                        a.id ===
                                                                                        id
                                                                                            ? {
                                                                                                  ...a,
                                                                                                  id,
                                                                                              }
                                                                                            : a,
                                                                                ),
                                                                        },
                                                                }
                                                              : c,
                                                      ),
                                              }
                                            : t,
                                    ),
                                })),
                            name: (name: string) =>
                                set((state) => ({
                                    ...state,
                                    themes: state.themes.map((t) =>
                                        t.id === theme.id
                                            ? {
                                                  ...t,
                                                  themeColors:
                                                      t.themeColors.map((c) =>
                                                          c.id === id
                                                              ? {
                                                                    ...c,
                                                                    aliasGroup:
                                                                        {
                                                                            ...c.aliasGroup,
                                                                            aliases:
                                                                                c.aliasGroup.aliases.map(
                                                                                    (
                                                                                        a,
                                                                                    ) =>
                                                                                        a.id ===
                                                                                        id
                                                                                            ? {
                                                                                                  ...a,
                                                                                                  name,
                                                                                              }
                                                                                            : a,
                                                                                ),
                                                                        },
                                                                }
                                                              : c,
                                                      ),
                                              }
                                            : t,
                                    ),
                                })),
                            lightModeTone: (lightModeTone: number) =>
                                set((state) => ({
                                    ...state,
                                    themes: state.themes.map((t) =>
                                        t.id === theme.id
                                            ? {
                                                  ...t,
                                                  themeColors:
                                                      t.themeColors.map((c) =>
                                                          c.id === id
                                                              ? {
                                                                    ...c,
                                                                    aliasGroup:
                                                                        {
                                                                            ...c.aliasGroup,
                                                                            aliases:
                                                                                c.aliasGroup.aliases.map(
                                                                                    (
                                                                                        a,
                                                                                    ) =>
                                                                                        a.id ===
                                                                                        id
                                                                                            ? {
                                                                                                  ...a,
                                                                                                  lightModeTone,
                                                                                              }
                                                                                            : a,
                                                                                ),
                                                                        },
                                                                }
                                                              : c,
                                                      ),
                                              }
                                            : t,
                                    ),
                                })),
                            darkModeTone: (darkModeTone: number) =>
                                set((state) => ({
                                    ...state,
                                    themes: state.themes.map((t) =>
                                        t.id === theme.id
                                            ? {
                                                  ...t,
                                                  themeColors:
                                                      t.themeColors.map((c) =>
                                                          c.id === id
                                                              ? {
                                                                    ...c,
                                                                    aliasGroup:
                                                                        {
                                                                            ...c.aliasGroup,
                                                                            aliases:
                                                                                c.aliasGroup.aliases.map(
                                                                                    (
                                                                                        a,
                                                                                    ) =>
                                                                                        a.id ===
                                                                                        id
                                                                                            ? {
                                                                                                  ...a,
                                                                                                  darkModeTone,
                                                                                              }
                                                                                            : a,
                                                                                ),
                                                                        },
                                                                }
                                                              : c,
                                                      ),
                                              }
                                            : t,
                                    ),
                                })),
                        };
                        return {
                            ...alias,
                            update,
                            remove,
                            setProps,
                            data: alias,
                        };
                    };
                    return {
                        ...themeColor,
                        add,
                        duplicate,
                        update,
                        remove,
                        setProps,
                        alias,
                        data: themeColor,
                    };
                };
                const aliasGroup = (id: string): AliasGroupActions => {
                    const aliasGroup: AliasGroupData | undefined =
                        theme.aliasGroups.find(
                            (aliasGroup) => aliasGroup.id === id,
                        );
                    if (!aliasGroup) {
                        throw new Error('alias group not found');
                    }
                    const add = {
                        alias: (alias: AliasData = createAlias()) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              aliasGroups: t.aliasGroups.map(
                                                  (a) =>
                                                      a.id === id
                                                          ? {
                                                                ...a,
                                                                aliases: [
                                                                    ...a.aliases,
                                                                    alias,
                                                                ],
                                                            }
                                                          : a,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                    };
                    const duplicate = () =>
                        set((state) => {
                            const aliasGroup = state.themes
                                .find((t) => t.id === theme.id)
                                ?.aliasGroups.find((a) => a.id === id);
                            if (aliasGroup) {
                                const newAliasGroup = {
                                    ...aliasGroup,
                                    id: nanoid(12),
                                };
                                return {
                                    ...state,
                                    themes: state.themes.map((t) =>
                                        t.id === theme.id
                                            ? {
                                                  ...t,
                                                  aliasGroups: [
                                                      ...t.aliasGroups,
                                                      newAliasGroup,
                                                  ],
                                              }
                                            : t,
                                    ),
                                };
                            }
                            return state;
                        });
                    const update = (aliasGroupData: AliasGroupData) =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((t) =>
                                t.id === theme.id
                                    ? {
                                          ...t,
                                          aliasGroups: t.aliasGroups.map((a) =>
                                              a.id === id ? aliasGroupData : a,
                                          ),
                                      }
                                    : t,
                            ),
                        }));
                    const remove = () =>
                        set((state) => ({
                            ...state,
                            themes: state.themes.map((t) =>
                                t.id === theme.id
                                    ? {
                                          ...t,
                                          aliasGroups: t.aliasGroups.filter(
                                              (a) => a.id !== id,
                                          ),
                                      }
                                    : t,
                            ),
                        }));
                    const setProps = {
                        all: (aliasGroupData: AliasGroupData) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              aliasGroups: t.aliasGroups.map(
                                                  (a) =>
                                                      a.id === id
                                                          ? aliasGroupData
                                                          : a,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                        id: (id: string) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              aliasGroups: t.aliasGroups.map(
                                                  (a) =>
                                                      a.id === id
                                                          ? { ...a, id }
                                                          : a,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                        name: (name: string) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              aliasGroups: t.aliasGroups.map(
                                                  (a) =>
                                                      a.id === id
                                                          ? { ...a, name }
                                                          : a,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                        aliases: (aliases: AliasData[]) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              aliasGroups: t.aliasGroups.map(
                                                  (a) =>
                                                      a.id === id
                                                          ? { ...a, aliases }
                                                          : a,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                        themeColorIds: (themeColorIds: string[]) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              aliasGroups: t.aliasGroups.map(
                                                  (a) =>
                                                      a.id === id
                                                          ? {
                                                                ...a,
                                                                themeColorIds,
                                                            }
                                                          : a,
                                              ),
                                          }
                                        : t,
                                ),
                            })),
                    };
                    const alias = (id: string): AliasActions => {
                        const alias: AliasData | undefined =
                            aliasGroup.aliases.find((alias) => alias.id === id);
                        if (!alias) {
                            throw new Error('alias not found');
                        }
                        const update = (aliasData: AliasData) =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              aliasGroups: t.aliasGroups.map(
                                                  (a) =>
                                                      a.id === id
                                                          ? {
                                                                ...a,
                                                                aliases:
                                                                    a.aliases.map(
                                                                        (a) =>
                                                                            a.id ===
                                                                            id
                                                                                ? aliasData
                                                                                : a,
                                                                    ),
                                                            }
                                                          : a,
                                              ),
                                          }
                                        : t,
                                ),
                            }));
                        const remove = () =>
                            set((state) => ({
                                ...state,
                                themes: state.themes.map((t) =>
                                    t.id === theme.id
                                        ? {
                                              ...t,
                                              aliasGroups: t.aliasGroups.map(
                                                  (a) =>
                                                      a.id === id
                                                          ? {
                                                                ...a,
                                                                aliases:
                                                                    a.aliases.filter(
                                                                        (a) =>
                                                                            a.id !==
                                                                            id,
                                                                    ),
                                                            }
                                                          : a,
                                              ),
                                          }
                                        : t,
                                ),
                            }));
                        const setProps = {
                            all: (aliasData: AliasData) =>
                                set((state) => ({
                                    ...state,
                                    themes: state.themes.map((t) =>
                                        t.id === theme.id
                                            ? {
                                                  ...t,
                                                  aliasGroups:
                                                      t.aliasGroups.map((a) =>
                                                          a.id === id
                                                              ? {
                                                                    ...a,
                                                                    aliases:
                                                                        a.aliases.map(
                                                                            (
                                                                                a,
                                                                            ) =>
                                                                                a.id ===
                                                                                id
                                                                                    ? aliasData
                                                                                    : a,
                                                                        ),
                                                                }
                                                              : a,
                                                      ),
                                              }
                                            : t,
                                    ),
                                })),
                            id: (id: string) =>
                                set((state) => ({
                                    ...state,
                                    themes: state.themes.map((t) =>
                                        t.id === theme.id
                                            ? {
                                                  ...t,
                                                  aliasGroups:
                                                      t.aliasGroups.map((a) =>
                                                          a.id === id
                                                              ? {
                                                                    ...a,
                                                                    aliases:
                                                                        a.aliases.map(
                                                                            (
                                                                                a,
                                                                            ) =>
                                                                                a.id ===
                                                                                id
                                                                                    ? {
                                                                                          ...a,
                                                                                          id,
                                                                                      }
                                                                                    : a,
                                                                        ),
                                                                }
                                                              : a,
                                                      ),
                                              }
                                            : t,
                                    ),
                                })),
                            name: (name: string) =>
                                set((state) => ({
                                    ...state,
                                    themes: state.themes.map((t) =>
                                        t.id === theme.id
                                            ? {
                                                  ...t,
                                                  aliasGroups:
                                                      t.aliasGroups.map((a) =>
                                                          a.id === id
                                                              ? {
                                                                    ...a,
                                                                    aliases:
                                                                        a.aliases.map(
                                                                            (
                                                                                a,
                                                                            ) =>
                                                                                a.id ===
                                                                                id
                                                                                    ? {
                                                                                          ...a,
                                                                                          name,
                                                                                      }
                                                                                    : a,
                                                                        ),
                                                                }
                                                              : a,
                                                      ),
                                              }
                                            : t,
                                    ),
                                })),
                            lightModeTone: (lightModeTone: number) =>
                                set((state) => ({
                                    ...state,
                                    themes: state.themes.map((t) =>
                                        t.id === theme.id
                                            ? {
                                                  ...t,
                                                  aliasGroups:
                                                      t.aliasGroups.map((a) =>
                                                          a.id === id
                                                              ? {
                                                                    ...a,
                                                                    aliases:
                                                                        a.aliases.map(
                                                                            (
                                                                                a,
                                                                            ) =>
                                                                                a.id ===
                                                                                id
                                                                                    ? {
                                                                                          ...a,
                                                                                          lightModeTone,
                                                                                      }
                                                                                    : a,
                                                                        ),
                                                                }
                                                              : a,
                                                      ),
                                              }
                                            : t,
                                    ),
                                })),
                            darkModeTone: (darkModeTone: number) =>
                                set((state) => ({
                                    ...state,
                                    themes: state.themes.map((t) =>
                                        t.id === theme.id
                                            ? {
                                                  ...t,
                                                  aliasGroups:
                                                      t.aliasGroups.map((a) =>
                                                          a.id === id
                                                              ? {
                                                                    ...a,
                                                                    aliases:
                                                                        a.aliases.map(
                                                                            (
                                                                                a,
                                                                            ) =>
                                                                                a.id ===
                                                                                id
                                                                                    ? {
                                                                                          ...a,
                                                                                          darkModeTone,
                                                                                      }
                                                                                    : a,
                                                                        ),
                                                                }
                                                              : a,
                                                      ),
                                              }
                                            : t,
                                    ),
                                })),
                        };
                        return {
                            ...alias,
                            update,
                            remove,
                            setProps,
                            data: alias,
                        };
                    };
                    return {
                        ...aliasGroup,
                        add,
                        duplicate,
                        update,
                        remove,
                        setProps,
                        alias,
                        data: aliasGroup,
                    };
                };
                return {
                    ...theme,
                    add,
                    duplicate,
                    update,
                    remove,
                    setProps,
                    themeColor,
                    aliasGroup,
                    data: theme,
                };
            },
        }),
    );
};
