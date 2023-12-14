import { e, exp } from 'mathjs';
import { useState } from 'preact/hooks';
import z from 'zod';

let aliasId = 0;

export const AliasDataSchema = z.object({
	id: z.number(),
	name: z.string(),
	color: z.array(
		z.object({
			mode: z.string(),
			tone: z.number(),
		})
	),
});
export type AliasData = z.infer<typeof AliasDataSchema>;
export const AliasActionsSchema = z.object({
	setId: z.function().args(z.number(), z.void()),
	setName: z.function().args(z.string(), z.void()),
	setColor: z.function().args(
		z.array(
			z.object({
				mode: z.string(),
				tone: z.number(),
			})
		),
		z.void()
	),
	setToneForMode: z
		.function()
		.args(z.union([z.string(), z.number()]), z.number(), z.void()),
});
export const AliasSchema = AliasDataSchema.merge(AliasActionsSchema);
export type Alias = z.infer<typeof AliasSchema>;

/**
 * Custom hook for managing an alias.
 * @param alias - The initial alias object.
 * @returns An object containing the alias properties and setter functions.
 */
const useAlias = (alias: Alias) => {
	const [id, setId] = useState<number>(alias.id || aliasId++);
	const [name, setName] = useState<string>(alias.name || `Alias ${id}`);
	const [color, setColor] = useState<{ mode: string; tone: number }[]>(
		alias.color || [
			{ mode: 'light', tone: 100 },
			{ mode: 'dark', tone: 0 },
		]
	);

	/**
	 * Sets the tone for a given mode.
	 * @param mode - The mode for which to set the tone.
	 * @param tone - The tone value to set.
	 */
	const setToneForMode = (mode: string | number, tone: number) => {
		const newColor = [...color];
		const colorIndex = newColor.findIndex((newColor) => newColor.mode === mode);

		if (colorIndex === -1) {
			newColor.push({ mode: mode.toString(), tone });
		} else {
			newColor[colorIndex].tone = tone;
		}
		setColor(newColor);
	};

	return {
		id,
		name,
		color,
		setId,
		setName,
		setColor,
		setToneForMode,
	};
};

export default useAlias;
