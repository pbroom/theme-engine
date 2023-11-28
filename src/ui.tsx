import '!./dist/tailwind.css';
import {
	defaultColor,
	defaultName,
	defaultPaletteTones,
	defaultHueCalc,
	defaultChromaCalc,
	defaultAliases,
} from './defaults';
import {
	Columns,
	Container,
	Divider,
	Muted,
	render,
	Tabs,
	Text,
	TextboxColor,
	VerticalSpace,
} from '@create-figma-plugin/ui';
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { create } from 'zustand';

export const Plugin = () => {
	// Rendering the UI
	return (
		<div id="container-wrap" className="overflow-y-auto">
			<div className="h-10 w-full">
				<div className="h-full w-10 bg-slate-800"></div>
				<Tabs options={options} value={value} />
			</div>
			<Divider />
		</div>
	);
};

// Exporting the Plugin component wrapped in the render function
export default render(Plugin);
