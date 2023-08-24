import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { DropdownOption, Textbox } from '@create-figma-plugin/ui';
import { ToneSelect } from './tone-select';
import Alias from '../alias';

interface AliasInputProps {
	name?: string;
	modes: string[];
	tones: DropdownOption[];
	value?: string;
	onAliasNameChange: (aliasName: string) => void;
	onDropdownValueChange: (dropdownValue: string | number) => void;
	onOptionIdChange: (optionId: null | string) => void;
}

export const AliasInput = ({
	name,
	modes,
	tones,
	value,
	onDropdownValueChange,
}: AliasInputProps) => {
	const [aliasName, setAliasName] = useState<string>(name || 'Alias name');
	const [modesArray, setModesArray] = useState<string[]>(modes || []);
	const [tonesArray, setTonesArray] = useState<DropdownOption[]>(tones || []);
	const [, setOptionId] = useState<null | string>(null);
	const [, setDropdownValue] = useState<null | string>(value || null);

	function handleAliasNameChange(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newAliasName = event.currentTarget.value;
		setAliasName(newAliasName);
	}

	function handleOptionIdChange(newOptionId: string) {
		setOptionId(newOptionId);
	}

	function handleDropdownValueChange(newDropdownValue: string) {
		setDropdownValue(newDropdownValue);
		onDropdownValueChange(newDropdownValue);
	}

	useEffect(() => {
		setModesArray(modes);
	}, [modes]);

	useEffect(() => {
		setTonesArray(tones);
	}, [tones]);

	useEffect(() => {
		setDropdownValue(value || null);
	}, [value]);

	function modeDropdowns(modes: string[]) {
		return modes.map((mode: string) => {
			return (
				<Fragment>
					<ToneSelect
						options={tonesArray}
						modeName={mode}
						onOptionIdChange={(newOptionId: string | null) =>
							handleOptionIdChange(newOptionId ?? '')
						}
						onDropdownValueChange={(newDropdownValue: string | number) =>
							handleDropdownValueChange(String(newDropdownValue))
						}
					/>
				</Fragment>
			);
		});
	}

	return (
		<Fragment>
			<Textbox value={aliasName || 'color'} onInput={handleAliasNameChange} />
			{modeDropdowns(modesArray)}
		</Fragment>
	);
};
