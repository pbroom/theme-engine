import { TextboxAutocompleteOption } from '@create-figma-plugin/ui';
import { hexFromHct, useColor } from '../hooks/useColor';
import {
    Hct,
    TonalPalette,
    hexFromArgb,
} from '@material/material-color-utilities';
import { evaluate } from 'mathjs';

export type { PaletteObject, HSBColor };

export {
    quickHexFromHct,
    toneStops,
    paletteTones,
    getValues,
    hctTonalGradient,
    findMaxChroma,
    findMaxChromasForHue,
    findMaxChromaForHueAtTone,
    findHighestChromaPerHue,
    mapValues,
    getStopsFromString,
    convertNumberToStringArray,
    hexToHSB,
    calculateHue,
    calculateChroma,
};

/**
 * Converts the given hue, chroma, and tone values to a hexadecimal color code.
 * quickHexFromHct(163, 33, 44) // '#397456'
 *
 * @param hue - The hue value.
 * @param chroma - The chroma value.
 * @param tone - The tone value.
 * @returns The hexadecimal color code.
 */
const quickHexFromHct = (hue: number, chroma: number, tone: number) => {
    const hct = Hct.from(hue, chroma, tone);
    return hexFromHct(hct);
};

/**
 * Creates an array of tone stops.
 * @param stops An optional array of tone stops.
 * @returns An array of tone stops.
 */
const toneStops = (stops?: number[]) => {
    const defaultToneStops: number[] = [];
    if (stops && stops.length > 0) {
        return stops;
    } else {
        for (let stop = 0; stop <= 100; stop++) {
            defaultToneStops.push(stop);
        }
        return defaultToneStops;
    }
};

/**
 * Creates a palette of colors from a hex color and tone stops.
 * @param hexColor The hex color string to create the palette from.
 * @param stops An optional array of tone stops.
 * @returns An object containing the palette of colors.
 */
const paletteTones = (hue: number, chroma: number, stops?: number[]) => {
    const paletteToneStops = toneStops(stops);
    const paletteColor = TonalPalette.fromHueAndChroma(hue, chroma);
    const palette: { [key: number]: string } = {};
    for (let tone of paletteToneStops) {
        const argb: number = paletteColor.tone(tone);
        const hex: string = hexFromArgb(argb);
        palette[tone] = hex;
    }
    return palette;
};

type PaletteObject = {
    [key: string]: string;
};

/**
 * Gets the hex values of a palette object.
 * @param paletteObject An object containing the palette of colors.
 * @returns A string containing the hex values of the palette object.
 */
const getValues = (paletteObject: PaletteObject, selectedTones?: number[]) => {
    let hexString = '';
    if (selectedTones) {
        const stopIncrement = Math.round(100 / selectedTones.length);
        for (let key of selectedTones) {
            hexString += `${paletteObject[key]} ${
                stopIncrement * selectedTones.indexOf(key)
            }% ${stopIncrement * (selectedTones.indexOf(key) + 1)}%, `;
        }
    } else {
        for (let key in paletteObject) {
            hexString += paletteObject[key] + ', ';
        }
    }
    // Remove the last comma and space
    hexString = hexString.slice(0, -2);
    return hexString;
};

/**
 * Creates a tonal gradient from a hex color string.
 * @param hexColor The hex color string to create the tonal gradient from.
 * @returns A string containing the hex values of the tonal gradient.
 */
const hctTonalGradient = (
    hue: number,
    chroma: number,
    selectedTones?: number[],
) => {
    const gradientTones = paletteTones(hue, chroma);
    const gradientString = getValues(gradientTones, selectedTones);
    return gradientString;
};

/**
 * Finds the maximum chroma value for a given hue.
 * @param hue The hue value to find the maximum chroma for.
 * @returns An object containing the maximum chroma value and the tone at which it occurs.
 */
const findMaxChromasForHue = (
    hue: number,
): { chroma: number; tone: number }[] => {
    const maxChromas: { chroma: number; tone: number }[] = [];

    // Iterate over each tone value from 0 to 100
    for (let tone = 0; tone <= 100; tone++) {
        const maxChromaForTone = Hct.from(hue, 150, tone).chroma;
        maxChromas.push({ chroma: maxChromaForTone, tone });
    }

    return maxChromas;
};

const findMaxChroma = (hue: number) => {
    let maxChroma = 0;
    let maxTone = 0;
    for (let tone = 0; tone <= 100; tone++) {
        const chroma = Hct.from(hue, 150, tone).chroma;
        if (chroma > maxChroma) {
            maxChroma = chroma;
            maxTone = tone;
        }
    }
    return maxChroma;
};

/**
 * Finds the maximum chroma value for a given hue and tone.
 * @param hue The hue value to find the maximum chroma for.
 * @param tone The tone value to find the maximum chroma for.
 * @returns The maximum chroma value.
 */
const findMaxChromaForHueAtTone = (hue: number, tone: number): number => {
    let maximumChroma = 0;

    // Iterate over each chroma value from 0 to 150
    for (let chroma = 0; chroma <= 150; chroma++) {
        const currentChroma = Hct.from(hue, chroma, tone).chroma;

        // If the current chroma value is higher than the maximum chroma value, update the maximum chroma value
        if (currentChroma > maximumChroma) {
            maximumChroma = currentChroma;
        }
    }

    return maximumChroma;
};

