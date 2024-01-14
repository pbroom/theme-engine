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
import { AliasDataSchema } from './useAlias';
import { e, evaluate, i, round } from 'mathjs';
import { useEffect, useRef } from 'preact/hooks';
import { nanoid } from 'nanoid';
import z from 'zod';
import { create, StateCreator } from 'zustand';
import { Hct } from '@material/material-color-utilities';

export {
	ThemeColorSchema,
	ThemeColorDataSchema,
	ThemeColorActionsSchema,
	type AliasData,
	type AddAliasReturn,
	type ThemeColorData,
	type ThemeColorActions,
	type ThemeColor,
	themeColorDataStore,
	useThemeColorDataStore,
	themeColorActionsStore,
	useThemeColorActionsStore,
	themeColorStore,
	useThemeColorStore,
	useThemeColor,
};

const AddAliasReturnSchema = z.object({
	alias: AliasDataSchema,
});

type AddAliasReturn = z.infer<typeof AddAliasReturnSchema>;
type AliasData = z.infer<typeof AliasDataSchema>;

const AliasMethodsSchema = z.object({
	alias: AliasDataSchema,
	setName: z.function(z.tuple([z.string()])),
	setTone: z.function(z.tuple([z.union([z.string(), z.number()]), z.number()])),
	setTones: z.function(z.tuple([z.number(), z.number()])),
	remove: z.function(),
});

const AliasFunctionSchema = z
	.function(z.tuple([z.string()]))
	.returns(AliasMethodsSchema);

const ThemeColorDataSchema = z.object({
	id: z.string(),
	name: z.string(),
	sourceHex: z.string(),
	sourceColor: ColorSchema,
	endColor: ColorSchema,
	tones: z.array(z.number()),
	hueCalc: z.string(),
	chromaCalc: z.string(),
	aliases: z.array(AliasDataSchema),
});
type ThemeColorData = z.infer<typeof ThemeColorDataSchema>;

const baseColor: Color = useColorStore.getState();
const color: Color = {
	...baseColor,
	sourceHex: '397456',
	hct: Hct.from(163, 33, 44),
	rgba: rgbaFromHct(Hct.from(145, 40, 50)),
	hex: hexFromHct(Hct.from(145, 40, 50)),
};

const themeColorDataStore: StateCreator<ThemeColorData> = () => ({
	id: nanoid(12),
	name: 'color',
	sourceHex: '397456',
	sourceColor: color,
	endColor: color,
	tones: [
		0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100, 4, 5, 6, 12, 17, 22, 24,
		25, 35, 87, 92, 94, 96, 98,
	],
	hueCalc: '163',
	chromaCalc: '33',
	aliases: [],
});

const useThemeColorDataStore = create<ThemeColorData>((...a) => ({
	...themeColorDataStore(...a),
}));

const ThemeColorActionsSchema = z.object({
	set: z.object({
		id: z.function().args(z.string(), z.void()),
		name: z.function().args(z.string(), z.void()),
		sourceHex: z.function().args(z.string(), z.void()),
		sourceColor: z.function().args(ColorSchema, z.void()),
		endColor: z.function().args(ColorSchema, z.void()),
		tones: z.function().args(z.array(z.number()), z.void()),
		hueCalc: z.function().args(z.string(), z.void()),
		chromaCalc: z.function().args(z.string(), z.void()),
		aliases: z.function().args(z.array(AliasDataSchema), z.void()),
		addAlias: z.function(z.tuple([]), AddAliasReturnSchema),
		alias: AliasFunctionSchema,
	}),
});
type ThemeColorActions = z.infer<typeof ThemeColorActionsSchema>;

