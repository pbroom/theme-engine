import type { ThemeColor } from './useThemeColor';
import { ThemeColorSchema } from './useThemeColor';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'preact/hooks';
import z from 'zod';

export const ThemeDataSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	themeColors: z.array(ThemeColorSchema).nullish(),
});
export type ThemeData = z.infer<typeof ThemeDataSchema>;
export const ThemeActionsSchema = z.object({
	setId: z.function().args(z.string(), z.void()),
	setName: z.function().args(z.string(), z.void()),
	setThemeColors: z.function().args(z.array(ThemeColorSchema), z.void()),
	addThemeColor: z.function().args(ThemeColorSchema, z.void()),
	removeThemeColor: z.function().args(ThemeColorSchema, z.void()),
});
export const ThemeSchema = ThemeDataSchema.merge(ThemeActionsSchema);
export type Theme = z.infer<typeof ThemeSchema>;

/**
 * Custom hook for managing a theme.
 * @param themeName - The initial theme name.
 * @returns An object containing the theme properties and setter functions.
 */
const useTheme = (themeName: string): Theme => {
	const [id, setId] = useState<string>(uuidv4());
	const [name, setName] = useState<string>(themeName || 'theme');
	const [themeColors, setThemeColors] = useState<ThemeColor[]>([]);

	const addThemeColor = (themeColor: ThemeColor) => {
		setThemeColors([...themeColors, themeColor]);
	};

	const removeThemeColor = (themeColor: ThemeColor) => {
		const index = themeColors.indexOf(themeColor);
		if (index !== -1) {
			themeColors.splice(index, 1);
		}
	};

	return {
		id,
		name,
		themeColors,
		setId,
		setName,
		setThemeColors,
		addThemeColor,
		removeThemeColor,
	};
};

export default useTheme;
