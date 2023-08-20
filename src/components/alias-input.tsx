import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { DropdownOption, Textbox } from '@create-figma-plugin/ui';
import { ToneSelect } from './tone-select';
import Alias from '../alias';

interface AliasInputProps {
	alias: Alias;
	onAliasNameChange: (aliasName: string) => void;
	onDropdownValueChange: (dropdownValue: string | number) => void;
	onOptionIdChange: (optionId: null | string) => void;
	options: DropdownOption[];
}

export const AliasInput = ({ alias, options }: AliasInputProps) => {
	// Alias input needs:
	// - a textbox
	// - text for the textbox should be 'color' or whatever string is passed in
	// - an array of modes
	// - a tone select for each mode

	const [optionId, setOptionId] = useState<null | string>(null);
	const [dropdownValue, setDropdownValue] = useState<null | string>(null);

	function handleOptionIdChange(newOptionId: string) {
		setOptionId(newOptionId);
	}

	function handleDropdownValueChange(newDropdownValue: string) {
		setDropdownValue(newDropdownValue);
	}

	return (
		<Fragment>
			<Textbox value={'color'} />
			<ToneSelect
				options={options}
				modeName='test'
				onOptionIdChange={(newOptionId: string | null) =>
					handleOptionIdChange(newOptionId ?? '')
				}
				onDropdownValueChange={(newDropdownValue: string | number) =>
					handleDropdownValueChange(String(newDropdownValue))
				}
			/>
			<p>Selected option ID: {optionId}</p>
			<p>Selected dropdown value: {dropdownValue}</p>
			<p>Modes: </p>
		</Fragment>
	);
};