const themeColorActionsStore: StateCreator<ThemeColorActions> = (set) => ({
	set: {
		id: (id) => set((state) => ({ ...state, id: id })),
		name: (name) => set((state) => ({ ...state, name: name })),
		sourceHex: (sourceHex) =>
			set((state) => ({
				...state,
				sourceHex: sourceHex,
				sourceColor: { ...state, sourceHex },
			})),
		sourceColor: (sourceColor) =>
			set((state) => ({ ...state, sourceColor: sourceColor })),
		endColor: (endColor) => set((state) => ({ ...state, endColor: endColor })),
		tones: (tones) => set((state) => ({ ...state, tones: tones })),
		hueCalc: (hueCalc) => set((state) => ({ ...state, hueCalc: hueCalc })),
		chromaCalc: (chromaCalc) =>
			set((state) => ({ ...state, chromaCalc: chromaCalc })),
		aliases: (aliases) => set((state) => ({ ...state, aliases: aliases })),
		addAlias: (): AddAliasReturn => {
			const alias: AliasData = {
				id: nanoid(12),
				name: 'Alias',
				color: [
					{ mode: 'light', tone: 100 },
					{ mode: 'dark', tone: 0 },
				],
			};
			const state = useThemeColorStore.getState();
			const newAliases = [...state.aliases];
			newAliases.push(alias);
			set((state) => ({ ...state, aliases: newAliases }));
			return { alias };
		},
		alias: (id: string) => {
			const state = useThemeColorStore.getState();
			const requestedAlias: AliasData | undefined = state.aliases.find(
				(alias) => alias.id === id
			);
			if (!requestedAlias) {
				throw new Error('Alias not found');
			}
			const alias: AliasData = requestedAlias;
			const setName = (name: string) => {
				const newAliases = [...state.aliases];
				const aliasToUpdate = newAliases.find((alias) => alias.id === id);
				if (aliasToUpdate) {
					aliasToUpdate.name = name;
				}
				set((state) => ({ ...state, aliases: newAliases }));
			};
			const setTone = (mode: string | number, tone: number) => {
				const newAliases = [...state.aliases];
				const aliasToUpdate = newAliases.find((alias) => alias.id === id);
				if (aliasToUpdate) {
					if (typeof mode === 'string') {
						const colorToUpdate = aliasToUpdate.color.find(
							(color) => color.mode === mode
						);
						if (colorToUpdate) {
							colorToUpdate.tone = tone;
						}
					} else if (typeof mode === 'number') {
						if (mode >= 0 && mode < aliasToUpdate.color.length) {
							aliasToUpdate.color[mode].tone = tone;
						}
					}
				}
				set((state) => ({ ...state, aliases: newAliases }));
			};
			const setTones = (firstTone: number, secondTone: number) => {
				const newAliases = [...state.aliases];
				const aliasToUpdate = newAliases.find((alias) => alias.id === id);
				if (aliasToUpdate) {
					aliasToUpdate.color[0].tone = firstTone;
					aliasToUpdate.color[1].tone = secondTone;
				}
				set((state) => ({ ...state, aliases: newAliases }));
			};
			const remove = () => {
				const newAliases = [...state.aliases];
				const index = newAliases.indexOf(alias);
				if (index > -1) {
					newAliases.splice(index, 1);
				}
				set((state) => ({ ...state, aliases: newAliases }));
			};
			return { alias, setName, setTone, setTones, remove };
		},
	},
});

const useThemeColorActionsStore = create<ThemeColorActions>((...a) => ({
	...themeColorActionsStore(...a),
}));

const ThemeColorSchema = ThemeColorDataSchema.merge(ThemeColorActionsSchema);
type ThemeColor = ThemeColorData & ThemeColorActions;

