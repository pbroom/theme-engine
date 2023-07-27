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
	Dropdown,
	DropdownOption,
} from '@create-figma-plugin/ui';

// Importing preact and preact/hooks libraries
import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';

// Defining the Plugin component
function Plugin() {
	// Defining state variables
	const [value, setValue] = useState<string>('color');
	const [collections, setCollections] = useState<VariableCollection[]>([]);
	const [hexColor, setHexColor] = useState<string>('397456');
	const [opacity, setOpacity] = useState<string>('');
	const [hue, setHue] = useState<number>(0);
	const [chroma, setChroma] = useState<number>(0);
	const [tone, setTone] = useState<number>(0);
	const [hexFromHct, setHexFromHct] = useState<string>('#397456');
	const [paletteGradient, setPaletteGradient] = useState<string>(
		'#000000, #397456, #ffffff'
	);
	const [optionId, setOptionId] = useState<null | string>('1');

	// Function to handle changes in the Textbox component
	function handleInput(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newValue = event.currentTarget.value;
		setValue(newValue);
	}

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
		if (message.type === 'colorChange') {
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
		}
		if (message.type === 'localCollections') {
			const collections = message.collections;
			setCollections(collections);
			const newOptions = [...options];
			for (let i = 0; i < collections.length; i++) {
				newOptions.push({ value: collections[i].name });
			}
			const newDropdownValue = collections[0].name;
			setDropdownValue(newDropdownValue);
			setOptions(newOptions);
		}
	};

	// Function to handle changes in the opacity input field
	function handleOpacityInput(
		event: h.JSX.TargetedEvent<HTMLInputElement, Event>
	) {
		const newOpacity = event.currentTarget.value;
		setOpacity(newOpacity);
	}

	const defaultPaletteTones = [
		0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100, 4, 5, 6, 12, 17, 22, 24,
		25, 35, 87, 92, 94, 96, 98,
	];
	const [textAreaValue, setTextAreaValue] = useState<string>(
		`${defaultPaletteTones}`
	);

	function handleTextAreaInput(event: h.JSX.TargetedEvent<HTMLTextAreaElement>) {
		const newTextAreaValue = event.currentTarget.value;
		setTextAreaValue(newTextAreaValue);
	}

	function getStopsFromString(text: string): number[] {
		// Extract all integers from the text
		const allIntegers = text.match(/\b\d+\b/g)?.map(Number);
		// If no integers are found, return an empty array
		if (!allIntegers) {
			return [];
		}
		// Create a Set to ensure uniqueness, and filter out values outside the 0-100 range
		const stops: Set<number> = new Set(
			allIntegers.filter((n) => n >= 0 && n <= 100)
		);
		// Convert the Set back to an array
		return Array.from(stops);
	}

	// Function to handle button click
	function handleClick(type: string) {
		const newColor = {
			colorName: value,
			backgroundColor: hexColor,
		};
		const name = newColor.colorName;
		const color = newColor.backgroundColor;
		const toneStops = getStopsFromString(textAreaValue);
		if (!optionId) {
			return;
		}
		const collectionId = collections[parseInt(optionId) - 1].id;
		parent.postMessage(
			{
				pluginMessage: {
					type: type,
					name: name,
					color: color,
					toneStops: toneStops,
					collectionId: collectionId,
				},
			},
			'*'
		);
	}

	const [dropdownValue, setDropdownValue] = useState<null | string>(null);
	const [options, setOptions] = useState<Array<DropdownOption>>([
		{
			header: 'Choose a collection',
		},
	]);
	function handleChange(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newDropdownValue = event.currentTarget.value;
		const newOptionId = event.currentTarget.getAttribute('data-dropdown-item-id');
		console.log(newOptionId);
		setOptionId(newOptionId);
		setDropdownValue(newDropdownValue);
	}

	// Rendering the UI
	return (
		<div className='h-full py-4'>
			<Container space='medium'>
				<Dropdown
					onChange={handleChange}
					placeholder='Choose a collection'
					options={options}
					value={dropdownValue}
				/>
				<p className='text-xs'>Select a color to create a dynamic palette</p>
				<div
					className='h-8 rounded-sm w-full mt-3'
					style={{
						background: `linear-gradient(to right, ${paletteGradient})`,
					}}
				></div>
				<p className='p-2 mt-2 text-center ring-neutral-700 ring-1 rounded-md'>
					H: {hue} C: {chroma} T: {tone}
				</p>
				<div className='flex flex-row gap-1 py-2'>
					<Textbox
						onInput={handleInput}
						value={value}
						variant='border'
						placeholder='Name thy color'
					/>
					<TextboxColor
						id='hexColor1'
						hexColor={hexColor}
						hexColorPlaceholder='Color'
						onHexColorInput={handleHexColorInput}
						onOpacityInput={handleOpacityInput}
						opacity={opacity}
					/>
				</div>
				<TextboxMultiline
					onInput={handleTextAreaInput}
					value={textAreaValue}
					variant='border'
					placeholder='All tone stops (0-100)'
				/>
				<VerticalSpace space='large' />
				<Button onClick={() => handleClick('build')} className='mb-1' fullWidth>
					Build Palette
				</Button>
				<Button onClick={() => handleClick('createVariables')} fullWidth secondary>
					Create Variables
				</Button>
			</Container>
		</div>
	);
}

// Exporting the Plugin component wrapped in the render function
export default render(Plugin);
