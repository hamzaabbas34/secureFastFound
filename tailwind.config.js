// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	content: ["./src/**/*.{js,jsx,ts,tsx}"],
// 	theme: {
// 		extend: {
// 			fontFamily: {
// 				roboto: ["Roboto", "sans-serif"],
// 				poppins: ["Poppins", "sans-serif"],
// 				inter: ["Inter"], // Make sure Inter is correctly set
// 			},
// 			fontWeight: {
// 				poppins600: 600, // Fixing Poppins font weight 600
// 			},
// 			textColor: {
// 				customGreen: "#03bf62",
// 				customBlue: "#0447a3",
// 				customDarkBlue: "#081c8c",
// 			},
// 			backgroundColor: {
// 				bgGreen: "#03bf62",
// 				bgBlue: "#0747a4",
// 			},
// 			borderColor: {
// 				customGreen: "#03bf62", // Adding custom green for border
// 				customBlue: "#0447a3",
// 			},
// 		},
// 	},
// 	plugins: [],
// };

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
			container: {
				center: true, // This will center the container
				padding: "1rem", // Adjust padding if needed
				screens: {
					sm: "540px", // Custom small screen width
					md: "720px", // Custom medium screen width
					lg: "960px", // Custom large screen width
					xl: "1140px", // Custom extra-large screen width
					"2xl": "1320px", // Custom 2x large screen width
				},
			},
		},
	},
	plugins: [],
};
