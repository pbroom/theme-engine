import type { ThemeColor } from './useThemeColor';
import useThemeColor, {
	ThemeColorSchema,
	useThemeColorStore,
} from './useThemeColor';
import useAlias, { AliasSchema, useAliasStore } from './useAlias';
import { v4 as uuidv4 } from 'uuid';
import z from 'zod';
import { create, StateCreator } from 'zustand';
import { useColor } from './useColor';
import { useEffect } from 'preact/hooks';
import { nanoid } from 'nanoid';
import { re } from 'mathjs';

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

const ThemeColorFunctionSchema = z.function(z.tuple([z.string()])).returns(
	z.object({
		themeColor: ThemeColorSchema,
		remove: z.function().args(z.void()),
	})
);

const AliasGroupDataSchema = z.object({
	id: z.string().uuid(),
	name: z.string(),
	themeColors: z.array(z.string().uuid()),
	aliases: z.array(AliasSchema),
});
type AliasGroupData = z.infer<typeof AliasGroupSchema>;
const AliasGroupActionsSchema = z.object({
	setId: z.function().args(z.string(), z.void()),
	setName: z.function().args(z.string(), z.void()),
	setThemeColors: z.function().args(z.array(z.string().uuid()), z.void()),
	removeThemeColor: z.function().args(z.string().uuid(), z.void()),
	addAlias: z.function().args(AliasSchema, z.void()),
	removeAlias: z.function().args(AliasSchema, z.void()),
});
type AliasGroupActions = z.infer<typeof AliasGroupActionsSchema>;
const AliasGroupSchema = AliasGroupDataSchema.merge(AliasGroupActionsSchema);
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
	addThemeColor: z.function().args(z.void(), z.void()),
	themeColor: ThemeColorFunctionSchema,
	addAliasGroup: z.function().args(z.void(), z.void()),
	aliasGroup: z.function().args(z.string(), z.void()),
});
type ThemeActions = z.infer<typeof ThemeActionsSchema>;
const ThemeSchema = ThemeDataSchema.merge(ThemeActionsSchema);
type Theme = z.infer<typeof ThemeSchema>;

const aliasGroupStore: StateCreator<AliasGroup> = (set) => ({
	id: nanoid(12),
	name: 'Alias group',
	themeColors: [],
	aliases: [],
	setId: (id) => set(() => ({ id: id })),
	setName: (name) => set(() => ({ name: name })),
	setThemeColors: (themeColors) => set(() => ({ themeColors })),
	removeThemeColor: (themeColor) =>
		set((state) => {
			const newThemeColors = [...state.themeColors];
			const index = newThemeColors.indexOf(themeColor);
			if (index !== -1) {
				newThemeColors.splice(index, 1);
			}
			return { themeColors: newThemeColors };
		}),
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
			if (index !== -1) {
				newAliases.splice(index, 1);
			}
			return { aliases: newAliases };
		}),
});

const useAliasGroupStore = create<AliasGroup>()((...a) => ({
	...aliasGroupStore(...a),
}));

const newThemeColor = useThemeColor('397456');
const newAliasGroup: AliasGroup = useAliasGroupStore();

const themeStore: StateCreator<Theme> = (set) => ({
	id: nanoid(12),
	name: 'theme',
	themeColors: [],
	aliasGroups: [],
	setId: (id) => set(() => ({ id })),
	setName: (name) => set(() => ({ name })),
	setThemeColors: (themeColors) => set(() => ({ themeColors })),
	addThemeColor: () =>
		set((state) => {
			const themeColor = newThemeColor;
			const newThemeColors = [...state.themeColors];
			newThemeColors.push(themeColor);
			return { themeColors: newThemeColors };
		}),
	themeColor: (themeColorId: string) => {
		const state = useThemeStore.getState();
		const requestedThemeColor = state.themeColors.find(
			(themeColor) => themeColor.id === themeColorId
		);
		if (!requestedThemeColor) {
			throw new Error(`Could not find theme color with id ${themeColorId}`);
		}
		const themeColor: ThemeColor = requestedThemeColor;
		const remove = () => {
			const index = state.themeColors.indexOf(themeColor);
			if (index !== -1) {
				state.themeColors.splice(index, 1);
			}
		};
		return { themeColor, remove };
	},
	addAliasGroup: () => {
		set((state) => {
			const aliasGroup = newAliasGroup;
			const newAliasGroups = [...state.aliasGroups];
			newAliasGroups.push(aliasGroup);
			return { aliasGroups: newAliasGroups };
		});
	},
	aliasGroup(aliasGroupId: string) {
		const state = useThemeStore.getState();
		const requestedAliasGroup = state.aliasGroups.find(
			(aliasGroup) => aliasGroup.id === aliasGroupId
		);
		if (!requestedAliasGroup) {
			throw new Error(`Could not find alias group with id ${aliasGroupId}`);
		}
		const aliasGroup: AliasGroup = requestedAliasGroup;
		const remove = () => {
			const index = state.aliasGroups.indexOf(aliasGroup);
			if (index !== -1) {
				state.aliasGroups.splice(index, 1);
			}
		};
		return { aliasGroup, remove };
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
	const aliasGroupStore = useAliasGroupStore;
	// const aliasGroup = aliasGroupStore((state) => state);

	const newThemeColor = useThemeColor('397456');
	const newColor = useColor('397456');
	const newAlias = useAlias('alias', 100, 0);

	const id = theme.id;
	const setId = (id: string) => theme.setId(id);
	const name = theme.name;
	const setName = (name: string) => theme.setName(name);
	const themeColors = theme.themeColors;
	const setThemeColors = (themeColors: ThemeColor[]) =>
		theme.setThemeColors(themeColors);

	const addThemeColor = () => {
		setThemeColors([...themeColors, newThemeColor]);
	};

	const themeColor = (themeColorId: string) => {
		const requestedThemeColor = themeColors.find(
			(themeColor) => themeColor.id === themeColorId
		);
		if (!requestedThemeColor) {
			throw new Error(`Could not find theme color with id ${themeColorId}`);
		}
		const themeColor: ThemeColor = requestedThemeColor;
		const remove = () => {
			const index = themeColors.indexOf(themeColor);
			if (index !== -1) {
				themeColors.splice(index, 1);
			}
		};
		return { themeColor, remove };
	};
	const aliasGroups = theme.aliasGroups;
	const addAliasGroup = () => theme.addAliasGroup();
	const aliasGroup = (aliasGroupId: string) => {
		const requestedAliasGroup = aliasGroups.find(
			(aliasGroup) => aliasGroup.id === aliasGroupId
		);
		if (!requestedAliasGroup) {
			throw new Error(`Could not find alias group with id ${aliasGroupId}`);
		}
		const aliasGroup: AliasGroup = requestedAliasGroup;
		const remove = () => {
			const index = aliasGroups.indexOf(aliasGroup);
			if (index !== -1) {
				aliasGroups.splice(index, 1);
			}
		};
		return { aliasGroup, remove };
	};

	// Instantiate new theme upon creation
	useEffect(() => {
		if (name !== themeName) {
			setName(themeName);
		}
	}, []);

	return {
		id,
		name,
		themeColors,
		aliasGroups,
		setId,
		setName,
		setThemeColors,
		addThemeColor,
		themeColor,
		addAliasGroup,
		aliasGroup,
	};
};
