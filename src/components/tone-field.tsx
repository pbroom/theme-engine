import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { TextboxMultiline } from '@create-figma-plugin/ui';
import { getStopsFromString } from '../utility';
import '!../dist/tailwind.css';

interface ToneFieldProps {
	tones: number[];
	setToneStops: (tones: number[]) => void;
}

const ToneField = ({ tones, setToneStops }: ToneFieldProps) => {
	const [textAreaValue, setTextAreaValue] = useState<string>(`${tones}`);
	// const [toneStops, setToneStops] = useState<number[]>(tones);

	function handleTextAreaInput(event: h.JSX.TargetedEvent<HTMLTextAreaElement>) {
		const newTextAreaValue = event.currentTarget.value;
		setTextAreaValue(newTextAreaValue);
		const numbers = Array.from({ length: 101 }, (_, i) => i);
		const newToneStops =
			getStopsFromString(newTextAreaValue).length > 0
				? getStopsFromString(newTextAreaValue)
				: numbers;
		setToneStops(newToneStops);
	}

	return (
		<Fragment>
			<TextboxMultiline
				onInput={handleTextAreaInput}
				value={textAreaValue}
				variant='border'
				placeholder='All tone stops (0-100)'
			/>
		</Fragment>
	);
};

export default ToneField;
