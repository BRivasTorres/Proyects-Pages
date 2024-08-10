/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-color": "#2CAD5F",
				"secondary-color": "#E9E9E9",
				"tertiary-color": "#282828",
				"quaternary-color": "#C3F0BE",
				"quinquinary-color": "#7E7E7E",
			},
		},
	},
	plugins: [],
};

