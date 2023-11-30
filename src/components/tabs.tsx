import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Tabs, TabsOption, Textbox } from '@create-figma-plugin/ui';
import '!.././dist/tailwind.css';
import { IconPlus32, IconChevronDown16 } from '@create-figma-plugin/ui';

const TabGroup = () => {
	const [value, setValue] = useState<string>('Aliases');
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
								<div className="grow h-full"></div>
								<div className="grow h-full border-l border-neutral-700"></div>
							</div>
							<div className="h-full w-32 bg-gradient-to-r from-white via-indigo-500 via-30% to-black"></div>
						</div>
						<div className="h-24 grow flex flex-row">
							<div className="grow flex flex-row">
								<div className="grow h-full border-t border-neutral-700"></div>
								<div className="grow h-full border-t border-l border-neutral-700"></div>
							</div>
							<div className="h-full w-32 bg-gradient-to-r from-white via-pink-500 via-30% to-black"></div>
						</div>
						<div className="h-24 grow flex flex-row">
							<div className="grow flex flex-row border-t border-neutral-700">
								<div className="grow h-full"></div>
							</div>
							<div className="h-full w-32 bg-gradient-to-r from-white via-pink-500 via-30% to-black"></div>
						</div>
						<div className="h-24 grow flex flex-row border-t border-neutral-700">
							<div className="grow flex flex-row">
								<div className="grow h-full"></div>
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
		setValue(newValue);
	}
	return (
		<Tabs onValueChange={handleValueChange} options={options} value={value} />
	);
};

export default TabGroup;
