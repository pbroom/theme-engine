import { useState } from 'preact/hooks';
import { h } from 'preact';
import {
	Textbox,
	IconButton,
	TextboxNumeric,
	IconMinus32,
} from '@create-figma-plugin/ui';
import { Alias } from '@/src/hooks/useAlias';

export const AliasInput = (alias: Alias) => {
	const [aliasName, setAliasName] = useState<string>('aliasname');
	const [lightModeTone, setLightModeTone] = useState<string>(
		alias.color[0].toString()
	);
	const [darkModeTone, setDarkModeTone] = useState<string>(
		alias.color[1].toString()
	);

	const handleAliasNameInput = (e: any) => {
		setAliasName(e.currentTarget.value);
	};
	const handleLightModeToneInput = (e: any) => {
		setLightModeTone(e.currentTarget.value);
	};
	const handleDarkModeToneInput = (e: any) => {
		setDarkModeTone(e.currentTarget.value);
	};
	const handleAliasRemove = () => {};

	return (
		<div id={alias.id} className="flex flex-row items-center">
			<Textbox
				value={aliasName}
				onChange={(e) => handleAliasNameInput(e)}
				placeholder="aliasname"
			/>
			<TextboxNumeric
				value={lightModeTone}
				onInput={(e) => handleLightModeToneInput(e)}
				placeholder="80"
			/>
			<TextboxNumeric
				value={darkModeTone}
				onInput={(e) => handleDarkModeToneInput(e)}
				placeholder="20"
			/>
			<IconButton title="Remove alias" onClick={handleAliasRemove}>
				<IconMinus32 />
			</IconButton>
		</div>
	);
};
