import { h, Fragment } from 'preact';
import {
	Text,
	Textbox,
	TextboxAutocomplete,
	TextboxAutocompleteOption,
	Dropdown,
	DropdownOption,
	DropdownOptionHeader,
	VerticalSpace,
} from '@create-figma-plugin/ui';
import { useState } from 'preact/hooks';
import '!../dist/tailwind.css';

interface AliasProps {
	aliasName: string;
	toneOptions: number[] | Variable[];
	modes: string[];
}

export function AliasBuilder({ aliasName, toneOptions, modes }: AliasProps) {
	const [text, setText] = useState<string>('');
	const [selectedTone, setSelectedTone] = useState<string>('');

	function handleTextboxInput(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newText = event.currentTarget.value;
		setText(newText);
	}

	const alias = (array: string[] | number[] | undefined) => {
		return;
	};

	function handleAutocompleteInput(
		event: h.JSX.TargetedEvent<HTMLInputElement>
	) {
		const newSelectedTone = event.currentTarget.value;
		setSelectedTone(newSelectedTone);
	}

	return (
		<Fragment>
			<div className='flex flex-row gap-2 items-center w-full'>
				<div className='w-5 h-5 rounded-full border border-neutral-500 bg-green-700 relative' />
				<Text>Color</Text>
			</div>
			<VerticalSpace space='small' />
			<VerticalSpace space='extraSmall' />
			<div className='flex flex-row gap-1 w-full'>
				<div className='flex-grow'>
					<Textbox
						value={text}
						onInput={handleTextboxInput}
						variant='underline'
						placeholder='variable alias name'
					/>
				</div>
				<div className='w-28'>
					<TextboxAutocomplete
						options={toneOptions}
						value={selectedTone}
						onInput={handleAutocompleteInput}
						variant='underline'
						placeholder='light mode tone'
					/>
					<TextboxAutocomplete
						options={toneOptions}
						value={selectedTone}
						onInput={handleAutocompleteInput}
						variant='underline'
						placeholder='dark mode tone'
					/>
				</div>
			</div>
		</Fragment>
	);
}
