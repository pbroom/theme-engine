import { TextboxAutocompleteOption } from '@create-figma-plugin/ui';

export function mapValues(
	keyName: string,
	values: (number | string)[]
): { [key: string]: number | string }[] | TextboxAutocompleteOption[] {
	return values.map((value) => ({ [keyName]: value }));
}

export function getStopsFromString(text: string): number[] {
	// Extract all integers from the text
	const allIntegers = text.match(/\b\d+\b/g)?.map(Number);
	// If no integers are found, return an empty array
	if (!allIntegers) {
		return [];
	}
	// Create a Set to ensure uniqueness, and filter out values outside the 0-100 range
	const stops: Set<number> = new Set(
		allIntegers.filter((n) => n >= 0 && n <= 100)
	);
	// Convert the Set back to an array
	return Array.from(stops);
}

export function convertNumberToStringArray(numbers: number[]): string[] {
	return numbers.map((n) => n.toString());
}

export type HSBColor = {
	hue: number;
	saturation: number;
	brightness: number;
};

export function hexToHSB(hexInput: string | number): string {
	// Convert the input to a string if it's a number
	let hex = typeof hexInput === 'number' ? hexInput.toString(16) : hexInput;

	// Ensure the hex string has 6 digits, padding with zeros if needed
	hex = hex.padStart(6, '0');

	// Remove the '#' from the beginning of the hex string, if present
	hex = hex.replace('#', '');

	// Convert the hex values to RGB
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	// Normalize the RGB values
	const rPrime = r / 255.0;
	const gPrime = g / 255.0;
	const bPrime = b / 255.0;

	// Calculate the brightness
	let brightness = Math.max(rPrime, gPrime, bPrime);

	// Calculate the saturation
	const minColor = Math.min(rPrime, gPrime, bPrime);
	let saturation = 0;
	if (brightness > 0) {
		saturation = (brightness - minColor) / brightness;
	}

	// Calculate the hue
	let hue = 0;
	if (saturation > 0) {
		if (brightness === rPrime) {
			hue = 60 * ((gPrime - bPrime) / (saturation * brightness));
		} else if (brightness === gPrime) {
			hue = 60 * (2 + (bPrime - rPrime) / (saturation * brightness));
		} else {
			hue = 60 * (4 + (rPrime - gPrime) / (saturation * brightness));
		}
	}

	// Adjust hue to be in the range [0, 360)
	if (hue < 0) {
		hue += 360;
	}

	// Scale saturation and brightness to [0, 100]
	saturation *= 100;
	brightness *= 100;

	// Create the HSB string
	const hsbString = `hsb(${Math.round(hue)}, ${Math.round(
		saturation
	)}%, ${Math.round(brightness)}%)`;

	return hsbString;
}
