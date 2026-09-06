import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

export type Language = 'en' | 'es';

const storedLang = browser ? (localStorage.getItem('lang') as Language) || 'es' : 'en';

export const lang = writable<Language>(storedLang);

// Store derivado que expone el valor booleano
export const isEnglish = derived(lang, ($lang) => $lang === 'en');

if (browser) {
	// Aplicar atributo inicial en HTML
	document.documentElement.setAttribute('lang', storedLang);

	// Actualizar localStorage y el HTML cuando cambie el idioma
	lang.subscribe((value) => {
		localStorage.setItem('lang', value);
		document.documentElement.setAttribute('lang', value);
	});
}
