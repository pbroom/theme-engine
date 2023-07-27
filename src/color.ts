import {
	argbFromHex,
	Hct,
	rgbaFromArgb,
	hexFromArgb,
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
