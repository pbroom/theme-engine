// Importing the tailwind.css file
import '!./dist/tailwind.css';
import Color from './color';
import { hctTonalGradient } from './color';

// Importing UI components from the create-figma-plugin/ui library
import {
	Button,
	Checkbox,
	Columns,
	Container,
	Divider,
	Dropdown,
	DropdownOption,
	Muted,
	render,
	RangeSlider,
	RangeSliderProps,
	Text,
	Textbox,
	TextboxColor,
	TextboxMultiline,
	TextboxNumeric,
	TextboxNumericProps,
	VerticalSpace,
} from '@create-figma-plugin/ui';

// Importing preact and preact/hooks libraries
import { h } from 'preact';
import { useState } from 'preact/hooks';

// Defining the Plugin component
function Plugin() {
	// Defaults
	const startingColor = '397456';
	const color = new Color(startingColor);
	const startingGradient = hctTonalGradient(startingColor);
	const defaultPaletteTones = [
		0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100, 4, 5, 6, 12, 17, 22, 24,
		25, 35, 87, 92, 94, 96, 98,
	];

	const [paletteGradient, setPaletteGradient] =
		useState<string>(startingGradient);
	const [augmentedGradient, setAugmentedGradient] =
		useState<string>(startingGradient);
	const [hue, setHue] = useState<number>(color.getHue('rounded'));
	const [chroma, setChroma] = useState<number>(color.getChroma('rounded'));
	const [tone, setTone] = useState<number>(color.getTone('rounded'));
	const [textboxValue, setTextboxValue] = useState<string>('color');
	const [hexColor, setHexColor] = useState<string>(startingColor);
	const [augmentedColor, setAugmentedColor] = useState<string>(startingColor);
	const [opacity, setOpacity] = useState<string>('');
	const [hctHueValue, setHctHueValue] = useState<string>(
		`${color.getHue('rounded')}`
	);
	const [hctChromaValue, setHctChromaValue] = useState<string>(
		`${color.getChroma('rounded')}`
	);
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
		setAugmentedColor(newHexColor);
		const newColor = new Color(newHexColor);
		const newPaletteGradient = hctTonalGradient(newHexColor);
		setPaletteGradient(newPaletteGradient);
		setAugmentedGradient(newPaletteGradient);
		const newHue = newColor.getHue('rounded');
		setHue(newHue);
		setHctHueValue(newHue.toString());
		const newChroma = newColor.getChroma('rounded');
		setChroma(newChroma);
		setHctChromaValue(newChroma.toString());
		const newTone = newColor.getTone('rounded');
		setTone(newTone);

		return newHexColor;
	}

	function handleOpacityInput(
		event: h.JSX.TargetedEvent<HTMLInputElement, Event>
	) {
		const newOpacity = event.currentTarget.value;
		setOpacity(newOpacity);
	}
	function handleHctHueInput(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newHctHueValue = event.currentTarget.value;
		const newHctHueNumber = parseInt(newHctHueValue);
		const currentColor = new Color(augmentedColor);
		currentColor.setHue(newHctHueNumber);
		const newAugmentedGradient = hctTonalGradient(currentColor.getHex());
		setAugmentedColor(currentColor.getHex());
		setAugmentedGradient(newAugmentedGradient);
		setHctHueValue(newHctHueValue);
	}
	function handleHctChromaInput(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newHctChromaValue = event.currentTarget.value;
		const newHctChromaNumber = parseInt(newHctChromaValue);
		const currentColor = new Color(augmentedColor);
		currentColor.setChroma(newHctChromaNumber);
		currentColor.setHue(parseInt(hctHueValue));
		const newAugmentedGradient = hctTonalGradient(currentColor.getHex());
		setAugmentedColor(currentColor.getHex());
		setAugmentedGradient(newAugmentedGradient);
		setHctChromaValue(newHctChromaValue);
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
			backgroundColor: augmentedColor,
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
				<p className='p-2 mt-2 text-center ring-neutral-700 ring-1 rounded-md'>
					H: {hue} C: {chroma} T: {tone}
				</p>
				<div className='h-16 rounded-sm overflow-hidden w-full mt-3'>
					<div
						className='h-8 w-full'
						style={{
							background: `linear-gradient(to right, ${paletteGradient})`,
						}}
					></div>
					<div
						className='h-8 w-full'
						style={{
							background: `linear-gradient(to right, ${augmentedGradient})`,
							// background: 'red',
						}}
					></div>
				</div>
				<VerticalSpace space='extraSmall' />
				<Columns space='extraSmall'>
					<div>
						<TextboxNumeric
							maximum={360}
							minimum={0}
							onInput={handleHctHueInput}
							value={hctHueValue}
							variant='border'
							icon='H'
						/>
						<VerticalSpace space='small' />
						<RangeSlider
							maximum={360}
							minimum={0}
							onInput={handleHctHueInput}
							value={hctHueValue}
						/>
					</div>
					<div>
						<TextboxNumeric
							maximum={150}
							minimum={0}
							onInput={handleHctChromaInput}
							value={hctChromaValue}
							variant='border'
							icon='C'
						/>
						<VerticalSpace space='small' />
						<RangeSlider
							maximum={150}
							minimum={0}
							onInput={handleHctChromaInput}
							value={hctChromaValue}
						/>
					</div>
				</Columns>
				<VerticalSpace space='large' />
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
