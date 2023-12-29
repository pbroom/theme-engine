import '!./dist/tailwind.css';
import { Button, render } from '@create-figma-plugin/ui';
import { h } from 'preact';
import TabGroup from './components/tabs';
import useThemeColor from './hooks/useThemeColor';
import { round } from 'mathjs';

export const Plugin = () => {
	const newColor = useThemeColor('#808080');
	let primaryHex = '#2A59FF';
	const primary = () => {
		newColor.setName('primary');
		newColor.setSourceHex('#2A59FF');
		newColor.setHueCalc('');
		newColor.setChromaCalc('');
		primaryHex = `${newColor.endColor.hex}`;
	};
	const secondary = () => {
		newColor.setName('secondary');
		newColor.setSourceHex(primaryHex);
		newColor.setHueCalc('');
		newColor.setChromaCalc('c/3');
	};
	const tertiary = () => {
		newColor.setName('tertiary');
		newColor.setSourceHex(primaryHex);
		newColor.setHueCalc('h+60');
		newColor.setChromaCalc('c/2');
	};
	const neutral = () => {
		newColor.setName('neutral');
		newColor.setSourceHex(primaryHex);
		newColor.setHueCalc('');
		newColor.setChromaCalc('4 < (c / 12) ? 4 : (c / 12)');
	};
	const neutralVariant = () => {
		newColor.setName('neutralVariant');
		newColor.setSourceHex(primaryHex);
		newColor.setHueCalc('');
		newColor.setChromaCalc('8 < (c / 6) ? 8 : (c / 6)');
	};
	const error = () => {
		newColor.setName('error');
		newColor.setSourceHex(primaryHex);
		newColor.setHueCalc('25');
		newColor.setChromaCalc('84');
	};

	// Rendering the UI
	return (
		<div id="container-wrap" className="overflow-y-auto h-full bg-neutral-800">
			<div id="grid-lines" className="absolute inset-0">
				<div className="absolute w-full h-px bg-neutral-700 top-10"></div>
				<div className="absolute h-full w-px bg-neutral-700 left-10"></div>
				<div className="absolute h-full w-px bg-neutral-700 right-32"></div>
				<div className="absolute w-full bg-neutral-900 top-20 left-10 p-4 pr-16 z-10">
					<Button onClick={primary}>primary</Button>
					<Button secondary onClick={secondary}>
						secondary
					</Button>
					<Button secondary onClick={tertiary}>
						tertiary
					</Button>
					<Button secondary onClick={neutral}>
						neutral
					</Button>
					<Button secondary onClick={neutralVariant}>
						neutralVariant
					</Button>
					<Button secondary onClick={error}>
						error
					</Button>
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
					<div
						className="h-6 w-6"
						style={`background-color: ${newColor.endColor.hex};`}
					></div>
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
