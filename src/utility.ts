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
