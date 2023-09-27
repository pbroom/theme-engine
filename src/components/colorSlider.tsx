import { AriaColorSliderOptions, useColorSlider } from '@react-aria/color';
import {
	ColorSliderStateOptions,
	useColorSliderState,
} from '@react-stately/color';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useLocale } from '@react-aria/i18n';
import { useFocusRing } from '@react-aria/focus';
import { h, VNode } from 'preact';
import { useRef, useState } from 'preact/compat';
import '!../dist/tailwind.css';
import { Textbox } from '@create-figma-plugin/ui';
import type { FocusableElement } from '@react-types/shared';

const TRACK_THICKNESS = 12;
const THUMB_SIZE = 12;

export interface ColorSliderProps extends AriaColorSliderOptions {
	input: number;
	placeholder?: string;
	colorChannel: 'hue' | 'chroma';
	onNewValue: (newValue: string) => void;
}

export const ColorSlider = (props: ColorSliderProps) => {
	let { locale } = useLocale();
	let state = useColorSliderState({ ...props, locale });
	let trackRef = useRef(null);
	let inputRef = useRef(null);

	// Default label to the channel name in the current locale
	let label = props.label || state.value.getChannelName(props.channel, locale);

	let { trackProps, thumbProps, inputProps, labelProps, outputProps } =
		useColorSlider(
			{
				...props,
				label,
				trackRef,
				inputRef,
			},
			state
		);
	let { focusProps, isFocusVisible } = useFocusRing();

	state.setThumbValue(props.input, props.input);

	const [value, setValue] = useState<string>(`${props.input}`);
	function handleInput(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newValue = event.currentTarget.value;
		console.log(`Textbox value: ${newValue}`);
		setValue(newValue);
		// state.setThumbValue(props.input, Number(newValue));
		// state.setThumbValue(0, Number(newValue));
		props.onNewValue(newValue);
	}

	return (
		<div className='flex flex-row gap-2 items-center w-full'>
			<Textbox
				icon={props.colorChannel === 'chroma' ? 'C' : 'H'}
				onInput={handleInput}
				value={value}
				placeholder={`${props.placeholder}` || ''}
			></Textbox>
			<div style={{ display: 'flex', alignSelf: 'stretch' }}>
				<label {...(labelProps as h.JSX.DOMAttributes<FocusableElement>)}>
					{label}
				</label>
				<output
					{...(outputProps as h.JSX.DOMAttributes<HTMLOutputElement>)}
					style={{ flex: '1 0 auto', textAlign: 'end' }}
				>
					{state.value.formatChannelValue(props.channel, locale)}
				</output>
			</div>
			<div
				{...(trackProps as h.JSX.DOMAttributes<HTMLDivElement>)}
				ref={trackRef}
				style={{
					...trackProps.style,
					// background: 'red',
				}}
				className='h-3 w-full rounded-full'
			>
				<div
					{...(thumbProps as h.JSX.DOMAttributes<HTMLDivElement>)}
					style={{
						...thumbProps.style,
						top: TRACK_THICKNESS / 2,
						boxShadow: '0 0 0 .6px rgba(0,0,0,0.2)',
						width: isFocusVisible ? TRACK_THICKNESS + 4 : THUMB_SIZE,
						height: isFocusVisible ? TRACK_THICKNESS + 4 : THUMB_SIZE,
						background: state.getDisplayColor().toString('css'),
					}}
					className='rounded-full border-2 border-white box-border'
				>
					<VisuallyHidden>
						<input ref={inputRef} {...inputProps} {...focusProps} />
					</VisuallyHidden>
				</div>
			</div>
		</div>
	);
};
