import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import {
	Button,
	Text,
	Muted,
	IconMinus32,
	IconButton,
	DropdownOption,
	VerticalSpace,
} from '@create-figma-plugin/ui';
import ThemeColor from '../theme-color';
import Alias from '../alias';
import { AliasInput } from './alias-input';
import { mapValues } from '../utility';

interface AliasManagerProps {
	themeColor: ThemeColor;
	modes: string[];
}

export const AliasManager = (
	{ themeColor }: AliasManagerProps,
	modes: string[]
) => {
	const [aliasName, setAliasName] = useState('');
	const [dropdownValue, setDropdownValue] = useState<string | number>('');
	const [optionId, setOptionId] = useState<string | null>('');
	useEffect(() => {
		themeColor = themeColor;
	}, [themeColor]);
	useEffect(() => {
		modes = modes;
	}, [modes]);
	const handleAliasNameChange = (newAliasName: string) => {
		setAliasName(newAliasName);
	};
	const handleDropdownValueChange = (newDropdownValue: string | number) => {
		setDropdownValue(newDropdownValue);
	};
	const handleOptionIdChange = (newOptionId: string | null) => {
		setOptionId(newOptionId);
	};

	const toneOptions = mapValues(
		'value',
		themeColor.getTones()
	) as DropdownOption[];

	const createAliasInput = () => {
		return (
			<div className='flex flex-row'>
				<AliasInput
					name={themeColor.name}
					modes={modes}
					tones={toneOptions}
					onAliasNameChange={handleAliasNameChange}
					onDropdownValueChange={handleDropdownValueChange}
					onOptionIdChange={handleOptionIdChange}
					value={`${dropdownValue}`}
				/>
				<IconButton onClick={() => {}}>
					<IconMinus32 />
				</IconButton>
			</div>
		);
	};

	const aliasInputs = themeColor.aliases.map((alias: Alias) => {
		createAliasInput();
	});

	return (
		<Fragment>
			<Text>
				<Muted>Alias Manager</Muted>
			</Text>
			<Button onClick={() => {}}>Add Alias</Button>
		</Fragment>
	);
};
