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
	Muted,
	render,
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
		<div id="container-wrap" className="py-4 overflow-y-auto">
			<Container space="medium">
				<div>Hello</div>
			</Container>
		</div>
	);
};

// Exporting the Plugin component wrapped in the render function
export default render(Plugin);
