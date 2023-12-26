import '!./dist/tailwind.css';
import { Button, render } from '@create-figma-plugin/ui';
import { h } from 'preact';
import TabGroup from './components/tabs';
import useThemeColor from './hooks/useThemeColor';
import { round } from 'mathjs';

export const Plugin = () => {
	const newColor = useThemeColor('#808080');
	const blue = () => {
		newColor.setSourceHex('#2A59FF');
		newColor.setHueCalc('');
		// console.log(newColor);
	};
	const red = () => {
		newColor.setSourceHex('#FF2A2A');
		newColor.setHueCalc('216');
		// console.log(newColor);
	};

	// Rendering the UI
	return (
		<div id="container-wrap" className="overflow-y-auto h-full bg-neutral-800">
			<div id="grid-lines" className="absolute inset-0">
				<div className="absolute w-full h-px bg-neutral-700 top-10"></div>
				<div className="absolute h-full w-px bg-neutral-700 left-10"></div>
				<div className="absolute h-full w-px bg-neutral-700 right-32"></div>
				<div className="absolute w-full bg-neutral-900 top-20 left-10 p-4 pr-16 z-10">
					<p className="text-lg">ThemeColor</p>
					<p>
						<span className="font-bold">Name:</span> {newColor.name}
					</p>
					<p className="font-bold">sourceColor</p>
					<p className="pl-4">sourceHex: {newColor.sourceColor.sourceHex}</p>
					<p className="pl-4">hue: {round(newColor.sourceColor.hct.hue)}</p>
					<p className="pl-4">
						chroma: {round(newColor.sourceColor.hct.chroma)}
					</p>
					<p className="pl-4">tone: {round(newColor.sourceColor.hct.tone)}</p>
					<p className="pl-4">hex: {newColor.sourceColor.hex}</p>
					<p className="font-bold">endColor</p>
					<p className="pl-4">sourceHex: {newColor.endColor.sourceHex}</p>
					<p className="pl-4">hue: {round(newColor.endColor.hct.hue)}</p>
					<p className="pl-4">chroma: {round(newColor.endColor.hct.chroma)}</p>
					<p className="pl-4">tone: {round(newColor.endColor.hct.tone)}</p>
					<p className="pl-4">hex: {newColor.endColor.hex}</p>
					<p>
						<span className="font-bold">Tones:</span>{' '}
						{newColor.tones.map((tone) => tone).join(', ')}
					</p>
					<p>
						<span className="font-bold">hueCalc:</span> {newColor.hueCalc}
					</p>
					<p>
						<span className="font-bold">chromaCalc:</span> {newColor.chromaCalc}
					</p>
					<p>
						<span className="font-bold">Aliases:</span>{' '}
						{newColor.aliases.map((alias) => alias).join(', ')}
					</p>
				</div>
			</div>
			<div className="h-10 w-full flex">
				<div className="h-full w-10"></div>
				<div className="grow flex flex-row justify-between">
					<TabGroup />
					<div className="h-full px-4 flex items-center justify-center">
						{/* <ThemeMenu themes={ThemeList} /> */}
						<Button onClick={blue}>blue</Button>
						<Button danger onClick={red}>
							red
						</Button>
						<div className="h-5 w-10 ml-3" style={`background: ${newColor};`}>
							{newColor}
						</div>
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
