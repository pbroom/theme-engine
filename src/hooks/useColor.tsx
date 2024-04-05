import { useEffect, useRef } from 'preact/hooks';
import {
    argbFromHex,
    Hct,
    rgbaFromArgb,
    hexFromArgb,
} from '@material/material-color-utilities';
import { convertHexColorToRgbColor } from '@create-figma-plugin/utilities';
import z from 'zod';
import validator from 'validator';
import { create, StateCreator } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { evaluate } from 'mathjs';

export {
    RgbaSchema,
    HctSchema,
    SolidColorSchema,
    ColorDataSchema,
    ColorActionsSchema,
    ColorSchema,
    type ColorData,
    type ColorActions,
    type Color,
    cleanedHexColor,
    updateHctValues,
    setHue,
    setChroma,
    setTone,
    hexFromString,
    HctFromHex,
    argbFromHct,
    rgbFromHex,
    rgbaFromHct,
    hexFromHct,
    SolidColorFromRgbColor,
    createColorFrom,
    calculateHue,
    calculateChroma,
    calculateEndColor,
    useColor,
};

const RgbaSchema = z.object({
    r: z.number().min(0).max(255),
    g: z.number().min(0).max(255),
    b: z.number().min(0).max(255),
    a: z.number().min(0).max(255),
});

const HctSchema = z.object({
    hue: z.number().min(0).max(360),
    chroma: z.number().min(0).max(150),
    tone: z.number().min(0).max(100),
});
export type HctColor = z.infer<typeof HctSchema>;

const SolidColorSchema = z.object({
    color: z.object({
        r: z.number(),
        g: z.number(),
        b: z.number(),
    }),
    type: z.literal('SOLID'),
});
export type SolidColor = z.infer<typeof SolidColorSchema>;

const ColorDataSchema = z.object({
    sourceHex: z.string(),
    hct: HctSchema,
    rgba: z.union([z.string(), RgbaSchema]),
    hex: z.string().refine(validator.isHexColor),
    figmaSolidColor: SolidColorSchema,
});
type ColorData = z.infer<typeof ColorDataSchema>;
const ColorActionsSchema = z.object({
    setAll: z.function().args(ColorDataSchema, z.void()),
    setSourceHex: z.function().args(z.string(), z.void()),
    setHct: z.function().args(HctSchema, z.void()),
    setRgba: z.function().args(z.union([z.string(), RgbaSchema]), z.void()),
    setHex: z.function().args(z.string(), z.void()),
    setFigmaSolidColor: z.function().args(SolidColorSchema, z.void()),
    setHue: z.function().args(z.number(), z.void()),
    setChroma: z.function().args(z.number(), z.void()),
    setTone: z.function().args(z.number(), z.void()),
    data: ColorDataSchema,
});
type ColorActions = z.infer<typeof ColorActionsSchema>;
const ColorSchema = ColorDataSchema.merge(ColorActionsSchema);
type Color = ColorData & ColorActions;

/**
 * Removes the '#' character from the beginning of a hex color string.
 * @param hexColor - The hex color string to clean.
 * @returns The cleaned hex color string.
 */
const cleanedHexColor = (hexColor: string) => {
    return hexColor.startsWith('#') ? hexColor.slice(1) : hexColor;
};

// Function to update HCT values and dependent properties
const updateHctValues = (
    newHue: number,
    newChroma: number,
    newTone: number,
) => {
    const updatedHct = Hct.from(newHue, newChroma, newTone);
    return useColor.setState({ hct: updatedHct });
};

// Individual setters for hue, chroma, and tone
const setHue = (newHue: number) =>
    updateHctValues(
        newHue,
        useColor.getState().hct.chroma,
        useColor.getState().hct.tone,
    );
const setChroma = (newChroma: number) =>
    updateHctValues(
        useColor.getState().hct.hue,
        newChroma,
        useColor.getState().hct.tone,
    );
