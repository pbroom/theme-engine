import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import {
	Tabs,
	TabsOption,
	Textbox,
	TextboxColor,
	TextboxMultiline,
} from '@create-figma-plugin/ui';
import TextboxColorName from './primitives-tab/color-name-input';
import { ColorPicker } from './primitives-tab/color-picker';
// import '!.././dist/tailwind.css';
import { IconPlus32, IconChevronDown16 } from '@create-figma-plugin/ui';
import { Theme, useTheme } from '../hooks/useTheme';
import { useThemeColor } from '../hooks/useThemeColor';
import { round } from 'mathjs';
import { getStopsFromString } from '../lib/color-utils';
import { create } from 'zustand';
import { useRef } from 'react';

const TabGroup = (theme: Theme) => {
	const [tabValue, setTabValue] = useState<string>('Primitives');
	const themeColor = useThemeColor('397456');

	const [tones, setTones] = useState<string>(themeColor.tones.join(', '));
	useEffect(() => {
		themeColor.setTones(getStopsFromString(tones));
	}, [tones]);

	const nameTheNameless = () => {
		if (!themeColor.name) {
			themeColor.setName('Color');
		}
	};
	const options: Array<TabsOption> = [
		{
			children: (
				<div className="absolute top-10 left-0 w-full h-full overflow-y-scroll flex flex-row">
					<div className="w-10 h-full overflow-y-scroll pt-2 flex flex-col items-center gap-2">
						<div className=" w-6 h-6 bg-gradient-conic rounded-full outline outline-2 outline-offset-2 outline-fig-blue"></div>
						<div className=" w-6 h-6 bg-gradient-conic rounded-full"></div>
						<div className=" w-6 h-6 bg-gradient-conic rounded-full"></div>
						<div className=" w-6 h-6 bg-gradient-conic rounded-full"></div>
						<div className=" w-6 h-6 bg-gradient-conic rounded-full"></div>
						<div className=" w-6 h-6 outline-2 outline-neutral-500 outline-dashed rounded-full relative flex items-center justify-center">
							<span className="absolute">
								<IconPlus32 />
							</span>
						</div>
					</div>
					<div className="h-full grow">
						<div className="h-24 grow flex flex-row">
							<div className="grow flex flex-row">
								{/* Section 1A */}
								<div className="h-full w-172 p-1">
									<Textbox
										value={themeColor.name}
										onChange={(e) => themeColor.setName(e.currentTarget.value)}
										onBlur={() => nameTheNameless()}
										onfocusout={() => nameTheNameless()}
										placeholder="Color name"
									/>
									<p className="p-2">{themeColor.name}</p>
								</div>
								{/* Section 1B */}
								<div className="grow h-full w-172 p-1 border-l border-neutral-700">
									<TextboxColor
										hexColor={themeColor.sourceColor.sourceHex}
										onHexColorInput={(e) =>
											themeColor.setSourceHex(e.currentTarget.value)
										}
										onOpacityInput={(e) => '100%'}
										opacity={'100%'}
									/>
									<p className="p-2">
										H: {round(themeColor.sourceColor.hct.hue)} C:{' '}
										{round(themeColor.sourceColor.hct.chroma)} T:{' '}
										{round(themeColor.sourceColor.hct.tone)}
									</p>
								</div>
							</div>
							<div className="h-full w-32 bg-gradient-to-r from-white via-indigo-500 via-30% to-black"></div>
						</div>
						<div className="h-24 grow flex flex-row">
							<div className="grow flex flex-row">
								{/* Section 2A */}
								<div className="grow h-full w-172 border-t border-neutral-700">
									<p className="p-2">Hue</p>
								</div>
								{/* Section 2B */}
								<div className="grow h-full w-172 border-t border-l border-neutral-700">
									<p className="p-2">Chroma</p>
								</div>
							</div>
							<div className="h-full w-32 bg-gradient-to-r from-white via-pink-500 via-30% to-black"></div>
						</div>
						<div className="h-24 grow flex flex-row">
							<div className="grow flex flex-row border-t border-neutral-700">
								{/* Section 3A */}
								<div className="grow h-full">
									<p className="p-2">Tones</p>
									<TextboxMultiline
										value={tones}
										onInput={(e) => setTones(e.currentTarget.value)}
										placeholder="Return tones 0-100"
									/>
								</div>
							</div>
							<div className="h-full w-32 bg-gradient-to-r from-white via-pink-500 via-30% to-black"></div>
						</div>
						<div className="h-24 grow flex flex-row border-t border-neutral-700">
							<div className="grow flex flex-row">
								<div className="grow h-full">
									<p className="p-2">Aliases</p>
								</div>
							</div>
							<div className="h-full w-32"></div>
						</div>
					</div>
				</div>
			),
			value: 'Primitives',
		},
		{
			children: (
				<div className="absolute top-10 left-0 w-full h-full overflow-y-scroll">
					<div className="flex flex-row w-full border-t border-neutral-700">
						<div className="w-10 overflow-y-scroll py-2 flex flex-col items-center gap-2">
							<div className=" w-6 h-6 bg-gradient-conic rounded-full outline outline-2 outline-offset-2 outline-fig-blue"></div>
							<div className=" w-6 h-6 bg-gradient-conic rounded-full outline outline-2 outline-offset-2 outline-fig-blue"></div>
							<div className=" w-6 h-6 bg-gradient-conic rounded-full outline outline-2 outline-offset-2 outline-fig-blue"></div>
							<div className=" w-6 h-6 bg-gradient-conic rounded-full opacity-20"></div>
							<div className=" w-6 h-6 bg-gradient-conic rounded-full opacity-20"></div>
							<div className=" w-6 h-6 bg-gradient-conic rounded-full outline outline-2 outline-offset-2 outline-fig-blue"></div>
							<div className=" w-6 h-6 outline-2 outline-neutral-500 outline-dashed rounded-full relative flex items-center justify-center">
								<span className="absolute">
									<IconChevronDown16 />
								</span>
							</div>
						</div>
						<div className="h-full grow">
							<div className="h-24 grow flex flex-row">
								<div className="grow flex flex-row"></div>
								<div className="h-full w-32 bg-gradient-to-r from-white via-indigo-500 via-30% to-black"></div>
							</div>
						</div>
					</div>
					<div className="flex flex-row w-full border-t border-neutral-700">
						<div className="w-10 overflow-y-scroll py-2 flex flex-col items-center gap-2">
							<div className=" w-6 h-6 bg-gradient-conic rounded-full opacity-20"></div>
							<div className=" w-6 h-6 bg-gradient-conic rounded-full opacity-20"></div>
							<div className=" w-6 h-6 bg-gradient-conic rounded-full opacity-20"></div>
							<div className=" w-6 h-6 bg-gradient-conic rounded-full outline outline-2 outline-offset-2 outline-fig-blue"></div>
							<div className=" w-6 h-6 bg-gradient-conic rounded-full outline outline-2 outline-offset-2 outline-fig-blue"></div>
							<div className=" w-6 h-6 bg-gradient-conic rounded-full opacity-20"></div>
							<div className=" w-6 h-6 outline-2 outline-neutral-500 outline-dashed rounded-full relative flex items-center justify-center">
								<span className="absolute">
									<IconChevronDown16 />
								</span>
							</div>
						</div>
						<div className="h-full grow">
							<div className="h-24 grow flex flex-row">
								<div className="grow flex flex-row"></div>
								<div className="h-full w-32 bg-gradient-to-r from-white via-indigo-500 via-30% to-black"></div>
							</div>
						</div>
					</div>
				</div>
			),
			value: 'Aliases',
		},
	];
	function handleValueChange(newValue: string) {
		console.log(newValue);
		setTabValue(newValue);
	}
	return (
		<Tabs
			onValueChange={handleValueChange}
			options={options}
			value={tabValue}
		/>
	);
};

export default TabGroup;
