import {
	TonalPalette,
	rgbaFromArgb,
	hexFromArgb,
	Hct,
} from '@material/material-color-utilities';

export const defaultPaletteName = 'color';
export const defaultPaletteTones = [
	0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100, 4, 5, 6, 12, 17, 22, 24,
	25, 35, 87, 92, 94, 96, 98,
];

// Create hex palette from hex color, palette name, and tone stops
export interface PaletteProps {
	[key: string]: string | number[] | undefined;
	hexColor: string;
	paletteName?: string;
	toneStops?: number[];
}

// const materialColorUtilities = await import(
// 	'@material/material-color-utilities'
// );

export const createPalette = ({
	hexColor,
	paletteName = defaultPaletteName,
	toneStops = defaultPaletteTones,
}: PaletteProps) => {
	// const { TonalPalette, Hct } = materialColorUtilities;

	// Convert hex to Hct
	const hctColor = Hct.fromInt(parseInt(hexColor.slice(1), 16));
	const paletteColor = TonalPalette.fromHueAndChroma(
		hctColor.hue,
		hctColor.chroma
	);
	// Construct palette object
	const palette: PaletteProps = {
		hexColor,
		paletteName,
		toneStops,
	};
	// Generate tones for each color
	const cssVariables: string[] = toneStops.map((tone: number) => {
		const argb: number = paletteColor.tone(tone);
		const hex: string = hexFromArgb(argb);
		const variableName: string = `--${paletteName}-${tone}`;
		return `${variableName}: ${hex};`;
	});
	return cssVariables.join('\n');
};

// Create rgba palette from hex color, palette name, and tone stops
export interface PaletteRgbaProps {
	[key: string]: string | number[] | boolean | undefined;
	hexColor: string;
	paletteName?: string;
	toneStops?: number[];
	rgbaPalette?: boolean;
}
export const createPaletteRgba = ({
	hexColor,
	paletteName = defaultPaletteName,
	toneStops = defaultPaletteTones,
}: PaletteRgbaProps) => {
	// Convert hex to Hct
	const hctColor = Hct.fromInt(parseInt(hexColor.slice(1), 16));
	const paletteColor = TonalPalette.fromHueAndChroma(
		hctColor.hue,
		hctColor.chroma
	);
	// Construct palette object
	const palette: PaletteProps = {
		hexColor,
		paletteName,
		toneStops,
	};
	for (let tone of toneStops) {
		const argb = paletteColor.tone(tone);
		const rgba = rgbaFromArgb(argb);
		palette[
			`${paletteName}-${tone}`
		] = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
	}
	return palette;
};

// Create hex tones from hex
export interface TonesProps {
	[key: string]: string | number[] | undefined;
	hexColor: string;
	paletteName?: string;
	toneStops?: number[];
}
export const createTones = ({
	hexColor,
	paletteName = defaultPaletteName,
	toneStops = [],
}: TonesProps) => {
	const hctColor = Hct.fromInt(parseInt(hexColor.slice(1), 16));
	const paletteColor = TonalPalette.fromHueAndChroma(
		hctColor.hue,
		hctColor.chroma
	);
	if (toneStops.length > 0) {
		const customTones: { [key: string]: string } = {};
		for (let tone of toneStops) {
			const argb = paletteColor.tone(tone);
			const hex = hexFromArgb(argb);
			customTones[`${paletteName}-${tone}`] = hex;
		}
		return customTones;
	}
	const palette: { [key: string]: string } = {};
	for (let tone = 0; tone <= 100; tone++) {
		const argb = paletteColor.tone(tone);
		const hex = hexFromArgb(argb);
		palette[`${paletteName}-${tone}`] = hex;
	}
	return palette;
};

// Create RGBA custom tones from hex
export interface TonesRgbaProps {
	[key: string]: string | number[] | boolean | undefined;
	hexColor: string;
	paletteName?: string;
	toneStops?: number[];
	rgbaPalette?: boolean;
}
export const createTonesRgba = ({
	hexColor,
	paletteName = defaultPaletteName,
	toneStops = [],
	rgbaPalette = false,
}: TonesRgbaProps) => {
	const hctColor = Hct.fromInt(parseInt(hexColor.slice(1), 16));
	const paletteColor = TonalPalette.fromHueAndChroma(
		hctColor.hue,
		hctColor.chroma
	);
	if (toneStops.length > 0) {
		const customTones: { [key: string]: string } = {};
		for (let tone of toneStops) {
			const argb = paletteColor.tone(tone);
			const rgba = rgbaFromArgb(argb);
			customTones[
				`${paletteName}-${tone}`
			] = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
			return customTones;
		}
		const palette: { [key: string]: string } = {};
		for (let tone = 0; tone <= 100; tone++) {
			const argb = paletteColor.tone(tone);
			const rgba = rgbaFromArgb(argb);
			palette[
				`${paletteName}-${tone}`
			] = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
		}
		return palette;
	}
};

export const hctFromHex = (hexColor: string): object => {
	const intColor = parseInt(hexColor.slice(1), 16);
	return Hct.fromInt(intColor);
};

export const TonalPaletteFromHex = (hexColor: string): object => {
	const hctColor = Hct.fromInt(parseInt(hexColor.slice(1), 16));
	const paletteColor = TonalPalette.fromHueAndChroma(
		hctColor.hue,
		hctColor.chroma
	);
	return paletteColor;
};
