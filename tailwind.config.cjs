/** @type {import('tailwindcss').Config} */
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
			blue: 'hsl(var(--color-blue))',
			green: 'hsl(var(--color-green))',
			'light-green': 'hsl(var(--color-light-green))',
			transparent: 'transparent',
			current: 'currentColor',
		},

		fontFamily: {
			medium: ['"Gilmer Medium"', 'sans-serif'],
			regular: ['"Gilmer Regular"', 'sans-serif'],
			light: ['"Gilmer Light"', 'sans-serif'],
		},
		extend: {},
	},
};
