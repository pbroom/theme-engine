import Color from './color';

/**
 * Creates a Figma frame containing a single color swatch for a given color.
 * @param colorName - The name of the color.
 * @param hexColor - The hex value of the color.
 * @param tone - The tone of the color.
 * @returns The Figma frame containing the color swatch.
 */
export const paletteSwatch = (
	colorName: string,
	hexColor: string,
	tone: number
) => {
	const frame = figma.createFrame();
	frame.name = colorName + '-' + tone + ': ' + hexColor + ';';
	const color = new Color(hexColor);
	const fill = color.getFigmaSolidColor();
	frame.fills = [fill];
	frame.resize(128, 64);
	return frame;
};

/**
 * Creates a Figma frame containing a group of color swatches for a given color palette.
 * @param colorName - The name of the color palette.
 * @param originalColor - The original color of the palette in hex format.
 * @param palette - An object containing the color values for each tone in the palette.
 * @returns The Figma frame containing the color swatches.
 */
export const paletteGroup = (
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
