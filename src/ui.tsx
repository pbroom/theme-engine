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

	function handleSourceHexInput(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newHexColor = event.currentTarget.value;
		// const color = parseColor(hexToHSB(newHexColor));
		const newThemeColor = new ThemeColor(
			newHexColor,
			themeColor.state.name,
			themeColor.state.tones,
			themeColor.state.hueCalc,
			themeColor.state.chromaCalc,
			themeColor.getAliases()
		);
		setThemeColor(newThemeColor);
		// setColor(color);
	}

	// Test!
	console.log(defaultColor);
	console.log(themeColor.getSourceColor().getHex(true));

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
						<div className='w-full flex flex-row content-center align-middle'>
							<div className='w-24'>
								<ColorPicker
									color={themeColor.getSourceColor().getHex(true)}
									onColorInput={handleSourceHexInput}
								/>
							</div>
							<div className='w-full'>
								<Text align='center'>
									<Muted>{`H: ${themeColor.sourceColor.getHue(
										'rounded'
									)} C: ${themeColor.sourceColor.getChroma(
										'rounded'
									)} T: ${themeColor.sourceColor.getTone('rounded')}`}</Muted>
								</Text>
							</div>
						</div>
						<VerticalSpace space='extraSmall' />
						{/* <ColorArea
							aria-labelledby='sbh-label-id-1'
							value={color}
							onChange={setColor}
							xChannel={sChannel}
							yChannel={bChannel}
						/> */}
						<ColorSlider
							channel={hChannel}
							aria-label='sbh-label-id-2'
							value={color}
							onChange={setColor}
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
