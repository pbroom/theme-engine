import '!./dist/tailwind.css';
import { ColorArea } from './components/colorArea';
import { ColorPicker } from './components/colorPicker';
import { ColorField } from './components/colorField';
import { Color, parseColor } from '@react-stately/color';
import { hexToHSB } from './utility';
import ThemeColor from './theme-color';
import {
	defaultColor,
	defaultName,
	defaultPaletteTones,
	defaultHueCalc,
	defaultChromaCalc,
	defaultAliases,
} from './defaults';
import {
	Columns,
	Container,
	Muted,
	render,
	Text,
	TextboxColor,
	VerticalSpace,
} from '@create-figma-plugin/ui';
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { set } from 'lodash';
import { create } from 'zustand';

export const Plugin = () => {
	// Initializing the theme color
	const newThemeColor = new ThemeColor(
		defaultColor,
		defaultName,
		defaultPaletteTones,
		defaultHueCalc(),
		defaultChromaCalc(),
		defaultAliases()
	);
	const [themeColor, setThemeColor] = useState<ThemeColor>(newThemeColor);
	console.log(themeColor);

	const [color, setColor] = useState<Color>(
		parseColor(hexToHSB(themeColor.getSourceColor().getHex()))
	);
	const [hChannel, sChannel, bChannel] = color.getColorChannels();

	const handleHexInput = (hexColor: string) => {
		const newThemeColor = new ThemeColor(
			hexColor,
			themeColor.state.name,
			themeColor.state.tones,
			themeColor.state.hueCalc,
			themeColor.state.chromaCalc,
			themeColor.getAliases(),
			themeColor.id
		);
		setThemeColor(newThemeColor);
	};

	const handleHueInput = (hueInput: string) => {
		const newThemeColor = new ThemeColor(
			themeColor.getSourceColor().getHex(),
			themeColor.state.name,
			themeColor.state.tones,
			themeColor.state.hueCalc,
			themeColor.state.chromaCalc,
			themeColor.getAliases(),
			themeColor.id
		);
		newThemeColor.setHueCalc(hueInput);
		setThemeColor(newThemeColor);
		console.log(`themeColor.hue: ${themeColor.themeColor.getHue('rounded')}`);
	};

	// Test!
	console.log(color.getChannelValue('hue'));
	console.log(`${themeColor.sourceColor.getHue('rounded')}`);

	// Rendering the UI
	return (
		<div id="container-wrap" className="py-4 overflow-y-auto">
			<Container space="medium">
				<Columns space="extraSmall">
					<div className="w-60">
						<Text>
							<Muted>Color name</Muted>
						</Text>
						<VerticalSpace space="extraSmall" />
						<div className="w-full flex">
							<div>
								<ColorPicker
									color={themeColor.getSourceColor().getHex(true)}
									onColorInput={handleHexInput}
								/>
							</div>
						</div>
						<VerticalSpace space="small" />
						<div className="flex flex-row justify-between">
							<Text>
								<Muted>Source Color</Muted>
							</Text>
							<Text>
								{` H: ${themeColor.sourceColor.getHue(
									'rounded'
								)} C: ${themeColor.sourceColor.getChroma(
									'rounded'
								)} T: ${themeColor.sourceColor.getTone('rounded')}`}
							</Text>
						</div>
						<VerticalSpace space="small" />
						<div className="flex flex-row justify-between">
							<Text>
								<Muted>Theme Color</Muted>
							</Text>
							<Text>
								{` H: ${themeColor.state.themeColor.getHue(
									'rounded'
								)} C: ${themeColor.state.themeColor.getChroma(
									'rounded'
								)} T: ${themeColor.themeColor.getTone('rounded')}`}
							</Text>
						</div>
						<VerticalSpace space="small" />
						{/* 
						When the sourceColor changes, update the slider value, thumb position, and themeColor
						When the slider value changes, update the thumb position and themeColor
						 */}
						{/* <ColorSlider
							channel={hChannel}
							// aria-label='sbh-label-id-2'
							value={color}
							// value={`${themeColor.sourceColor.getHue('rounded')}`}
							onChange={setColor}
							input={themeColor.themeColor.getHue('rounded')}
							placeholder={`${themeColor.sourceColor.getHue('rounded')}`}
							colorChannel="hue"
							onNewValue={handleHueInput}
							trackRef={null as any}
							inputRef={null as any}
						/>
						<VerticalSpace space="small" />
						<ColorSlider
							channel={sChannel}
							value={color}
							onChange={setColor}
							input={themeColor.getChroma('rounded')}
							colorChannel="chroma"
							// onNewValue={}
							trackRef={null as any}
							inputRef={null as any}
						/> */}
					</div>
					<div className="w-60 pl-3">
						<h1>ToDo:</h1>
						<br />
						<p className="font-bold pb-1">Hue input</p>
						<p>✅ Textbox updates themeColor</p>
						<p>✅ Textbox updates hueCalc</p>
						<p>❌ Textbox updates Slider</p>
						<p>❌ Updates to sourceColor update Textbox</p>
						<p>❌ Updates to sourceColor update Slider</p>
						<p>❌ Updates to themeColor update Textbox</p>
						<p>❌ Updates to themeColor update Slider</p>
						<p>❌ Slider updates themeColor</p>
						<p>❌ Slider updates Textbox</p>
					</div>
				</Columns>
			</Container>
		</div>
	);
};

// Exporting the Plugin component wrapped in the render function
export default render(Plugin);
