import useAlias from '../useAlias';
import { Alias } from '../useAlias';

export const defaultAliases = (colorRole?: string): Alias[] => {
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
};

const colorAlias: Alias = useAlias('color', 40, 80);
const onColorAlias: Alias = useAlias(`on-color`, 100, 20);
const colorConainerAlias: Alias = useAlias(`color-container`, 90, 30);
const onColorConainerAlias: Alias = useAlias(`on-color-container`, 10, 90);
const colorFixedAlias: Alias = useAlias(`color-fixed`, 90, 90);
const onColorFixedAlias: Alias = useAlias(`on-color-fixed`, 10, 10);
const colorFixedDimAlias: Alias = useAlias(`color-fixed-dim`, 80, 80);
const onColorFixedVariantAlias: Alias = useAlias(
	`on-color-fixed-variant`,
	30,
	30
);
const inverseColorAlias: Alias = useAlias(`inverse-color`, 80, 40);

// Neutral
const surfaceAlias: Alias = useAlias(`surface`, 98, 6);
const onSurfaceAlias: Alias = useAlias(`on-surface`, 10, 90);
const surfaceDimAlias: Alias = useAlias(`surface-dim`, 87, 6);
const surfaceBrightAlias: Alias = useAlias(`surface-bright`, 98, 24);
const surfaceContainerLowestAlias: Alias = useAlias(
	`surface-container-lowest`,
	100,
	4
);
const surfaceContainerLowAlias: Alias = useAlias(
	`surface-container-low`,
	96,
	10
);
const surfaceContainerAlias: Alias = useAlias(`surface-container`, 94, 12);
const surfaceContainerHighAlias: Alias = useAlias(
	`surface-container-high`,
	92,
	17
);
const surfaceContainerHighestAlias: Alias = useAlias(
	`surface-container-highest`,
	90,
	22
);
const inverseSurfaceAlias: Alias = useAlias(`inverse-surface`, 20, 90);
const inverseOnSurfaceAlias: Alias = useAlias(`inverse-on-surface`, 95, 20);
const scrimAlias = useAlias(`scrim`, 0, 0);
const shadowAlias = useAlias(`shadow`, 0, 0);

// Neutral Variant
const onSurfaceVariantAlias: Alias = useAlias(`on-surface-variant`, 30, 80);
const outlineAlias: Alias = useAlias(`outline`, 50, 60);
const outlineVariantAlias: Alias = useAlias(`outline-variant`, 80, 30);
