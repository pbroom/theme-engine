import { createColorFrom, calculateEndColor } from './useColor';
import { ColorSchema } from './useColor';
import { nanoid } from 'nanoid';
import z from 'zod';
import { create, StateCreator } from 'zustand';
import {
    AliasData,
    type AliasGroupActions,
    type AliasGroupData,
    aliasGroupData,
    aliasGroupActions,
    createAlias,
    AliasGroupDataSchema,
    createAliasGroup,
    AliasDataSchema,
    AliasCrud,
    aliasCrud,
} from './useAliasGroup';
import { ColorDataSchema } from './useColor';
import { subscribeWithSelector } from 'zustand/middleware';

export {
    createThemeColor,
    ThemeColorDataSchema,
    ThemeColorActionsSchema,
    type ThemeColorData,
    type ThemeColorActions,
    type ThemeColor,
    themeColorData,
    useThemeColorData,
    themeColorActions,
    useThemeColorActions,
    useThemeColor,
};

const defaultSourceHex = '397456';
const defaultName = 'Color';
const defaultHueCalc = '';
const defaultChromaCalc = '';
const defaultTones = [
    0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100, 4, 5, 6, 12, 17, 22, 24,
    25, 35, 87, 92, 94, 96, 98,
];
const defaultAliasGroup = createAliasGroup();

/**
 * Creates a theme color object.
 *
 * @param sourceHex - The source hex value for the color.
 * @param name - The name of the color.
 * @param hueCalc - The hue calculation method.
 * @param chromaCalc - The chroma calculation method.
 * @param aliasGroup - The alias group data.
 * @returns The created theme color object.
 */
const createThemeColor = (
    sourceHex: string = defaultSourceHex,
    name: string = defaultName,
    hueCalc: string = defaultHueCalc,
    chromaCalc: string = defaultChromaCalc,
    aliasGroup: AliasGroupData = defaultAliasGroup,
): ThemeColorData => {
    return {
        id: nanoid(12),
        name: name,
        sourceHex: sourceHex,
        sourceColor: createColorFrom().hex(sourceHex),
        endColor: calculateEndColor(
            createColorFrom().hex(sourceHex).hct,
            defaultHueCalc,
            defaultChromaCalc,
        ),
        tones: defaultTones,
        hueCalc: hueCalc,
        chromaCalc: chromaCalc,
        aliasGroup: aliasGroup,
    };
};

const ThemeColorDataSchema = z.object({
    id: z.string(),
    name: z.string(),
    sourceHex: z.string(),
    sourceColor: ColorDataSchema,
    endColor: ColorDataSchema,
    tones: z.array(z.number()),
    hueCalc: z.string(),
    chromaCalc: z.string(),
    aliasGroup: AliasGroupDataSchema,
});
type ThemeColorData = z.infer<typeof ThemeColorDataSchema>;

const themeColorData: StateCreator<ThemeColorData> = () => ({
    id: nanoid(12),
    name: defaultName,
    sourceHex: defaultSourceHex,
    sourceColor: createColorFrom().hex(defaultSourceHex),
    endColor: calculateEndColor(
        createColorFrom().hex(defaultSourceHex).hct,
        defaultHueCalc,
        defaultChromaCalc,
    ),
    tones: defaultTones,
    hueCalc: defaultHueCalc,
    chromaCalc: defaultChromaCalc,
    aliasGroup: defaultAliasGroup,
});

const useThemeColorData = create<ThemeColorData>((...a) => ({
    ...themeColorData(...a),
}));

const ThemeColorActionsSchema = z.object({
    set: z.object({
        all: z.function().args(ThemeColorDataSchema, z.void()),
        id: z.function().args(z.string(), z.void()),
        name: z.function().args(z.string(), z.void()),
        sourceHex: z.function().args(z.string(), z.void()),
        sourceColor: z.function().args(ColorSchema, z.void()),
        endColor: z.function().args(ColorSchema, z.void()),
        tones: z.function().args(z.array(z.number()), z.void()),
        hueCalc: z.function().args(z.string(), z.void()),
        chromaCalc: z.function().args(z.string(), z.void()),
        aliasGroup: z.function().args(AliasGroupDataSchema, z.void()),
    }),
    data: ThemeColorDataSchema,
});
type ThemeColorActions = z.infer<typeof ThemeColorActionsSchema>;

