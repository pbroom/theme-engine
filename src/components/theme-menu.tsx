import { h } from 'preact';
import { useState } from 'preact/hooks';
import useThemeList, { ThemeList } from '../hooks/useThemeList';
import useTheme from '../hooks/useTheme';
import {
	Dropdown,
	DropdownOption,
	DropdownOptionHeader,
	DropdownOptionSeparator,
	DropdownOptionValue,
	DropdownProps,
} from '@create-figma-plugin/ui';
import '!.././dist/tailwind.css';

const ThemeMenu = (themes: ThemeList) => {
	const [value, setValue] = useState<string>('Theme 2');

	const createNewTheme = () => {
		// const newThemeName = `Theme ${themeList.themes.length + 1}`;
		// const newTheme = useTheme(newThemeName);
	};

	const options: Array<DropdownOption> = [
		{
			value: 'New Theme',
		},
		{
			separator: true,
		},
		{
			value: 'Theme',
		},
		{
			separator: true,
		},
		{
			value: `Rename ${value}`,
		},
		{
			value: `Duplicate ${value}`,
		},
		{
			value: `Delete ${value}`,
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
