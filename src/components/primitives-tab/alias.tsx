import { useState } from 'preact/hooks';
import { h } from 'preact';
import {
	Textbox,
	IconButton,
	TextboxNumeric,
	IconMinus32,
} from '@create-figma-plugin/ui';
import {
	Alias,
	AliasActions,
	AliasData,
	useAliasActionsStore,
} from '@/src/hooks/useAlias';
import { e } from 'mathjs';

const aliasActionsStore: AliasActions = useAliasActionsStore.getState();

const AliasList = (
	aliases: AliasData[],
	onSetName: (id: string, name: string) => void,
	onSetLightTone: (id: string, tone: number) => void,
	onSetDarkTone: (id: string, tone: number) => void,
	onRemoveAlias: (id: string) => void
) => {
	const aliasItems = aliases.map((alias: AliasData) => {
		const newAlias: AliasData & AliasActions = {
			...alias,
			...aliasActionsStore,
		};
		return (
			<div id={alias.id} className="flex flex-row items-center">
				<div className="flex-grow">
					<Textbox
						value={alias.name}
						onChange={(e) => newAlias.set.name(e.currentTarget.value)}
						placeholder="aliasname"
					/>
				</div>
				<div className="w-12">
					<TextboxNumeric
						value={alias.color[0].tone.toString()}
						onInput={(e) =>
							newAlias.set.color([
								{ tone: 0, mode: e.currentTarget.value as string },
							])
						}
						placeholder="80"
					/>
				</div>
				<div className="w-12">
					<TextboxNumeric
						value={alias.color[1].tone.toString()}
						onInput={(e) =>
							newAlias.set.color([
								{ tone: 1, mode: e.currentTarget.value as string },
							])
						}
						placeholder="20"
					/>
				</div>
				<IconButton
					title="Remove alias"
					onClick={() => onRemoveAlias(alias.id)}
				>
					<IconMinus32 />
				</IconButton>
			</div>
		);
	});
	return <div className="flex flex-col">{aliasItems}</div>;
};

export default AliasList;
