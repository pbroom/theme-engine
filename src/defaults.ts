import Alias from './alias';

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

const colorAlias: Alias = new Alias('color', [
	{ mode: 'light', tone: 40 },
	{ mode: 'dark', tone: 80 },
]);
const onColorAlias: Alias = new Alias(`on-color`, [
	{ mode: 'light', tone: 100 },
	{ mode: 'dark', tone: 20 },
]);
const colorConainerAlias: Alias = new Alias(`color-container`, [
	{ mode: 'light', tone: 90 },
	{ mode: 'dark', tone: 30 },
]);
const onColorConainerAlias: Alias = new Alias(`on-color-container`, [
	{ mode: 'light', tone: 10 },
	{ mode: 'dark', tone: 90 },
]);
const colorFixedAlias: Alias = new Alias(`color-fixed`, [
	{ mode: 'light', tone: 90 },
	{ mode: 'dark', tone: 90 },
]);
const onColorFixedAlias: Alias = new Alias(`on-color-fixed`, [
	{ mode: 'light', tone: 10 },
	{ mode: 'dark', tone: 10 },
]);
const colorFixedDimAlias: Alias = new Alias(`color-fixed-dim`, [
	{ mode: 'light', tone: 80 },
	{ mode: 'dark', tone: 80 },
]);
const onColorFixedVariantAlias: Alias = new Alias(`on-color-fixed-variant`, [
	{ mode: 'light', tone: 30 },
	{ mode: 'dark', tone: 30 },
]);
const inverseColorAlias: Alias = new Alias(`inverse-color`, [
	{ mode: 'light', tone: 80 },
	{ mode: 'dark', tone: 40 },
]);

// Neutral
const surfaceAlias: Alias = new Alias(`surface`, [
	{ mode: 'light', tone: 98 },
	{ mode: 'dark', tone: 6 },
]);
const onSurfaceAlias: Alias = new Alias(`on-surface`, [
	{ mode: 'light', tone: 10 },
	{ mode: 'dark', tone: 90 },
]);
const surfaceDimAlias: Alias = new Alias(`surface-dim`, [
	{ mode: 'light', tone: 87 },
	{ mode: 'dark', tone: 6 },
]);
const surfaceBrightAlias: Alias = new Alias(`surface-bright`, [
	{ mode: 'light', tone: 98 },
	{ mode: 'dark', tone: 24 },
]);
const surfaceContainerLowestAlias: Alias = new Alias(
	`surface-container-lowest`,
	[
		{ mode: 'light', tone: 100 },
		{ mode: 'dark', tone: 4 },
	]
);
const surfaceContainerLowAlias: Alias = new Alias(`surface-container-low`, [
	{ mode: 'light', tone: 96 },
	{ mode: 'dark', tone: 10 },
]);
const surfaceContainerAlias: Alias = new Alias(`surface-container`, [
	{ mode: 'light', tone: 94 },
	{ mode: 'dark', tone: 12 },
]);
const surfaceContainerHighAlias: Alias = new Alias(`surface-container-high`, [
	{ mode: 'light', tone: 92 },
	{ mode: 'dark', tone: 17 },
]);
const surfaceContainerHighestAlias: Alias = new Alias(
	`surface-container-highest`,
	[
		{ mode: 'light', tone: 90 },
		{ mode: 'dark', tone: 22 },
	]
);
const inverseSurfaceAlias: Alias = new Alias(`inverse-surface`, [
	{ mode: 'light', tone: 20 },
	{ mode: 'dark', tone: 90 },
]);
const inverseOnSurfaceAlias: Alias = new Alias(`inverse-on-surface`, [
	{ mode: 'light', tone: 95 },
	{ mode: 'dark', tone: 20 },
]);
const scrimAlias = new Alias(`scrim`, [
	{ mode: 'light', tone: 0 },
	{ mode: 'dark', tone: 0 },
]);
const shadowAlias = new Alias(`shadow`, [
	{ mode: 'light', tone: 0 },
	{ mode: 'dark', tone: 0 },
]);

// Neutral Variant
const onSurfaceVariantAlias: Alias = new Alias(`on-surface-variant`, [
	{ mode: 'light', tone: 30 },
	{ mode: 'dark', tone: 80 },
]);
const outlineAlias: Alias = new Alias(`outline`, [
	{ mode: 'light', tone: 50 },
	{ mode: 'dark', tone: 60 },
]);
const outlineVariantAlias: Alias = new Alias(`outline-variant`, [
	{ mode: 'light', tone: 80 },
	{ mode: 'dark', tone: 30 },
]);

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
		return [colorAlias, onColorAlias, colorConainerAlias, onColorConainerAlias];
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