const themeColorActions: StateCreator<ThemeColorActions> = (set, get) => ({
    set: {
        all: (themeColor) => set((state) => ({ ...state, ...themeColor })),
        id: (id) => set((state) => ({ ...state, id: id })),
        name: (name) => set((state) => ({ ...state, name: name })),
        sourceHex: (sourceHex) =>
            set((state) => ({
                ...state,
                sourceHex: sourceHex,
            })),
        sourceColor: (sourceColor) =>
            set((state) => ({ ...state, sourceColor: sourceColor })),
        endColor: (endColor) =>
            set((state) => ({ ...state, endColor: endColor })),
        tones: (tones) => set((state) => ({ ...state, tones: tones })),
        hueCalc: (hueCalc) => set((state) => ({ ...state, hueCalc: hueCalc })),
        chromaCalc: (chromaCalc) =>
            set((state) => ({ ...state, chromaCalc: chromaCalc })),
        aliasGroup: (aliasGroup) =>
            set((state) => ({ ...state, aliasGroup: aliasGroup })),
    },
    data: {
        id: '',
        name: '',
        sourceHex: '',
        sourceColor: createColorFrom().hex('000000'),
        endColor: createColorFrom().hex('000000'),
        tones: [],
        hueCalc: '',
        chromaCalc: '',
        aliasGroup: createAliasGroup(),
    },
});

const useThemeColorActions = create<ThemeColorActions>((...a) => ({
    ...themeColorActions(...a),
}));

type ThemeColor = ThemeColorData & ThemeColorActions & AliasCrud;

const themeColorStore: StateCreator<ThemeColor> = (set, get, ...a) => ({
    ...themeColorData(set, get, ...a),
    ...themeColorActions(set, get, ...a),
    ...aliasCrud(set, get, ...a),
    data: {
        id: themeColorData(set, get, ...a).id,
        name: themeColorData(set, get, ...a).name,
        sourceHex: themeColorData(set, get, ...a).sourceHex,
        sourceColor: themeColorData(set, get, ...a).sourceColor,
        endColor: themeColorData(set, get, ...a).endColor,
        tones: themeColorData(set, get, ...a).tones,
        hueCalc: themeColorData(set, get, ...a).hueCalc,
        chromaCalc: themeColorData(set, get, ...a).chromaCalc,
        aliasGroup: themeColorData(set, get, ...a).aliasGroup,
    },
    set: {
        ...themeColorActions(set, get, ...a).set,
        id: (id) => set((state) => ({ ...state, id: id })),
        name: (name) => set((state) => ({ ...state, name: name })),
        sourceHex: (sourceHex) =>
            set((state) => ({
                ...state,
                sourceHex: sourceHex,
                sourceColor: {
                    ...state.sourceColor,
                    ...createColorFrom().hex(sourceHex),
                },
                endColor: {
                    ...state.endColor,
                    ...calculateEndColor(
                        state.sourceColor.hct,
                        state.hueCalc,
                        state.chromaCalc,
                    ),
                },
            })),
        hueCalc: (hueCalc) =>
            set((state) => ({
                ...state,
                hueCalc: hueCalc,
                endColor: {
                    ...state.endColor,
                    ...calculateEndColor(
                        state.sourceColor.hct,
                        hueCalc,
                        state.chromaCalc,
                    ),
                },
            })),
        chromaCalc: (chromaCalc) =>
            set((state) => ({
                ...state,
                chromaCalc: chromaCalc,
                endColor: {
                    ...state.endColor,
                    ...calculateEndColor(
                        state.sourceColor.hct,
                        state.hueCalc,
                        chromaCalc,
                    ),
                },
            })),
    },
    alias: {
        add: () =>
            set((state) => ({
                ...state,
                aliasGroup: {
                    ...state.aliasGroup,
                    aliases: [...state.aliasGroup.aliases, createAlias()],
                },
            })),
        update: (id: string, alias: AliasData) =>
            set((state) => ({
                ...state,
                aliasGroup: {
                    ...state.aliasGroup,
                    aliases: state.aliasGroup.aliases.map((a) =>
                        a.id === id ? alias : a,
                    ),
                },
            })),
        remove: (id: string) =>
            set((state) => ({
                ...state,
                aliasGroup: {
                    ...state.aliasGroup,
                    aliases: state.aliasGroup.aliases.filter(
                        (a) => a.id !== id,
                    ),
                },
            })),
    },
});

const useThemeColor = create<ThemeColor>()(
    subscribeWithSelector((...a) => ({
        ...themeColorStore(...a),
    })),
);
