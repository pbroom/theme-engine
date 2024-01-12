import type { Theme } from './useTheme';
import { useTheme, ThemeSchema } from './useTheme';
import { v4 as uuidv4 } from 'uuid';
import z from 'zod';
import { create } from 'zustand';

export const ThemeListDataSchema = z.object({
	id: z.string().uuid(),
	themes: z.array(ThemeSchema),
});
export type ThemeListData = z.infer<typeof ThemeListDataSchema>;
export const ThemeListActionsSchema = z.object({
	setId: z.function().args(z.string(), z.void()),
	setThemes: z.function().args(z.array(ThemeSchema), z.void()),
	addTheme: z.function().args(z.string(), z.void()),
	removeTheme: z.function().args(ThemeSchema, z.void()),
});
export const ThemeListSchema = ThemeListDataSchema.merge(
	ThemeListActionsSchema
);
export type ThemeList = z.infer<typeof ThemeListSchema>;

export const useThemeListStore = create<ThemeList>((set) => ({
	id: uuidv4(),
	themes: [],
	setId: (id) => set(() => ({ id })),
	setThemes: (themes) => set(() => ({ themes })),
	addTheme: (themeName) =>
		set((state) => {
			const newThemes = [...state.themes];
			newThemes.push(useTheme(themeName));
			return { themes: newThemes };
		}),
	removeTheme: (theme) =>
		set((state) => {
			const newThemes = [...state.themes];
			const index = newThemes.indexOf(theme);
			if (index !== -1) {
				newThemes.splice(index, 1);
			}
			return { themes: newThemes };
		}),
}));

const useThemeList = (themeList?: Theme[]): ThemeList => {
	const id = useThemeListStore((state) => state.id);
	const setId = useThemeListStore((state) => state.setId);
	const themes = useThemeListStore((state) => state.themes);
	const setThemes = useThemeListStore((state) => state.setThemes);

	/**
	 * Adds a new theme to the theme list.
	 *
	 * @param {string} themeName - The name of the theme to add.
	 */
	const addTheme = (themeName: string) => {
		const newTheme = useTheme(themeName);
		setThemes([...themes, newTheme]);
	};

	const removeTheme = (theme: Theme) => {
		const index = themes.indexOf(theme);
		if (index !== -1) {
			themes.splice(index, 1);
		}
	};

	return {
		id,
		themes,
		setId,
		setThemes,
		addTheme,
		removeTheme,
	};
};

export default useThemeList;
