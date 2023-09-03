/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html, ts, tsx, css}', './src/**/*.tsx'],
	theme: {
		extend: {
			flex: {
				up: '1 0 auto',
			},
		},
	},
	plugins: [],
};
