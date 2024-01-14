import '!./dist/tailwind.css';
import { Button, Textbox, render } from '@create-figma-plugin/ui';
import { h } from 'preact';
import TabGroup from './components/tabs';
import { useThemeColor, ThemeColor } from './hooks/useThemeColor';
import { nanoid } from 'nanoid';
import { Theme, useTheme } from './hooks/useTheme';
import { useEffect } from 'react';
import { useState } from 'preact/hooks';

export const Plugin = () => {
	const theme = useTheme();
	const themeColor = useThemeColor('397456');
	const primary = themeColor;
	const secondary = themeColor;
	const tertiary = themeColor;
	const neutral = themeColor;
	const neutralVariant = themeColor;
	const error = themeColor;
	const themeColors: ThemeColor[] = [
		primary,
		secondary,
		tertiary,
		neutral,
		neutralVariant,
		error,
	];
	useEffect(() => {
		if (theme.themeColors.length === 0) {
			theme.setThemeColors(themeColors);
		}
		console.log(theme);
	}, []);

	const log = () => {
		theme.setId(nanoid(6));
		theme.addThemeColor(primary);
		console.log(theme);
		console.log(nanoid(6));
	};
	const nameTheNameless = () => {
		if (!theme.name) {
			theme.setName('Theme');
		}
	};
	const onSetThemeColors = (themeColors: ThemeColor[]) => {
		theme.setThemeColors(themeColors);
	};
	// Rendering the UI
	return (
		<div id="container-wrap" className="overflow-y-auto h-full bg-neutral-800">
			<div id="grid-lines" className="absolute inset-0">
				<div className="absolute w-full h-px bg-neutral-700 top-10"></div>
				<div className="absolute h-full w-px bg-neutral-700 left-10"></div>
				<div className="absolute h-full w-px bg-neutral-700 right-32"></div>
			</div>
			<div className="h-10 w-full flex">
				<div className="h-full w-10"></div>
				<div className="grow flex flex-row justify-between">
					<div className="h-full px-2 flex items-center justify-center">
						{/* <ThemeMenu themes={ThemeList} /> */}
						<Textbox
							value={theme.name}
							onChange={(e) => theme.setName(e.currentTarget.value)}
							onBlur={() => nameTheNameless()}
							onfocusout={() => nameTheNameless()}
							placeholder="Theme name"
						/>
					</div>
					<TabGroup
						themeColors={theme.themeColors}
						onSetThemeColors={onSetThemeColors}
					/>
				</div>
				<button
					className="build-button h-full z-50 w-32 flex items-center justify-center bg-neutral-900 hover:bg-green-600 active:bg-red-700"
					onClick={(e) => console.log(theme.themeColors)}
				>
					Build {theme.name}
				</button>
			</div>
		</div>
	);
};

// Exporting the Plugin component wrapped in the render function
export default render(Plugin);
