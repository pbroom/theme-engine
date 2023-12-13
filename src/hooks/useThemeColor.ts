import useColor from './useColor';
import { ColorSchema } from './useColor';
import type { Color, ColorActions } from './useColor';
import {
	getStopsFromString,
	convertNumberToStringArray,
} from '../lib/color-utils';
import { maxChromaAtTonePerHue } from '../ref';
import useAlias from './useAlias';
import { AliasSchema } from './useAlias';
import type { Alias } from './useAlias';
import { e, evaluate } from 'mathjs';
import { useState, useEffect } from 'preact/hooks';
import { v4 as uuidv4 } from 'uuid';
import z from 'zod';

export const ThemeColorDataSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	sourceColor: ColorSchema,
	themeColor: ColorSchema,
	tones: z.array(z.number()).nullish(),
	hueCalc: z.string(),
	chromaCalc: z.string(),
	aliases: z.array(AliasSchema).nullish(),
});

export const ThemeColorActionsSchema = z.object({
	setId: z.function().args(z.string(), z.void()),
	setName: z.function().args(z.string(), z.void()),
	setSourceColor: z.function().args(ColorSchema, z.void()),
	setTones: z.function().args(z.array(z.number()), z.void()),
	setHueCalc: z.function().args(z.string(), z.void()),
	setChromaCalc: z.function().args(z.string(), z.void()),
	setAliases: z.function().args(z.array(AliasSchema), z.void()),
});

type ThemeColorActions = z.infer<typeof ThemeColorActionsSchema>;

export const ThemeColorSchema = ThemeColorDataSchema.merge(
	ThemeColorActionsSchema
);

export type ThemeColor = z.infer<typeof ThemeColorSchema>;

const useThemeColor = (color: string): ThemeColor & ThemeColorActions => {
	const [id, setId] = useState<string>(uuidv4());
	const [name, setName] = useState<string>('color');
	const [sourceColor, setSourceColor] = useState<Color>(useColor(color));
	const [themeColor, setThemeColor] = useState<Color>(useColor(color));
	const [tones, setTones] = useState<number[]>([]);
	const [hueCalc, setHueCalc] = useState<string>('');
	const [chromaCalc, setChromaCalc] = useState<string>('');
	const [aliases, setAliases] = useState<Alias[]>([]);

	const calculateHue = () => {
		// Check if hueCalc is empty or just whitespace
		if (!hueCalc.trim()) {
			themeColor.hct.hue = sourceColor.hct.hue;
			return;
		}

		try {
			// Get source hue
			const sourceHue = sourceColor.hct.hue;
			// Replace 'h' regardless of its case
			const parsedHueCalc = hueCalc.replace(/h/gi, sourceHue.toString());
			// Evaluate parsedHueCalc
			const evaluatedHue = Math.abs((evaluate(parsedHueCalc) as number) % 360);

			// Hue equals absolute value of evaluatedHue modulo 360
			const newThemeColor = sourceColor;
			newThemeColor.hct.hue = evaluatedHue;
			setThemeColor(newThemeColor);
		} catch (error) {
			console.error('Invalid expression:', error);

			// Try to evaluate the expression up to the offending character
			let lastValidHue = NaN;
			for (let i = hueCalc.length - 1; i >= 0; i--) {
				const truncatedExpression = hueCalc.substring(0, i);
				try {
					lastValidHue = evaluate(
						truncatedExpression.replace(/h/gi, sourceColor.hct.hue.toString())
					) as number;
					break; // Stop the loop if we successfully evaluate the expression
				} catch (e) {
					// Continue truncating
				}
			}
			// Set hue to the last successfully evaluated value, or the default hue if none was successful
			const hue = !isNaN(lastValidHue)
				? Math.abs(lastValidHue % 360)
				: sourceColor.hct.hue;
			themeColor.setHue(hue);
		}
	};

	useEffect(() => {
		setThemeColor(useColor(color));
	}, [sourceColor]);

	// update themeColor when sourceColor, hueCalc, or chromaCalc changes
	useEffect(() => {
		if (sourceColor && hueCalc && chromaCalc) {
			const color = sourceColor;
			const hue = calculateHue();
		}
	}, [sourceColor, hueCalc, chromaCalc]);

	return {
		id,
		name,
		sourceColor,
		themeColor,
		tones,
		hueCalc,
		chromaCalc,
		aliases,
		setId,
		setName,
		setSourceColor,
		setTones,
		setHueCalc,
		setChromaCalc,
		setAliases,
	};
};

export default useThemeColor;
