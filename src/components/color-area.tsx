import { useColorArea } from '@react-aria/color';
import { ColorAreaProps, useColorAreaState } from '@react-stately/color';
import { useFocusRing } from '@react-aria/focus';
import { h, Fragment } from 'preact';
import { useRef } from 'preact/compat';
import { parseColor } from '@react-stately/color';

const SIZE = 120;
const FOCUSED_THUMB_SIZE = 28;
const THUMB_SIZE = 16;
const BORDER_RADIUS = 2;
const HEIGHT = 120;

export const ColorArea = (props: ColorAreaProps) => {
	let inputXRef = useRef(null);
	let inputYRef = useRef(null);
	let containerRef = useRef(null);

	let state = useColorAreaState(props);

	let { isDisabled } = props;

	let { colorAreaProps, gradientProps, xInputProps, yInputProps, thumbProps } =
		useColorArea({ ...props, inputXRef, inputYRef, containerRef }, state);

	let { focusProps, isFocusVisible } = useFocusRing();

	return (
		<div
			ref={containerRef}
			{...(colorAreaProps as h.JSX.HTMLAttributes<HTMLDivElement>)}
			style={{
				...colorAreaProps.style,
				width: SIZE,
				height: SIZE,
				borderRadius: BORDER_RADIUS,
				opacity: isDisabled ? 0.3 : undefined,
			}}
		>
			<div
				{...(gradientProps as h.JSX.HTMLAttributes<HTMLDivElement>)}
				style={{
					backgroundColor: isDisabled ? 'rgb(142, 142, 142)' : undefined,
					...gradientProps.style,
					borderRadius: BORDER_RADIUS,
					height: SIZE,
					width: SIZE,
				}}
			/>
			<div
				{...(thumbProps as h.JSX.HTMLAttributes<HTMLDivElement>)}
				style={{
					...thumbProps.style,
					background: isDisabled
						? 'rgb(142, 142, 142)'
						: state.getDisplayColor().toString('css'),
					border: `3px solid ${isDisabled ? 'rgb(142, 142, 142)' : 'white'}`,
					borderRadius: '50%',
					boxShadow: '0 0 0 1px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.1)',
					boxSizing: 'border-box',
					height: isFocusVisible ? FOCUSED_THUMB_SIZE + 4 : THUMB_SIZE,
					transform: 'translate(-50%, -50%)',
					width: isFocusVisible ? FOCUSED_THUMB_SIZE + 4 : THUMB_SIZE,
				}}
			>
				<input
					ref={inputXRef}
					{...(xInputProps as h.JSX.HTMLAttributes<HTMLInputElement>)}
					{...(focusProps as h.JSX.HTMLAttributes<HTMLInputElement>)}
				/>
				<input
					ref={inputYRef}
					{...(yInputProps as h.JSX.HTMLAttributes<HTMLInputElement>)}
					{...(focusProps as h.JSX.HTMLAttributes<HTMLInputElement>)}
				/>
			</div>
		</div>
	);
};

// export default <ColorArea />;
