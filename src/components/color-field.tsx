import { AriaColorFieldProps, useColorField } from '@react-aria/color';
import { ColorFieldProps, useColorFieldState } from '@react-stately/color';
import { h } from 'preact';
import { useRef } from 'preact/compat';

export const ColorField = (props: AriaColorFieldProps) => {
	let state = useColorFieldState(props);
	let inputRef = useRef(null);
	let { labelProps, inputProps } = useColorField(props, state, inputRef);

	return (
		<div style={{ display: 'inline-flex', flexDirection: 'column' }}>
			<label {...(labelProps as h.JSX.HTMLAttributes<HTMLLabelElement>)}>
				{props.label}
			</label>
			<input
				{...(inputProps as h.JSX.HTMLAttributes<HTMLInputElement>)}
				ref={inputRef}
			/>
		</div>
	);
};

<ColorField label='Color' />;