/**
 * Finds the highest chroma value for each hue value, along with the tone at which it occurs.
 * @returns An array of objects containing the hue, highest chroma, and tone at which it occurs.
 */
const findHighestChromaPerHue = (): {
    hue: number;
    chroma: number;
    tone: number;
}[] => {
    const result: { hue: number; chroma: number; tone: number }[] = [];

    // Iterate over each hue value from 0 to 360
    for (let hue = 0; hue <= 360; hue++) {
        let highestChroma = 0;
        let toneAtHighestChroma = 0;

        // Iterate over each tone value from 0 to 100
        for (let tone = 0; tone <= 100; tone++) {
            const chroma = Hct.from(hue, 150, tone).chroma;

            // If the chroma value is higher than the current highest chroma value, update the highest chroma value and tone
            if (chroma > highestChroma) {
                highestChroma = chroma;
                toneAtHighestChroma = tone;
            }
        }

        // Add the hue, highest chroma, and tone at which it occurs to the result array
        result.push({ hue, chroma: highestChroma, tone: toneAtHighestChroma });
    }

    return result;
};

/**
 * Maps an array of values to an array of objects with a specified key name.
 * @param keyName - The name of the key to be used in the resulting objects.
 * @param values - The array of values to be mapped.
 * @returns An array of objects with the specified key name and corresponding values.
 */
function mapValues(
    keyName: string,
    values: (number | string)[],
): { [key: string]: number | string }[] | TextboxAutocompleteOption[] {
    return values.map((value) => ({ [keyName]: value }));
}

/**
 * Extracts all integers from the given text and returns an array of numbers within the range of 0-100.
 * @param text - The text to extract integers from.
 * @returns An array of numbers within the range of 0-100.
 */
function getStopsFromString(text: string): number[] {
    // Extract all integers from the text
    const allIntegers = text.match(/\b\d+\b/g)?.map(Number);
    // If no integers are found, return an empty array
    if (!allIntegers) {
        return [];
    }
    // Create a Set to ensure uniqueness, and filter out values outside the 0-100 range
    const stops: Set<number> = new Set(
        allIntegers.filter((n) => n >= 0 && n <= 100),
    );
    // Convert the Set back to an array
    return Array.from(stops);
}

/**
 * Converts an array of numbers to an array of strings.
 * @param numbers - The array of numbers to convert.
 * @returns The array of strings.
 */
function convertNumberToStringArray(numbers: number[]): string[] {
    return numbers.map((n) => n.toString());
}

type HSBColor = {
    hue: number;
    saturation: number;
    brightness: number;
};

/**
 * Converts a hexadecimal color code to HSB (Hue, Saturation, Brightness) format.
 *
 * @param hexInput - The hexadecimal color code to convert.
 * @returns The color in HSB format as a string.
 */
function hexToHSB(hexInput: string | number): string {
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
        saturation,
    )}%, ${Math.round(brightness)}%)`;

    return hsbString;
}

const calculateHue = (originalHueValue: number, hueCalcValue: string) => {
    const hueCalc = hueCalcValue;
    // Get source hue
    const sourceHue = originalHueValue;
    // Check if hueCalc is empty or just whitespace
    if (!hueCalc.trim() || hueCalc === '') {
        return sourceHue;
    }
    try {
        // Replace 'h' regardless of its case
        const parsedHueCalc = hueCalc.replace(/h/gi, sourceHue.toString());
        // Evaluate parsedHueCalc
        // Hue equals absolute value of hue modulo 360
        const hue = Math.abs((evaluate(parsedHueCalc) as number) % 360);
        return hue;
    } catch (error) {
        console.error('Invalid expression:', error);
        // Try to evaluate the expression up to the offending character
        let lastValidHue = NaN;
        for (let i = hueCalc.length - 1; i >= 0; i--) {
            const truncatedExpression = hueCalc.substring(0, i);
            try {
                lastValidHue = evaluate(
                    truncatedExpression.replace(/h/gi, sourceHue.toString()),
                ) as number;
                break; // Stop the loop if we successfully evaluate the expression
            } catch (e) {
                // Continue truncating
            }
        }
        // Set hue to the last successfully evaluated value, or the default hue if none was successful
        const hue = !isNaN(lastValidHue)
            ? Math.abs(lastValidHue % 360)
            : sourceHue;
        return hue;
    }
};

const calculateChroma = (
    originalChromaValue: number,
    chromaCalcValue: string,
) => {
    const chromaCalc = chromaCalcValue;
    // Get source chroma
    const sourceChroma = originalChromaValue;
    // Check if chromaCalc is empty or just whitespace
    if (!chromaCalc.trim() || chromaCalc === '') {
        return sourceChroma;
    }
    try {
        // Replace 'c' regardless of its case
        const parsedChromaCalc = chromaCalc.replace(
            /c/gi,
            sourceChroma.toString(),
        );
        // Evaluate parsedChromaCalc
        const chroma = Math.abs(evaluate(parsedChromaCalc) as number);
        return chroma;
    } catch (error) {
        console.error('Invalid expression:', error);
        // Try to evaluate the expression up to the offending character
        let lastValidChroma = NaN;
        for (let i = chromaCalc.length - 1; i >= 0; i--) {
            const truncatedExpression = chromaCalc.substring(0, i);
            try {
                lastValidChroma = evaluate(
                    truncatedExpression.replace(/c/gi, sourceChroma.toString()),
                );
                break;
            } catch (error) {
                continue;
            }
        }
        return lastValidChroma;
    }
};
