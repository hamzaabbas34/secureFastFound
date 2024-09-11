/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				inter: ["Inter"], // Make sure Inter is correctly set
			},
			fontWeight: {
				poppins600: 600, // Fixing Poppins font weight 600
			},
			textColor: {
				customGreen: "#03bf62",
				customBlue: "#0447a3",
				customDarkBlue: "#081c8c",
			},
			backgroundColor: {
				bgGreen: "#03bf62",
				bgBlue: "#0747a4",
			},
			borderColor: {
				customGreen: "#03bf62", // Adding custom green for border
				customBlue: "#0447a3",
			},
		},
	},
	plugins: [],
};
