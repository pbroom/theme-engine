import Color from './color';
import { getStopsFromString } from './utility';
import Alias from './alias';
import { maxChromaAtTonePerHue } from './ref';
import {
	Attributes,
	Component,
	ComponentChild,
	ComponentChildren,
	Ref,
} from 'preact';

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

	componentDidMount() {}

	componentDidUpdate(prevProps: ThemeColor) {
		// When sourceColor changes, update themeColor.
		if (this.state.sourceColor !== prevProps.state.sourceColor) {
			this.state.themeColor = this.state.sourceColor;
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

	getTones() {
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
				this.state.tones = tones.getTones();
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

	setThemeHue(hue: number) {
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

	setThemeChroma(chroma: number) {
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

	setAliases(aliases: Alias[]) {
		this.state.aliases = aliases;
	}

	addAlias(alias: Alias) {
		this.state.aliases.push(alias);
	}
}

export default ThemeColor;
