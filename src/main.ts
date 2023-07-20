import {
	convertHexColorToRgbColor,
	convertRgbColorToHexColor,
	isValidHexColor,
	showUI,
} from '@create-figma-plugin/utilities';
import {
	TonalPalette,
	rgbaFromArgb,
	hexFromArgb,
	Hct,
} from '@material/material-color-utilities';

export default function () {
	showUI({ height: 240, width: 280 });
}

// Convert hex to Hct
const hctFromHex = (hexColor: string) => {
	const hctColor = Hct.fromInt(parseInt(hexColor.slice(1), 16));
	// const paletteColor = TonalPalette.fromHueAndChroma(
	// 	hctColor.hue,
	// 	hctColor.chroma
	// );
	const hue = hctColor.hue;
	const chroma = hctColor.chroma;
	const tone = hctColor.tone;
	return { hue, chroma, tone };
};

figma.ui.onmessage = (pluginMessage) => {
	if (pluginMessage.type === 'build') {
		console.log(pluginMessage);
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
		const hctColor = hctFromHex(pluginMessage.newHexColor);
		figma.ui.postMessage({
			pluginMessage: {
				type: 'hctColor',
				hctColor: hctColor,
			},
		});
	}
};
