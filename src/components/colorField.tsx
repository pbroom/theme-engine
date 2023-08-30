import { useColorField } from '@react-aria/color';
import { ColorFieldProps, useColorFieldState } from '@react-stately/color';
import { h } from 'preact';
import { useRef } from 'preact/compat';

export const ColorField = (props: ColorFieldProps) => {
	let state = useColorFieldState(props);
	let inputRef = useRef(null);
	let { labelProps, inputProps } = useColorField(props, state, inputRef);

	return (
		<div style={{ display: 'inline-flex', flexDirection: 'column' }}>
			<label {...labelProps}>{props.label}</label>
			<input {...inputProps} ref={inputRef} />
		</div>
	);
};

<ColorField label='Color' />;
