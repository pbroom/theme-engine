// Importing the tailwind.css file
import '!./tailwind.css';

// Importing UI components from the create-figma-plugin/ui library
import {
	Button,
	Container,
	render,
	VerticalSpace,
	TextboxColor,
	Textbox,
} from '@create-figma-plugin/ui';

// Importing preact and preact/hooks libraries
import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';

// Defining the Plugin component
function Plugin() {
	// Defining state variables for hexColor and opacity
	const [hexColor, setHexColor] = useState<string>('397456');
	const [opacity, setOpacity] = useState<string>('');
	const [hue, setHue] = useState<number>(0);
	const [chroma, setChroma] = useState<number>(0);
	const [tone, setTone] = useState<number>(0);
	const [hexFromHct, setHexFromHct] = useState<string>('#397456');

	// Function to handle changes in the hexColor input field
	function handleHexColorInput(
		event: h.JSX.TargetedEvent<HTMLInputElement, Event>
	) {
		const newHexColor = event.currentTarget.value;
		const toneStops = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
		// console.log(newHexColor);
		setHexColor(newHexColor);
		parent.postMessage(
			{
				pluginMessage: {
					type: 'colorChange',
					newHexColor: newHexColor,
					toneStops: toneStops,
				},
			},
			'*'
		);
		return newHexColor;
	}

	// Function to handle changes in the hexColor input field from main.ts
	onmessage = (event) => {
		const hct = event.data.pluginMessage;
		const newHue = Math.round(hct.hue);
		setHue(newHue);
		const newChroma = Math.round(hct.chroma);
		setChroma(newChroma);
		const newTone = Math.round(hct.tone);
		setTone(newTone);
		const newHexFromHct = hct.hex;
		setHexFromHct(newHexFromHct);
	};

	// Function to handle changes in the opacity input field
	function handleOpacityInput(
		event: h.JSX.TargetedEvent<HTMLInputElement, Event>
	) {
		const newOpacity = event.currentTarget.value;
		console.log(newOpacity);
		setOpacity(newOpacity);
	}

	// Defining state variable for the Textbox component
	const [value, setValue] = useState<string>('color');

	// Function to handle changes in the Textbox component
	function handleInput(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newValue = event.currentTarget.value;
		console.log(newValue);
		setValue(newValue);
	}

	// Function to handle button click
	function handleClick() {
		const newColor = {
			colorName: value,
			backgroundColor: hexColor,
		};
		console.log(newColor);
		const name = newColor.colorName;
		const color = newColor.backgroundColor;
		const toneStops = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
		parent.postMessage(
			{
				pluginMessage: {
					type: 'build',
					name: name,
					color: color,
					toneStops: toneStops,
				},
			},
			'*'
		);
	}

	// Rendering the UI
	// TODO could I share the theme info in an encoded image?
	return (
		<div className='h-full'>
			<Container space='medium'>
				<VerticalSpace space='small' />
				<h2 className='text-lg mb-4'>Hello there</h2>
				<p className='text-xs'>Select a color to create a dynamic palette</p>
				<div className='flex flex-row gap-1 py-2'>
					<Textbox
						onInput={handleInput}
						value={value}
						variant='border'
						placeholder='Color name'
					/>
					<TextboxColor
						id='hexColor1'
						hexColor={hexColor}
						hexColorPlaceholder='Color'
						onHexColorInput={handleHexColorInput}
						onOpacityInput={handleOpacityInput}
						opacity={opacity}
						// opacityPlaceholder='%'
						// variant='underline'
					/>
				</div>
				<div
					className='h-8 rounded-sm w-full'
					style={{ backgroundColor: hexFromHct }}
				></div>
				<p>
					H: {hue} C: {chroma} T: {tone}
				</p>
				<p>{hexFromHct}</p>
				<VerticalSpace space='large' />
				<Button onClick={handleClick} fullWidth>
					Build
				</Button>
			</Container>
		</div>
	);
}

// Exporting the Plugin component wrapped in the render function
export default render(Plugin);
