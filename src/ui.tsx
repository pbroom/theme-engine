// Importing the tailwind.css file
import '!./tailwind.css';

// Importing UI components from the create-figma-plugin/ui library
import {
	Button,
	Container,
	render,
	VerticalSpace,
	TextboxMultiline,
	TextboxColor,
	Textbox,
	IconToggleButton,
	IconToggleButtonProps,
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
	const [paletteGradient, setPaletteGradient] = useState<string>(
		'#000000, #397456, #ffffff'
	);

	// Function to handle changes in the hexColor input field
	function handleHexColorInput(
		event: h.JSX.TargetedEvent<HTMLInputElement, Event>
	) {
		const newHexColor = event.currentTarget.value;
		const toneStops = textAreaValue;
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

	type PaletteObject = {
		[key: string]: string;
	};

	const getValues = (paletteObject: PaletteObject) => {
		let hexString = '';
		for (let key in paletteObject) {
			hexString += paletteObject[key] + ', ';
		}
		// Remove the last comma and space
		hexString = hexString.slice(0, -2);
		return hexString;
	};

	// Function to handle changes in the hexColor input field from main.ts
	onmessage = (event) => {
		const message = event.data.pluginMessage;
		// hct
		const hct = message.hctColor;
		const newHue = Math.round(hct.hue);
		setHue(newHue);
		const newChroma = Math.round(hct.chroma);
		setChroma(newChroma);
		const newTone = Math.round(hct.tone);
		setTone(newTone);
		const newHexFromHct = hct.hex;
		setHexFromHct(newHexFromHct);
		// palette
		const palette = message.palettePreview;
		const newPaletteGradient = getValues(palette);
		setPaletteGradient(newPaletteGradient);
	};

	// Function to handle changes in the opacity input field
	function handleOpacityInput(
		event: h.JSX.TargetedEvent<HTMLInputElement, Event>
	) {
		const newOpacity = event.currentTarget.value;
		setOpacity(newOpacity);
	}

	// Defining state variable for the Textbox component
	const [value, setValue] = useState<string>('color');

	// Function to handle changes in the Textbox component
	function handleInput(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newValue = event.currentTarget.value;
		setValue(newValue);
	}
	const defaultPaletteTones = [
		0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100, 4, 5, 6, 12, 17, 22, 24,
		25, 35, 87, 92, 94, 96, 98,
	];
	const [textAreaValue, setTextAreaValue] = useState<string>(
		`${defaultPaletteTones}`
	);
	const [numberArray, setNumberArray] = useState<number[]>([]);
	function handleTextAreaInput(event: h.JSX.TargetedEvent<HTMLTextAreaElement>) {
		const newTextAreaValue = event.currentTarget.value;
		setTextAreaValue(newTextAreaValue);
	}

	// Function to handle button click
	function handleClick() {
		const numberStrings = textAreaValue.split(/\s|,/);
		const integersOnly = numberStrings.filter((str) => /^\d+$/.test(str));
		const parsedNumbers = integersOnly.map(Number);
		const validNumbers = parsedNumbers.filter((num) => num >= 0 && num <= 100);
		const uniqueNumbers = Array.from(new Set(validNumbers));
		setNumberArray(uniqueNumbers);

		const newColor = {
			colorName: value,
			backgroundColor: hexColor,
		};
		const name = newColor.colorName;
		const color = newColor.backgroundColor;
		const toneStops = numberArray;
		console.log('toneStops', toneStops);
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
				<div
					className='h-8 rounded-sm w-full'
					style={{
						background: `linear-gradient(to right, ${paletteGradient})`,
					}}
				></div>
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
				<p className='pb-2'>
					H: {hue} C: {chroma} T: {tone}
				</p>
				<IconToggleButton onChange={handleChange} value={value}>
					<code>1</code>
				</IconToggleButton>
				;
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
