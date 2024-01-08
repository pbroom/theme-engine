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
	colorStore,
	useColorStore,
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

const SolidColorSchema = z.object({
	type: z.literal('SOLID'),
	color: z.object({
		r: z.number().min(0).max(255),
		g: z.number().min(0).max(255),
		b: z.number().min(0).max(255),
	}),
});
type SolidColor = z.infer<typeof SolidColorSchema>;

const ColorDataSchema = z.object({
	sourceHex: z.string(),
	hct: HctSchema,
	rgba: z.union([z.string(), RgbaSchema]),
	hex: z.string().refine(validator.isHexColor),
	figmaSolidColor: SolidColorSchema,
});
type ColorData = z.infer<typeof ColorDataSchema>;
const ColorActionsSchema = z.object({
	setSourceHex: z.function().args(z.string(), z.void()),
	setHct: z.function().args(HctSchema, z.void()),
	setRgba: z.function().args(z.union([z.string(), RgbaSchema]), z.void()),
	setHex: z.function().args(z.string(), z.void()),
	setFigmaSolidColor: z.function().args(SolidColorSchema, z.void()),
	setHue: z.function().args(z.number(), z.void()),
	setChroma: z.function().args(z.number(), z.void()),
	setTone: z.function().args(z.number(), z.void()),
});
type ColorActions = z.infer<typeof ColorActionsSchema>;
const ColorSchema = ColorDataSchema.merge(ColorActionsSchema);
type Color = z.infer<typeof ColorSchema>;

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
	newTone: number
) => {
	const updatedHct = Hct.from(newHue, newChroma, newTone);
	return useColorStore.setState({ hct: updatedHct });
};

// Individual setters for hue, chroma, and tone
const setHue = (newHue: number) =>
	updateHctValues(
		newHue,
		useColorStore.getState().hct.chroma,
		useColorStore.getState().hct.tone
	);
const setChroma = (newChroma: number) =>
	updateHctValues(
		useColorStore.getState().hct.hue,
		newChroma,
		useColorStore.getState().hct.tone
	);
const setTone = (newTone: number) =>
	updateHctValues(
		useColorStore.getState().hct.hue,
		useColorStore.getState().hct.chroma,
		newTone
	);

const hexFromString = (hexColor: string) => cleanedHexColor(hexColor);
const HctFromHex = (hexColor: string) =>
	Hct.fromInt(argbFromHex(hexFromString(hexColor)));
const argbFromHct = (hctColor?: Hct) =>
	hctColor?.toInt() || Hct.from(0, 0, 0).toInt();
const rgbFromHex = (hex: string) => {
	const result = convertHexColorToRgbColor(cleanedHexColor(hex));
	return result !== null ? result : { r: 0, g: 0, b: 0 };
};
const rgbaFromHct = (hct: Hct) => {
	const argb = argbFromHct(hct);
	return rgbaFromArgb(argb);
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

const colorStore: StateCreator<Color> = (set) => ({
	sourceHex: '397456',
	hct: { hue: 0, chroma: 0, tone: 0 },
	rgba: { r: 0, g: 0, b: 0, a: 0 },
	hex: '000000',
	figmaSolidColor: { type: 'SOLID', color: { r: 0, g: 0, b: 0 } },
	setSourceHex: (sourceHex) => set(() => ({ sourceHex: sourceHex })),
	setHct: (hct) => set(() => ({ hct: hct })),
	setRgba: (rgba) => set(() => ({ rgba: rgba })),
	setHex: (hex) => set(() => ({ hex: hex })),
	setFigmaSolidColor: (figmaSolidColor) =>
		set(() => ({ figmaSolidColor: figmaSolidColor })),
	setHue: (hue) => set((state) => ({ hct: { ...state.hct, hue } })),
	setChroma: (chroma) => set((state) => ({ hct: { ...state.hct, chroma } })),
	setTone: (tone) => set((state) => ({ hct: { ...state.hct, tone } })),
});
const useColorStore = create<Color>()((...a) => ({
	...colorStore(...a),
}));

/**
 * Custom hook for managing a color.
 * @param hexColor - The initial hex color string.
 * @returns An object containing the color properties and setter functions.
 */
const useColor = (hexColor: string): Color => {
	const colorStore = useColorStore;
	const color = colorStore((state) => state);

	const sourceHex = color.sourceHex;
	const setSourceHex = (sourceHex: string) => color.setSourceHex(sourceHex);
	const hct = color.hct;
	const setHct = (
		hct: Hct | string | { hue: number; chroma: number; tone: number }
	) => {
		if (typeof hct === 'string') {
			const hctFromString = HctFromHex(hct);
			return color.setHct(hctFromString);
		}
		if (typeof hct === 'object') {
			const hctFromObject = Hct.from(hct.hue, hct.chroma, hct.tone);
			return color.setHct(hctFromObject);
		}
		color.setHct(hct);
	};
	const rgba = color.rgba;
	const setRgba = (
		rgba: string | { r: number; g: number; b: number; a: number }
	) => color.setRgba(rgba);
	const hex = color.hex;
	const setHex = (hex: string) => color.setHex(hex);
	const figmaSolidColor = color.figmaSolidColor;
	const setFigmaSolidColor = (figmaSolidColor: SolidColor) =>
		color.setFigmaSolidColor(figmaSolidColor);

	const sourceHexRef = useRef(colorStore.getState().sourceHex);
	const hctRef = useRef(colorStore.getState().hct);

	useEffect(() => {
		colorStore.subscribe((state) => {
			if (sourceHexRef.current !== state.sourceHex) {
				const newHct = HctFromHex(state.sourceHex);
				sourceHexRef.current = state.sourceHex;
				setHct(newHct);
			}
			if (
				hctRef.current.hue !== state.hct.hue ||
				hctRef.current.chroma !== state.hct.chroma ||
				hctRef.current.tone !== state.hct.tone
			) {
				hctRef.current = state.hct;
				const newHex = hexFromHct(
					Hct.from(state.hct.hue, state.hct.chroma, state.hct.tone)
				);
				setRgba(
					rgbaFromHct(Hct.from(state.hct.hue, state.hct.chroma, state.hct.tone))
				);
				setHex(newHex);
				setFigmaSolidColor(SolidColorFromRgbColor(rgbFromHex(newHex)));
			}
		});
	}, []);

	useEffect(() => {
		if (sourceHex !== hexColor) {
			setSourceHex(hexColor);
		}
	}, []);

	return {
		sourceHex,
		rgba,
		hct,
		hex,
		figmaSolidColor,
		setSourceHex,
		setHct,
		setRgba,
		setHex,
		setFigmaSolidColor,
		setHue,
		setChroma,
		setTone,
	};
};
