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
				"primary-color": "#08FFA2",
				"secondary-color": "#0825FF",
				"tertiary-color": "#08BAFF",
				"quatenary-color": "#D708FF",
				"quinary-color": "#BF08FF",
			},
		},
	},
	plugins: [],
};

