import type { Theme } from './useTheme';
import { ThemeSchema } from './useTheme';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import z from 'zod';

export const ThemeListDataSchema = z.object({
	id: z.string().uuid(),
	themes: z.array(ThemeSchema).nullish(),
});

export type ThemeListData = z.infer<typeof ThemeListDataSchema>;

export const ThemeListActionsSchema = z.object({
	setId: z.function().args(z.string(), z.void()),
	setThemes: z.function().args(z.array(ThemeSchema), z.void()),
	addTheme: z.function().args(ThemeSchema, z.void()),
	removeTheme: z.function().args(ThemeSchema, z.void()),
});

export const ThemeListSchema = ThemeListDataSchema.merge(
	ThemeListActionsSchema
);

export type ThemeList = z.infer<typeof ThemeListSchema>;

const useThemeList = (): ThemeList => {
	const [id, setId] = useState<string>(uuidv4());
	const [themes, setThemes] = useState<Theme[]>([]);

	const addTheme = (theme: Theme) => {
		setThemes([...themes, theme]);
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
