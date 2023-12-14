import * as React from 'react';
import '!./dist/tailwind.css';
import useColor from './hooks/useColor';
import useThemeColor from './hooks/useThemeColor';
import useTheme from './hooks/useTheme';
import useThemeList from './hooks/useThemeList';
import {
	defaultColor,
	defaultName,
	defaultPaletteTones,
	defaultHueCalc,
	defaultChromaCalc,
	defaultAliases,
} from './defaults';
import {
	Button,
	Columns,
	Container,
	Divider,
	Muted,
	render,
	Text,
	TextboxColor,
	VerticalSpace,
} from '@create-figma-plugin/ui';
import { h } from 'preact';
import TabGroup from './components/tabs';
import ThemeMenu from './components/theme-menu';
import { useState } from 'preact/hooks';
import { create } from 'zustand';

export const Plugin = () => {
	const newColor = useColor('ff0000');

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
					<TabGroup />
					<div className="h-full px-4 flex items-center justify-center">
						{/* <ThemeMenu /> */}
					</div>
				</div>
				<div className="h-full w-32 flex items-center justify-center">
					Build
				</div>
			</div>
		</div>
	);
};

// Exporting the Plugin component wrapped in the render function
export default render(Plugin);
