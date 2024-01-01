import '!./dist/tailwind.css';
import { Button, render } from '@create-figma-plugin/ui';
import { h } from 'preact';
import TabGroup from './components/tabs';
import useThemeColor, { Alias } from './hooks/useThemeColor';
import { round } from 'mathjs';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';

export const Plugin = () => {
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
						{/* <ThemeMenu themes={ThemeList} /> */}
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
