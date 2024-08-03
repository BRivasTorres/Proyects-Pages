/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"primary-font": "Montserrat",
				"secondary-font": "Rosario",
				"font-tertiary": "Varela",
			},
			colors: {
				"primary-color": "#1b002d",
				"secondary-color": "#00124b",
				"tertiary-color": "#b443ff",
			},
		},
	},
	plugins: [],
};

