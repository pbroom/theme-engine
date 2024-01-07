import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import {
	Muted,
	RangeSlider,
	Tabs,
	TabsOption,
	Textbox,
	TextboxColor,
	TextboxMultiline,
	Text,
} from '@create-figma-plugin/ui';
import { IconPlus32, IconChevronDown16 } from '@create-figma-plugin/ui';
import { Theme, useTheme } from '../hooks/useTheme';
import { ThemeColor, useThemeColor } from '../hooks/useThemeColor';
import { round } from 'mathjs';
import {
	getStopsFromString,
	calculateHue,
	calculateChroma,
	hctTonalGradient,
	findMaxChromasForHue,
	findMaxChromaForHueAtTone,
} from '../lib/color-utils';
import { nanoid } from 'nanoid';
import { set } from 'lodash';
import { maxChromaAtTonePerHue } from '../ref';

const TabGroup = (theme: Theme) => {
	const [tabValue, setTabValue] = useState<string>('Primitives');
	const themeColor: ThemeColor = useThemeColor('397456');

	const hue = () => {
		const sourceHue: number = themeColor.sourceColor.hct.hue;
		const hueCalcInput: string = themeColor.hueCalc;
		const hue: number = calculateHue(sourceHue, hueCalcInput);
		return hue;
	};
	const chroma = () => {
		const sourceChroma: number = themeColor.sourceColor.hct.chroma;
		const chromaCalcInput: string = themeColor.chromaCalc;
		const chroma: number = calculateChroma(sourceChroma, chromaCalcInput);
		return chroma;
	};

	const [tones, setTones] = useState<string>(themeColor.tones.join(', '));
	const [hueSlider, setHueSlider] = useState<number>(hue);
	const [hueCalcInput, setHueCalcInput] = useState<string>(
		themeColor.hueCalc.toString()
	);
	const [chromaSlider, setChromaSlider] = useState<number>(chroma);
	const [chromaCalcInput, setChromaCalcInput] = useState<string>(
		themeColor.chromaCalc.toString()
	);

	useEffect(() => {
		themeColor.setTones(getStopsFromString(tones));
		themeColor.setHueCalc(hueCalcInput);
		themeColor.setChromaCalc(chromaCalcInput);
	}, [tones, hueCalcInput, chromaCalcInput]);

	const nameTheNameless = () => {
		if (!themeColor.name) {
			themeColor.setName('Color');
		}
	};
	const onHueSliderInput = (e: any) => {
		const newHueCalcInput: number = e.currentTarget.value;
		themeColor.setHueCalc(newHueCalcInput.toString());
		setHueSlider(newHueCalcInput);
		setHueCalcInput(newHueCalcInput.toString());
		console.log(
			calculateHue(themeColor.sourceColor.hct.hue, newHueCalcInput.toString())
		);
	};
	const onHueCalcInput = (e: any) => {
		const newHueCalcInput: string = e.currentTarget.value;
		const calculatedHue: number = calculateHue(
			themeColor.sourceColor.hct.hue,
			newHueCalcInput
		);
		themeColor.setHueCalc(newHueCalcInput);
		setHueCalcInput(newHueCalcInput);
		setHueSlider(calculatedHue);
	};
	const onChromaSliderInput = (e: any) => {
		const newChromaCalcInput: number = e.currentTarget.value;
		themeColor.setChromaCalc(newChromaCalcInput.toString());
		setChromaCalcInput(newChromaCalcInput.toString());
		setChromaSlider(newChromaCalcInput);
	};
	const onChromaCalcInput = (e: any) => {
		const newChromaCalcInput: string = e.currentTarget.value;
		const calculatedChroma: number = calculateChroma(
			themeColor.sourceColor.hct.chroma,
			newChromaCalcInput
		);
		themeColor.setChromaCalc(newChromaCalcInput);
		setChromaCalcInput(newChromaCalcInput);
		setChromaSlider(calculatedChroma);
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
								<div className="h-full w-172 pt-1">
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
								<div className="grow h-full w-172 pt-1 border-l border-neutral-700">
									<TextboxColor
										hexColor={themeColor.sourceColor.sourceHex}
										onHexColorInput={(e) =>
											themeColor.setSourceHex(e.currentTarget.value)
										}
										onOpacityInput={(e) => '100%'}
										opacity={'100%'}
									/>
									<div className="px-2 opacity-60">
										<Muted>
											H: {round(themeColor.sourceColor.hct.hue)} C:{' '}
											{round(themeColor.sourceColor.hct.chroma)} T:{' '}
											{round(themeColor.sourceColor.hct.tone)}
										</Muted>
									</div>
								</div>
							</div>
							<div
								className="h-full w-32"
								style={{
									background: `linear-gradient(to right, ${hctTonalGradient(
										themeColor.sourceColor.hex
									)})`,
								}}
							></div>
						</div>
						<div className="h-24 grow flex flex-row">
							<div className="grow flex flex-row">
								{/* Section 2A */}
								<div className="grow h-full w-172 border-t border-neutral-700">
									<div className="flex flex-row justify-between">
										<span className="p-2">Hue</span>
										<span className="p-2">
											{round(themeColor.endColor.hct.hue)}
										</span>
									</div>
									<div className="hue-slider px-2 pb-1">
										<RangeSlider
											maximum={360}
											minimum={0}
											onInput={(e) => onHueSliderInput(e)}
											value={themeColor.hueCalc}
										/>
									</div>
									<Textbox
										value={hueCalcInput}
										onInput={(e) => onHueCalcInput(e)}
										placeholder="Hue value or expression"
									/>
									<div className="px-2 py-1 opacity-60">
										<Muted>
											Source Hue (h) = {round(themeColor.sourceColor.hct.hue)}
										</Muted>
									</div>
								</div>
								{/* Section 2B */}
								<div className="grow h-full w-172 border-t border-l border-neutral-700">
									<div className="flex flex-row justify-between">
										<span className="p-2">Chroma</span>
										<span className="p-2">
											{round(themeColor.endColor.hct.chroma)}
										</span>
									</div>
									<div className="chroma-slider px-2 pb-1">
										<RangeSlider
											maximum={findMaxChromaForHueAtTone(
												themeColor.endColor.hct.hue,
												themeColor.endColor.hct.tone
											)}
											minimum={0}
											onInput={(e) => onChromaSliderInput(e)}
											value={themeColor.chromaCalc}
										/>
									</div>
									<Textbox
										value={chromaCalcInput}
										onInput={(e) => onChromaCalcInput(e)}
										placeholder="Chroma value or expression"
									/>
									<div className="px-2 py-1 opacity-60">
										<Muted>
											Source Chroma (c) ={' '}
											{round(themeColor.sourceColor.hct.chroma)}
										</Muted>
									</div>
								</div>
							</div>
							<div
								className="h-full w-32"
								style={{
									background: `linear-gradient(to right, ${hctTonalGradient(
										themeColor.endColor.hex
									)})`,
								}}
							></div>
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
							<div
								className="h-full w-32"
								style={{
									background: `linear-gradient(to right, ${hctTonalGradient(
										themeColor.endColor.hex,
										themeColor.tones
									)})`,
								}}
							></div>
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
