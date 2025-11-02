// Type: Default Theme
const defaultColor = '397456';

// Tones
const defaultPaletteTones = [
	0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100, 4, 5, 6, 12, 17, 22, 24,
	25, 35, 87, 92, 94, 96, 98,
];

export const defaultTheme = {
	name: 'Theme',
	themeColors: [
		{
			name: 'primary',
			sourceHex: defaultColor,
			hueCalc: '',
			chromaCalc: '',
			tones: defaultPaletteTones,
			aliases: [],
		},
		{
			name: 'secondary',
			sourceHex: defaultColor,
			hueCalc: '',
			chromaCalc: 'c / 3',
			tones: defaultPaletteTones,
			aliases: [],
		},
		{
			name: 'tertiary',
			sourceHex: defaultColor,
			hueCalc: 'h + 60',
			chromaCalc: 'c / 2',
			tones: defaultPaletteTones,
			aliases: [],
		},
		{
			name: 'neutral',
			sourceHex: defaultColor,
			hueCalc: '',
			chromaCalc: '4 < (c / 12) ? 4 : (c / 12)',
			tones: defaultPaletteTones,
			aliases: [],
		},
		{
			name: 'neutral-variant',
			sourceHex: defaultColor,
			hueCalc: '',
			chromaCalc: '8 < (c / 6) ? 8 : (c / 6)',
			tones: defaultPaletteTones,
			aliases: [],
		},
		{
			name: 'error',
			sourceHex: defaultColor,
			hueCalc: '25',
			chromaCalc: '84',
			tones: defaultPaletteTones,
			aliases: [],
		},
	],
	aliasGroups: [
		{
			name: 'color',
			aliases: [
				{
					name: 'color',
					colors: [
						{ mode: 'light', tone: 40 },
						{ mode: 'dark', tone: 80 },
					],
				},
				{
					name: 'on-color',
					colors: [
						{ mode: 'light', tone: 100 },
						{ mode: 'dark', tone: 20 },
					],
				},
				{
					name: 'color-container',
					colors: [
						{ mode: 'light', tone: 90 },
						{ mode: 'dark', tone: 30 },
					],
				},
				{
					name: 'on-color-container',
					colors: [
						{ mode: 'light', tone: 10 },
						{ mode: 'dark', tone: 90 },
					],
				},
				{
					name: 'color-fixed',
					colors: [
						{ mode: 'light', tone: 90 },
						{ mode: 'dark', tone: 90 },
					],
				},
				{
					name: 'on-color-fixed',
					colors: [
						{ mode: 'light', tone: 10 },
						{ mode: 'dark', tone: 10 },
					],
				},
			],
		},
		{
			name: 'neutrals',
			aliases: [
				{
					name: 'color-fixed-dim',
					colors: [
						{ mode: 'light', tone: 80 },
						{ mode: 'dark', tone: 80 },
					],
				},
				{
					name: 'on-color-fixed-variant',
					colors: [
						{ mode: 'light', tone: 30 },
						{ mode: 'dark', tone: 30 },
					],
				},
				{
					name: 'inverse-color',
					colors: [
						{ mode: 'light', tone: 80 },
						{ mode: 'dark', tone: 40 },
					],
				},
			],
		},
	],
};
