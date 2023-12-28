import type { ThemeColor } from './useThemeColor';
import { ThemeColorSchema } from './useThemeColor';
import { AliasSchema } from './useAlias';
import { v4 as uuidv4 } from 'uuid';
import z from 'zod';
import { create, StateCreator } from 'zustand';

export {
	ThemeColorSchema,
	AliasSchema,
	AliasGroupSchema,
	ThemeDataSchema,
	ThemeActionsSchema,
	ThemeSchema,
	type AliasGroup,
	type ThemeData,
	type ThemeActions,
	type Theme,
	useThemeStore,
	useTheme,
};

const AliasGroupSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	aliases: z.array(AliasSchema),
});
type AliasGroup = z.infer<typeof AliasGroupSchema>;

const ThemeDataSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	themeColors: z.array(ThemeColorSchema),
	aliasGroups: z.array(AliasGroupSchema),
});
type ThemeData = z.infer<typeof ThemeDataSchema>;
const ThemeActionsSchema = z.object({
	setId: z.function().args(z.string(), z.void()),
	setName: z.function().args(z.string(), z.void()),
	setThemeColors: z.function().args(z.array(ThemeColorSchema), z.void()),
	addThemeColor: z.function().args(ThemeColorSchema, z.void()),
	removeThemeColor: z.function().args(ThemeColorSchema, z.void()),
	addAliasGroup: z.function().args(AliasGroupSchema, z.void()),
	removeAliasGroup: z.function().args(AliasGroupSchema, z.void()),
});
type ThemeActions = z.infer<typeof ThemeActionsSchema>;
const ThemeSchema = ThemeDataSchema.merge(ThemeActionsSchema);
type Theme = z.infer<typeof ThemeSchema>;

const themeStore: StateCreator<Theme> = (set) => ({
	id: uuidv4(),
	name: 'theme',
	themeColors: [],
	aliasGroups: [],
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
	addAliasGroup: (aliasGroup) => {
		set((state) => {
			const newAliasGroups = [...state.aliasGroups];
			newAliasGroups.push(aliasGroup);
			return { aliasGroups: newAliasGroups };
		});
	},
	removeAliasGroup: (aliasGroup) => {
		set((state) => {
			const newAliasGroups = [...state.aliasGroups];
			const index = newAliasGroups.indexOf(aliasGroup);
			if (index !== -1) {
				newAliasGroups.splice(index, 1);
			}
			return { aliasGroups: newAliasGroups };
		});
	},
});

const useThemeStore = create<Theme>()((...a) => ({
	...themeStore(...a),
}));

/**
 * Custom hook for managing a theme.
 * @param themeName - The initial theme name.
 * @returns An object containing the theme properties and setter functions.
 */
const useTheme = (themeName: string): Theme => {
	const themeStore = useThemeStore;
	const theme = themeStore((state) => state);

	const id = theme.id;
	const setId = (id: string) => theme.setId(id);
	const name = theme.name;
	const setName = (name: string) => theme.setName(name);
	const themeColors = theme.themeColors;
	const setThemeColors = (themeColors: ThemeColor[]) =>
		theme.setThemeColors(themeColors);

	const addThemeColor = (themeColor: ThemeColor) => {
		setThemeColors([...themeColors, themeColor]);
	};

	const removeThemeColor = (themeColor: ThemeColor) => {
		const index = themeColors.indexOf(themeColor);
		if (index !== -1) {
			themeColors.splice(index, 1);
		}
	};
	const aliasGroups = theme.aliasGroups;
	const addAliasGroup = (aliasGroup: AliasGroup) =>
		theme.addAliasGroup(aliasGroup);
	const removeAliasGroup = (aliasGroup: AliasGroup) => {
		const index = aliasGroups.indexOf(aliasGroup);
		if (index !== -1) {
			aliasGroups.splice(index, 1);
		}
	};

	return {
		id,
		name,
		themeColors,
		aliasGroups,
		setId,
		setName,
		setThemeColors,
		addThemeColor,
		removeThemeColor,
		addAliasGroup,
		removeAliasGroup,
	};
};
