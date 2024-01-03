import type { Alias, ThemeColor } from './useThemeColor';
import { useThemeColor, ThemeColorSchema } from './useThemeColor';
import useAlias, { AliasSchema, useAliasStore } from './useAlias';
import z from 'zod';
import { create, StateCreator } from 'zustand';
import { Color, useColor } from './useColor';
import { nanoid } from 'nanoid';

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
		setThemeColor: z.function().args(ThemeColorSchema, z.void()),
		remove: z.function().args(z.void()),
	})
);

const AliasGroupDataSchema = z.object({
	id: z.string(),
	name: z.string(),
	themeColors: z.array(z.string()),
	aliases: z.array(AliasSchema),
});
type AliasGroupData = z.infer<typeof AliasGroupSchema>;
// const AliasGroupActionsSchema = z.object({
// 	setId: z.function().args(z.string(), z.void()),
// 	setName: z.function().args(z.string(), z.void()),
// 	setThemeColors: z.function().args(z.array(z.string()), z.void()),
// 	removeThemeColor: z.function().args(z.string(), z.void()),
// 	addAlias: z.function().args(AliasSchema, z.void()),
// 	removeAlias: z.function().args(AliasSchema, z.void()),
// });
// type AliasGroupActions = z.infer<typeof AliasGroupActionsSchema>;
const AliasGroupSchema = AliasGroupDataSchema;
type AliasGroup = z.infer<typeof AliasGroupSchema>;

const ThemeDataSchema = z.object({
	id: z.string(),
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
	themeColor: ThemeColorFunctionSchema,
	addAliasGroup: z.function().args(AliasGroupSchema, z.void()),
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
});

const useAliasGroupStore = create<AliasGroup>()((...a) => ({
	...aliasGroupStore(...a),
}));

const themeStore: StateCreator<Theme> = (set) => ({
	id: nanoid(12),
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
	themeColor: (themeColorId: string) => {
		const state = useThemeStore.getState();
		const requestedThemeColor = state.themeColors.find(
			(themeColor) => themeColor.id === themeColorId
		);
		if (!requestedThemeColor) {
			throw new Error(`Could not find theme color with id ${themeColorId}`);
		}
		const themeColor: ThemeColor = requestedThemeColor;
		const setThemeColor = (newThemeColor: ThemeColor) => {
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
	const setId = (id: string) => theme.setId(id);
	const name = theme.name;
	const setName = (name: string) => theme.setName(name);
	const themeColors = theme.themeColors;
	const setThemeColors = (themeColors: ThemeColor[]) =>
		theme.setThemeColors(themeColors);

	const addThemeColor = () => {
		const themeColor: ThemeColor = {
			...newThemeColor,
			id: nanoid(12),
			name: 'Theme color',
		};
		theme.addThemeColor(themeColor);
	};

	const themeColor = (themeColorIdOrIndex?: string | number) => {
		let requestedThemeColor: ThemeColor | undefined;
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

		const themeColor: ThemeColor = requestedThemeColor;

		const setThemeColor = (newThemeColor: ThemeColor) =>
			theme.themeColor(themeColor.id).setThemeColor(newThemeColor);
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
		theme.addAliasGroup(newAliasGroup);
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
		setId,
		setName,
		setThemeColors,
		addThemeColor,
		themeColor,
		addAliasGroup,
		aliasGroup,
	};
};
