class VariableCollection {
	id: string;
	name: string;
	variableIds: string[];
	defaultModeId: string;
	modes: { modeId: string; name: string }[];
	remote: boolean;
	key: string;

	constructor(
		id: string,
		name: string,
		variableIds: string[],
		defaultModeId: string,
		modes: { modeId: string; name: string }[],
		remote: boolean,
		key: string
	) {
		this.id = id;
		this.name = name;
		this.variableIds = variableIds;
		this.defaultModeId = defaultModeId;
		this.modes = modes;
		this.remote = remote;
		this.key = key;
	}

	toJSON() {
		return {
			id: this.id,
			name: this.name,
			variableIds: this.variableIds,
			defaultModeId: this.defaultModeId,
			modes: this.modes,
			remote: this.remote,
			key: this.key,
		};
	}
}

export default VariableCollection;
