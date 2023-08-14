// Importing the tailwind.css file
import '!./dist/tailwind.css';
import Color from './color';
import { maxChromaAtTonePerHue } from './ref';
import { AliasBuilder } from './components/alias-builder';
import GradientPreview from './components/gradient-preview';
import ThemeColor from './theme-color';

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
	Text,
	Textbox,
	TextboxColor,
	TextboxMultiline,
	TextboxNumeric,
	VerticalSpace,
	Bold,
} from '@create-figma-plugin/ui';

// Importing preact and preact/hooks libraries
import { h } from 'preact';
import { useState } from 'preact/hooks';

// Defining the Plugin component
export function Plugin() {
	// Defaults
	const startingColor = '397456';
	const defaultPaletteTones = [
		0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100, 4, 5, 6, 12, 17, 22, 24,
		25, 35, 87, 92, 94, 96, 98,
	];
	const themeColor = new ThemeColor(startingColor);
	const maxChromaAtHue = Math.round(
		maxChromaAtTonePerHue[themeColor.getThemeColor().getHue('rounded')].chroma
	);
	const [hue, setHue] = useState<number>(
		themeColor.getThemeColor().getHue('rounded')
	);
	const [chroma, setChroma] = useState<number>(
		themeColor.getThemeColor().getChroma('rounded')
	);
	const [tone, setTone] = useState<number>(
		themeColor.getThemeColor().getTone('rounded')
	);
	const [textboxValue, setTextboxValue] = useState<string>('');
	const [hexColor, setHexColor] = useState<string>(startingColor);

	const [augmentedColor, setAugmentedColor] = useState<string>(hexColor);
	const [opacity, setOpacity] = useState<string>('');
	const [hctHueValue, setHctHueValue] = useState<string>(`${hue}`);
	const [hctChromaValue, setHctChromaValue] = useState<string>(`${chroma}`);
	const [maxChromaValueAtHue, setMaxChromaValueAtHue] =
		useState<number>(maxChromaAtHue);
	const [textAreaValue, setTextAreaValue] = useState<string>(
		`${defaultPaletteTones}`
	);
	const [toneStops, setToneStops] = useState<number[]>(defaultPaletteTones);
	const [dropdownValue, setDropdownValue] = useState<null | string>(null);
	const [collections, setCollections] = useState<VariableCollection[]>([]);
	const [optionId, setOptionId] = useState<null | string>('1');
	const [options, setOptions] = useState<Array<DropdownOption>>([
		{
			header: 'Choose a collection',
		},
	]);
	const [checkboxValue, setCheckboxValue] = useState<boolean>(true);
	const [checkboxBindStyles, setCheckboxBindStyles] = useState<boolean>(false);

	themeColor.setTones(toneStops);
	themeColor.setName(textboxValue);
	themeColor.setSourceColor(hexColor);

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
		setAugmentedColor(currentColor.getHex());
		setHctHueValue(newHctHueValue);
		setMaxChromaValueAtHue(
			Math.round(maxChromaAtTonePerHue[newHctHueNumber].chroma + 1)
		);
	}
	function handleHctChromaInput(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newHctChromaValue = event.currentTarget.value;
		const newHctChromaNumber = parseInt(newHctChromaValue);
		const currentColor = new Color(augmentedColor);
		currentColor.setChroma(newHctChromaNumber);
		currentColor.setHue(parseInt(hctHueValue));
		setAugmentedColor(currentColor.getHex());
		setHctChromaValue(newHctChromaValue);
	}

	function handleTextAreaInput(event: h.JSX.TargetedEvent<HTMLTextAreaElement>) {
		const newTextAreaValue = event.currentTarget.value;
		setTextAreaValue(newTextAreaValue);
		const numbers = Array.from({ length: 101 }, (_, i) => i);
		const newToneStops =
			getStopsFromString(newTextAreaValue).length > 0
				? getStopsFromString(newTextAreaValue)
				: numbers;
		setToneStops(newToneStops);
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
		// const toneStops = getStopsFromString(textAreaValue);
		if (!optionId) {
			return;
		}
		const collectionId = collections[parseInt(optionId) - 1].id;
		const overwriteVariables = checkboxValue;
		const bindStyles = checkboxBindStyles;
		parent.postMessage(
			{
				pluginMessage: {
					type: type,
					name: name,
					color: color,
					toneStops: toneStops,
					collectionId: collectionId,
					overwriteVariables: overwriteVariables,
					bindStyles: bindStyles,
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
		const name = event.currentTarget.getAttribute('name');
		if (name === 'overwriteVariables') {
			const newCheckboxValue = event.currentTarget.checked;
			setCheckboxValue(newCheckboxValue);
			console.log(newCheckboxValue);
		}
		if (name === 'bindStyles') {
			const newCheckboxBindStyles = event.currentTarget.checked;
			setCheckboxBindStyles(newCheckboxBindStyles);
			console.log(newCheckboxBindStyles);
		}
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

			const modes = collections[0].modes;
		}
	};

	function checkOpacityValue(opacityName: string): number | undefined {
		const element = document.querySelector(`.textboxColor.${opacityName}`);
		if (element) {
			const opacityInput = element.querySelector(
				`#opacity-${opacityName}`
			) as HTMLInputElement;
			if (opacityInput) {
				return parseFloat(opacityInput.value);
			}
		}
		return undefined;
	}

	// Rendering the UI
	return (
		<div id='container-wrap' className='py-4 overflow-y-auto'>
			<Container space='medium'>
				<Columns space='small'>
					<div className='w-60'>
						<Text>
							<Muted>Select a color</Muted>
						</Text>

						<div className='flex flex-row align-middle'>
							<div className='w-24'>
								<TextboxColor
									id='hexColor1'
									hexColor={hexColor}
									hexColorPlaceholder='Color'
									onHexColorInput={handleHexColorInput}
									onOpacityInput={handleOpacityInput}
									opacity={opacity}
									opacityName='opacityInput'
								/>
							</div>
							<div className='p-1 text-center flex flex-row justify-end items-center grow'>
								<Text align='right'>
									<Muted>
										H: {hue} C: {chroma} T: {tone}
									</Muted>
								</Text>
							</div>
						</div>
						<VerticalSpace space='small' />
						<Text>
							<Muted>Adjust hue and chroma to taste</Muted>
						</Text>
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
									maximum={maxChromaValueAtHue}
									minimum={0}
									onInput={handleHctChromaInput}
									value={hctChromaValue}
									variant='border'
									icon='C'
								/>
								<VerticalSpace space='small' />
								<RangeSlider
									maximum={maxChromaValueAtHue}
									minimum={0}
									onInput={handleHctChromaInput}
									value={hctChromaValue}
								/>
							</div>
						</Columns>
						<VerticalSpace space='large' />
						<Text>
							<Muted>Select tones</Muted>
						</Text>
						<VerticalSpace space='extraSmall' />
						<TextboxMultiline
							onInput={handleTextAreaInput}
							value={textAreaValue}
							variant='border'
							placeholder='All tone stops (0-100)'
						/>
						<VerticalSpace space='large' />
						<Text>
							<Muted>Give the palette a pretty name</Muted>
						</Text>
						<VerticalSpace space='extraSmall' />
						<Textbox
							onInput={handleTextboxInput}
							value={textboxValue}
							variant='border'
							placeholder='color/palette-name'
						/>
						<VerticalSpace space='large' />
						<Button
							// onClick={() => handleClick('build')}
							onClick={() => console.log(themeColor)}
							className='mb-1'
							fullWidth
							secondary
						>
							Print themeColor
						</Button>
						<Dropdown
							onChange={handleDropdownChange}
							placeholder='Choose a collection'
							options={options}
							value={dropdownValue}
							className='mb-1'
						/>
						<VerticalSpace space='small' />
						<Checkbox
							onChange={handleCheckboxChange}
							value={checkboxValue}
							name='overwriteVariables'
						>
							<Text>Overwrite existing variables if they have the same name</Text>
						</Checkbox>
						<VerticalSpace space='large' />
						<Checkbox
							onChange={handleCheckboxChange}
							value={checkboxBindStyles}
							name='bindStyles'
						>
							<Text>Bind to styles with the same name</Text>
						</Checkbox>
						<VerticalSpace space='large' />
						<Button onClick={() => handleClick('createVariables')} fullWidth>
							Build Variables
						</Button>
					</div>
					<div id='plugin-column-2' className='w-60'>
						<VerticalSpace space='small' />
						<GradientPreview hexColor={hexColor} />
						<VerticalSpace space='small' />
						<GradientPreview hexColor={augmentedColor} />
						<VerticalSpace space='small' />
						<GradientPreview hexColor={augmentedColor} stops={toneStops} />
						{/* <AliasBuilder
							aliasName={'string'}
							toneOptions={defaultPaletteTones}
							modeOptions={defaultModes}
						/> */}
					</div>
				</Columns>
			</Container>
		</div>
	);
}

// Exporting the Plugin component wrapped in the render function
export default render(Plugin);
