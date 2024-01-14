/* eslint-disable */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
// import { AliasInput, AliasList } from './primitives-tab/alias';
import { Hct } from '@material/material-color-utilities';
import {
	IconButton,
	Muted,
	RangeSlider,
	Tabs,
	TabsOption,
	Textbox,
	TextboxColor,
	TextboxMultiline,
	TextboxNumeric,
} from '@create-figma-plugin/ui';
import {
	IconPlus32,
	IconMinus32,
	IconChevronDown16,
} from '@create-figma-plugin/ui';
import { Theme } from '../hooks/useTheme';
import {
	ThemeColor,
	ThemeColorData,
	useThemeColor,
} from '../hooks/useThemeColor';
import { round } from 'mathjs';
import {
	getStopsFromString,
	calculateHue,
	calculateChroma,
	hctTonalGradient,
	findMaxChromaForHueAtTone,
	quickHexFromHct,
} from '../lib/color-utils';
import { hexFromHct } from '../hooks/useColor';
import {
	AliasActions,
	AliasData,
	useAlias,
	useAliasActionsStore,
} from '../hooks/useAlias';
import { AliasPreviewList, AliasList } from './primitives-tab/alias';

type TabGroupProps = {
	themeColors: ThemeColorData[];
	onSetThemeColors: (themeColors: ThemeColorData[]) => void;
};

