// import { useState, useEffect } from 'react';
import { useState, useEffect } from 'preact/hooks';
import {
	argbFromHex,
	Hct,
	rgbaFromArgb,
	hexFromArgb,
	Rgba,
} from '@material/material-color-utilities';
import { convertHexColorToRgbColor } from '@create-figma-plugin/utilities';

export type SolidColor = {
	type: 'SOLID';
	color: {
		r: number;
		g: number;
		b: number;
	};
};

export type Color = {
	sourceHex: string;
	hct: Hct;
	rgba: string | Rgba;
	hex: string;
	figmaSolidColor: SolidColor;
};

type ColorActions = {
	setHue: (newHue: number) => void;
	setChroma: (newChroma: number) => void;
	setTone: (newTone: number) => void;
};

const useColor = (hexColor: string): Color & ColorActions => {
	const [sourceHex, setSourceHex] = useState<string>(hexColor);
	const [rgba, setRgba] = useState<string | Rgba>('');
	const [hct, setHct] = useState<Hct>(Hct.fromInt(argbFromHex('000000')));
	const [hex, setHex] = useState<string>('000000');
	const [figmaSolidColor, setFigmaSolidColor] = useState<SolidColor>({
		type: 'SOLID',
		color: { r: 0, g: 0, b: 0 },
	});

	const cleanedHexColor = (hexColor: string) => {
		return hexColor.startsWith('#') ? hexColor.slice(1) : hexColor;
	};

	useEffect(() => {
		const newHexColor = cleanedHexColor(hexColor);
		const newArgb = argbFromHex(newHexColor);
		const newHct = Hct.fromInt(newArgb);

		setHct(newHct); // This will trigger the second useEffect
		setSourceHex(newHexColor);
	}, [hexColor]);

	// Function to update HCT values and dependent properties
	const updateHctValues = (
		newHue: number,
		newChroma: number,
		newTone: number
	) => {
		const updatedHct = Hct.from(newHue, newChroma, newTone);
		setHct(updatedHct);
	};

	// Individual setters for hue, chroma, and tone
	const setHue = (newHue: number) =>
		updateHctValues(newHue, hct.chroma, hct.tone);
	const setChroma = (newChroma: number) =>
		updateHctValues(hct.hue, newChroma, hct.tone);
	const setTone = (newTone: number) =>
		updateHctValues(hct.hue, hct.chroma, newTone);

	useEffect(() => {
		const argb = hct.toInt();
		setRgba(rgbaFromArgb(argb));
		setHex(hexFromArgb(argb));
		const rgbColor = convertHexColorToRgbColor(cleanedHexColor(hex));
		const red = rgbColor?.r ?? 0;
		const green = rgbColor?.g ?? 0;
		const blue = rgbColor?.b ?? 0;
		const solidColor: SolidColor = {
			type: 'SOLID',
			color: { r: red, g: green, b: blue },
		};
		setFigmaSolidColor(solidColor);
	}, [hct]);

	return {
		sourceHex,
		rgba,
		hct,
		hex,
		figmaSolidColor,
		setHue,
		setChroma,
		setTone,
	};
};

export default useColor;
