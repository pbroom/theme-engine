import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { TextboxMultiline } from '@create-figma-plugin/ui';
import '!../dist/tailwind.css';

interface ToneFieldProps {
	tones: number[];
}

const ToneField = ({ tones }: ToneFieldProps) => {
	const [textAreaValue, setTextAreaValue] = useState<string>(`${tones}`);
	const [toneStops, setToneStops] = useState<number[]>(tones);

	function getStopsFromString(text: string): number[] {
		// Extract all integers from the text
		const allIntegers = text.match(/\b\d+\b/g)?.map(Number);
		// If no integers are found, return an empty array
		if (!allIntegers) {
			return [];
		}
		// Create a Set to ensure uniqueness, and filter out values outside the 0-100 range
		const stops: Set<number> = new Set(
			allIntegers.filter((n) => n >= 0 && n <= 100)
		);
		// Convert the Set back to an array
		return Array.from(stops);
	}

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
