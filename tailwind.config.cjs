/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1000px',
			xl: '1280px',
		},

		colors: {
			blue: 'hsl(var(--color-blue), <alpha-value>)',
			green: 'hsl(var(--color-green), <alpha-value>)',
			'light-green': 'hsl(var(--color-light-green))',
			white: 'hsl(var(--color-white))',
			transparent: 'transparent',
			current: 'currentColor',
		},

		fontFamily: {
			medium: ['"Gilmer Medium"', 'sans-serif'],
			regular: ['"Gilmer Regular"', 'sans-serif'],
			light: ['"Gilmer Light"', 'sans-serif'],
		},

		fontWeight: {
			light: '300',
			regular: '400',
			medium: '600',
		},

		spacing: {},

		extend: {
			borderWidth: {
				1: '1px',
			},
		},
	},

	plugins: [
		plugin(({ matchVariant, matchUtilities }) => {
			matchVariant(
				'nth',
				(value) => {
					return `&:nth-child(${value})`;
				},
				{
					values: {
						2: '2',
						3: '3',
					},
				}
			);

			// matchUtilities(
			// 	{
			// 		'border-shorthand': (value) => ({
			// 			border: value,
			// 		}),
			// 	},
			// 	{ values: { 1: '' } }
			// );
		}),
	],
};
