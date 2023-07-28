import {
	convertHexColorToRgbColor,
	showUI,
} from '@create-figma-plugin/utilities';
import Color from './color';
import { paletteTones } from './color';
import { paletteGroup } from './palette-swatches';
import { paletteVariableCollection } from './palette-variables';
import VariableCollection from './variable-collection';

export default function () {
	showUI({ height: 440, width: 280 });
}

figma.on('run', () => {
	const localCollections = figma.variables.getLocalVariableCollections();
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
		const Overwrite = pluginMessage.overwriteVariables;
		const palette = paletteTones(hexColor, toneStops);
		const variables = paletteVariableCollection(
			collectionId,
			colorName,
			hexColor,
			palette,
			Overwrite
		);
		console.log(variables);
		return variables;
	}
};
