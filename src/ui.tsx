// Importing the tailwind.css file
import '!./dist/tailwind.css';
import Color from './color';
import { mapValues } from './utility';
import { maxChromaAtTonePerHue } from './ref';
import GradientPreview from './components/gradient-preview';
import ToneField from './components/tone-field';
import ThemeColor from './theme-color';
import { ToneSelect } from './components/tone-select';

// Importing UI components from the create-figma-plugin/ui library
import {
	Button,
	Checkbox,
	Columns,
	Container,
	Divider,
	Dropdown,
	DropdownOption,
	DropdownOptionHeader,
	DropdownOptionSeparator,
	DropdownOptionValue,
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
// import { mapValues } from 'lodash';

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
	const [toneStops, setToneStops] = useState<number[]>(defaultPaletteTones);
	const [dropdownValue, setDropdownValue] = useState<null | string>(null);
	const [collections, setCollections] = useState<VariableCollection[]>([]);
	const [optionId, setOptionId] = useState<null | string>('1');
	const [options, setOptions] = useState<Array<DropdownOption>>([
		{
			header: 'Choose a collection',
		},
	]);
	const [modes, setModes] = useState<string[]>(['light']);
	const [checkboxValue, setCheckboxValue] = useState<boolean>(true);
	const [checkboxBindStyles, setCheckboxBindStyles] = useState<boolean>(false);

	const selectedColection = collections[dropdownValue as unknown as number];

	themeColor.setTones(toneStops);
	themeColor.setName(textboxValue);
	themeColor.setSourceColor(hexColor);
	themeColor.setHue(parseInt(hctHueValue));
	themeColor.setChroma(parseInt(hctChromaValue));

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
		themeColor.setSourceColor(newHexColor);
		setAugmentedColor(newHexColor);
		setHue(themeColor.getThemeColor().getHue('rounded'));
		setHctHueValue(`${themeColor.getThemeColor().getHue('rounded')}`);
		setChroma(themeColor.getThemeColor().getChroma('rounded'));
		setHctChromaValue(`${themeColor.getThemeColor().getChroma('rounded')}`);
		setTone(themeColor.getThemeColor().getTone('rounded'));

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
		const currentColor = themeColor.getThemeColor();
		themeColor.setHue(newHctHueNumber);
		setAugmentedColor(currentColor.getHex());
		setHctHueValue(newHctHueValue);
		setMaxChromaValueAtHue(
			Math.round(maxChromaAtTonePerHue[newHctHueNumber].chroma + 1)
		);
	}
	function handleHctChromaInput(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newHctChromaValue = event.currentTarget.value;
		const newHctChromaNumber = parseInt(newHctChromaValue);
		const currentColor = themeColor.getThemeColor();
		themeColor.setChroma(newHctChromaNumber);
		currentColor.setHue(parseInt(hctHueValue));
		setAugmentedColor(currentColor.getHex());
		setHctChromaValue(newHctChromaValue);
	}

	// Function to handle button click
	function handleClick(type: string) {
		const newColor = themeColor.getState();
		const name = newColor.name;
		const color = newColor.themeColor.getHex();
		const toneStops = themeColor.getTones();
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
					themeColor: themeColor,
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

	const tonesForMode = mapValues('value', themeColor.getTones('light'));

	const toneOptions: DropdownOption[] = [
		{ header: `${collections[0].modes[0].name} mode tone` },
		{ separator: true },
		...(tonesForMode as DropdownOptionValue[]),
	];

	const [toneDropdownValue, setToneDropdownValue] = useState<null | string>(
		toneOptions[2].value
	);

	function handleToneDropdownChange(
		event: h.JSX.TargetedEvent<HTMLInputElement>
	) {
		const newToneDropdownValue = event.currentTarget.value;
		const newOptionId = event.currentTarget.getAttribute('data-dropdown-item-id');
		setOptionId(newOptionId);
		setToneDropdownValue(newToneDropdownValue);
	}

	const [optionId2, setOptionId2] = useState<null | string>(null);
	const [dropdownValue2, setDropdownValue2] = useState<null | string>(null);

	function handleOptionIdChange(newOptionId2: string) {
		setOptionId2(newOptionId2);
	}

	function handleDropdownValueChange(newDropdownValue2: string) {
		setDropdownValue2(newDropdownValue2);
	}

	const options2: DropdownOption[] = [
		...(tonesForMode as DropdownOptionValue[]),
	];

	// Rendering the UI
	return (
		<div id='container-wrap' className='py-4 overflow-y-auto'>
			<Container space='medium'>
				<Columns space='extraSmall'>
					<div className='w-60'>
						<Text>
							<Muted>Color/palette name</Muted>
						</Text>
						<VerticalSpace space='extraSmall' />
						<Textbox
							onInput={handleTextboxInput}
							value={textboxValue}
							variant='border'
							placeholder='color'
						/>
					</div>
					<div className='w-60'>
						<Text>
							<Muted>Variable collection</Muted>
						</Text>
						<VerticalSpace space='extraSmall' />
						<Dropdown
							onChange={handleDropdownChange}
							placeholder='Choose a collection'
							options={options}
							value={dropdownValue}
							className='mb-1'
						/>
					</div>
				</Columns>
				<VerticalSpace space='small' />
				<Columns space='extraSmall'>
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
					</div>
					<div id='plugin-column-2' className='w-60'>
						<GradientPreview hexColor={hexColor} />
					</div>
				</Columns>
				<VerticalSpace space='extraSmall' />
				<Columns space='extraSmall'>
					<div className='w-60'>
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
					</div>
					<div className='w-60'>
						<GradientPreview hexColor={augmentedColor} />
					</div>
				</Columns>
				<VerticalSpace space='extraSmall' />
				<Columns space='extraSmall'>
					<div className='w-60'>
						<Text>
							<Muted>Select tones</Muted>
						</Text>
						<VerticalSpace space='extraSmall' />
						<ToneField tones={toneStops} setToneStops={setToneStops} />
					</div>
					<div className='w-60'>
						<GradientPreview hexColor={augmentedColor} stops={toneStops} />
					</div>
				</Columns>
				<VerticalSpace space='large' />
				<Divider />
				<VerticalSpace space='large' />
				<Columns space='extraSmall'>
					<div className='w-60'>
						<Text>
							<Muted>Variable aliases</Muted>
						</Text>
						<VerticalSpace space='extraSmall' />
						<div>
							<Button onClick={() => handleClick('addAlias')} fullWidth secondary>
								Add alias
							</Button>
						</div>
						<VerticalSpace space='large' />
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
						<VerticalSpace space='extraSmall' />
						<Button
							// onClick={() => handleClick('build')}
							onClick={() => console.log(themeColor)}
							className='mb-1'
							fullWidth
							secondary
						>
							Print themeColor
						</Button>
					</div>
					<div className='w-60'>
						<Textbox value={themeColor.getName() || 'color'} />
						<Dropdown
							onChange={handleToneDropdownChange}
							options={toneOptions}
							value={toneDropdownValue}
						/>
						<ToneSelect
							options={options2}
							modeName='test'
							onOptionIdChange={(newOptionId2: string | null) =>
								handleOptionIdChange(newOptionId2 ?? '')
							}
							onDropdownValueChange={(newDropdownValue2: string | number) =>
								handleDropdownValueChange(String(newDropdownValue2))
							}
						/>
						<p>Selected option ID: {optionId2}</p>
						<p>Selected dropdown value: {dropdownValue2}</p>
					</div>
				</Columns>

				{/* <AliasInput /> */}

				<VerticalSpace space='large' />
				<Columns space='extraSmall'>
					<div className='w-60'></div>
					<div className='w-60'></div>
				</Columns>
				<VerticalSpace space='large' />
				<Columns space='extraSmall'>
					<div className='w-60'></div>
					<div className='w-60'></div>
				</Columns>
				<VerticalSpace space='large' />
			</Container>
		</div>
	);
}

// Exporting the Plugin component wrapped in the render function
export default render(Plugin);
