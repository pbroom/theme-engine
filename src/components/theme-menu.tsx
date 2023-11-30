import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import {
	Dropdown,
	DropdownOption,
	DropdownOptionHeader,
	DropdownOptionSeparator,
	DropdownOptionValue,
	DropdownProps,
} from '@create-figma-plugin/ui';
import '!.././dist/tailwind.css';

const ThemeMenu = () => {
	const [value, setValue] = useState<string>('Theme 2');
	const options: Array<DropdownOption> = [
		{
			value: 'New Theme',
		},
		{
			separator: true,
		},
		{
			value: 'Theme 1',
		},
		{
			value: 'Theme 2',
		},
		{
			separator: true,
		},
		{
			value: 'Rename Theme 2',
		},
		{
			value: 'Duplicate Theme 2',
		},
		{
			value: 'Delete Theme 2',
		},
	];
	function handleChange(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newValue = event.currentTarget.value;
		console.log(newValue);
		setValue(newValue);
	}
	return <Dropdown onChange={handleChange} options={options} value={value} />;
};

export default ThemeMenu;
