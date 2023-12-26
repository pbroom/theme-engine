import useTheme, { Theme } from '../useTheme';
import defaultThemeColor from './theme-color';

const defaultTheme = (name?: string): Theme => {
	const newTheme = useTheme(name || 'New Theme');
	newTheme.addThemeColor(defaultThemeColor('primary'));
	newTheme.addThemeColor(defaultThemeColor('secondary'));
	newTheme.addThemeColor(defaultThemeColor('tertiary'));
	newTheme.addThemeColor(defaultThemeColor('error'));
	newTheme.addThemeColor(defaultThemeColor('neutral'));
	newTheme.addThemeColor(defaultThemeColor('neutral-variant'));
	return newTheme;
};

export default defaultTheme;
