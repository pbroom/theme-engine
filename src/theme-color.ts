import Color from './color';
import { getStopsFromString, convertNumberToStringArray } from './utility';
import Alias from './alias';
import { maxChromaAtTonePerHue } from './ref';

let themeColorCounter = 0;

interface ThemeColorState {
	sourceColor: Color;
	themeColor: Color;
	tones: number[];
	hueCalc: string;
	chromaCalc: string;
	name: string;
	aliases: Alias[];
}

class ThemeColor {
	private id: number = themeColorCounter++;
	private state: ThemeColorState;
	constructor(color: string) {
		this.state = {
			sourceColor: new Color(color),
			themeColor: new Color(color),
			hueCalc: '',
			chromaCalc: '',
			tones: [],
			name: '',
			aliases: [],
		};
	}

	// Since sourceColor and themeColor are Color instances, we can use the Color methods to get and set values.
	// Useful Color methods:
	//  getHue()
	//  setHue()
	//  getChroma()
	//  setChroma()
	//  getTone()
	//  getHex()
	//  getFigmaSolidColor()

	getId() {
		return this.id;
	}

	componentDidMount() {}

	componentDidUpdate(prevProps: ThemeColorState) {
		// When sourceColor changes, update themeColor.
		if (this.state.sourceColor !== prevProps.sourceColor) {
			this.setState({
				...prevProps,
				sourceColor: this.state.sourceColor,
				themeColor: this.state.sourceColor,
			});
			if (this.state.hueCalc !== '') {
				this.setHue(this.state.sourceColor.getHue());
			}
			if (this.state.chromaCalc !== '') {
				this.setChroma(this.state.sourceColor.getChroma());
			}
		}
		if (this.state.tones !== prevProps.tones) {
			this.setTones(this.state.tones);
		}
		if (this.state.themeColor !== prevProps.themeColor) {
			// Update the state using setState()
			this.setState({ ...this.state, themeColor: this.state.themeColor });
		}
		if (this.state.hueCalc !== prevProps.hueCalc) {
			this.setState({ ...prevProps, hueCalc: this.state.hueCalc });
			this.setHue(this.state.themeColor.getHue());
		}
		if (this.state.chromaCalc !== prevProps.chromaCalc) {
			this.setState({ ...prevProps, chromaCalc: this.state.chromaCalc });
			this.setChroma(this.state.themeColor.getChroma());
		}
		if (this.state.name !== prevProps.name) {
			this.setState({ ...prevProps, name: this.state.name });
		}
		if (this.state.aliases !== prevProps.aliases) {
			this.setState({ ...prevProps, aliases: this.state.aliases });
		}
	}

	componentWillUnmount() {}

	getState() {
		return this.state;
	}

	setState(state: ThemeColorState) {
		this.state = state;
	}

	getSourceColor() {
		return this.state.sourceColor;
	}

	setSourceColor(color: string) {
		this.state.sourceColor = new Color(color);
		this.state.themeColor = new Color(color);
	}

	getTones(returnAsString?: string) {
		let tones: number[] | string[] = this.state.tones;
		if (returnAsString === 'string' || 'asString') {
			tones = convertNumberToStringArray(tones);
			return tones;
		}
		return this.state.tones;
	}

	setTones(tones: number[] | string | ThemeColor) {
		if (typeof tones === 'string') {
			this.state.tones = getStopsFromString(tones);
		} else if (
			Array.isArray(tones) &&
			tones.every((tone) => typeof tone === 'number')
		) {
			this.state.tones = tones;
		} else {
			if ('getTones' in tones) {
				this.state.tones = tones.getTones() as number[];
			}
		}
	}

	getThemeColor() {
		return this.state.themeColor;
	}

	setThemeColor(color: string) {
		this.state.themeColor = new Color(color);
	}

	getHueCalc() {
		return this.state.hueCalc;
	}

	setHueCalc(hueCalc: string) {
		this.state.hueCalc = hueCalc;
	}

	setHue(hue: number) {
		let themeHue = hue;
		if (this.state.hueCalc !== '' && this.state.sourceColor) {
			let sourceHue = this.state.sourceColor.getHue();
			let hueCalc = this.state.hueCalc.replace(/h/g, sourceHue.toString());
			themeHue = eval(hueCalc) as number;
			if (themeHue < 0) {
				themeHue = 360 + (themeHue % 360);
			} else if (themeHue > 360) {
				themeHue = themeHue % 360;
			}
			themeHue = Math.round(themeHue);
		}

		this.state.themeColor.setHue(themeHue);
	}

	getChromaCalc() {
		return this.state.chromaCalc;
	}

	setChromaCalc(chromaCalc: string) {
		this.state.chromaCalc = chromaCalc;
	}

	setChroma(chroma: number) {
		let themeChroma = chroma;
		if (this.state.chromaCalc !== '' && this.state.sourceColor) {
			let sourceChroma = this.state.sourceColor.getChroma();
			let themeColorHue = this.state.themeColor.getHue();
			let maxChroma = maxChromaAtTonePerHue[themeColorHue].chroma;
			let chromaCalc = this.state.chromaCalc.replace(
				/c/g,
				sourceChroma.toString()
			);
			themeChroma = eval(chromaCalc) as number;
			if (themeChroma < 0) {
				themeChroma = 0;
			}
			if (themeChroma > maxChroma) {
				themeChroma = maxChroma;
			}
			themeChroma = Math.round(themeChroma);
		}

		this.state.themeColor.setChroma(themeChroma);
	}

	getName() {
		return this.state.name;
	}

	setName(name: string) {
		this.state.name = name;
	}

	getAliases() {
		return this.state.aliases;
	}

	getAliasById(aliasId: number): Alias | undefined {
		return this.state.aliases.find((alias) => alias.getId() === aliasId);
	}

	setAliases(aliases: Alias[]) {
		this.state.aliases = aliases;
	}

	addAlias(alias: Alias) {
		this.state.aliases.push(alias);
	}

	removeAlias(alias: Alias) {
		this.state.aliases = this.state.aliases.filter(
			(existingAlias) => existingAlias !== alias
		);
	}

	setAliasName(alias: Alias, name: string) {
		alias.setName(name);
	}
}

export default ThemeColor;
