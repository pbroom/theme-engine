import {
	convertHexColorToRgbColor,
	convertRgbColorToHexColor,
	isValidHexColor,
	showUI,
} from '@create-figma-plugin/utilities';
import {
	TonalPalette,
	argbFromHex,
	rgbaFromArgb,
	hexFromArgb,
	Hct,
	Rgba,
} from '@material/material-color-utilities';

export default function () {
	showUI({ height: 400, width: 280 });
}

// Create tones from stops
const toneStops = (stops?: number[]) => {
	const defaultToneStops: number[] = [];
	const toneStops = stops ?? defaultToneStops;
	for (let stop = 0; stop <= 100; stop++) {
		defaultToneStops.push(stop);
	}
	return toneStops;
};

// Convert hex to Hct and back again
const fromHex = (hexColor: string) => {
	// const hctColor = Hct.fromInt(parseInt(hexColor.slice(1), 16));
	const hctColor = Hct.fromInt(argbFromHex(hexColor));
	// const paletteColor = TonalPalette.fromHueAndChroma(
	// 	hctColor.hue,
	// 	hctColor.chroma
	// );
	const hue = hctColor.hue;
	const chroma = hctColor.chroma;
	const tone = hctColor.tone;
	const argb = Hct.from(hue, chroma, tone).toInt();
	const rgba = rgbaFromArgb(argb);
	const hex = hexFromArgb(argb);

	return { hue, chroma, tone, argb, rgba, hex };
};

// Create palette from hex color and tone stops
const paletteTones = (hexColor: string, stops?: number[], rgba?: boolean) => {
	const paletteToneStops = toneStops(stops);
	const color = fromHex(hexColor);
	const paletteColor = TonalPalette.fromHueAndChroma(color.hue, color.chroma);
	const palette: { [key: number]: string | number | Rgba } = {};
	for (let tone of paletteToneStops) {
		const argb: number = paletteColor.tone(tone);
		const hex: string = hexFromArgb(argb);
		const rgbaFormat = rgbaFromArgb(argb);
		palette[tone] = rgba ? rgbaFormat : hex;
	}
	return palette;
};

figma.ui.onmessage = (pluginMessage) => {
	if (pluginMessage.type === 'build') {
		const colorName = pluginMessage.name;
		// Color conversion
		const hexColor = pluginMessage.color;
		const rgbColor = convertHexColorToRgbColor(hexColor);
		const red = rgbColor?.r ?? 0;
		const green = rgbColor?.g ?? 0;
		const blue = rgbColor?.b ?? 0;

		const frame = figma.createFrame();

		// Move to (50, 50)
		frame.x = Math.floor(figma.viewport.center.x);
		frame.y = Math.floor(figma.viewport.center.y);

		frame.resize(96, 96);
		frame.name = colorName;
		frame.fills = [{ type: 'SOLID', color: { r: red, g: green, b: blue } }];
	}

	if (pluginMessage.type === 'colorChange') {
		const color = pluginMessage.newHexColor;
		const stops = pluginMessage.toneStops;
		const hctColor = fromHex(color);
		const palette = paletteTones(color, stops, true);
		figma.ui.postMessage(hctColor);
		console.log(palette);
	}
};
