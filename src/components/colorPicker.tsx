import { h } from 'preact';
import { useState } from 'preact/hooks';
import { TextboxColor } from '@create-figma-plugin/ui';

export interface ColorPickerProps {
	color?: string;
	onColorInput: (event: h.JSX.TargetedEvent<HTMLInputElement>) => void;
}

export interface ColorPickerProps {
	color?: string;
	onColorInput: (event: h.JSX.TargetedEvent<HTMLInputElement>) => void;
}

export const ColorPicker = ({ color = '', onColorInput }: ColorPickerProps) => {
	const [hexColor, setHexColor] = useState<string>(color || '');
	const [opacity, setOpacity] = useState<string>('100%');

	function handleHexColorInput(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newHexColor = event.currentTarget.value;
		console.log(newHexColor);
		setHexColor(newHexColor);
	}

	function handleOpacityInput(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newOpacity = event.currentTarget.value;
		console.log(newOpacity);
		setOpacity(newOpacity);
	}

	return (
		<TextboxColor
			hexColor={hexColor}
			onHexColorInput={handleHexColorInput}
			onOpacityInput={handleOpacityInput}
			opacity={opacity}
			variant='border'
			onInput={onColorInput}
		/>
	);
};
