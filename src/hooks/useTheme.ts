import type { ThemeColor, ThemeColorData } from './useThemeColor';
import {
	useThemeColor,
	ThemeColorSchema,
	ThemeColorDataSchema,
} from './useThemeColor';
import { AliasSchema, useAlias, useAliasStore } from './useAlias';
import z from 'zod';
import { create, StateCreator } from 'zustand';
import { Color, useColor } from './useColor';
import { nanoid } from 'nanoid';

export {
	ThemeColorSchema,
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
		themeColor: ThemeColorDataSchema,
		setThemeColor: z.function().args(ThemeColorDataSchema, z.void()),
		remove: z.function().args(z.void()),
	})
);

const AliasGroupDataSchema = z.object({
	id: z.string(),
	name: z.string(),
	themeColors: z.array(z.string()),
	aliases: z.array(AliasSchema),
});

const AliasGroupSchema = AliasGroupDataSchema;
type AliasGroup = z.infer<typeof AliasGroupSchema>;

const ThemeDataSchema = z.object({
	id: z.string(),
	name: z.string(),
	themeColors: z.array(ThemeColorDataSchema),
	aliasGroups: z.array(AliasGroupSchema),
});
type ThemeData = z.infer<typeof ThemeDataSchema>;
const ThemeActionsSchema = z.object({
	set: z.object({
		id: z.function().args(z.string(), z.void()),
		name: z.function().args(z.string(), z.void()),
		themeColors: z.function().args(z.array(ThemeColorDataSchema), z.void()),
		addThemeColor: z.function().args(ThemeColorDataSchema, z.void()),
		themeColor: ThemeColorFunctionSchema,
		addAliasGroup: z.function().args(AliasGroupSchema, z.void()),
		aliasGroup: z.function().args(z.string(), z.void()),
	}),
});
type ThemeActions = z.infer<typeof ThemeActionsSchema>;
const ThemeSchema = ThemeDataSchema.merge(ThemeActionsSchema);
type Theme = z.infer<typeof ThemeSchema>;

const aliasGroupStore: StateCreator<AliasGroup> = (set) => ({
	id: nanoid(12),
	name: 'Alias group',
	themeColors: [],
	aliases: [],
});

const useAliasGroupStore = create<AliasGroup>()((...a) => ({
	...aliasGroupStore(...a),
}));

const themeStore: StateCreator<Theme> = (set) => ({
	id: nanoid(12),
	name: 'theme',
	themeColors: [],
	aliasGroups: [],
	set: {
		id: (id) => set(() => ({ id })),
		name: (name) => set(() => ({ name })),
		themeColors: (themeColors) => set(() => ({ themeColors })),
		addThemeColor: (themeColor) =>
			set((state) => {
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
			const themeColor: ThemeColorData = requestedThemeColor;
			const setThemeColor = (newThemeColor: ThemeColorData) => {
				const index = state.themeColors.indexOf(themeColor);
				if (index !== -1) {
					state.themeColors[index] = newThemeColor;
				}
			};
			const remove = () => {
				const index = state.themeColors.indexOf(themeColor);
				if (index !== -1) {
					state.themeColors.splice(index, 1);
				}
			};
			return { themeColor, setThemeColor, remove };
		},
		addAliasGroup: (aliasGroup) => {
			set((state) => {
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
const useTheme = (): Theme => {
	const themeStore = useThemeStore;
	const theme = themeStore((state) => state);
	const aliasGroupStore = useAliasGroupStore;
	const newAliasGroup = aliasGroupStore((state) => state);

	const newThemeColor = useThemeColor('397456');

	const id = theme.id;
	const setId = (id: string) => theme.set.id(id);
	const name = theme.name;
	const setName = (name: string) => theme.set.name(name);
	const themeColors = theme.themeColors;
	const setThemeColors = (themeColors: ThemeColorData[]) =>
		theme.set.themeColors(themeColors);

	const addThemeColor = () => {
		const themeColor: ThemeColorData = {
			...newThemeColor,
			id: nanoid(12),
			name: 'Theme color',
		};
		theme.set.addThemeColor(themeColor);
	};

	const themeColor = (themeColorIdOrIndex?: string | number) => {
		let requestedThemeColor: ThemeColorData | undefined;
		let index: number | undefined;

		if (typeof themeColorIdOrIndex === 'number') {
			index = themeColorIdOrIndex;
			requestedThemeColor = themeColors[index];
		} else if (typeof themeColorIdOrIndex === 'string') {
			requestedThemeColor = themeColors.find(
				(themeColor) => themeColor.id === themeColorIdOrIndex
			);
		}

		if (!requestedThemeColor) {
			throw new Error(
				`Could not find theme color with id or index ${themeColorIdOrIndex}`
			);
		}

		const themeColor: ThemeColorData = requestedThemeColor;

		const setThemeColor = (newThemeColor: ThemeColorData) =>
			theme.set.themeColor(themeColor.id).setThemeColor(newThemeColor);
		const remove = () => {
			if (index !== undefined) {
				themeColors.splice(index, 1);
			} else {
				const index = themeColors.indexOf(themeColor);
				if (index !== -1) {
					themeColors.splice(index, 1);
				}
			}
		};

		return {
			themeColor,
			setThemeColor,
			remove,
		};
	};
	const aliasGroups = theme.aliasGroups;
	const addAliasGroup = () => {
		theme.set.addAliasGroup(newAliasGroup);
	};
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
	// useEffect(() => {
	// 	if (name !== themeName) {
	// 		setName(themeName);
	// 	}
	// }, []);

	return {
		id,
		name,
		themeColors,
		aliasGroups,
		set: {
			id: setId,
			name: setName,
			themeColors: setThemeColors,
			addThemeColor: addThemeColor,
			themeColor: themeColor,
			addAliasGroup: addAliasGroup,
			aliasGroup,
		},
	};
};