const themeColorStore: StateCreator<ThemeColor> = (set) => ({
	id: nanoid(12),
	name: 'color',
	sourceHex: color.sourceHex,
	sourceColor: color,
	endColor: color,
	tones: [
		0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100, 4, 5, 6, 12, 17, 22, 24,
		25, 35, 87, 92, 94, 96, 98,
	],
	hueCalc: '163',
	chromaCalc: '33',
	aliases: [],
	set: {
		id: (id) => set(() => ({ id: id })),
		name: (name) => set(() => ({ name: name })),
		sourceHex: (sourceHex) =>
			set((state) => ({
				sourceHex: sourceHex,
				sourceColor: { ...state.sourceColor, sourceHex },
			})),
		sourceColor: (sourceColor) => set(() => ({ sourceColor: sourceColor })),
		endColor: (endColor) => set(() => ({ endColor: endColor })),
		tones: (tones) => set(() => ({ tones: tones })),
		hueCalc: (hueCalc) => set(() => ({ hueCalc: hueCalc })),
		chromaCalc: (chromaCalc) => set(() => ({ chromaCalc: chromaCalc })),
		aliases: (aliases) => set(() => ({ aliases: aliases })),
		addAlias: (): AddAliasReturn => {
			const alias: AliasData = {
				id: nanoid(12),
				name: 'Alias',
				color: [
					{ mode: 'light', tone: 100 },
					{ mode: 'dark', tone: 0 },
				],
			};
			const state = useThemeColorStore.getState();
			const newAliases = [...state.aliases];
			newAliases.push(alias);
			set(() => ({ aliases: newAliases }));
			return { alias };
		},
		alias: (id: string) => {
			const state = useThemeColorStore.getState();
			const requestedAlias: AliasData | undefined = state.aliases.find(
				(alias) => alias.id === id
			);
			if (!requestedAlias) {
				throw new Error('Alias not found');
			}
			const alias: AliasData = requestedAlias;
			const setName = (name: string) => {
				const newAliases = [...state.aliases];
				const aliasToUpdate = newAliases.find((alias) => alias.id === id);
				if (aliasToUpdate) {
					aliasToUpdate.name = name;
				}
				set(() => ({ aliases: newAliases }));
			};
			const setTone = (mode: string | number, tone: number) => {
				const newAliases = [...state.aliases];
				const aliasToUpdate = newAliases.find((alias) => alias.id === id);
				if (aliasToUpdate) {
					if (typeof mode === 'string') {
						const colorToUpdate = aliasToUpdate.color.find(
							(color) => color.mode === mode
						);
						if (colorToUpdate) {
							colorToUpdate.tone = tone;
						}
					} else if (typeof mode === 'number') {
						if (mode >= 0 && mode < aliasToUpdate.color.length) {
							aliasToUpdate.color[mode].tone = tone;
						}
					}
				}
				set(() => ({ aliases: newAliases }));
			};
			const setTones = (firstTone: number, secondTone: number) => {
				const newAliases = [...state.aliases];
				const aliasToUpdate = newAliases.find((alias) => alias.id === id);
				if (aliasToUpdate) {
					aliasToUpdate.color[0].tone = firstTone;
					aliasToUpdate.color[1].tone = secondTone;
				}
				set(() => ({ aliases: newAliases }));
			};
			const remove = () => {
				const newAliases = [...state.aliases];
				const index = newAliases.indexOf(alias);
				if (index > -1) {
					newAliases.splice(index, 1);
				}
				set(() => ({ aliases: newAliases }));
			};
			return { alias, setName, setTone, setTones, remove };
		},
	},
});

