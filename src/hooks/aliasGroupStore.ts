import z from 'zod';
import { StateCreator, create } from 'zustand';
import { nanoid } from 'nanoid';

export {
    createAlias,
    createAliasList,
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
    useAliasGroup,
};

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

const AliasDataSchema = z.object({
    id: z.string().default(() => nanoid(12)),
    name: z.string().default('Alias'),
    lightModeTone: z.number().int().min(0).max(100).default(80),
    darkModeTone: z.number().int().min(0).max(100).default(20),
});
type AliasData = z.infer<typeof AliasDataSchema>;

const AliasActionsSchema = z.object({
    set: z.object({
        id: z.function().args(z.string(), z.void()),
        name: z.function().args(z.string(), z.void()),
        lightModeTone: z.function().args(z.number(), z.void()),
        darkModeTone: z.function().args(z.number(), z.void()),
    }),
});
type AliasActions = z.infer<typeof AliasActionsSchema>;

type Alias = AliasData & AliasActions;

const aliasDataStore: StateCreator<AliasData> = () => ({
    id: nanoid(12),
    name: 'Alias',
    lightModeTone: 80,
    darkModeTone: 20,
});

const aliasActionsStore: StateCreator<AliasActions> = (set) => ({
    set: {
        id: (id) => set((state) => ({ ...state, id })),
        name: (name) => set((state) => ({ ...state, name })),
        lightModeTone: (lightModeTone) =>
            set((state) => ({ ...state, lightModeTone })),
        darkModeTone: (darkModeTone) =>
            set((state) => ({ ...state, darkModeTone })),
    },
});

const useAlias = create<AliasData & AliasActions>((...a) => ({
    ...aliasDataStore(...a),
    ...aliasActionsStore(...a),
}));

const AliasGroupDataSchema = z.object({
    id: z.string().default(() => nanoid(12)),
    aliases: z.array(AliasDataSchema),
});

type AliasGroupData = z.infer<typeof AliasGroupDataSchema>;

const aliasGroupData: StateCreator<AliasGroupData> = () => ({
    id: nanoid(12),
    name: 'Alias group',
    aliases: createAliasList([
        createAlias(nanoid(12), 'color', 40, 80),
        createAlias(nanoid(12), 'onColor', 100, 20),
    ]),
});

const AliasGroupActionsSchema = z.object({
    setId: z.function().args(z.string(), z.void()),
    setName: z.function().args(z.string(), z.void()),
    setAliases: z.function().args(z.array(AliasDataSchema), z.void()),
});

type AliasGroupActions = z.infer<typeof AliasGroupActionsSchema>;

const aliasGroupActions: StateCreator<AliasGroupActions> = (set) => ({
    setId: (id) => set((state) => ({ ...state, id })),
    setName: (name) => set((state) => ({ ...state, name })),
    setAliases: (aliases) => set((state) => ({ ...state, aliases: aliases })),
});

const useAliasGroup = create<AliasGroupData & AliasGroupActions>(
    (set, ...a) => ({
        ...aliasGroupData(set, ...a),
        ...aliasGroupActions(set, ...a),
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
    }),
);
