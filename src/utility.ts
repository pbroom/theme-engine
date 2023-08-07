import { TextboxAutocompleteOption } from '@create-figma-plugin/ui';

export function mapValues(
	keyName: string,
	values: (number | string)[]
): { [key: string]: number | string }[] | TextboxAutocompleteOption[] {
	return values.map((value) => ({ [keyName]: value }));
}
