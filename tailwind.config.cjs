/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				padding: '2rem'
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				unbounded: ['Unbounded', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/line-clamp')]
}
