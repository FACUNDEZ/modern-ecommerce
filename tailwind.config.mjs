/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				customGray: 'rgb(245, 245, 245)',
			},
			keyframes: {
				translateX: {
				  '0%': { transform: 'translateX(-100%)' },
				  '100%': { transform: 'translateX(0)' },
				},
				translateX0: {
				  '0%': { transform: 'translateX(0)' },
				  '100%': { transform: 'translateX(-100%)' },
				},
				translateX2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' },
				  },
				translateX20: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' },
				  },
			  },
			  animation: {
				  translateX: 'translateX 1.5s ease-in-out',
				  translateX0: 'translateX0 1.5s ease-in-out',
				  translateX2: 'translateX2 1.5s ease-in-out',
				  translateX20: 'translateX20 1.5s ease-in-out',
				},
		},
	},
	plugins: [],
}
