import Color from './color';

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