const useThemeColorStore = create<ThemeColor>()((...a) => ({
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
	// const setId = (id: string) => themeColor.setId(id);
	const setId = (id: string) => themeColorStore.setState({ id: id });
	const name = themeColor.name;
	const setName = (name: string) => themeColor.set.name(name);
	const sourceHex = themeColor.sourceHex;
	const setSourceHex = (sourceHex: string) => {
		const newColor = themeColor.sourceColor;
		const newSourceColor: Color = { ...newColor, sourceHex: sourceHex };
		themeColor.set.sourceColor(newSourceColor);
		themeColor.set.sourceHex(sourceHex);
	};
	const sourceColor = themeColor.sourceColor;
	const setSourceColor = (sourceColor: Color) =>
		themeColor.set.sourceColor(sourceColor);
	const endColor = themeColor.endColor;
	const setEndColor = (endColor: Color) => themeColor.set.endColor(endColor);
	const tones = themeColor.tones;
	const setTones = (tones: number[]) => themeColor.set.tones(tones);
	const hueCalc = themeColor.hueCalc;
	const setHueCalc = (hueCalc: string) => themeColor.set.hueCalc(hueCalc);
	const chromaCalc = themeColor.chromaCalc;
	const setChromaCalc = (chromaCalc: string) =>
		themeColor.set.chromaCalc(chromaCalc);
	const aliases = themeColor.aliases;
	const setAliases = (aliases: AliasData[]) => themeColor.set.aliases(aliases);

	// TODO: convert to standalone function
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

	// TODO: convert to standalone function
	const calculateChroma = (chromaValue: number, chromaCalcValue: string) => {
		const chromaCalc = chromaCalcValue || themeColor.chromaCalc;
		// Get source chroma
		const sourceChroma = chromaValue || sourceColor.hct.chroma;
		// Check if chromaCalc is empty or just whitespace
		if (!chromaCalc.trim() || chromaCalc === '') {
			return sourceChroma;
		}
		try {
			// Replace 'c' regardless of its case
			const parsedChromaCalc = chromaCalc.replace(
				/c/gi,
				sourceChroma.toString()
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
						truncatedExpression.replace(/c/gi, sourceChroma.toString())
					);
					break;
				} catch (error) {
					continue;
				}
			}
			return lastValidChroma;
		}
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

	/**
	 * Adds a new alias to the list of aliases.
	 */
	const addAlias = () => {
		const alias: AliasData = {
			id: nanoid(12),
			name: 'Alias',
			color: [
				{ mode: 'light', tone: 80 },
				{ mode: 'dark', tone: 20 },
			],
		};
		const newAliases = [...aliases];
		newAliases.push(alias);
		setAliases(newAliases);
		return { alias };
	};

	const alias = (id: string) => {
		const requestedAlias: AliasData | undefined = aliases.find(
			(alias) => alias.id === id
		);
		if (!requestedAlias) {
			throw new Error('Alias not found');
		}
		const alias: AliasData = requestedAlias;
		const setName = (name: string) => {
			const newAliases = [...aliases];
			const aliasToUpdate = newAliases.find((alias) => alias.id === id);
			if (aliasToUpdate) {
				aliasToUpdate.name = name;
			}
			setAliases(newAliases);
		};
		const setTone = (mode: string | number, tone: number) => {
			const newAliases = [...aliases];
			const aliasToUpdate = newAliases.find((alias) => alias.id === id);
			if (aliasToUpdate) {
				if (typeof mode === 'string') {
					const colorToUpdate = aliasToUpdate.color.find(
						(color) => color.mode === mode
					);
					if (colorToUpdate) {
						colorToUpdate.tone = tone;
					}
				} else if (typeof mode === 'number') {
					if (mode >= 0 && mode < aliasToUpdate.color.length) {
						aliasToUpdate.color[mode].tone = tone;
					}
				}
			}
			setAliases(newAliases);
		};
		const setTones = (firstTone: number, secondTone: number) => {
			const newAliases = [...aliases];
			const aliasToUpdate = newAliases.find((alias) => alias.id === id);
			if (aliasToUpdate) {
				aliasToUpdate.color[0].tone = firstTone;
				aliasToUpdate.color[1].tone = secondTone;
			}
			setAliases(newAliases);
		};
		const remove = () => {
			const newAliases = [...aliases];
			const index = newAliases.indexOf(alias);
			if (index > -1) {
				newAliases.splice(index, 1);
			}
			setAliases(newAliases);
		};
		return { alias, setName, setTone, setTones, remove };
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
		set: {
			id: setId,
			name: setName,
			sourceHex: setSourceHex,
			sourceColor: setSourceColor,
			endColor: setEndColor,
			tones: setTones,
			hueCalc: setHueCalc,
			chromaCalc: setChromaCalc,
			aliases: setAliases,
			addAlias: addAlias,
			alias: alias,
		},
	};
};