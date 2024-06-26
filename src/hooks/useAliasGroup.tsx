import z from 'zod';
import { StateCreator, create } from 'zustand';
import { nanoid } from 'nanoid';

export {
    createAlias,
    createAliasList,
    createAliasGroup,
    AliasDataSchema,
    AliasActionsSchema,
    type AliasData,
    type AliasActions,
    type Alias,
    useAlias,
    AliasGroupDataSchema,
    AliasGroupActionsSchema,
    type AliasGroupData,
    type AliasGroupActions,
    aliasGroupData,
    aliasGroupActions,
    aliasCrud,
    useAliasGroup,
    AliasCrudSchema,
    type AliasCrud,
};

/**
 * Creates an alias object with the specified properties.
 * @param id - The unique identifier for the alias. If not provided, a random ID will be generated.
 * @param name - The name of the alias. Defaults to 'Alias' if not provided.
 * @param lightModeTone - The light mode tone of the alias. Defaults to 80 if not provided.
 * @param darkModeTone - The dark mode tone of the alias. Defaults to 20 if not provided.
 * @returns The created alias object.
 */
const createAlias = (
    id: string = nanoid(12),
    name: string = 'Alias',
    lightModeTone: number = 80,
    lightModeAlpha: number = 100,
    darkModeTone: number = 20,
    darkModeAlpha: number = 100,
) => {
    return {
        id: id,
        name: name,
        lightModeTone: lightModeTone,
        lightModeAlpha: lightModeAlpha,
        darkModeTone: darkModeTone,
        darkModeAlpha: darkModeAlpha,
    };
};

/**
 * Creates a list of aliases based on the provided array of AliasData.
 * @param aliases - An array of AliasData objects.
 * @returns An array of AliasData objects.
 */
const createAliasList = (aliases: AliasData[] = []): AliasData[] => {
    return aliases.map((alias) =>
        createAlias(
            alias.id,
            alias.name,
            alias.lightModeTone,
            alias.lightModeAlpha,
            alias.darkModeTone,
            alias.darkModeAlpha,
        ),
    );
};

const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Creates an alias group with the specified parameters.
 *
 * @param id - The ID of the alias group. If not provided, a random ID will be generated.
 * @param name - The name of the alias group. If not provided, the default name will be used.
 * @param aliases - An array of alias data objects. If not provided, default aliases will be used.
 * @param themeColorIds - An array of theme color IDs associated with the alias group. If not provided, an empty array will be used.
 * @returns The created alias group data object.
 */
const createAliasGroup = (
    id: string = nanoid(12),
    name: string = 'Alias group',
    aliases: AliasData[] = [
        createAlias(nanoid(12), `$`, 40, 100, 80, 100),
        createAlias(nanoid(12), `on$`, 100, 100, 20, 100),
        createAlias(nanoid(12), `$Container`, 90, 100, 30, 100),
        createAlias(nanoid(12), `on$Container`, 10, 100, 90, 100),
    ],
    themeColorIds: string[] = [],
): AliasGroupData => {
    return {
        id: id,
        name: name,
        aliases: aliases,
        themeColorIds: themeColorIds,
    };
};

const AliasDataSchema = z.object({
    id: z.string(),
    name: z.string(),
    lightModeTone: z.number(),
    lightModeAlpha: z.number(),
    darkModeTone: z.number(),
    darkModeAlpha: z.number(),
});
type AliasData = z.infer<typeof AliasDataSchema>;

const AliasActionsSchema = z.object({
    set: z.object({
        all: z.function().args(AliasDataSchema, z.void()),
        id: z.function().args(z.string(), z.void()),
        name: z.function().args(z.string(), z.void()),
        lightModeTone: z.function().args(z.number(), z.void()),
        lightModeAlpha: z.function().args(z.number(), z.void()),
        darkModeTone: z.function().args(z.number(), z.void()),
        darkModeAlpha: z.function().args(z.number(), z.void()),
    }),
    data: AliasDataSchema,
});
type AliasActions = z.infer<typeof AliasActionsSchema>;

type Alias = AliasData & AliasActions;

const aliasData: StateCreator<AliasData> = () => ({
    id: nanoid(12),
    name: 'Alias',
    lightModeTone: 80,
    lightModeAlpha: 100,
    darkModeTone: 20,
    darkModeAlpha: 100,
});

const aliasActions: StateCreator<AliasActions> = (set, get) => ({
    set: {
        all: (aliasData) => set((state) => ({ ...state, ...aliasData })),
        id: (id) => set((state) => ({ ...state, id })),
        name: (name) => set((state) => ({ ...state, name })),
        lightModeTone: (lightModeTone) =>
            set((state) => ({ ...state, lightModeTone })),
        lightModeAlpha: (lightModeAlpha) =>
            set((state) => ({ ...state, lightModeAlpha })),
        darkModeTone: (darkModeTone) =>
            set((state) => ({ ...state, darkModeTone })),
        darkModeAlpha: (darkModeAlpha) =>
            set((state) => ({ ...state, darkModeAlpha })),
    },
    data: {
        id: '',
        name: '',
        lightModeTone: 0,
        lightModeAlpha: 100,
        darkModeTone: 0,
        darkModeAlpha: 100,
    },
});

