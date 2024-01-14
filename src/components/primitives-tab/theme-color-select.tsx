import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { quickHexFromHct } from '@/src/lib/color-utils';
import { ThemeColorData } from '@/src/hooks/useThemeColor';

type ThemeColorSwatchProps = {
	themeColorId: string;
	name: string;
	hue: number;
	chroma: number;
	onClick: (themeColorId: string) => void;
};

const ThemeColorSwatch = ({
	themeColorId,
	name,
	hue,
	chroma,
}: ThemeColorSwatchProps) => {
	return (
		<div
			key={themeColorId}
			title={name}
			className="w-6 h-6 rounded-full outline outline-1 outline-offset-4 outline-fig-blue"
			style={{
				background: `conic-gradient(from 180deg, white, ${quickHexFromHct(
					hue,
					chroma,
					75
				)}, ${quickHexFromHct(hue, chroma, 50)}, ${quickHexFromHct(
					hue,
					chroma,
					25
				)}, black)`,
			}}
		/>
	);
};

type ThemeColorSelectProps = {
	themeColors: ThemeColorData[];
};

const ThemeColorSelect = ({ themeColors }: ThemeColorSelectProps) => {
	const [selectedThemeColorId, setSelectedThemeColorId] = useState<string>(
		themeColors[0].id
	);
	const [themeColorSwatches, setThemeColorSwatches] = useState<JSX.Element[]>(
		[]
	);

	useEffect(() => {
		const newThemeColorSwatches = themeColors.map((themeColor) => {
			return (
				<ThemeColorSwatch
					key={themeColor.id}
					themeColorId={themeColor.id}
					name={themeColor.name}
					hue={themeColor.endColor.hct.hue}
					chroma={themeColor.endColor.hct.chroma}
					onClick={setSelectedThemeColorId}
				/>
			);
		});
		setThemeColorSwatches(newThemeColorSwatches);
	}, [themeColors]);

	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-row">{themeColorSwatches}</div>
			<div className="text-xs text-neutral-400">{selectedThemeColorId}</div>
		</div>
	);
};
