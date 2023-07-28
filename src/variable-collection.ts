/**
 * Represents a collection of variables with a default mode and a set of modes.
 */
class VariableCollection {
	id: string;
	name: string;
	variableIds: string[];
	defaultModeId: string;
	modes: { modeId: string; name: string }[];
	remote: boolean;
	key: string;

	/**
	 * Creates a new instance of VariableCollection.
	 * @param id The ID of the collection.
	 * @param name The name of the collection.
	 * @param variableIds The list of variables contained in this variable collection.
	 * @param defaultModeId The default mode ID for this collection.
	 * @param modes The modes defined for this collection.
	 * @param remote Whether the collection is remote or local.
	 * @param key The key to use with getVariablesInLibraryCollectionAsync.
	 */
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

	/**
	 * Returns a JSON representation of the VariableCollection instance.
	 * @returns A JSON object representing the VariableCollection instance.
	 */
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
