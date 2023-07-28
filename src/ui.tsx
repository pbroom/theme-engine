// Importing the tailwind.css file
import '!./dist/tailwind.css';
import Color from './color';
import { paletteTones, hctTonalGradient } from './color';

// Importing UI components from the create-figma-plugin/ui library
import {
	Button,
	Checkbox,
	Container,
	render,
	VerticalSpace,
	Divider,
	TextboxMultiline,
	TextboxColor,
	Textbox,
	Dropdown,
	Text,
	DropdownOption,
} from '@create-figma-plugin/ui';

// Importing preact and preact/hooks libraries
import { h } from 'preact';
import { useState } from 'preact/hooks';

// Defining the Plugin component
function Plugin() {
	// Defaults
	const startingColor = '397456';
	const startingGradient = hctTonalGradient(startingColor);
	const defaultPaletteTones = [
		0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100, 4, 5, 6, 12, 17, 22, 24,
		25, 35, 87, 92, 94, 96, 98,
	];

	const [paletteGradient, setPaletteGradient] =
		useState<string>(startingGradient);
	const [hue, setHue] = useState<number>(0);
	const [chroma, setChroma] = useState<number>(0);
	const [tone, setTone] = useState<number>(0);
	const [textboxValue, setTextboxValue] = useState<string>('color');
	const [hexColor, setHexColor] = useState<string>(startingColor);
	const [opacity, setOpacity] = useState<string>('');
	const [textAreaValue, setTextAreaValue] = useState<string>(
		`${defaultPaletteTones}`
	);
	const [dropdownValue, setDropdownValue] = useState<null | string>(null);
	const [collections, setCollections] = useState<VariableCollection[]>([]);
	const [optionId, setOptionId] = useState<null | string>('1');
	const [options, setOptions] = useState<Array<DropdownOption>>([
		{
			header: 'Choose a collection',
		},
	]);
	const [checkboxValue, setCheckboxValue] = useState<boolean>(true);

	function handleTextboxInput(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newTextboxValue = event.currentTarget.value;
		setTextboxValue(newTextboxValue);
	}

	// Function to handle changes in the hexColor input field
	function handleHexColorInput(
		event: h.JSX.TargetedEvent<HTMLInputElement, Event>
	) {
		const newHexColor = event.currentTarget.value;
		setHexColor(newHexColor);
		const newColor = new Color(newHexColor);
		const newPaletteGradient = hctTonalGradient(startingColor);
		setPaletteGradient(newPaletteGradient);
		const newHue = Math.round(newColor.getHue());
		setHue(newHue);
		const newChroma = Math.round(newColor.getChroma());
		setChroma(newChroma);
		const newTone = Math.round(newColor.getTone());
		setTone(newTone);

		return newHexColor;
	}

	function handleOpacityInput(
		event: h.JSX.TargetedEvent<HTMLInputElement, Event>
	) {
		const newOpacity = event.currentTarget.value;
		setOpacity(newOpacity);
	}

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
			colorName: textboxValue,
			backgroundColor: hexColor,
		};
		const name = newColor.colorName;
		const color = newColor.backgroundColor;
		const toneStops = getStopsFromString(textAreaValue);
		if (!optionId) {
			return;
		}
		const collectionId = collections[parseInt(optionId) - 1].id;
		const overwriteVariables = checkboxValue;
		parent.postMessage(
			{
				pluginMessage: {
					type: type,
					name: name,
					color: color,
					toneStops: toneStops,
					collectionId: collectionId,
					overwriteVariables: overwriteVariables,
				},
			},
			'*'
		);
	}

	function handleDropdownChange(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newDropdownValue = event.currentTarget.value;
		const newOptionId = event.currentTarget.getAttribute('data-dropdown-item-id');
		setOptionId(newOptionId);
		setDropdownValue(newDropdownValue);
	}
	function handleCheckboxChange(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newCheckboxValue = event.currentTarget.checked;
		setCheckboxValue(newCheckboxValue);
	}

	onmessage = (event) => {
		const message = event.data.pluginMessage;
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

	// Rendering the UI
	return (
		<div className='h-full py-4'>
			<Container space='medium'>
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
						onInput={handleTextboxInput}
						value={textboxValue}
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
				<Button
					onClick={() => handleClick('build')}
					className='mb-1'
					fullWidth
					secondary
				>
					Build Swatches
				</Button>
				<VerticalSpace space='small' />
				<Divider />
				<VerticalSpace space='small' />
				<Dropdown
					onChange={handleDropdownChange}
					placeholder='Choose a collection'
					options={options}
					value={dropdownValue}
					className='mb-1'
				/>
				<VerticalSpace space='small' />
				<Checkbox onChange={handleCheckboxChange} value={checkboxValue}>
					<Text>Overwrite existing variables if they have the same name</Text>
				</Checkbox>
				<VerticalSpace space='large' />
				<Button onClick={() => handleClick('createVariables')} fullWidth>
					Build Variables
				</Button>
			</Container>
		</div>
	);
}

// Exporting the Plugin component wrapped in the render function
export default render(Plugin);
