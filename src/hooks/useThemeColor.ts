import useColor from './useColor';
import type { Color } from './useColor';
import {
	getStopsFromString,
	convertNumberToStringArray,
} from '../lib/color-utils';
import { maxChromaAtTonePerHue } from '../ref';
import useAlias from './useAlias';
import type { Alias } from './useAlias';
import { e, evaluate } from 'mathjs';
import { useState, useEffect } from 'preact/hooks';
import { v4 as uuidv4 } from 'uuid';

export type ThemeColor = {
	id: string;
	name: string;
	sourceColor: Color;
	themeColor: Color;
	tones: number[];
	hueCalc: string;
	chromaCalc: string;
	aliases: Alias[];
};

type ThemeColorActions = {
	setId: (id: string) => void;
	setName: (name: string) => void;
	setSourceColor: (color: Color) => void;
	setTones: (tones: number[]) => void;
	setHueCalc: (hueCalc: string) => void;
	setChromaCalc: (chromaCalc: string) => void;
	setAliases: (aliases: Alias[]) => void;
};

const useThemeColor = (color: Color): ThemeColor & ThemeColorActions => {
	const [id, setId] = useState<string>(uuidv4());
	const [name, setName] = useState<string>('color');
	const [sourceColor, setSourceColor] = useState<Color>(color);
	const [themeColor, setThemeColor] = useState<Color>(sourceColor);
	const [tones, setTones] = useState<number[]>([]);
	const [hueCalc, setHueCalc] = useState<string>('');
	const [chromaCalc, setChromaCalc] = useState<string>('');
	const [aliases, setAliases] = useState<Alias[]>([]);

	useEffect(() => {
		setThemeColor(color);
	}, [sourceColor]);

	return {
		id,
		name,
		sourceColor,
		themeColor,
		tones,
		hueCalc,
		chromaCalc,
		aliases,
		setId,
		setName,
		setSourceColor,
		setTones,
		setHueCalc,
		setChromaCalc,
		setAliases,
	};
};

export default useThemeColor;
