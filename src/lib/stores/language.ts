import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Language = 'en' | 'es';

const storedLang = browser ? (localStorage.getItem('lang') as Language) || 'es' : 'en';

export const lang = writable<Language>(storedLang);

if (browser) {
	// Aplicar tema inicial
	document.documentElement.setAttribute('lang', storedLang);

	// Actualizar cuando cambie el store
	lang.subscribe((value) => {
		localStorage.setItem('lang', value);
		document.documentElement.setAttribute('lang', value);
	});
}
