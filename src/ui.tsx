import '!./dist/tailwind.css';
import { ColorArea } from './components/colorArea';
import { ColorSlider } from './components/colorSlider';
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

	let [color, setColor] = useState<Color>(
		parseColor(hexToHSB(themeColor.getSourceColor().getHex()))
	);
	let [hChannel, sChannel, bChannel] = color.getColorChannels();

	const handleHexInput = (hexColor: string) => {
		// const color = parseColor(hexToHSB(newHexColor));
		const newThemeColor = new ThemeColor(
			hexColor,
			themeColor.state.name,
			themeColor.state.tones,
			themeColor.state.hueCalc,
			themeColor.state.chromaCalc,
			themeColor.getAliases()
		);
		setThemeColor(newThemeColor);
		// setColor(color);
	};

	// Test!
	console.log(color);
	console.log(`${themeColor.sourceColor.getHue('rounded')}`);

	// Rendering the UI
	return (
		<div id='container-wrap' className='py-4 overflow-y-auto'>
			<Container space='medium'>
				<Columns space='extraSmall'>
					<div className='w-60'>
						<Text>
							<Muted>Color name</Muted>
						</Text>
						<VerticalSpace space='extraSmall' />
						<div className='w-full flex'>
							<div>
								<ColorPicker
									color={themeColor.getSourceColor().getHex(true)}
									onColorInput={handleHexInput}
								/>
							</div>
						</div>
						<VerticalSpace space='small' />
						<div className='flex flex-row justify-between'>
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
						<VerticalSpace space='small' />
						<div className='flex flex-row justify-between'>
							<Text>
								<Muted>Theme Color</Muted>
							</Text>
							<Text>
								{` H: ${themeColor.themeColor.getHue(
									'rounded'
								)} C: ${themeColor.themeColor.getChroma(
									'rounded'
								)} T: ${themeColor.themeColor.getTone('rounded')}`}
							</Text>
						</div>
						<VerticalSpace space='small' />
						<ColorSlider
							channel={hChannel}
							// aria-label='sbh-label-id-2'
							value={color}
							// value={`${themeColor.sourceColor.getHue('rounded')}`}
							onChange={setColor}
						/>
						<VerticalSpace space='small' />
						<ColorSlider
							channel={sChannel}
							value={color}
							onChange={setColor}
							input={themeColor.sourceColor.getHue('rounded')}
							colorChannel='chroma'
							// onNewValue={}
						/>
					</div>
					<div className='w-60'></div>
				</Columns>
			</Container>
		</div>
	);
};

// Exporting the Plugin component wrapped in the render function
export default render(Plugin);
