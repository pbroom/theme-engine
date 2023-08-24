import Color from './color';
import Alias from './alias';
import ThemeColor from './theme-color';
import { getStopsFromString, convertNumberToStringArray } from './utility';
import { v4 as uuidv4 } from 'uuid';

interface ThemeState {
	id: string;
	name: string;
	themeColors: ThemeColor[];
}

class Theme {
	private state: ThemeState;
	constructor() {
		this.state = {
			id: uuidv4(),
			name: '',
			themeColors: [],
		};
	}

	get id() {
		return this.state.id;
	}
	getId() {
		return this.state.id;
	}

	componentDidMount() {
		console.log(this.state.id);
	}

	componentDidUpdate(prevState: ThemeState) {
		if (this.state !== prevState) {
			this.setState({ ...prevState, ...this.state });
		}
		if (this.state.name !== prevState.name) {
			this.setState({ ...prevState, name: this.state.name });
		}
		if (this.state.themeColors !== prevState.themeColors) {
			this.setState({ ...prevState, themeColors: this.state.themeColors });
		}
		if (this.state.themeColors.length !== prevState.themeColors.length) {
			this.setState({ ...prevState, themeColors: this.state.themeColors });
		}
	}

	componentWillUnmount() {}

	getState() {
		return this.state;
	}

	setState(state: ThemeState) {
		this.state = state;
	}

	get name(): string {
		return this.state.name;
	}
	getName(): string {
		return this.state.name;
	}

	set name(name: string) {
		this.state.name = name;
	}
	setName(name: string) {
		this.state.name = name;
	}

	get themeColors(): ThemeColor[] {
		return this.state.themeColors;
	}
	getThemeColors(): ThemeColor[] {
		return this.state.themeColors;
	}

	set themeColors(themeColors: ThemeColor[]) {
		this.state.themeColors = themeColors;
	}
	setThemeColors(themeColors: ThemeColor[]) {
		this.state.themeColors = themeColors;
	}

	getThemeColorById(id: number): ThemeColor | undefined {
		return this.state.themeColors.find((themeColor) => themeColor.getId() === id);
	}

	addThemeColor(themeColor: ThemeColor): void {
		this.state.themeColors.push(themeColor);
	}

	removeThemeColor(themeColor: ThemeColor): void {
		const index = this.state.themeColors.indexOf(themeColor);
		if (index !== -1) {
			this.state.themeColors.splice(index, 1);
		}
	}
}

export default Theme;
