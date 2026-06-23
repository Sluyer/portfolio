/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				accent: {
					400: '#818cf8',
					500: '#6366f1',
					600: '#4f46e5',
				},
				surface: {
					50: '#fafafa',
					100: '#f4f4f5',
					800: '#27272a',
					850: '#1e1e21',
					900: '#18181b',
					950: '#09090b',
				},
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-slow': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'fade-in-delay-1': 'fade-in 0.6s ease-out 0.15s forwards',
				'fade-in-delay-2': 'fade-in 0.6s ease-out 0.3s forwards',
				'fade-in-delay-3': 'fade-in 0.6s ease-out 0.45s forwards',
				'fade-in-slow': 'fade-in-slow 1s ease-out forwards',
				'gradient-shift': 'gradient-shift 6s ease infinite',
			},
		},
	},
	plugins: [],
}
