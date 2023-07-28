import Color from './color';

export const variableFromName = (name: string) => {
	const variablesToCheck = figma.variables.getLocalVariables('COLOR');
	return variablesToCheck.find((variable) => variable.name === name);
};

export const paletteColorVariable = (
	collectionId: string,
	colorName = 'color',
	hexColor: string,
	tone?: number,
	overwriteVariables?: boolean
) => {
	const keyColorName = `${colorName} - source color/${colorName}`;
	const toneColorName = `${colorName}-${tone}`;
	const name = tone || tone === 0 ? toneColorName : keyColorName;
	const variableId = variableFromName(name)?.id;
	if (overwriteVariables === false && variableId) {
		console.log(`Variable ${name} already exists`);
		return;
	}
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
	variable.setValueForMode(lightModeId, fill);
	variable.setValueForMode(darkModeId, fill);
	return variable;
};

export const paletteVariableCollection = (
	collectionId: string,
	colorName: string,
	originalColor: string,
	palette: { [key: number]: string },
	overwriteVariables?: boolean
) => {
	const collection = collectionId;
	const name = colorName;
	const color = originalColor;
	if (overwriteVariables === true) {
		paletteColorVariable(collection, name, color);
	}
	let variables = Object.entries(palette).map(([tone, color]) => {
		return paletteColorVariable(
			collection,
			name,
			color,
			Number(tone),
			overwriteVariables
		);
	});
	const numVariables = variables.filter(
		(variable) => variable !== undefined
	).length;
	if (numVariables < Object.keys(palette).length) {
		figma.notify('Some variables didn’t generate. Check console for details', {
			timeout: 5000,
			error: true,
		});
	}
	return variables;
};
