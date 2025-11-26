/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				main: 'var(--color-main)',
				'main-md': 'var(--color-main-md)',
				'main-sm': 'var(--color-main-sm)',
				bg: 'var(--color-bg)',
				font: 'var(--color-font)',
				'font-light': 'var(--color-font-light)',
				icon: 'var(--color-icon)',
				btn: 'var(--color-btn)',
				'btn-hover': 'var(--color-btn-hover)',
				'btn-border': 'var(--color-btn-border)'
			}
		}
	}
};
