/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"], // Enable dark mode via class
	content: [
	  "./src/**/*.{js,jsx}",
	  "./pages/**/*.{js,jsx}",
	  "./components/**/*.{js,jsx}",
	  "./app/**/*.{js,jsx}",
	],
	prefix: "", // No prefix for your classes
	theme: {
	  container: {
		center: true,
		padding: "15px", // Add padding to center container
	  },
	  screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	  },
	  extend: {
		colors: {
		  primary: "#1c1c22", // Primary color
		  accent: {
			DEFAULT: "#00ff99", // Default accent color
			hover: "#00e187",   // Hover accent color
		  },
		},
		fontFamily: {
		  primary: ['JetBrains Mono', 'monospace'], // Define the primary font here
		},
		keyframes: {
		  "accordion-down": {
			from: { height: "0" },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: "0" },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")], // Tailwind animation plugin
  };
  