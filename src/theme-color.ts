import Color from './color';
import { v4 as uuidv4 } from 'uuid';
import { getStopsFromString, convertNumberToStringArray } from './utility';
import Alias from './alias';
import { maxChromaAtTonePerHue } from './ref';
import { e, evaluate } from 'mathjs';

let themeColorCounter = 0;

interface ThemeColor extends Color {}

export type ThemeColorState = {
	sourceColor: Color;
	themeColor: Color;
	tones: number[];
	hueCalc: string;
	chromaCalc: string;
	name: string;
	aliases: Alias[];
};

class ThemeColor {
	public id: string = uuidv4();
	public state: ThemeColorState;
	constructor(
		color: string,
		name?: string,
		tones?: number[],
		hueCalc?: string,
		chromaCalc?: string,
		aliases?: Alias[],
		id?: string
	) {
		this.id = id || uuidv4();
		this.state = {
			sourceColor: new Color(color),
			themeColor: new Color(color),
			hueCalc: hueCalc || '',
			chromaCalc: chromaCalc || '',
			tones: tones || [],
			name: name || '',
			aliases: aliases || [],
		};
	}

	getId() {
		return this.id;
	}
	setId(id: string) {
		this.id = id;
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

	get sourceColor() {
		return this.state.sourceColor;
	}
	getSourceColor() {
		return this.state.sourceColor;
	}

	set sourceColor(color: Color) {
		this.state.sourceColor = color;
		this.state.themeColor = color;
	}
	setSourceColor(color: string) {
		this.state.sourceColor = new Color(color);
		this.state.themeColor = new Color(color);
	}

	get tones() {
		return this.state.tones;
	}
	getTones(returnAsString?: string) {
		let tones: number[] | string[] = this.state.tones;
		if (returnAsString === 'string' || 'asString') {
			tones = convertNumberToStringArray(tones);
			return tones;
		}
		return this.state.tones;
	}

	set tones(tones: number[] | string | ThemeColor) {
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

	get themeColor() {
		return this.state.themeColor;
	}
	getThemeColor() {
		return this.state.themeColor;
	}

	set themeColor(color: Color) {
		this.state.themeColor = color;
	}
	setThemeColor(color: string) {
		this.state.themeColor = new Color(color);
	}

	getHue(rounded?: string) {
		try {
			// Get source hue
			const sourceHue = this.state.sourceColor.getHue('rounded');
			// Get and parse hueCalc
			const hueCalc = this.state.hueCalc.replace(/h/g, sourceHue.toString());
			// Evaluate hueCalc
			const evaluatedHue = evaluate(hueCalc) as number;

			// Hue equals absolute value of evaluatedHue modulo 360
			const hue = Math.abs(evaluatedHue % 360);

			return rounded === 'rounded' ? Math.round(hue) : hue;
		} catch (error) {
			console.error('Invalid expression:', error);

			// Try to evaluate the expression up to the offending character
			let lastValidHue = NaN;
			for (let i = this.state.hueCalc.length - 1; i >= 0; i--) {
				const truncatedExpression = this.state.hueCalc.substring(0, i);
				try {
					lastValidHue = evaluate(
						truncatedExpression.replace(
							/h/g,
							this.state.sourceColor.getHue('rounded').toString()
						)
					) as number;
					break; // Stop the loop if we successfully evaluate the expression
				} catch (e) {
					// Continue truncating
				}
			}

			// Return the last successfully evaluated value, or the default hue if none was successful
			return !isNaN(lastValidHue)
				? Math.abs(lastValidHue % 360)
				: this.state.sourceColor.getHue('rounded');
		}
	}

	getChroma(rounded?: string) {
		let themeChroma =
			rounded === 'rounded'
				? this.state.themeColor.getChroma('rounded')
				: this.state.themeColor.getChroma();
		if (this.state.chromaCalc !== '' && this.state.sourceColor) {
			let sourceChroma = this.state.sourceColor.getChroma();
			let themeColorHue = this.state.themeColor.getHue();
			let maxChroma = maxChromaAtTonePerHue[themeColorHue].chroma;
			let chromaCalc = this.state.chromaCalc.replace(
				/c/g,
				sourceChroma.toString()
			);
			themeChroma = evaluate(chromaCalc) as number;
			if (themeChroma < 0) {
				themeChroma = 0;
			}
			if (themeChroma > maxChroma) {
				themeChroma = maxChroma;
			}
			themeChroma = Math.round(themeChroma);
		}
		return themeChroma;
	}

	get hueCalc() {
		return this.state.hueCalc;
	}
	getHueCalc() {
		return this.state.hueCalc;
	}

	set hueCalc(hueCalcInput: string) {
		this.state.hueCalc = hueCalcInput;
	}
	setHueCalc(hueCalcInput: string) {
		this.state.hueCalc = hueCalcInput; // Set the hueCalc state

		// Check if hueCalcInput is empty or just whitespace
		if (!hueCalcInput.trim()) {
			this.themeColor.hue = this.state.sourceColor.getHue();
			return;
		}

		try {
			// Get source hue
			const sourceHue = this.state.sourceColor.getHue();
			// Replace 'h' regardless of its case
			const parsedHueCalc = hueCalcInput.replace(/h/gi, sourceHue.toString());
			// Evaluate parsedHueCalc
			const evaluatedHue = Math.abs((evaluate(parsedHueCalc) as number) % 360);

			// Hue equals absolute value of evaluatedHue modulo 360
			this.themeColor.setHue(evaluatedHue);
		} catch (error) {
			console.error('Invalid expression:', error);

			// Try to evaluate the expression up to the offending character
			let lastValidHue = NaN;
			for (let i = hueCalcInput.length - 1; i >= 0; i--) {
				const truncatedExpression = hueCalcInput.substring(0, i);
				try {
					lastValidHue = evaluate(
						truncatedExpression.replace(
							/h/gi,
							this.state.sourceColor.getHue().toString()
						)
					) as number;
					break; // Stop the loop if we successfully evaluate the expression
				} catch (e) {
					// Continue truncating
				}
			}
			// Set hue to the last successfully evaluated value, or the default hue if none was successful
			const hue = !isNaN(lastValidHue)
				? Math.abs(lastValidHue % 360)
				: this.state.sourceColor.getHue();
			this.themeColor.setHue(hue);
		}
	}

	setHue(hue: number) {
		this.state.themeColor.setHue(hue);
	}

	get chromaCalc() {
		return this.state.chromaCalc;
	}
	getChromaCalc() {
		return this.state.chromaCalc;
	}

	set chromaCalc(chromaCalc: string) {
		this.state.chromaCalc = chromaCalc;
	}
	setChromaCalc(chromaCalc: string) {
		this.state.chromaCalc = chromaCalc;
	}

	setChroma(chroma: number) {
		this.state.themeColor.setChroma(chroma);
	}

	get name() {
		return this.state.name;
	}
	getName() {
		return this.state.name;
	}

	set name(name: string) {
		this.state.name = name;
	}
	setName(name: string) {
		this.state.name = name;
	}

	get aliases() {
		return this.state.aliases;
	}
	getAliases() {
		return this.state.aliases;
	}

	getAliasById(aliasId: number): Alias | undefined {
		return this.state.aliases.find((alias) => alias.getId() === aliasId);
	}

	set aliases(aliases: Alias[]) {
		this.state.aliases = aliases;
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
