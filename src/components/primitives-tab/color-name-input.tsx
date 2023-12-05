import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Textbox } from '@create-figma-plugin/ui';
// import '!.././dist/tailwind.css';

const TextboxColorName = () => {
	const [value, setValue] = useState<string>('color');
	function handleInput(event: h.JSX.TargetedEvent<HTMLInputElement>) {
		const newValue = event.currentTarget.value;
		console.log(newValue);
		setValue(newValue);
	}
	return <Textbox onInput={handleInput} value={value} variant="underline" />;
};

export default TextboxColorName;
