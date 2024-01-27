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
    darkModeTone: 80,
};
const onColorAlias: AliasData = {
    id: nanoid,
    name: `on-color`,
    lightModeTone: 100,
    darkModeTone: 20,
};
const colorConainerAlias: AliasData = {
    id: nanoid,
    name: `color-container`,
    lightModeTone: 90,
    darkModeTone: 30,
};
const onColorConainerAlias: AliasData = {
    id: nanoid,
    name: `on-color-container`,
    lightModeTone: 10,
    darkModeTone: 90,
};
const colorFixedAlias: AliasData = {
    id: nanoid,
    name: `color-fixed`,
    lightModeTone: 90,
    darkModeTone: 90,
};
const onColorFixedAlias: AliasData = {
    id: nanoid,
    name: `on-color-fixed`,
    lightModeTone: 10,
    darkModeTone: 10,
};
const colorFixedDimAlias: AliasData = {
    id: nanoid,
    name: `color-fixed-dim`,
    lightModeTone: 80,
    darkModeTone: 80,
};
const onColorFixedVariantAlias: AliasData = {
    id: nanoid,
    name: `on-color-fixed-variant`,
    lightModeTone: 30,
    darkModeTone: 30,
};
const inverseColorAlias: AliasData = {
    id: nanoid,
    name: `inverse-color`,
    lightModeTone: 80,
    darkModeTone: 40,
};

// Neutral
const surfaceAlias: AliasData = {
    id: nanoid,
    name: `surface`,
    lightModeTone: 98,
    darkModeTone: 6,
};
const onSurfaceAlias: AliasData = {
    id: nanoid,
    name: `on-surface`,
    lightModeTone: 10,
    darkModeTone: 90,
};
const surfaceDimAlias: AliasData = {
    id: nanoid,
    name: `surface-dim`,
    lightModeTone: 87,
    darkModeTone: 6,
};
const surfaceBrightAlias: AliasData = {
    id: nanoid,
    name: `surface-bright`,
    lightModeTone: 98,
    darkModeTone: 24,
};
const surfaceContainerLowestAlias: AliasData = {
    id: nanoid,
    name: `surface-container-lowest`,
    lightModeTone: 100,
    darkModeTone: 4,
};
const surfaceContainerLowAlias: AliasData = {
    id: nanoid,
    name: `surface-container-low`,
    lightModeTone: 96,
    darkModeTone: 10,
};
const surfaceContainerAlias: AliasData = {
    id: nanoid,
    name: `surface-container`,
    lightModeTone: 94,
    darkModeTone: 12,
};
const surfaceContainerHighAlias: AliasData = {
    id: nanoid,
    name: `surface-container-high`,
    lightModeTone: 92,
    darkModeTone: 17,
};
const surfaceContainerHighestAlias: AliasData = {
    id: nanoid,
    name: `surface-container-highest`,
    lightModeTone: 90,
    darkModeTone: 22,
};
const inverseSurfaceAlias: AliasData = {
    id: nanoid,
    name: `inverse-surface`,
    lightModeTone: 20,
    darkModeTone: 90,
};
const inverseOnSurfaceAlias: AliasData = {
    id: nanoid,
    name: `inverse-on-surface`,
    lightModeTone: 95,
    darkModeTone: 20,
};
const scrimAlias = {
    id: nanoid,
    name: `scrim`,
    lightModeTone: 0,
    darkModeTone: 0,
};
const shadowAlias = {
    id: nanoid,
    name: `shadow`,
    lightModeTone: 0,
    darkModeTone: 0,
};

// Neutral Variant
const onSurfaceVariantAlias: AliasData = {
    id: nanoid,
    name: `on-surface-variant`,
    lightModeTone: 30,
    darkModeTone: 80,
};
const outlineAlias: AliasData = {
    id: nanoid,
    name: `outline`,
    lightModeTone: 50,
    darkModeTone: 60,
};
const outlineVariantAlias: AliasData = {
    id: nanoid,
    name: `outline-variant`,
    lightModeTone: 80,
    darkModeTone: 30,
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
