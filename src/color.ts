import {
	argbFromHex,
	Hct,
	rgbaFromArgb,
	hexFromArgb,
	TonalPalette,
	Rgba,
} from '@material/material-color-utilities';
import { convertHexColorToRgbColor } from '@create-figma-plugin/utilities';

/**
 * Represents a solid color with RGB values. Figma requires colors to be in this format.
 */
interface SolidColor {
	type: 'SOLID';
	color: {
		r: number;
		g: number;
		b: number;
	};
}

/**
 * Represents a color with various properties such as hue, chroma, and tone.
 */
class Color {
	private argb: number;
	private rgba: string | Rgba;
	private hex: string;
	private hue: number;
	private chroma: number;
	private tone: number;
	private figmaSolidColor: SolidColor;
	private hctColor: Hct;

	/**
	 * Creates a new Color instance from a hex color string.
	 * @param hexColor The hex color string to create the color from.
	 */
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

	/**
	 * Gets the hue value of the color.
	 * @returns The hue value of the color.
	 */
	getHue(rounded: string | undefined = '') {
		if (rounded === 'rounded') {
			return Math.round(this.hue);
		} else {
			return this.hue;
		}
	}

	/**
	 * Sets the hue value of the color.
	 * @param hue The new hue value to set.
	 */
	setHue(hue: number) {
		this.hue = hue;
		this.argb = Hct.from(this.hue, this.chroma, this.tone).toInt();
		this.rgba = rgbaFromArgb(this.argb);
		this.hex = hexFromArgb(this.argb);
		this.hctColor = Hct.fromInt(this.argb);
	}

	/**
	 * Gets the chroma value of the color.
	 * @returns The chroma value of the color.
	 */
	getChroma(rounded: string | undefined = '') {
		if (rounded === 'rounded') {
			return Math.round(this.chroma);
		} else {
			return this.chroma;
		}
	}

	setChroma(chroma: number) {
		this.chroma = chroma;
		this.argb = Hct.from(this.hue, this.chroma, this.tone).toInt();
		this.rgba = rgbaFromArgb(this.argb);
		this.hex = hexFromArgb(this.argb);
		this.hctColor = Hct.fromInt(this.argb);
	}

	/**
	 * Gets the tone value of the color.
	 * @returns The tone value of the color.
	 */
	getTone(rounded: string | undefined = '') {
		if (rounded === 'rounded') {
			return Math.round(this.tone);
		} else {
			return this.tone;
		}
	}

	/**
	 * Gets the ARGB value of the color.
	 * @returns The ARGB value of the color.
	 */
	getArgb() {
		return this.argb;
	}

	/**
	 * Gets the RGBA value of the color.
	 * @returns The RGBA value of the color.
	 */
	getRgba() {
		return this.rgba;
	}

	/**
	 * Gets the hex value of the color.
	 * @returns The hex value of the color.
	 */
	getHex(excludeNumberSign?: boolean) {
		if (excludeNumberSign) {
			return this.hex.slice(1);
		}
		return this.hex;
	}

	/**
	 * Gets the Figma solid color object of the color.
	 * @returns The Figma solid color object of the color.
	 */
	getFigmaSolidColor() {
		return this.figmaSolidColor;
	}

	/**
	 * Gets the Hct color object of the color.
	 * @returns The Hct color object of the color.
	 */
	getHctColor() {
		return this.hctColor;
	}
}

export default Color;

/**
 * Creates an array of tone stops.
 * @param stops An optional array of tone stops.
 * @returns An array of tone stops.
 */
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

/**
 * Creates a palette of colors from a hex color and tone stops.
 * @param hexColor The hex color string to create the palette from.
 * @param stops An optional array of tone stops.
 * @returns An object containing the palette of colors.
 */
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

/**
 * Defines the type of an object that represents a palette of colors.
 */
type PaletteObject = {
	[key: string]: string;
};

/**
 * Gets the hex values of a palette object.
 * @param paletteObject An object containing the palette of colors.
 * @returns A string containing the hex values of the palette object.
 */
export const getValues = (
	paletteObject: PaletteObject,
	selectedTones?: number[]
) => {
	let hexString = '';
	if (selectedTones) {
		const stopIncrement = Math.round(100 / selectedTones.length);
		for (let key of selectedTones) {
			hexString += `${paletteObject[key]} ${
				stopIncrement * selectedTones.indexOf(key)
			}% ${stopIncrement * (selectedTones.indexOf(key) + 1)}%, `;
		}
	} else {
		for (let key in paletteObject) {
			hexString += paletteObject[key] + ', ';
		}
	}
	// Remove the last comma and space
	hexString = hexString.slice(0, -2);
	return hexString;
};

/**
 * Creates a tonal gradient from a hex color string.
 * @param hexColor The hex color string to create the tonal gradient from.
 * @returns A string containing the hex values of the tonal gradient.
 */
export const hctTonalGradient = (
	hexColor: string,
	selectedTones?: number[]
) => {
	const gradientTones = paletteTones(hexColor);
	const gradientString = getValues(gradientTones, selectedTones);
	return gradientString;
};

/**
 * Finds the maximum chroma value for a given hue.
 * @param hue The hue value to find the maximum chroma for.
 * @returns An object containing the maximum chroma value and the tone at which it occurs.
 */
export const findMaxChromasForHue = (
	hue: number
): { chroma: number; tone: number }[] => {
	const maxChromas: { chroma: number; tone: number }[] = [];

	// Iterate over each tone value from 0 to 100
	for (let tone = 0; tone <= 100; tone++) {
		const maxChromaForTone = Hct.from(hue, 150, tone).chroma;
		maxChromas.push({ chroma: maxChromaForTone, tone });
	}

	return maxChromas;
};

/**
 * Finds the maximum chroma value for a given hue and tone.
 * @param hue The hue value to find the maximum chroma for.
 * @param tone The tone value to find the maximum chroma for.
 * @returns The maximum chroma value.
 */
export const findMaxChromaForHueAtTone = (
	hue: number,
	tone: number
): number => {
	let maximumChroma = 0;

	// Iterate over each chroma value from 0 to 150
	for (let chroma = 0; chroma <= 150; chroma++) {
		const currentChroma = Hct.from(hue, chroma, tone).chroma;

		// If the current chroma value is higher than the maximum chroma value, update the maximum chroma value
		if (currentChroma > maximumChroma) {
			maximumChroma = currentChroma;
		}
	}

	return maximumChroma;
};

/**
 * Finds the highest chroma value for each hue value, along with the tone at which it occurs.
 * @returns An array of objects containing the hue, highest chroma, and tone at which it occurs.
 */
export const findHighestChromaPerHue = (): {
	hue: number;
	chroma: number;
	tone: number;
}[] => {
	const result: { hue: number; chroma: number; tone: number }[] = [];

	// Iterate over each hue value from 0 to 360
	for (let hue = 0; hue <= 360; hue++) {
		let highestChroma = 0;
		let toneAtHighestChroma = 0;

		// Iterate over each tone value from 0 to 100
		for (let tone = 0; tone <= 100; tone++) {
			const chroma = Hct.from(hue, 150, tone).chroma;

			// If the chroma value is higher than the current highest chroma value, update the highest chroma value and tone
			if (chroma > highestChroma) {
				highestChroma = chroma;
				toneAtHighestChroma = tone;
			}
		}

		// Add the hue, highest chroma, and tone at which it occurs to the result array
		result.push({ hue, chroma: highestChroma, tone: toneAtHighestChroma });
	}

	return result;
};
