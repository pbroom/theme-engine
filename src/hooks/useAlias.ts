import { e, exp } from 'mathjs';
import { useState } from 'preact/hooks';

let aliasId = 0;

export type Alias = {
	id: number;
	name: string;
	color: {
		mode: string;
		tone: number;
	}[];
};

type AliasActions = {
	setId: (id: number) => void;
	setName: (name: string) => void;
	setColor: (color: { mode: string; tone: number }[]) => void;
	setToneForMode: (mode: string | number, tone: number) => void;
};

/**
 * Custom hook for managing an alias.
 * @param alias - The initial alias object.
 * @returns An object containing the alias properties and setter functions.
 */
const useAlias = (alias: Alias): Alias & AliasActions => {
	const [id, setId] = useState<number>(alias.id || aliasId++);
	const [name, setName] = useState<string>(alias.name || `Alias ${id}`);
	const [color, setColor] = useState<{ mode: string; tone: number }[]>(
		alias.color || []
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
