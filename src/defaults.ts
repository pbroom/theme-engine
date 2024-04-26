import { customAlphabet } from 'nanoid';
import { nolookalikesSafe } from 'nanoid-dictionary';
import { AliasData } from './hooks/useAliasGroup';

export const nanoid: string = customAlphabet(nolookalikesSafe, 12).toString();

// Hex color
export const defaultColor = '397456';

// Name
export const defaultName = 'color';

// Tones
export const defaultPaletteTones = [
    0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100, 4, 5, 6, 12, 17, 22, 24,
    25, 35, 87, 92, 94, 96, 98,
];

// Hue Calc
export const defaultHueCalc = (colorRole?: string) => {
    if (colorRole === 'tertiary') {
        return 'h + 60';
    }
    if (colorRole === 'error') {
        return '25';
    }
    return;
};

// Chroma Calc
export const defaultChromaCalc = (colorRole?: string) => {
    if (colorRole === 'primary') {
        return '48 > c ? 48 : c';
    }
    if (colorRole === 'secondary') {
        return 'c / 3';
    }
    if (colorRole === 'tertiary') {
        return 'c / 3';
    }
    if (colorRole === 'error') {
        return '84';
    }
    if (colorRole === 'neutral') {
        return '4 < (c / 12) ? 4 : (c / 12)';
    }
    if (colorRole === 'neutral-variant') {
        return '8 < (c / 6) ? 8 : (c / 6)';
    }
};

// Aliases
// Color

// TODO: Add correct color tones for each alias

const colorAlias: AliasData = {
    id: nanoid,
    name: 'color',
    lightModeTone: 40,
    lightModeAlpha: 100,
    darkModeTone: 80,
    darkModeAlpha: 100,
};
const onColorAlias: AliasData = {
    id: nanoid,
    name: `on-color`,
    lightModeTone: 100,
    lightModeAlpha: 100,
    darkModeTone: 20,
    darkModeAlpha: 100,
};
const colorConainerAlias: AliasData = {
    id: nanoid,
    name: `color-container`,
    lightModeTone: 90,
    lightModeAlpha: 100,
    darkModeTone: 30,
    darkModeAlpha: 100,
};
const onColorConainerAlias: AliasData = {
    id: nanoid,
    name: `on-color-container`,
    lightModeTone: 10,
    lightModeAlpha: 100,
    darkModeTone: 90,
    darkModeAlpha: 100,
};
const colorFixedAlias: AliasData = {
    id: nanoid,
    name: `color-fixed`,
    lightModeTone: 90,
    lightModeAlpha: 100,
    darkModeTone: 90,
    darkModeAlpha: 100,
};
const onColorFixedAlias: AliasData = {
    id: nanoid,
    name: `on-color-fixed`,
    lightModeTone: 10,
    lightModeAlpha: 100,
    darkModeTone: 10,
    darkModeAlpha: 100,
};
const colorFixedDimAlias: AliasData = {
    id: nanoid,
    name: `color-fixed-dim`,
    lightModeTone: 80,
    lightModeAlpha: 100,
    darkModeTone: 80,
    darkModeAlpha: 100,
};
const onColorFixedVariantAlias: AliasData = {
    id: nanoid,
    name: `on-color-fixed-variant`,
    lightModeTone: 30,
    lightModeAlpha: 100,
    darkModeTone: 30,
    darkModeAlpha: 100,
};
const inverseColorAlias: AliasData = {
    id: nanoid,
    name: `inverse-color`,
    lightModeTone: 80,
    lightModeAlpha: 100,
    darkModeTone: 40,
    darkModeAlpha: 100,
};

