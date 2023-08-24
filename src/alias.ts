import ThemeColor from './theme-color';

let aliasId = 0;

interface AliasProps {
	name: string;
	color: {
		mode: string;
		tone: number;
	}[];
}

class Alias {
	public id: number;
	public name: string;
	private color: {
		mode: string;
		tone: number;
	}[];

	constructor() {
		this.id = aliasId++;
		this.name = `Alias ${this.id}`;
		this.color = [];
	}

	getId() {
		return this.id;
	}

	getName() {
		return this.name;
	}

	setName(name: string) {
		this.name = name;
	}

	getColor(mode?: string | number) {
		if (mode !== undefined) {
			if (typeof mode === 'number' && Number.isInteger(mode)) {
				const modeIndex = mode as number;
				if (modeIndex >= 0 && modeIndex < this.color.length) {
					return this.color[modeIndex];
				}
			} else if (typeof mode === 'string') {
				return this.color.find((color) => color.mode === mode);
			}
		}
		return this.color;
	}
	getTone(mode: string | number) {
		const color = this.getColor(mode);
		if (!color) {
			return undefined;
		}
		return 'tone' in color ? color.tone : undefined;
	}

	setColorByMode(mode: string | number, tone: number) {
		const colorIndex = this.color.findIndex((color) => color.mode === mode);

		if (colorIndex === -1) {
			this.color.push({ mode: mode.toString(), tone });
		} else {
			this.color[colorIndex].tone = tone;
		}
	}

	removeColor(mode: string | number) {
		const colorIndex = this.color.findIndex((color) => color.mode === mode);

		if (colorIndex !== -1) {
			this.color.splice(colorIndex, 1);
		}
	}
}

export default Alias;
