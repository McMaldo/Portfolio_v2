import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'dark' | 'light' | 'mocha' | 'latte';
export type ColorScheme = 'dark' | 'light';

export const themesList: Theme[] = ['dark', 'light', 'mocha', 'latte'];

const darkThemes: Theme[] = ['dark', 'mocha'];

const getInitialTheme = (): Theme => {
	if (browser) {
		const currentAttr = document.documentElement.getAttribute('data-theme') as Theme;
		if (currentAttr) return currentAttr;

		return (localStorage.getItem('theme') as Theme) || 'dark';
	}
	return 'dark';
};

export const theme = writable<Theme>(getInitialTheme());

export const colorScheme = derived<typeof theme, ColorScheme>(theme, ($theme) =>
	darkThemes.includes($theme) ? 'dark' : 'light'
);

if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		document.documentElement.setAttribute('data-theme', value);
		document.documentElement.setAttribute(
			'data-color-scheme',
			darkThemes.includes(value) ? 'dark' : 'light'
		);
	});
}
