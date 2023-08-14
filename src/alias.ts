import ThemeColor from './theme-color';

interface AliasProps {
	name: string;
	color: {
		mode: string;
		tone: number;
	}[];
}

class Alias {
	private name: string;
	private color: {
		mode: string;
		tone: number;
	}[];

	constructor({ name, color }: AliasProps) {
		this.name = name;
		this.color = color;
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

	setColor(mode: string | number, tone: number) {
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
