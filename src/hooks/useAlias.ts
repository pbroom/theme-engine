import z from 'zod';
import { StateCreator, create } from 'zustand';
import { nanoid } from 'nanoid';

export {
	AliasSchema,
	AliasDataSchema,
	AliasActionsSchema,
	type AliasData,
	type AliasActions,
	type Alias,
	useAliasActionsStore,
	useAliasStore,
	useAlias,
};

const AliasDataSchema = z.object({
	id: z.string(),
	name: z.string(),
	color: z.array(
		z.object({
			mode: z.enum(['light', 'dark']),
			tone: z.number().int().min(0).max(100),
		})
	),
});
type AliasData = z.infer<typeof AliasDataSchema>;
const AliasActionsSchema = z.object({
	set: z.object({
		id: z.function().args(z.string(), z.void()),
		name: z.function().args(z.string(), z.void()),
		color: z.function().args(
			z.array(
				z.object({
					mode: z.string(),
					tone: z.number(),
				})
			),
			z.void()
		),
		toneForMode: z
			.function()
			.args(z.union([z.string(), z.number()]), z.number(), z.void()),
	}),
});
type AliasActions = z.infer<typeof AliasActionsSchema>;
const AliasSchema = AliasDataSchema.merge(AliasActionsSchema);
// type Alias = z.infer<typeof AliasSchema>;
type Alias = AliasData & AliasActions;

const aliasActionsStore: StateCreator<AliasActions> = (set) => ({
	set: {
		id: (id) => set((state) => ({ ...state, id })),
		name: (name) => set((state) => ({ ...state, name })),
		color: (color) =>
			set((state) => ({
				...state,
				color: color as { mode: 'light' | 'dark'; tone: number }[],
			})),
		toneForMode: (mode, tone) =>
			set((state: Alias) => {
				const newColor = [...state.color];
				const colorIndex = newColor.findIndex(
					(newColorItem) => newColorItem.mode === mode
				);

				if (colorIndex === -1) {
					newColor.push({ mode: mode.toString() as 'light' | 'dark', tone });
				} else {
					newColor[colorIndex].tone = tone;
				}
				return { ...state, color: newColor };
			}),
	},
});

const useAliasActionsStore = create<AliasActions>((...a) => ({
	...aliasActionsStore(...a),
}));

/**
 * Custom hook for managing alias state.
 * @returns An object with alias state and setter functions.
 */
const useAliasStore = create<Alias>((set) => ({
	id: nanoid(12),
	name: `Alias`,
	color: [
		{ mode: 'light', tone: 80 },
		{ mode: 'dark', tone: 20 },
	],
	set: {
		id: (id) => set(() => ({ id })),
		name: (name) => set(() => ({ name })),
		color: (color) =>
			set(() => ({
				color: color as { mode: 'light' | 'dark'; tone: number }[],
			})),
		toneForMode: (mode, tone) =>
			set((state) => {
				const newColor = [...state.color];
				const colorIndex = newColor.findIndex(
					(newColor) => newColor.mode === mode
				);

				if (colorIndex === -1) {
					newColor.push({ mode: mode.toString() as 'light' | 'dark', tone });
				} else {
					newColor[colorIndex].tone = tone;
				}
				return { color: newColor };
			}),
	},
}));

/**
 * Custom hook for managing an alias.
 * @param alias - The initial alias object.
 * @returns An object containing the alias properties and setter functions.
 */
const useAlias = (): Alias => {
	const id = useAliasStore((state) => state.id);
	const setId = useAliasStore((state) => state.set.id);
	const name = useAliasStore((state) => state.name);
	const setName = useAliasStore((state) => state.set.name);
	const color = useAliasStore((state) => state.color);
	const setColor = useAliasStore((state) => state.set.color);
	setName('Alias');
	setColor([
		{ mode: 'light', tone: 80 },
		{ mode: 'dark', tone: 20 },
	]);

	/**
	 * Sets the tone for a given mode.
	 * @param mode - The mode for which to set the tone.
	 * @param tone - The tone value to set.
	 */
	const setToneForMode = (
		mode: 'light' | 'dark' | string | number,
		tone: number
	) => {
		const newColor = [...color];
		const colorIndex = newColor.findIndex((newColor) => newColor.mode === mode);

		if (colorIndex === -1) {
			newColor.push({ mode: mode.toString() as 'light' | 'dark', tone });
		} else {
			newColor[colorIndex].tone = tone;
		}
		setColor(newColor);
	};

	return {
		id,
		name,
		color,
		set: {
			id: setId,
			name: setName,
			color: setColor,
			toneForMode: setToneForMode,
		},
	};
};
