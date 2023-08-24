import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import {
	Dropdown,
	DropdownOption,
	DropdownOptionHeader,
	DropdownOptionSeparator,
	DropdownOptionValue,
	DropdownProps,
} from '@create-figma-plugin/ui';
import { mapValues } from '../utility';
import '!../dist/tailwind.css';

type ToneSelectProps = {
	options: DropdownOption[];
	modeName: string;
	onOptionIdChange: (optionId: null | string) => void;
	onDropdownValueChange: (dropdownValue: string | number) => void;
};

export const ToneSelect = ({
	options,
	modeName,
	onOptionIdChange,
	onDropdownValueChange,
}: ToneSelectProps) => {
	// This component needs:
	// - a list of tones
	// - a selected tone value
	// - a string for the header 'mode tone'
	// - a function to handle the change of the selected tone

	const tones = options;
	const toneOptions: DropdownOption[] = [
		{ header: `${modeName} mode tone` },
		{ separator: true },
		...(tones as DropdownOptionValue<string>[]),
	];
	const [optionId, setOptionId] = useState<null | string>('1');
	const [dropdownValue, setDropdownValue] = useState<null | string>(
		(toneOptions[2] as DropdownOptionValue<string>).value
	);

	function handleDropdownChange(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newDropdownValue = event.currentTarget.value;
		const newOptionId = event.currentTarget.getAttribute('data-dropdown-item-id');
		setOptionId(newOptionId);
		setDropdownValue(newDropdownValue);
		onOptionIdChange(newOptionId);
		onDropdownValueChange(newDropdownValue);
	}

	return (
		<Fragment>
			<Dropdown
				onChange={handleDropdownChange}
				options={toneOptions}
				value={dropdownValue}
			/>
		</Fragment>
	);
};
