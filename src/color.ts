import {
	argbFromHex,
	Hct,
	rgbaFromArgb,
	hexFromArgb,
	TonalPalette,
	Rgba,
} from '@material/material-color-utilities';
import { convertHexColorToRgbColor } from '@create-figma-plugin/utilities';

interface SolidColor {
	type: 'SOLID';
	color: {
		r: number;
		g: number;
		b: number;
	};
}

class Color {
	private argb: number;
	private rgba: string | Rgba;
	private hex: string;
	private hue: number;
	private chroma: number;
	private tone: number;
	private figmaSolidColor: SolidColor;
	private hctColor: Hct;

	constructor(hexColor: string) {
		const cleanedHexColor = hexColor.startsWith('#')
			? hexColor.slice(1)
			: hexColor;

		const rgbColor = convertHexColorToRgbColor(cleanedHexColor);
		const red = rgbColor?.r ?? 0;
		const green = rgbColor?.g ?? 0;
		const blue = rgbColor?.b ?? 0;
		this.figmaSolidColor = {
			type: 'SOLID',
			color: { r: red, g: green, b: blue },
		};

		this.hctColor = Hct.fromInt(argbFromHex(cleanedHexColor));
		this.hue = this.hctColor.hue;
		this.chroma = this.hctColor.chroma;
		this.tone = this.hctColor.tone;
		this.argb = Hct.from(this.hue, this.chroma, this.tone).toInt();
		this.rgba = rgbaFromArgb(this.argb);
		this.hex = hexFromArgb(this.argb);
	}

	getHue() {
		return this.hue;
	}

	getChroma() {
		return this.chroma;
	}

	getTone() {
		return this.tone;
	}

	getArgb() {
		return this.argb;
	}

	getRgba() {
		return this.rgba;
	}

	getHex() {
		return this.hex;
	}

	getFigmaSolidColor() {
		return this.figmaSolidColor;
	}

	getHctColor() {
		return this.hctColor;
	}
}

export default Color;

// Create tones from stops
export const toneStops = (stops?: number[]) => {
	const defaultToneStops: number[] = [];
	if (stops && stops.length > 0) {
		return stops;
	} else {
		for (let stop = 0; stop <= 100; stop++) {
			defaultToneStops.push(stop);
		}
		return defaultToneStops;
	}
};

// Create palette from hex color and tone stops
export const paletteTones = (hexColor: string, stops?: number[]) => {
	const paletteToneStops = toneStops(stops);
	const color = new Color(hexColor);
	const hctColor = color.getHctColor();
	const paletteColor = TonalPalette.fromHueAndChroma(
		hctColor.hue,
		hctColor.chroma
	);
	const palette: { [key: number]: string } = {};
	for (let tone of paletteToneStops) {
		const argb: number = paletteColor.tone(tone);
		const hex: string = hexFromArgb(argb);
		palette[tone] = hex;
	}
	return palette;
};
