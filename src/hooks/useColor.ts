// import { useState, useEffect } from 'react';
import { useState, useEffect } from 'preact/hooks';
import {
	argbFromHex,
	Hct,
	rgbaFromArgb,
	hexFromArgb,
	Rgba,
} from '@material/material-color-utilities';
import { convertHexColorToRgbColor } from '@create-figma-plugin/utilities';
import z from 'zod';
import validator from 'validator';

export const RgbaSchema = z.object({
	r: z.number().min(0).max(255),
	g: z.number().min(0).max(255),
	b: z.number().min(0).max(255),
	a: z.number().min(0).max(255),
});

export const HctSchema = z.object({
	hue: z.number().min(0).max(360),
	chroma: z.number().min(0).max(150),
	tone: z.number().min(0).max(100),
});

export const SolidColorSchema = z.object({
	type: z.literal('SOLID'),
	color: z.object({
		r: z.number().min(0).max(255),
		g: z.number().min(0).max(255),
		b: z.number().min(0).max(255),
	}),
});

export type SolidColor = z.infer<typeof SolidColorSchema>;

export const ColorDataSchema = z.object({
	sourceHex: z.string(),
	hct: HctSchema,
	rgba: z.union([z.string(), RgbaSchema]),
	hex: z.string().refine(validator.isHexColor),
	figmaSolidColor: SolidColorSchema,
});

export const ColorActionsSchema = z.object({
	setHue: z.function().args(z.number(), z.void()),
	setChroma: z.function().args(z.number(), z.void()),
	setTone: z.function().args(z.number(), z.void()),
});

export type ColorActions = z.infer<typeof ColorActionsSchema>;

export const ColorSchema = ColorDataSchema.merge(ColorActionsSchema);

export type Color = z.infer<typeof ColorSchema>;

/**
 * Custom hook for managing a color.
 * @param hexColor - The initial hex color string.
 * @returns An object containing the color properties and setter functions.
 */
const useColor = (hexColor: string): Color => {
	const [sourceHex, setSourceHex] = useState<string>(hexColor);
	const [rgba, setRgba] = useState<string | Rgba>('');
	const [hct, setHct] = useState<Hct>(Hct.fromInt(argbFromHex(hexColor)));
	const [hex, setHex] = useState<string>(hexColor);
	const [figmaSolidColor, setFigmaSolidColor] = useState<SolidColor>({
		type: 'SOLID',
		color: { r: 0, g: 0, b: 0 },
	});

	const cleanedHexColor = (hexColor: string) => {
		return hexColor.startsWith('#') ? hexColor.slice(1) : hexColor;
	};

	useEffect(() => {
		const newHexColor = cleanedHexColor(hexColor);
		const newArgb = argbFromHex(newHexColor);
		const newHct = Hct.fromInt(newArgb);

		setHct(newHct); // This will trigger the second useEffect
		setSourceHex(newHexColor);
	}, [hexColor]);

	// Function to update HCT values and dependent properties
	const updateHctValues = (
		newHue: number,
		newChroma: number,
		newTone: number
	) => {
		const updatedHct = Hct.from(newHue, newChroma, newTone);
		setHct(updatedHct);
	};

	// Individual setters for hue, chroma, and tone
	const setHue = (newHue: number) =>
		updateHctValues(newHue, hct.chroma, hct.tone);
	const setChroma = (newChroma: number) =>
		updateHctValues(hct.hue, newChroma, hct.tone);
	const setTone = (newTone: number) =>
		updateHctValues(hct.hue, hct.chroma, newTone);

	useEffect(() => {
		const argb = hct.toInt();
		setRgba(rgbaFromArgb(argb));
		setHex(hexFromArgb(argb));
		const rgbColor = convertHexColorToRgbColor(cleanedHexColor(hex));
		const red = rgbColor?.r ?? 0;
		const green = rgbColor?.g ?? 0;
		const blue = rgbColor?.b ?? 0;
		const solidColor: SolidColor = {
			type: 'SOLID',
			color: { r: red, g: green, b: blue },
		};
		setFigmaSolidColor(solidColor);
	}, [hct]);

	return {
		sourceHex,
		rgba,
		hct,
		hex,
		figmaSolidColor,
		setHue,
		setChroma,
		setTone,
	};
};

export default useColor;