const useAlias = create<AliasData & AliasActions>((set, get, ...a) => ({
    ...aliasData(set, get, ...a),
    ...aliasActions(set, get, ...a),
    data: {
        id: aliasData(set, get, ...a).id,
        name: aliasData(set, get, ...a).name,
        lightModeTone: aliasData(set, get, ...a).lightModeTone,
        lightModeAlpha: aliasData(set, get, ...a).lightModeAlpha,
        darkModeTone: aliasData(set, get, ...a).darkModeTone,
        darkModeAlpha: aliasData(set, get, ...a).darkModeAlpha,
    },
}));

const AliasGroupDataSchema = z.object({
    id: z.string(),
    name: z.string(),
    aliases: z.array(AliasDataSchema),
    themeColorIds: z.array(z.string()),
});

type AliasGroupData = z.infer<typeof AliasGroupDataSchema>;

const aliasGroupData: StateCreator<AliasGroupData> = () => ({
    id: nanoid(12),
    name: 'Alias group',
    aliases: createAliasList([
        createAlias(nanoid(12), 'color', 40, 100, 80, 100),
        createAlias(nanoid(12), 'onColor', 100, 100, 20, 100),
        createAlias(nanoid(12), 'colorContainer', 90, 100, 30, 100),
        createAlias(nanoid(12), 'onColorContainer', 10, 100, 90, 100),
    ]),
    themeColorIds: [],
});

const AliasGroupActionsSchema = z.object({
    setAll: z.function().args(AliasGroupDataSchema, z.void()),
    setId: z.function().args(z.string(), z.void()),
    setName: z.function().args(z.string(), z.void()),
    setAliases: z.function().args(z.array(AliasDataSchema), z.void()),
    setThemeColorIds: z.function().args(z.array(z.string()), z.void()),
    data: AliasGroupDataSchema,
});

type AliasGroupActions = z.infer<typeof AliasGroupActionsSchema>;

const aliasGroupActions: StateCreator<AliasGroupActions> = (set) => ({
    setAll: (aliasGroupData) =>
        set((state) => ({ ...state, ...aliasGroupData })),
    setId: (id) => set((state) => ({ ...state, id })),
    setName: (name) => set((state) => ({ ...state, name })),
    setAliases: (aliases) => set((state) => ({ ...state, aliases: aliases })),
    setThemeColorIds: (themeColors) =>
        set((state) => ({ ...state, themeColors })),
    data: { id: '', name: '', aliases: [], themeColorIds: [] },
});

const AliasCrudSchema = z.object({
    alias: z.object({
        add: z.function().args(z.void()),
        update: z.function().args(z.string(), AliasDataSchema, z.void()),
        remove: z.function().args(z.string(), z.void()),
    }),
    themeColorId: z.object({
        add: z.function().args(z.string(), z.void()),
        remove: z.function().args(z.string(), z.void()),
    }),
});

const aliasCrud: StateCreator<AliasCrud> = (set) => ({
    alias: {
        add: () => set((state) => ({ ...state })),
        update: (id: string, alias: AliasData) =>
            set((state) => ({ ...state })),
        remove: (id: string) => set((state) => ({ ...state })),
    },
    themeColorId: {
        add: (id: string) => set((state) => ({ ...state })),
        remove: (id: string) => set((state) => ({ ...state })),
    },
});

type AliasCrud = z.infer<typeof AliasCrudSchema>;

/**
 * Custom hook that creates an alias group with data and actions.
 * @template AliasGroupData - The type of data for the alias group.
 * @template AliasGroupActions - The type of actions for the alias group.
 * @template AliasCrud - The type of CRUD operations for the alias group.
 * @param {SetState<AliasGroupData & AliasGroupActions & AliasCrud>} set - The state setter function.
 * @param {...any[]} a - Additional arguments.
 * @returns {AliasGroupData & AliasGroupActions & AliasCrud} - The alias group object with data and actions.
 */
const useAliasGroup = create<AliasGroupData & AliasGroupActions & AliasCrud>(
    (set, get, ...a) => ({
        ...aliasGroupData(set, get, ...a),
        ...aliasGroupActions(set, get, ...a),
        data: {
            id: aliasGroupData(set, get, ...a).id,
            name: aliasGroupData(set, get, ...a).name,
            aliases: aliasGroupData(set, get, ...a).aliases,
            themeColorIds: aliasGroupData(set, get, ...a).themeColorIds,
        },
        alias: {
            add: () =>
                set((state) => ({
                    ...state,
                    aliases: [...state.aliases, createAlias()],
                })),
            update: (id: string, alias: AliasData) =>
                set((state) => ({
                    ...state,
                    aliases: state.aliases.map((a) =>
                        a.id === id ? alias : a,
                    ),
                })),
            remove: (id: string) =>
                set((state) => ({
                    ...state,
                    aliases: state.aliases.filter((a) => a.id !== id),
                })),
        },
        themeColorId: {
            add: (id: string) =>
                set((state) => ({
                    ...state,
                    themeColorIds: [...state.themeColorIds, id],
                })),
            remove: (id: string) =>
                set((state) => ({
                    ...state,
                    themeColorIds: state.themeColorIds.filter((t) => t !== id),
                })),
        },
    }),
);
