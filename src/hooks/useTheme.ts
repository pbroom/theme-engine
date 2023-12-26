import type { ThemeColor } from './useThemeColor';
import { ThemeColorSchema } from './useThemeColor';
import { v4 as uuidv4 } from 'uuid';
import z from 'zod';
import { create } from 'zustand';

export const ThemeDataSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	themeColors: z.array(ThemeColorSchema),
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

export const useThemeStore = create<Theme>((set) => ({
	id: uuidv4(),
	name: 'theme',
	themeColors: [],
	setId: (id) => set(() => ({ id })),
	setName: (name) => set(() => ({ name })),
	setThemeColors: (themeColors) => set(() => ({ themeColors })),
	addThemeColor: (themeColor) =>
		set((state) => {
			const newThemeColors = [...state.themeColors];
			newThemeColors.push(themeColor);
			return { themeColors: newThemeColors };
		}),
	removeThemeColor: (themeColor) =>
		set((state) => {
			const newThemeColors = [...state.themeColors];
			const index = newThemeColors.indexOf(themeColor);
			if (index !== -1) {
				newThemeColors.splice(index, 1);
			}
			return { themeColors: newThemeColors };
		}),
}));

/**
 * Custom hook for managing a theme.
 * @param themeName - The initial theme name.
 * @returns An object containing the theme properties and setter functions.
 */
const useTheme = (themeName: string): Theme => {
	const id = useThemeStore((state) => state.id);
	const setId = useThemeStore((state) => state.setId);
	const name = useThemeStore((state) => state.name);
	const setName = useThemeStore((state) => state.setName);
	const themeColors = useThemeStore((state) => state.themeColors);
	const setThemeColors = useThemeStore((state) => state.setThemeColors);
	setName(themeName);

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