// Neutral
const surfaceAlias: AliasData = {
    id: nanoid,
    name: `surface`,
    lightModeTone: 98,
    lightModeAlpha: 100,
    darkModeTone: 6,
    darkModeAlpha: 100,
};
const onSurfaceAlias: AliasData = {
    id: nanoid,
    name: `on-surface`,
    lightModeTone: 10,
    lightModeAlpha: 100,
    darkModeTone: 90,
    darkModeAlpha: 100,
};
const surfaceDimAlias: AliasData = {
    id: nanoid,
    name: `surface-dim`,
    lightModeTone: 87,
    lightModeAlpha: 100,
    darkModeTone: 6,
    darkModeAlpha: 100,
};
const surfaceBrightAlias: AliasData = {
    id: nanoid,
    name: `surface-bright`,
    lightModeTone: 98,
    lightModeAlpha: 100,
    darkModeTone: 24,
    darkModeAlpha: 100,
};
const surfaceContainerLowestAlias: AliasData = {
    id: nanoid,
    name: `surface-container-lowest`,
    lightModeTone: 100,
    lightModeAlpha: 100,
    darkModeTone: 4,
    darkModeAlpha: 100,
};
const surfaceContainerLowAlias: AliasData = {
    id: nanoid,
    name: `surface-container-low`,
    lightModeTone: 96,
    lightModeAlpha: 100,
    darkModeTone: 10,
    darkModeAlpha: 100,
};
const surfaceContainerAlias: AliasData = {
    id: nanoid,
    name: `surface-container`,
    lightModeTone: 94,
    lightModeAlpha: 100,
    darkModeTone: 12,
    darkModeAlpha: 100,
};
const surfaceContainerHighAlias: AliasData = {
    id: nanoid,
    name: `surface-container-high`,
    lightModeTone: 92,
    lightModeAlpha: 100,
    darkModeTone: 17,
    darkModeAlpha: 100,
};
const surfaceContainerHighestAlias: AliasData = {
    id: nanoid,
    name: `surface-container-highest`,
    lightModeTone: 90,
    lightModeAlpha: 100,
    darkModeTone: 22,
    darkModeAlpha: 100,
};
const inverseSurfaceAlias: AliasData = {
    id: nanoid,
    name: `inverse-surface`,
    lightModeTone: 20,
    lightModeAlpha: 100,
    darkModeTone: 90,
    darkModeAlpha: 100,
};
const inverseOnSurfaceAlias: AliasData = {
    id: nanoid,
    name: `inverse-on-surface`,
    lightModeTone: 95,
    lightModeAlpha: 100,
    darkModeTone: 20,
    darkModeAlpha: 100,
};
const scrimAlias = {
    id: nanoid,
    name: `scrim`,
    lightModeTone: 0,
    lightModeAlpha: 100,
    darkModeTone: 0,
    darkModeAlpha: 100,
};
const shadowAlias = {
    id: nanoid,
    name: `shadow`,
    lightModeTone: 0,
    lightModeAlpha: 100,
    darkModeTone: 0,
    darkModeAlpha: 100,
};

// Neutral Variant
const onSurfaceVariantAlias: AliasData = {
    id: nanoid,
    name: `on-surface-variant`,
    lightModeTone: 30,
    lightModeAlpha: 100,
    darkModeTone: 80,
    darkModeAlpha: 100,
};
const outlineAlias: AliasData = {
    id: nanoid,
    name: `outline`,
    lightModeTone: 50,
    lightModeAlpha: 100,
    darkModeTone: 60,
    darkModeAlpha: 100,
};
const outlineVariantAlias: AliasData = {
    id: nanoid,
    name: `outline-variant`,
    lightModeTone: 80,
    lightModeAlpha: 100,
    darkModeTone: 30,
    darkModeAlpha: 100,
};

export const defaultAliases = (colorRole?: string) => {
    if (colorRole === 'color' || colorRole === undefined) {
        return [
            colorAlias,
            onColorAlias,
            colorConainerAlias,
            onColorConainerAlias,
            colorFixedAlias,
            onColorFixedAlias,
            colorFixedDimAlias,
            onColorFixedVariantAlias,
            inverseColorAlias,
        ];
    }
    if (colorRole === 'error') {
        return [
            colorAlias,
            onColorAlias,
            colorConainerAlias,
            onColorConainerAlias,
        ];
    }
    if (colorRole === 'neutral') {
        return [
            surfaceAlias,
            onSurfaceAlias,
            surfaceDimAlias,
            surfaceBrightAlias,
            surfaceContainerLowestAlias,
            surfaceContainerLowAlias,
            surfaceContainerAlias,
            surfaceContainerHighAlias,
            surfaceContainerHighestAlias,
            inverseSurfaceAlias,
            inverseOnSurfaceAlias,
            scrimAlias,
            shadowAlias,
        ];
    }
    if (colorRole === 'neutral-variant') {
        return [onSurfaceVariantAlias, outlineAlias, outlineVariantAlias];
    }
};