const setTone = (newTone: number) =>
    updateHctValues(
        useColor.getState().hct.hue,
        useColor.getState().hct.chroma,
        newTone,
    );

const hexFromString = (hexColor: string) => cleanedHexColor(hexColor);
const HctFromHex = (hexColor: string): Hct =>
    Hct.fromInt(argbFromHex(hexFromString(hexColor)));
const HctValuesFromHex = (hexColor: string): HctColor => {
    const hct = Hct.fromInt(argbFromHex(hexFromString(hexColor)));
    const h: number = hct.hue;
    const c: number = hct.chroma;
    const t: number = hct.tone;
    return { hue: h, chroma: c, tone: t };
};
const argbFromHct = (hctColor?: Hct) =>
    hctColor?.toInt() || Hct.from(0, 0, 0).toInt();
const rgbFromHex = (hex: string) => {
    const result = convertHexColorToRgbColor(cleanedHexColor(hex));
    return result !== null ? result : { r: 0, g: 0, b: 0 };
};
const rgbaFromHct = (hct: Hct) => {
    return rgbaFromArgb(argbFromHct(hct));
};
const hexFromHct = (hct: Hct) => {
    const argb = argbFromHct(hct);
    return hexFromArgb(argb);
};
const SolidColorFromRgbColor = (rgbColor: RGB): SolidColor => {
    if (!rgbColor) {
        return { type: 'SOLID', color: { r: 0, g: 0, b: 0 } };
    }
    return { type: 'SOLID', color: rgbColor };
};

const hexColor = '397456';

const colorData: StateCreator<ColorData> = () => ({
    sourceHex: hexColor,
    hct: HctFromHex(hexColor),
    rgba: rgbaFromHct(HctFromHex(hexColor)),
    hex: hexFromHct(HctFromHex(hexColor)),
    figmaSolidColor: SolidColorFromRgbColor(rgbFromHex(hexColor)),
});
const colorActions: StateCreator<ColorActions> = (set) => ({
    setAll: (colorData) => set((state) => ({ ...state, ...colorData })),
    setSourceHex: (sourceHex) =>
        set((state) => ({ ...state, sourceHex: sourceHex })),
    setHct: (hct) => set((state) => ({ ...state, hct: hct })),
    setRgba: (rgba) => set((state) => ({ ...state, rgba: rgba })),
    setHex: (hex) => set((state) => ({ ...state, hex: hex })),
    setFigmaSolidColor: (figmaSolidColor) =>
        set((state) => ({ ...state, figmaSolidColor: figmaSolidColor })),
    setHue: (hue) =>
        set((state) => ({ ...state, hct: { ...state, hue: hue } })),
    setChroma: (chroma) =>
        set((state) => ({ ...state, hct: { ...state, chroma: chroma } })),
    setTone: (tone) => set((state) => ({ ...state, hct: { ...state, tone } })),
    data: {
        sourceHex: '',
        hct: { hue: 0, chroma: 0, tone: 0 },
        rgba: { r: 0, g: 0, b: 0, a: 0 },
        hex: '',
        figmaSolidColor: { type: 'SOLID', color: { r: 0, g: 0, b: 0 } },
    },
});

/**
 * Creates a color object with utility functions for converting between different color formats.
 * @returns An object with `hex` and `hct` properties.
 */
