import { useState } from 'preact/hooks';
import { Fragment, h } from 'preact';
import {
	Textbox,
	IconButton,
	TextboxNumeric,
	IconMinus32,
} from '@create-figma-plugin/ui';
import {
	AliasActions,
	AliasData,
	useAliasActionsStore,
} from '@/src/hooks/useAlias';
import { useEffect } from 'react';
import { hexFromHct } from '@/src/hooks/useColor';
import { Hct } from '@material/material-color-utilities';

export { AliasList, AliasItem, AliasPreviewList, AliasTonePreview };

type AliasItemProps = {
	alias: AliasData;
	onSetName: (id: string, name: string) => void;
	onSetLightTone: (id: string, tone: number) => void;
	onSetDarkTone: (id: string, tone: number) => void;
	onRemoveAlias: (id: string) => void;
};

const AliasItem = ({
	alias,
	onSetName,
	onSetLightTone,
	onSetDarkTone,
	onRemoveAlias,
}: AliasItemProps) => {
	const [aliasName, setAliasName] = useState(alias.name);
	const [aliasColor, setAliasColor] = useState([
		alias.color[0].tone,
		alias.color[1].tone,
	]);
	const onSetAliasName = (id: string, name: string) => {
		setAliasName(name);
		onSetName(id, name);
	};
	const onSetAliasLightTone = (id: string, tone: number) => {
		setAliasColor([tone, alias.color[1].tone]);
		onSetLightTone(id, tone);
	};
	const onSetAliasDarkTone = (id: string, tone: number) => {
		setAliasColor([alias.color[0].tone, tone]);
		onSetDarkTone(id, tone);
	};
	return (
		<div
			key={alias.id}
			id={alias.id}
			className="h-8 flex flex-row items-center"
		>
			<div className="flex-grow">
				<Textbox
					value={aliasName}
					onChange={(e) => onSetAliasName(alias.id, e.currentTarget.value)}
					placeholder="Alias name"
				/>
			</div>
			<div className="w-12">
				<TextboxNumeric
					value={aliasColor[0].toString()}
					onInput={(e) =>
						onSetAliasLightTone(alias.id, parseInt(e.currentTarget.value))
					}
					placeholder="light"
				/>
			</div>
			<div className="w-12">
				<TextboxNumeric
					value={aliasColor[1].toString()}
					onInput={(e) =>
						onSetAliasDarkTone(alias.id, parseInt(e.currentTarget.value))
					}
					placeholder="dark"
				/>
			</div>
			<IconButton title="Remove alias" onClick={() => onRemoveAlias(alias.id)}>
				<IconMinus32 />
			</IconButton>
		</div>
	);
};

type AliasListProps = {
	aliases: AliasData[];
	onSetAliases: (aliases: AliasData[]) => void;
};

const AliasList = ({ aliases, onSetAliases }: AliasListProps) => {
	const [aliasItems, setAliasItems] = useState(aliases);
	const onSetName = (id: string, name: string) => {
		const alias = aliases.find((alias) => alias.id === id);
		if (alias) {
			alias.name = name;
			setAliasItems([...aliases]);
			onSetAliases([...aliases]);
		}
	};
	const onSetLightTone = (id: string, tone: number) => {
		const alias = aliases.find((alias) => alias.id === id);
		if (alias) {
			alias.color[0].tone = tone;
			setAliasItems([...aliases]);
			onSetAliases([...aliases]);
		}
	};
	const onSetDarkTone = (id: string, tone: number) => {
		const alias = aliases.find((alias) => alias.id === id);
		if (alias) {
			alias.color[1].tone = tone;
			setAliasItems([...aliases]);
			onSetAliases([...aliases]);
		}
	};
	const onRemoveAlias = (id: string) => {
		const newAliasItems = aliasItems.filter((alias) => alias.id !== id);
		setAliasItems(newAliasItems);
		onSetAliases(newAliasItems);
		console.log(newAliasItems, id);
	};

	useEffect(() => {
		setAliasItems([...aliases]);
	}, [aliases]);

	const aliasList = aliasItems.map((alias) => {
		return (
			<AliasItem
				key={alias.id}
				alias={alias}
				onSetName={onSetName}
				onSetLightTone={onSetLightTone}
				onSetDarkTone={onSetDarkTone}
				onRemoveAlias={onRemoveAlias}
			/>
		);
	});
	return <Fragment>{aliasList}</Fragment>;
};

type AliasTonePreviewProps = {
	hue: number;
	chroma: number;
	lightModeTone: number;
	darkModeTone: number;
};

const AliasTonePreview = ({
	hue,
	chroma,
	lightModeTone,
	darkModeTone,
}: AliasTonePreviewProps) => {
	const lightHct = Hct.from(hue, chroma, lightModeTone);
	const darkHct = Hct.from(hue, chroma, darkModeTone);
	const lightHex = hexFromHct(lightHct);
	const darkHex = hexFromHct(darkHct);
	return (
		<div className="h-8 w-full flex">
			<div className="h-full flex-grow" style={`background: ${lightHex}`}></div>
			<div className="h-full flex-grow" style={`background: ${darkHex}`}></div>
		</div>
	);
};

type AliasPreviewListProps = {
	hue: number;
	chroma: number;
	aliases: AliasData[];
};

const AliasPreviewList = ({ hue, chroma, aliases }: AliasPreviewListProps) => {
	return (
		<div className="w-full h-8">
			{aliases.map((alias) => (
				<AliasTonePreview
					hue={hue}
					chroma={chroma}
					lightModeTone={alias.color[0].tone}
					darkModeTone={alias.color[1].tone}
				/>
			))}
		</div>
	);
};
