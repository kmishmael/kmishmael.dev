/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', theme: {
		extend: {
			colors: {
				"primary": "#000000", /* Changed to black for light mode, will be white in dark mode */
				"light-grey": "#eaeaea", /* Lighter gray for better contrast */
				"dark-grey": "#666666", /* Darker for better contrast */
				"primary2": "#fafafa", /* Similar to Vercel's background */
				"secondary": "#f1f1f1",
				"dark": {
					"bg": "#000000",
					"card": "#111111",
					"text": "#ffffff"
				},
				"light": {
					"bg": "#ffffff",
					"card": "#fafafa",
					"text": "#000000"
				}
			}, fontFamily: {
				sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'sans-serif'],
			},
		},
	}, plugins: [
		require('@tailwindcss/typography'),
		function ({ addUtilities }) {
			const newUtilities = {
				'.hover-lift': {
					'transition-property': 'all',
					'transition-duration': '300ms',
					'&:hover': {
						'transform': 'translateY(-0.25rem)',
						'box-shadow': '0 5px 10px -3px rgba(0, 0, 0, 0.08)'
					}
				},
				'.dark .hover-lift:hover': {
					'box-shadow': '0 5px 10px -3px rgba(255, 255, 255, 0.08)'
				}, '.gradient-text': {
					'background-clip': 'text',
					'color': 'transparent',
					'background-image': 'linear-gradient(to right, #000000, #000000)'
				},
				'.dark .gradient-text': {
					'background-image': 'linear-gradient(to right, #ffffff, #ffffff)'
				}, '.card': {
					'background-color': '#ffffff',
					'border-radius': '0.5rem',
					'border': '1px solid #eaeaea',
					'transition-property': 'all',
					'transition-duration': '300ms'
				},
				'.dark .card': {
					'background-color': '#111111',
					'border-color': '#333333',
				}
			};

			addUtilities(newUtilities);
		}
	],
}