const createColorFrom = () => {
    /**
     * Converts a hex color code to various color representations.
     * @param hexColor - The hex color code to convert.
     * @returns An object containing the source hex color, HCT value, RGBA value, hex value, and Figma solid color representation.
     */
    const hex = (hexColor: string) => {
        return {
            sourceHex: hexColor,
            hct: HctValuesFromHex(hexColor),
            rgba: rgbaFromHct(HctFromHex(hexColor)),
            hex: hexFromHct(HctFromHex(hexColor)),
            figmaSolidColor: SolidColorFromRgbColor(rgbFromHex(hexColor)),
        };
    };
    /**
     * Converts the given HCT (Hue, Chroma, Tone) values to various color representations.
     * @param hct - The HCT values to convert.
     * @returns An object containing the converted color representations.
     */
    const hct = (hct: { hue: number; chroma: number; tone: number }) => {
        return {
            sourceHex: hexFromHct(Hct.from(hct.hue, hct.chroma, hct.tone)),
            hct: hct,
            rgba: rgbaFromHct(Hct.from(hct.hue, hct.chroma, hct.tone)),
            hex: hexFromHct(Hct.from(hct.hue, hct.chroma, hct.tone)),
            figmaSolidColor: SolidColorFromRgbColor(
                rgbFromHex(hexFromHct(Hct.from(hct.hue, hct.chroma, hct.tone))),
            ),
        };
    };
    return { hex, hct };
};

/**
 * Calculates the hue value based on the provided hue value and hue calculation expression.
 * If the hue calculation expression is empty or whitespace, the source hue value is returned.
 * If the hue calculation expression is invalid, it attempts to evaluate the expression up to the offending character
 * and returns the last successfully evaluated hue value, or the default hue value if none was successful.
 * @param hueValue - The source hue value.
 * @param hueCalcValue - The hue calculation expression.
 * @returns The calculated hue value.
 */
const calculateHue = (hueValue: number, hueCalcValue: string) => {
    const hueCalc = hueCalcValue;
    // Get source hue
    const sourceHue = hueValue;
    // Check if hueCalc is empty or just whitespace
    if (!hueCalc.trim() || hueCalc === '') {
        return sourceHue;
    }
    try {
        // Replace 'h' regardless of its case
        const parsedHueCalc = hueCalc.replace(/h/gi, sourceHue.toString());
        // Evaluate parsedHueCalc
        // Hue equals absolute value of hue modulo 360
        const hue = Math.abs((evaluate(parsedHueCalc) as number) % 360);
        return hue;
    } catch (error) {
        console.error('Invalid expression:', error);
        // Try to evaluate the expression up to the offending character
        let lastValidHue = NaN;
        for (let i = hueCalc.length - 1; i >= 0; i--) {
            const truncatedExpression = hueCalc.substring(0, i);
            try {
                lastValidHue = evaluate(
                    truncatedExpression.replace(/h/gi, sourceHue.toString()),
                ) as number;
                break; // Stop the loop if we successfully evaluate the expression
            } catch (e) {
                // Continue truncating
            }
        }
        // Set hue to the last successfully evaluated value, or the default hue if none was successful
        const hue = !isNaN(lastValidHue)
            ? Math.abs(lastValidHue % 360)
            : sourceHue;
        return hue;
    }
};

/**
 * Calculates the chroma value based on the given chroma calculation expression.
 * If the chroma calculation expression is empty or whitespace, the source chroma value is returned.
 * If the chroma calculation expression is invalid, it tries to evaluate the expression up to the offending character.
 * @param chromaValue - The source chroma value.
 * @param chromaCalcValue - The chroma calculation expression.
 * @returns The calculated chroma value.
 */
const calculateChroma = (chromaValue: number, chromaCalcValue: string) => {
    const chromaCalc = chromaCalcValue;
    // Get source chroma
    const sourceChroma = chromaValue;
    // Check if chromaCalc is empty or just whitespace
    if (!chromaCalc.trim() || chromaCalc === '') {
        return sourceChroma;
    }
    try {
        // Replace 'c' regardless of its case
        const parsedChromaCalc = chromaCalc.replace(
            /c/gi,
            sourceChroma.toString(),
        );
        // Evaluate parsedChromaCalc
        const chroma = Math.abs(evaluate(parsedChromaCalc) as number);
        return chroma;
    } catch (error) {
        console.error('Invalid expression:', error);
        // Try to evaluate the expression up to the offending character
        let lastValidChroma = NaN;
        for (let i = chromaCalc.length - 1; i >= 0; i--) {
            const truncatedExpression = chromaCalc.substring(0, i);
            try {
                lastValidChroma = evaluate(
                    truncatedExpression.replace(/c/gi, sourceChroma.toString()),
                );
                break;
            } catch (error) {
                continue;
            }
        }
        return lastValidChroma;
    }
};

