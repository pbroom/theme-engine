import Color from './color';

/**
 * Returns the Figma variable with the given name, if it exists.
 * @param name - The name of the variable to search for.
 * @returns The Figma variable with the given name, or undefined if it does not exist.
 */
export const variableFromName = (name: string) => {
	const variablesToCheck = figma.variables.getLocalVariables('COLOR');
	return variablesToCheck.find((variable) => variable.name === name);
};

/**
 * Creates a Figma color variable with the given name and hex value, and adds it to the specified variable collection.
 * @param collectionId - The ID of the variable collection to add the variable to.
 * @param colorName - The name of the color variable to create.
 * @param hexColor - The hex value of the color to use for the variable.
 * @param tone - Optional. The tone of the color variable to create. If not specified, the variable will be created as a source color.
 * @param overwriteVariables - Optional. If true, overwrites any existing variables with the same name.
 * @returns The created Figma color variable.
 */
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

/**
 * Creates a Figma variable collection with a set of color variables based on a given palette.
 * @param collectionId - The ID of the variable collection to add the variables to.
 * @param colorName - The name of the color variables to create.
 * @param originalColor - The hex value of the original color to use for the source color variable.
 * @param palette - An object containing the tones and hex values for the color variables to create.
 * @param overwriteVariables - Optional. If true, overwrites any existing variables with the same name.
 * @returns An array of the created Figma color variables.
 */
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
