import {
    useColor,
    Color,
    HctFromHex,
    SolidColorFromRgbColor,
    hexFromHct,
    rgbFromHex,
    rgbaFromHct,
    createColorFrom,
    calculateEndColor,
} from './useColor';
import { ColorSchema } from './useColor';
import { e, evaluate, i, round } from 'mathjs';
import { useEffect, useRef } from 'preact/hooks';
import { nanoid } from 'nanoid';
import z from 'zod';
import { create, StateCreator } from 'zustand';
import { Hct } from '@material/material-color-utilities';
import { get } from 'lodash';
import {
    AliasData,
    type AliasGroupActions,
    type AliasGroupData,
    aliasGroupData,
    aliasGroupActions,
    createAlias,
} from './aliasGroupStore';

export {
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

const ThemeColorDataSchema = z.object({
    id: z.string().default(nanoid(12)),
    name: z.string().default('Color'),
    sourceHex: z.string().default('397456'),
    sourceColor: ColorSchema,
    endColor: ColorSchema,
    tones: z
        .array(z.number())
        .default([
            0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100, 4, 5, 6, 12, 17,
            22, 24, 25, 35, 87, 92, 94, 96, 98,
        ]),
    hueCalc: z.string().default('163'),
    chromaCalc: z.string().default('33'),
});
type ThemeColorData = z.infer<typeof ThemeColorDataSchema>;

const baseColor: Color = useColor.getState();
const color: Color = {
    ...baseColor,
    sourceHex: '397456',
    hct: { hue: 163, chroma: 33, tone: 44 },
    rgba: rgbaFromHct(Hct.from(163, 33, 44)),
    hex: hexFromHct(Hct.from(163, 33, 44)),
};

const themeColorData: StateCreator<ThemeColorData> = () => ({
    id: nanoid(12),
    name: 'color',
    sourceHex: '397456',
    sourceColor: color,
    endColor: color,
    tones: [],
    hueCalc: '',
    chromaCalc: '',
    aliases: [],
});

const useThemeColorData = create<ThemeColorData>((...a) => ({
    ...themeColorData(...a),
}));

const ThemeColorActionsSchema = z.object({
    set: z.object({
        allProps: z.function().args(ThemeColorDataSchema, z.void()),
        id: z.function().args(z.string(), z.void()),
        name: z.function().args(z.string(), z.void()),
        sourceHex: z.function().args(z.string(), z.void()),
        sourceColor: z.function().args(ColorSchema, z.void()),
        endColor: z.function().args(ColorSchema, z.void()),
        tones: z.function().args(z.array(z.number()), z.void()),
        hueCalc: z.function().args(z.string(), z.void()),
        chromaCalc: z.function().args(z.string(), z.void()),
    }),
});
type ThemeColorActions = z.infer<typeof ThemeColorActionsSchema>;

const themeColorActions: StateCreator<ThemeColorActions> = (set, get) => ({
    set: {
        allProps: ({
            id,
            name,
            sourceHex,
            sourceColor,
            endColor,
            hueCalc,
            chromaCalc,
        }) =>
            set((state) => ({
                ...state,
                id,
                name,
                sourceHex,
                sourceColor,
                endColor,
                hueCalc,
                chromaCalc,
            })),
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
    },
});

const useThemeColorActions = create<ThemeColorActions>((...a) => ({
    ...themeColorActions(...a),
}));

type ThemeColor = ThemeColorData & ThemeColorActions;

const useThemeColor = create<
    ThemeColorData & ThemeColorActions & AliasGroupData & AliasGroupActions
>()((set, ...a) => ({
    ...themeColorData(set, ...a),
    ...themeColorActions(set, ...a),
    ...aliasGroupData(set, ...a),
    ...aliasGroupActions(set, ...a),
    set: {
        ...themeColorActions(set, ...a).set,
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
                aliases: state.aliases.map((a) => (a.id === id ? alias : a)),
            })),
        remove: (id: string) =>
            set((state) => ({
                ...state,
                aliases: state.aliases.filter((a) => a.id !== id),
            })),
    },
}));