/**
 * Calculates the end color based on the source HCT values.
 *
 * @param sourceHct - The source HCT values.
 * @param hueCalc - The calculation method for the hue.
 * @param chromaCalc - The calculation method for the chroma.
 * @returns The end color.
 */
const calculateEndColor = (
    sourceHct: { hue: number; chroma: number; tone: number },
    hueCalc: string = 'h',
    chromaCalc: string = 'c',
) => {
    const hue = calculateHue(sourceHct.hue, hueCalc);
    const chroma = calculateChroma(sourceHct.chroma, chromaCalc);
    return createColorFrom().hct({ hue, chroma, tone: sourceHct.tone });
};

const color: StateCreator<Color> = (set, get, ...a) => ({
    ...colorData(set, get, ...a),
    ...colorActions(set, get, ...a),
    setSourceHex: (sourceHex) =>
        set((state) => ({
            ...state,
            sourceHex: sourceHex,
            hct: HctFromHex(sourceHex),
            rgba: rgbaFromHct(HctFromHex(sourceHex)),
            hex: sourceHex,
            figmaSolidColor: SolidColorFromRgbColor(rgbFromHex(sourceHex)),
        })),
    setHct: (hct) =>
        set((state) => ({
            ...state,
            hct: hct,
            rgba: rgbaFromHct(Hct.from(hct.hue, hct.chroma, hct.tone)),
            hex: hexFromHct(Hct.from(hct.hue, hct.chroma, hct.tone)),
            figmaSolidColor: SolidColorFromRgbColor(
                rgbFromHex(hexFromHct(Hct.from(hct.hue, hct.chroma, hct.tone))),
            ),
        })),
    setHue: (hue) =>
        set((state) => ({
            ...state,
            hct: { ...state.hct, hue: hue },
            rgba: rgbaFromHct(Hct.from(hue, state.hct.chroma, state.hct.tone)),
            hex: hexFromHct(Hct.from(hue, state.hct.chroma, state.hct.tone)),
            figmaSolidColor: SolidColorFromRgbColor(
                rgbFromHex(
                    hexFromHct(Hct.from(hue, state.hct.chroma, state.hct.tone)),
                ),
            ),
        })),
    setChroma: (chroma) =>
        set((state) => ({
            ...state,
            hct: { ...state.hct, chroma: chroma },
            rgba: rgbaFromHct(Hct.from(state.hct.hue, chroma, state.hct.tone)),
            hex: hexFromHct(Hct.from(state.hct.hue, chroma, state.hct.tone)),
            figmaSolidColor: SolidColorFromRgbColor(
                rgbFromHex(
                    hexFromHct(Hct.from(state.hct.hue, chroma, state.hct.tone)),
                ),
            ),
        })),
    setTone: (tone) =>
        set((state) => ({
            ...state,
            hct: { ...state.hct, tone: tone },
            rgba: rgbaFromHct(Hct.from(state.hct.hue, state.hct.chroma, tone)),
            hex: hexFromHct(Hct.from(state.hct.hue, state.hct.chroma, tone)),
            figmaSolidColor: SolidColorFromRgbColor(
                rgbFromHex(
                    hexFromHct(Hct.from(state.hct.hue, state.hct.chroma, tone)),
                ),
            ),
        })),
    data: {
        sourceHex: colorData(set, get, ...a).sourceHex,
        hct: colorData(set, get, ...a).hct,
        rgba: colorData(set, get, ...a).rgba,
        hex: colorData(set, get, ...a).hex,
        figmaSolidColor: colorData(set, get, ...a).figmaSolidColor,
    },
});

const useColor = create<ColorData & ColorActions>()((set, get, ...a) => ({
    ...color(set, get, ...a),
}));
