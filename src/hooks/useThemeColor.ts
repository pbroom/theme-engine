import {
	useColor,
	Color,
	HctFromHex,
	SolidColorFromRgbColor,
	hexFromHct,
	rgbFromHex,
	rgbaFromHct,
	useColorStore,
} from './useColor';
import { ColorSchema } from './useColor';
import { maxChromaAtTonePerHue } from '../ref';
import { AliasSchema } from './useAlias';
import type { Alias } from './useAlias';
import { e, evaluate, i, round } from 'mathjs';
import { useEffect, useRef } from 'preact/hooks';
import { v4 as uuidv4 } from 'uuid';
import z from 'zod';
import { create, StateCreator } from 'zustand';
import { Hct } from '@material/material-color-utilities';

export const ThemeColorDataSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	sourceHex: z.string(),
	sourceColor: ColorSchema,
	endColor: ColorSchema,
	tones: z.array(z.number()),
	hueCalc: z.string(),
	chromaCalc: z.string(),
	aliases: z.array(AliasSchema),
});
export type ThemeColorData = z.infer<typeof ThemeColorDataSchema>;
export const ThemeColorActionsSchema = z.object({
	setId: z.function().args(z.string(), z.void()),
	setName: z.function().args(z.string(), z.void()),
	setSourceHex: z.function().args(z.string(), z.void()),
	setSourceColor: z.function().args(ColorSchema, z.void()),
	setEndColor: z.function().args(ColorSchema, z.void()),
	setTones: z.function().args(z.array(z.number()), z.void()),
	setHueCalc: z.function().args(z.string(), z.void()),
	setChromaCalc: z.function().args(z.string(), z.void()),
	setAliases: z.function().args(z.array(AliasSchema), z.void()),
	addAlias: z.function().args(AliasSchema, z.void()),
	removeAlias: z.function().args(AliasSchema, z.void()),
});
type ThemeColorActions = z.infer<typeof ThemeColorActionsSchema>;
export const ThemeColorSchema = ThemeColorDataSchema.merge(
	ThemeColorActionsSchema
);
export type ThemeColor = z.infer<typeof ThemeColorSchema>;

const color = useColorStore.getState();

export const themeColorStore: StateCreator<ThemeColor> = (set) => ({
	id: uuidv4(),
	name: 'color',
	sourceHex: color.sourceHex,
	sourceColor: color,
	endColor: color,
	tones: [
		0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100, 4, 5, 6, 12, 17, 22, 24,
		25, 35, 87, 92, 94, 96, 98,
	],
	hueCalc: '',
	chromaCalc: '',
	aliases: [],
	setId: (id) => set(() => ({ id: id })),
	setName: (name) => set(() => ({ name: name })),
	setSourceHex: (sourceHex) =>
		set((state) => ({
			sourceHex: sourceHex,
			sourceColor: { ...state.sourceColor, sourceHex },
		})),
	setSourceColor: (sourceColor) => set(() => ({ sourceColor: sourceColor })),
	setEndColor: (endColor) => set(() => ({ endColor: endColor })),
	setTones: (tones) => set(() => ({ tones: tones })),
	setHueCalc: (hueCalc) => set(() => ({ hueCalc: hueCalc })),
	setChromaCalc: (chromaCalc) => set(() => ({ chromaCalc: chromaCalc })),
	setAliases: (aliases) => set(() => ({ aliases: aliases })),
	addAlias: (alias) =>
		set((state) => {
			const newAliases = [...state.aliases];
			newAliases.push(alias);
			return { aliases: newAliases };
		}),
	removeAlias: (alias) =>
		set((state) => {
			const newAliases = [...state.aliases];
			const index = newAliases.indexOf(alias);
			if (index > -1) {
				newAliases.splice(index, 1);
			}
			return { aliases: newAliases };
		}),
});

export const useThemeColorStore = create<ThemeColor>()((...a) => ({
	...themeColorStore(...a),
}));

/**
 * Custom hook that provides theme color functionality.
 *
 * @param hexColor - The hexadecimal color value.
 * @returns An object containing various theme color properties and methods.
 */
