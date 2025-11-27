import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'dark' | 'light' | 'blue';

const storedTheme = browser ? (localStorage.getItem('theme') as Theme) || 'dark' : 'dark';

export const theme = writable<Theme>(storedTheme);

if (browser) {
	// Aplicar tema inicial
	document.documentElement.setAttribute('data-theme', storedTheme);

	// Actualizar cuando cambie el store
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		document.documentElement.setAttribute('data-theme', value);
	});
}
