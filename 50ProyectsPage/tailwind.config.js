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
				"primary-color": "#e87461",
				"secondary-color": "#e0c879",
				"tertiary-color": "#d5d887",
				"quatenary-color": "#A1CF6B",
				"quinary-color": "#7AC74F",
			},
		},
	},
	plugins: [],
};