const TabGroup = ({ themeColors, onSetThemeColors }: TabGroupProps) => {
	const [tabValue, setTabValue] = useState<string>('Primitives');
	const [themeColorList, setThemeColorList] =
		useState<ThemeColorData[]>(themeColors);
	const [currentThemeColor, setCurrentThemeColor] = useState<ThemeColorData>(
		themeColors[0]
	);
	const themeColor: ThemeColor = useThemeColor('397456');

	useEffect(() => {
		if (themeColors.length === 0) {
			const newThemeColor: ThemeColor = themeColor;
			setThemeColorList([newThemeColor]);
		}
		setThemeColorList(themeColors);
		console.log(themeColors);
	}, [themeColors]);

	const [hexColorInput, setHexColorInput] = useState<string>(
		themeColor.sourceColor.sourceHex
	);
	const [tones, setTones] = useState<string>(themeColor.tones.join(', '));
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
	const [hueSlider, setHueSlider] = useState<number>(hue);
	const [hueCalcInput, setHueCalcInput] = useState<string>(
		themeColor.hueCalc.toString()
	);
	const [chromaSlider, setChromaSlider] = useState<number>(chroma);
	const [chromaCalcInput, setChromaCalcInput] = useState<string>(
		themeColor.chromaCalc.toString()
	);

	const newHct = Hct.from(hue(), findMaxChromaForHueAtTone(hue(), 50), 50);

	const chromaHex = hexFromHct(newHct);
	useEffect(() => {
		themeColor.set.tones(getStopsFromString(tones));
		themeColor.set.hueCalc(hueCalcInput);
		themeColor.set.chromaCalc(chromaCalcInput);
	}, [tones, hueCalcInput]);

	useEffect(() => {
		themeColor.set.chromaCalc(chromaCalcInput);
	}, [chromaCalcInput]);

	useEffect(() => {
		const calculatedHue: number = round(
			calculateHue(themeColor.sourceColor.hct.hue, themeColor.hueCalc)
		);
		setHueSlider(calculatedHue);
		if (!themeColor.hueCalc.toLowerCase().includes('h')) {
			themeColor.set.hueCalc(themeColor.sourceColor.hct.hue.toString());
			setHueCalcInput(calculatedHue.toString());
		}

		const calculatedChroma: number = round(
			calculateChroma(themeColor.sourceColor.hct.chroma, themeColor.chromaCalc)
		);
		setChromaSlider(calculatedChroma);
		if (!themeColor.chromaCalc.toLowerCase().includes('c')) {
			themeColor.set.chromaCalc(themeColor.sourceColor.hct.chroma.toString());
			setChromaCalcInput(calculatedChroma.toString());
		}
	}, [hexColorInput]);

	const nameTheNameless = () => {
		if (!themeColor.name) {
			themeColor.set.name('Color');
		}
	};
	const onHexColorInput = (e: any) => {
		const newHexColorInput: string = e.currentTarget.value;
		setHexColorInput(newHexColorInput);
		themeColor.set.sourceHex(newHexColorInput);
		themeColor.sourceColor.setSourceHex(newHexColorInput);

		const calculatedHue: number = round(
			calculateHue(themeColor.sourceColor.hct.hue, themeColor.hueCalc)
		);
		setHueSlider(calculatedHue);
		// if the hueCalcInput is an expression, don't update it
		if (!themeColor.hueCalc.toLowerCase().includes('h')) {
			themeColor.set.hueCalc(themeColor.sourceColor.hct.hue.toString());
			setHueCalcInput(calculatedHue.toString());
		}

		const calculatedChroma: number = round(
			calculateChroma(themeColor.sourceColor.hct.chroma, themeColor.chromaCalc)
		);
		setChromaSlider(calculatedChroma);
		if (!themeColor.chromaCalc.toLowerCase().includes('c')) {
			themeColor.set.chromaCalc(themeColor.sourceColor.hct.chroma.toString());
			setChromaCalcInput(calculatedChroma.toString());
		}
	};
	const onHueSliderInput = (e: any) => {
		const newHueCalcInput: number = e.currentTarget.value;
		themeColor.set.hueCalc(newHueCalcInput.toString());
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
		themeColor.set.hueCalc(newHueCalcInput);
		setHueCalcInput(newHueCalcInput);
		setHueSlider(calculatedHue);
		if (newHueCalcInput === '') {
			themeColor.set.hueCalc(themeColor.sourceColor.hct.hue.toString());
			setHueSlider(themeColor.sourceColor.hct.hue);
		}
	};
	const onChromaSliderInput = (e: any) => {
		const newChromaCalcInput: number = e.currentTarget.value;
		themeColor.set.chromaCalc(newChromaCalcInput.toString());
		setChromaCalcInput(newChromaCalcInput.toString());
		setChromaSlider(newChromaCalcInput);
		console.log(themeColor.endColor.hct);
	};
	const onChromaCalcInput = (e: any) => {
		const newChromaCalcInput: string = e.currentTarget.value;
		const calculatedChroma: number = round(
			calculateChroma(themeColor.sourceColor.hct.chroma, newChromaCalcInput)
		);
		themeColor.set.chromaCalc(newChromaCalcInput);
		setChromaSlider(calculatedChroma);
		setChromaCalcInput(newChromaCalcInput);
		if (newChromaCalcInput === '') {
			themeColor.set.chromaCalc(themeColor.sourceColor.hct.chroma.toString());
			setChromaSlider(themeColor.sourceColor.hct.chroma);
		}
	};
	const onAddAlias = () => {
		themeColor.set.addAlias();
		console.log(themeColor.aliases);
	};
	const onSetAliases = (aliases: AliasData[]) => {
		themeColor.set.aliases(aliases);
	};

	const options: Array<TabsOption> = [
		{
			children: (
				<div className="tab-content absolute top-10 left-0 w-full overflow-y-scroll flex flex-row">
					<div className="w-10 h-full overflow-y-scroll pt-2 flex flex-col items-center gap-2">
						<div
							className="w-6 h-6 rounded-full outline outline-1 outline-offset-4 outline-fig-blue"
							style={{
								background: `conic-gradient(from 180deg, white, ${quickHexFromHct(
									themeColor.endColor.hct.hue,
									themeColor.endColor.hct.chroma,
									75
								)}, ${quickHexFromHct(
									themeColor.endColor.hct.hue,
									themeColor.endColor.hct.chroma,
									50
								)}, ${quickHexFromHct(
									themeColor.endColor.hct.hue,
									themeColor.endColor.hct.chroma,
									25
								)}, black)`,
							}}
						></div>
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
										onChange={(e) => themeColor.set.name(e.currentTarget.value)}
										onBlur={() => nameTheNameless()}
										onfocusout={() => nameTheNameless()}
										placeholder="Color name"
									/>
									<TextboxColor
										hexColor={hexColorInput}
										onHexColorInput={(e) => onHexColorInput(e)}
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
								{/* Section 1B */}
								<div className="grow h-full w-172 pt-1 border-l border-neutral-700">
									<p className="p-2">{themeColor.name}</p>
									<div className="px-2 opacity-60">
										<Muted>
											H: {round(themeColor.endColor.hct.hue)} C:{' '}
											{round(themeColor.endColor.hct.chroma)} T:{' '}
											{round(themeColor.endColor.hct.tone)}
										</Muted>
									</div>
								</div>
							</div>
							<div
								className="h-full w-32"
								style={{
									background: `linear-gradient(to right, ${hctTonalGradient(
										themeColor.sourceColor.hct.hue,
										themeColor.sourceColor.hct.chroma
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
										<span className="p-2">{round(hue())}</span>
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
											{round(themeColor.endColor.hct.chroma)}{' '}
											<span className="opacity-40">
												/{' '}
												{round(
													findMaxChromaForHueAtTone(
														hue(),
														themeColor.endColor.hct.tone
													)
												)}
											</span>
										</span>
									</div>
									<div className="chroma-slider px-2 pb-1">
										<RangeSlider
											maximum={round(
												findMaxChromaForHueAtTone(
													hue(),
													themeColor.endColor.hct.tone
												)
											)}
											minimum={0}
											onInput={(e) => onChromaSliderInput(e)}
											value={themeColor.chromaCalc}
										/>
										<div
											className="absolute h-px chroma-slider-bar"
											style={`width: 150px; transform: translate(-1px, -1px); background: linear-gradient(to right, #777, ${chromaHex}`}
										></div>
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
										themeColor.endColor.hct.hue,
										themeColor.endColor.hct.chroma
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
										themeColor.endColor.hct.hue,
										themeColor.endColor.hct.chroma,
										themeColor.tones
									)})`,
								}}
							></div>
						</div>
						<div className="grow flex flex-row border-t border-neutral-700">
							<div className="grow flex-col">
								<div className="grow flex justify-between">
									<span className="p-2">Aliases</span>
									<IconButton onClick={onAddAlias}>
										<IconPlus32 />
									</IconButton>
								</div>
								<AliasList
									aliases={themeColor.aliases}
									onSetAliases={onSetAliases}
								/>
							</div>
							<div className="h-full w-32 flex flex-col">
								<div className="h-8 w-32 flex justify-around items-center">
									<span>Light</span>
									<span>Dark</span>
								</div>
								<AliasPreviewList
									hue={themeColor.endColor.hct.hue}
									chroma={themeColor.endColor.hct.chroma}
									aliases={themeColor.aliases}
								/>
							</div>
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