const useThemeColor = (hexColor: string): ThemeColor => {
	const color = useColor(hexColor);

	const themeColorStore = useThemeColorStore;
	const themeColor = themeColorStore((state) => state);
	const id = themeColor.id;
	const setId = (id: string) => themeColor.setId(id);
	const name = themeColor.name;
	const setName = (name: string) => themeColor.setName(name);
	const sourceHex = themeColor.sourceHex;
	const setSourceHex = (sourceHex: string) => {
		const newColor = themeColor.sourceColor;
		const newSourceColor: Color = { ...newColor, sourceHex: sourceHex };
		themeColor.setSourceColor(newSourceColor);
		themeColor.setSourceHex(sourceHex);
	};
	const sourceColor = themeColor.sourceColor;
	const setSourceColor = (sourceColor: Color) =>
		themeColor.setSourceColor(sourceColor);
	const endColor = themeColor.endColor;
	const setEndColor = (endColor: Color) => themeColor.setEndColor(endColor);
	const tones = themeColor.tones;
	const setTones = (tones: number[]) => themeColor.setTones(tones);
	const hueCalc = themeColor.hueCalc;
	const setHueCalc = (hueCalc: string) => themeColor.setHueCalc(hueCalc);
	const chromaCalc = themeColor.chromaCalc;
	const setChromaCalc = (chromaCalc: string) =>
		themeColor.setChromaCalc(chromaCalc);
	const aliases = themeColor.aliases;
	const setAliases = (aliases: Alias[]) => themeColor.setAliases(aliases);

	const calculateHue = (hueValue: number, hueCalcValue: string) => {
		const hueCalc = hueCalcValue || themeColor.hueCalc;
		// Get source hue
		const sourceHue = hueValue || sourceColor.hct.hue;
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
						truncatedExpression.replace(/h/gi, sourceHue.toString())
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

	const calculateChroma = (chromaValue: number, chromaCalcValue: string) => {
		let chroma = chromaValue || sourceColor.hct.chroma;
		const chromaCalc = chromaCalcValue || themeColor.chromaCalc;
		if (chromaCalc !== '') {
			let sourceChroma = sourceColor.hct.chroma;
			let sourceHue = sourceColor.hct.hue;
			let maxChroma = maxChromaAtTonePerHue[round(sourceHue)].chroma;
			console.log('maxChroma', maxChroma);
			let parsedChromaCalc = chromaCalc.replace(/c/g, sourceChroma.toString());
			chroma = evaluate(parsedChromaCalc) as number;
			if (chroma < 0) {
				chroma = 0;
			}
			if (chroma > maxChroma) {
				chroma = maxChroma;
			}
			chroma = Math.round(chroma);
		}
		console.log('chroma', chroma);
		return chroma;
	};

	const sourceHexRef = useRef(sourceColor.sourceHex);
	const chromaCalcRef = useRef(chromaCalc);
	const hueCalcRef = useRef(hueCalc);

	useEffect(() => {
		themeColorStore.subscribe((state) => {
			if (sourceHexRef.current !== state.sourceColor.sourceHex) {
				sourceHexRef.current = state.sourceColor.sourceHex;
				const newSourceHex = state.sourceColor.sourceHex;
				const newHct = HctFromHex(newSourceHex);
				const hueCalc = state.hueCalc;
				const chromaCalc = state.chromaCalc;
				const newSourceColor: Color = {
					...color,
					sourceHex: newSourceHex,
					hct: newHct,
					rgba: rgbaFromHct(newHct),
					hex: hexFromHct(newHct),
					figmaSolidColor: SolidColorFromRgbColor(
						rgbFromHex(hexFromHct(newHct))
					),
				};
				setSourceColor(newSourceColor);
				setSourceHex;
				const endHct = Hct.from(
					calculateHue(newSourceColor.hct.hue, hueCalc),
					calculateChroma(newSourceColor.hct.chroma, chromaCalc),
					newSourceColor.hct.tone
				);
				const newEndColor: Color = {
					...newSourceColor,
					hct: endHct,
					rgba: rgbaFromHct(endHct),
					hex: hexFromHct(endHct),
					figmaSolidColor: SolidColorFromRgbColor(
						rgbFromHex(hexFromHct(endHct))
					),
				};
				setEndColor(newEndColor);
			}

			if (hueCalcRef.current !== state.hueCalc) {
				hueCalcRef.current = state.hueCalc;
				const hueCalc = state.hueCalc;
				const chromaCalc = state.chromaCalc;
				const newColor = state.sourceColor;
				const endHct = Hct.from(
					calculateHue(newColor.hct.hue, hueCalc),
					calculateChroma(newColor.hct.chroma, chromaCalc),
					newColor.hct.tone
				);
				const newEndColor: Color = {
					...newColor,
					hct: endHct,
					rgba: rgbaFromHct(endHct),
					hex: hexFromHct(endHct),
					figmaSolidColor: SolidColorFromRgbColor(
						rgbFromHex(hexFromHct(endHct))
					),
				};
				setEndColor(newEndColor);
			}

			if (chromaCalcRef.current !== state.chromaCalc) {
				chromaCalcRef.current = state.chromaCalc;
				const newColor = state.sourceColor;
				const hueCalc = state.hueCalc;
				const chromaCalc = state.chromaCalc;
				const endHct = Hct.from(
					calculateHue(newColor.hct.hue, hueCalc),
					calculateChroma(newColor.hct.chroma, chromaCalc),
					newColor.hct.tone
				);
				const newEndColor: Color = {
					...newColor,
					hct: endHct,
					rgba: rgbaFromHct(endHct),
					hex: hexFromHct(endHct),
					figmaSolidColor: SolidColorFromRgbColor(
						rgbFromHex(hexFromHct(endHct))
					),
				};
				setEndColor(newEndColor);
			}
		});
	}, []);

	const addAlias = (alias: Alias) => {
		const newAliases = [...aliases];
		newAliases.push(alias);
		setAliases(newAliases);
	};

	// TODO: Add setAlias function
	const setAlias = (alias: Alias) => {
		const newAliases = [...aliases];
		const name = (aliasName: string) => {
			const newAlias = { ...alias, name: aliasName };
		};
		const colorForMode = (mode: string | number, tone: number) => {
			const newAlias = { ...alias, color: [{ mode: mode, tone: tone }] };
		};
		const index = newAliases.findIndex((newAlias) => newAlias.id === alias.id);
		if (index > -1) {
			newAliases[index] = alias;
		}
		setAliases(newAliases);
		return { name, colorForMode };
	};

	const removeAlias = (alias: Alias) => {
		const newAliases = [...aliases];
		const index = newAliases.indexOf(alias);
		if (index > -1) {
			newAliases.splice(index, 1);
		}
		setAliases(newAliases);
	};

	useEffect(() => {
		if (sourceColor.sourceHex !== hexColor) {
			const newSourceColor = useColor(hexColor);
			setSourceColor(newSourceColor);
		}
	}, []);

	return {
		id,
		name,
		sourceHex,
		sourceColor,
		endColor,
		tones,
		hueCalc,
		chromaCalc,
		aliases,
		setId,
		setName,
		setSourceHex,
		setSourceColor,
		setEndColor,
		setTones,
		setHueCalc,
		setChromaCalc,
		setAliases,
		addAlias,
		removeAlias,
	};
};

export default useThemeColor;
