import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'dark' | 'light' | 'mocha' | 'latte';

export const themesList: Theme[] = ['dark', 'light', 'mocha', 'latte'];

const getInitialTheme = (): Theme => {
	if (browser) {
		const currentAttr = document.documentElement.getAttribute('data-theme') as Theme;
		if (currentAttr) return currentAttr;

		return (localStorage.getItem('theme') as Theme) || 'dark';
	}
	return 'dark';
};

export const theme = writable<Theme>(getInitialTheme());

if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		document.documentElement.setAttribute('data-theme', value);
	});
}
