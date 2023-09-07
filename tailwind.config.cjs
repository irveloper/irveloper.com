const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
		},
		colors: {
			...colors, // include default colors
			primary: '#121927',
			darkblue: '#252E40',
			secondary: '#252E40',
			tertiary: '#5552FF',
			muted: '#3E4658',
			accent: '#BABABA',
		}
	},
	plugins: [],
}
