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
import Color from './color';

export default function () {
	showUI({ height: 420, width: 280 });
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

// // Convert hex to Hct and back again
// const fromHex = (hexColor: string) => {
// 	const hctColor = Hct.fromInt(argbFromHex(hexColor));
// 	const hue = hctColor.hue;
// 	const chroma = hctColor.chroma;
// 	const tone = hctColor.tone;
// 	const argb = Hct.from(hue, chroma, tone).toInt();
// 	const rgba = rgbaFromArgb(argb);
// 	const hex = hexFromArgb(argb);

// 	return { hue, chroma, tone, argb, rgba, hex };
// };

// Create palette from hex color and tone stops
const paletteTones = (hexColor: string, stops?: number[]) => {
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

const paletteSwatch = (colorName: string, hexColor: string, tone: number) => {
	const frame = figma.createFrame();
	frame.name = colorName + '-' + tone + ': ' + hexColor + ';';
	const color = new Color(hexColor);
	const fill = color.getFigmaSolidColor();
	frame.fills = [fill];
	frame.resize(128, 64);
	return frame;
};

const localCollections = figma.variables.getLocalVariableCollections();

class VariableCollection {
	id: string;
	name: string;
	variableIds: string[];
	defaultModeId: string;
	modes: { modeId: string; name: string }[];
	remote: boolean;
	key: string;

	constructor(
		id: string,
		name: string,
		variableIds: string[],
		defaultModeId: string,
		modes: { modeId: string; name: string }[],
		remote: boolean,
		key: string
	) {
		this.id = id;
		this.name = name;
		this.variableIds = variableIds;
		this.defaultModeId = defaultModeId;
		this.modes = modes;
		this.remote = remote;
		this.key = key;
	}

	toJSON() {
		return {
			id: this.id,
			name: this.name,
			variableIds: this.variableIds,
			defaultModeId: this.defaultModeId,
			modes: this.modes,
			remote: this.remote,
			key: this.key,
		};
	}
}

figma.on('run', () => {
	const type = 'localCollections';
	const options = [];
	const collections = [];
	for (let i = 0; i < localCollections.length; i++) {
		const newCollection = new VariableCollection(
			localCollections[i].id,
			localCollections[i].name,
			localCollections[i].variableIds,
			localCollections[i].defaultModeId,
			localCollections[i].modes,
			localCollections[i].remote,
			localCollections[i].key
		);
		const collectionName = newCollection.name;
		collections.push(newCollection);
		options.push({ value: collectionName });
	}
	const message = { type, options, collections };
	figma.ui.postMessage(message);
});

// TODO: setup mode handling for variables

const variableFromName = (name: string) => {
	const variablesToCheck = figma.variables.getLocalVariables('COLOR');
	return variablesToCheck.find((variable) => variable.name === name);
};

const paletteVariable = (
	collectionId: string,
	colorName = 'color',
	hexColor: string,
	tone?: number
) => {
	const keyColorName = `color/primitives/${colorName}/${colorName} - source color/${colorName}`;
	const toneColorName = `color/primitives/${colorName}/${colorName}-${tone}`;
	const name = tone || tone === 0 ? toneColorName : keyColorName;
	const variableId = variableFromName(name)?.id;
	const color = new Color(hexColor);
	const fill = color.getFigmaSolidColor().color;
	const collection = figma.variables.getVariableCollectionById(collectionId);

	const variable = variableId
		? figma.variables.getVariableById(variableId)
		: figma.variables.createVariable(name, collectionId, 'COLOR');
	if (!collection) {
		figma.notify('Collection not found');
		return;
	}
	const lightModeId = collection.modes[0].modeId;
	const darkModeId = collection.modes[1]
		? collection.modes[1].modeId
		: collection.addMode('dark');
	if (!variable) {
		figma.notify('Variable not found');
		return;
	}
	// variable.name = `color/primitives/${colorName}-${tone}`;
	variable.setValueForMode(lightModeId, fill);
	variable.setValueForMode(darkModeId, fill);
	figma.notify('Success!');
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
	collectionId: string,
	colorName: string,
	originalColor: string,
	palette: { [key: number]: string }
) => {
	const collection = collectionId;
	const name = colorName;
	const color = originalColor;
	paletteVariable(collection, name, color);
	let variables = Object.entries(palette).map(([tone, color]) => {
		return paletteVariable(collection, name, color, Number(tone));
	});
	return variables;
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
		const collectionId = pluginMessage.collectionId;
		const palette = paletteTones(hexColor, toneStops);
		return paletteVariableCollection(collectionId, colorName, hexColor, palette);
	}
};
