import { AriaColorSliderOptions, useColorSlider } from '@react-aria/color';
import {
	ColorSliderStateOptions,
	useColorSliderState,
} from '@react-stately/color';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useLocale } from '@react-aria/i18n';
import { useFocusRing } from '@react-aria/focus';
import { h } from 'preact';
import { useRef } from 'preact/compat';

const TRACK_THICKNESS = 12;
const THUMB_SIZE = 12;

export const ColorSlider = (props: AriaColorSliderOptions) => {
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

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: 192,
			}}
		>
			{/* Create a flex container for the label and output element. */}
			<div style={{ display: 'flex', alignSelf: 'stretch' }}>
				<label {...(labelProps as h.JSX.HTMLAttributes<HTMLLabelElement>)}>
					{label}
				</label>
				<output
					{...(outputProps as h.JSX.HTMLAttributes<HTMLOutputElement>)}
					style={{ flex: '1 0 auto', textAlign: 'end' }}
				>
					{state.value.formatChannelValue(props.channel, locale)}
				</output>
			</div>
			{/* The track element holds the visible track line and the thumb. */}
			<div
				{...(trackProps as h.JSX.HTMLAttributes<HTMLDivElement>)}
				ref={trackRef}
				style={{
					...trackProps.style,
					height: TRACK_THICKNESS,
					width: '100%',
					borderRadius: TRACK_THICKNESS / 2,
				}}
			>
				<div
					{...(thumbProps as h.JSX.HTMLAttributes<HTMLDivElement>)}
					style={{
						...thumbProps.style,
						top: TRACK_THICKNESS / 2,
						border: '2px solid white',
						// boxShadow: '0 0 0 1px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.1)',
						boxShadow: '0 0 0 .5px rgba(0,0,0,0.2)',
						width: isFocusVisible ? TRACK_THICKNESS + 4 : THUMB_SIZE,
						height: isFocusVisible ? TRACK_THICKNESS + 4 : THUMB_SIZE,
						borderRadius: '50%',
						boxSizing: 'border-box',
						background: state.getDisplayColor().toString('css'),
					}}
				>
					{/* <VisuallyHidden>
						<input ref={inputRef} {...inputProps} {...focusProps} />
					</VisuallyHidden> */}
				</div>
			</div>
		</div>
	);
};
