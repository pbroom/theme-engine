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
    darkModeTone: number = 20,
) => {
    return {
        id: id,
        name: name,
        lightModeTone: lightModeTone,
        darkModeTone: darkModeTone,
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
            alias.darkModeTone,
        ),
    );
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
        createAlias(nanoid(12), 'color', 40, 80),
        createAlias(nanoid(12), 'onColor', 100, 20),
        createAlias(nanoid(12), 'colorContainer', 90, 30),
        createAlias(nanoid(12), 'onColorContainer', 10, 90),
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
    lightModeTone: z.number().int().min(0).max(100),
    darkModeTone: z.number().int().min(0).max(100),
});
type AliasData = z.infer<typeof AliasDataSchema>;

const AliasActionsSchema = z.object({
    set: z.object({
        all: z.function().args(AliasDataSchema, z.void()),
        id: z.function().args(z.string(), z.void()),
        name: z.function().args(z.string(), z.void()),
        lightModeTone: z.function().args(z.number(), z.void()),
        darkModeTone: z.function().args(z.number(), z.void()),
    }),
    data: z.function(),
});
type AliasActions = z.infer<typeof AliasActionsSchema>;

type Alias = AliasData & AliasActions;

const aliasData: StateCreator<AliasData> = () => ({
    id: nanoid(12),
    name: 'Alias',
    lightModeTone: 80,
    darkModeTone: 20,
});

const aliasActions: StateCreator<AliasActions> = (set, get) => ({
    set: {
        all: (aliasData) => set((state) => ({ ...state, ...aliasData })),
        id: (id) => set((state) => ({ ...state, id })),
        name: (name) => set((state) => ({ ...state, name })),
        lightModeTone: (lightModeTone) =>
            set((state) => ({ ...state, lightModeTone })),
        darkModeTone: (darkModeTone) =>
            set((state) => ({ ...state, darkModeTone })),
    },
    data: () => {},
});

const useAlias = create<AliasData & AliasActions>((set, get, ...a) => ({
    ...aliasData(set, get, ...a),
    ...aliasActions(set, get, ...a),
    data: () => {
        const state = get();
        const { id, name, lightModeTone, darkModeTone } = state;
        const aliasData: AliasData = {
            id,
            name,
            lightModeTone,
            darkModeTone,
        };
        return aliasData;
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
        createAlias(nanoid(12), 'color', 40, 80),
        createAlias(nanoid(12), 'onColor', 100, 20),
        createAlias(nanoid(12), 'colorContainer', 90, 30),
        createAlias(nanoid(12), 'onColorContainer', 10, 90),
    ]),
    themeColorIds: [],
});

const AliasGroupActionsSchema = z.object({
    setAll: z.function().args(AliasGroupDataSchema, z.void()),
    setId: z.function().args(z.string(), z.void()),
    setName: z.function().args(z.string(), z.void()),
    setAliases: z.function().args(z.array(AliasDataSchema), z.void()),
    setThemeColorIds: z.function().args(z.array(z.string()), z.void()),
    data: z.function(),
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
    data: () => {},
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
        data: () => {
            const state = get();
            const { id, name, aliases, themeColorIds } = state;
            const aliasGroupData: AliasGroupData = {
                id,
                name,
                aliases,
                themeColorIds,
            };
            return aliasGroupData;
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
