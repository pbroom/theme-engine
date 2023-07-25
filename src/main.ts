import {
	convertHexColorToRgbColor,
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
	showUI({ height: 350, width: 280 });
}

// Create tones from stops
const toneStops = (stops?: number[]) => {
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

// Convert hex to Hct and back again
const fromHex = (hexColor: string) => {
	const hctColor = Hct.fromInt(argbFromHex(hexColor));
	const hue = hctColor.hue;
	const chroma = hctColor.chroma;
	const tone = hctColor.tone;
	const argb = Hct.from(hue, chroma, tone).toInt();
	const rgba = rgbaFromArgb(argb);
	const hex = hexFromArgb(argb);

	return { hue, chroma, tone, argb, rgba, hex };
};

// Create palette from hex color and tone stops
const paletteTones = (hexColor: string, stops?: number[]) => {
	const paletteToneStops = toneStops(stops);
	const color = fromHex(hexColor);
	const paletteColor = TonalPalette.fromHueAndChroma(color.hue, color.chroma);
	const palette: { [key: number]: string } = {};
	for (let tone of paletteToneStops) {
		const argb: number = paletteColor.tone(tone);
		const hex: string = hexFromArgb(argb);
		palette[tone] = hex;
	}
	return palette;
};

const paletteSwatch = (colorName: string, hexColor: string, tone: number) => {
	const frame = figma.createFrame();
	frame.name = colorName + '-' + tone + ': ' + hexColor + ';';
	const cleanedHexColor = hexColor.startsWith('#')
		? hexColor.slice(1)
		: hexColor;

	const rgbColor = convertHexColorToRgbColor(cleanedHexColor);
	const red = rgbColor?.r ?? 0;
	const green = rgbColor?.g ?? 0;
	const blue = rgbColor?.b ?? 0;
	frame.fills = [{ type: 'SOLID', color: { r: red, g: green, b: blue } }];
	frame.resize(128, 64);
	return frame;
};

const localCollections = figma.variables.getLocalVariableCollections();
figma.on('run', () => {
	const type = 'localCollections';
	const options = [];
	for (let i = 0; i < localCollections.length; i++) {
		const collection = localCollections[i].name;
		options.push({ value: collection });
	}
	console.log(options);
	const message = { type, options };
	figma.ui.postMessage(message);
});
const paletteVariable = (
	// collectionId: string,
	colorName?: string,
	hexColor?: string,
	tone?: number
) => {
	console.log(localCollections);
	// const variable = figma.variables.createVariable(
	// 	'new-variable',
	// 	collectionId,
	// 	'COLOR'
	// );
	// variable.name = 'color/primitives/' + colorName + '-' + tone;
	// const cleanedHexColor = hexColor.startsWith('#')
	// 	? hexColor.slice(1)
	// 	: hexColor;

	// const rgbColor = convertHexColorToRgbColor(cleanedHexColor);
	// const red = rgbColor?.r ?? 0;
	// const green = rgbColor?.g ?? 0;
	// const blue = rgbColor?.b ?? 0;
	// const color = { r: red, g: green, b: blue };
	// const lightModeId = collectionId.modes[0].modeId;
	// const darkModeId = collectionId.addMode("dark");
	// variable.setValueForMode(lightModeId, color);
	// variable.setValueForMode(darkModeId, color);
	// return variable;
};

const paletteGroup = (
	colorName: string,
	originalColor: string,
	palette: { [key: number]: string }
) => {
	const frame = figma.createFrame();
	frame.name = colorName + ' - (Source hex: #' + originalColor + ')';
	frame.layoutMode = 'VERTICAL';
	frame.primaryAxisSizingMode = 'AUTO';
	frame.counterAxisSizingMode = 'AUTO';
	let swatches = Object.entries(palette).map(([tone, color]) => {
		const hexColor = color;
		return paletteSwatch(colorName, String(hexColor), Number(tone));
	});
	// Then append all swatches to the frame
	swatches.forEach((swatch) => frame.appendChild(swatch));
	frame.x = Math.round(figma.viewport.center.x - frame.width / 2);
	frame.y = Math.round(figma.viewport.center.y - frame.height / 2);
	return frame;
};

const paletteVariableCollection = (
	colorName: string,
	originalColor: string,
	palette: { [key: number]: string }
) => {
	const collection = figma.variables.createVariableCollection('new-collection');
	const variable = figma.variables.createVariable(
		'color-variable-name',
		collection.id,
		'COLOR'
	);
	let swatches = Object.entries(palette).map(([tone, color]) => {
		const hexColor = color;
		return paletteSwatch(colorName, String(hexColor), Number(tone));
	});
};

figma.ui.onmessage = (pluginMessage) => {
	if (pluginMessage.type === 'build') {
		const colorName = pluginMessage.name ? pluginMessage.name : 'color';
		const toneStops = pluginMessage.toneStops;
		const hexColor = pluginMessage.color;

		const palette = paletteTones(hexColor, toneStops);
		const swatches = paletteGroup(colorName, hexColor, palette);
		return swatches;
	}

	if (pluginMessage.type === 'createVariables') {
		const colorName = pluginMessage.name ? pluginMessage.name : 'color';
		const toneStops = pluginMessage.toneStops;
		const hexColor = pluginMessage.color;
		return paletteVariable();
	}

	if (pluginMessage.type === 'colorChange') {
		const color = pluginMessage.newHexColor;
		const type = 'colorChange';
		const hctColor = fromHex(color);
		const palettePreview = paletteTones(color);
		const message = { type, hctColor, palettePreview };
		figma.ui.postMessage(message);
	}
};
