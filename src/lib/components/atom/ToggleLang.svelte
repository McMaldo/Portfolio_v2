<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { lang } from '$lib/stores/language';

	let doc;

	function switchLang() {
		if (browser && doc) {
			doc.setAttribute('lang', $lang);
		}
	}

	onMount(() => {
		doc = document.querySelector('html');
		switchLang();
	});

	$effect(() => {
		if (browser) switchLang();
	});

	let toggleLang = () => ($lang = $lang == 'es' ? 'en' : 'es');
</script>

<button
	class="flex aspect-square size-11 h-full cursor-pointer items-center justify-center gap-1 rounded-xl bg-btn text-xl font-bold text-icon uppercase transition-colors select-none hover:bg-btn-hover"
	onclick={() => toggleLang()}
>
	{$lang}
</button>
