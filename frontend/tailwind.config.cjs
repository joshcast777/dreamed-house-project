/** @type {import('tailwindcss').Config} */

// const { RoundCorners } = require('@cloudinary/url-gen/actions');
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			"2xs": "321px",
			xs: "426px",
			...defaultTheme.screens
		},
		extend: {
			colors: {
				"primary-color": colors.amber[500],
				"background-dark": colors.neutral[800]
			}
		}
	},
	plugins: []
};
