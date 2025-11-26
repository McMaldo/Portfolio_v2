<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { theme } from '$lib/stores/theme';
	import FaIcon from '../atom/FaIcon.svelte';

	let body;

	function switchTheme() {
		if (browser && body) {
			body.setAttribute('data-theme', $theme);
		}
	}

	onMount(() => {
		body = document.querySelector('body');
		switchTheme();
	});

	$effect(() => {
		if (browser) switchTheme();
	});
</script>

<button
	class="flex aspect-square cursor-pointer items-center justify-center gap-1 rounded-xl bg-btn p-2.5 transition-colors select-none hover:bg-btn-hover"
	onclick={() => theme.set($theme == 'dark' ? 'light' : 'dark')}
>
	<FaIcon name={$theme == 'dark' ? 'moon' : 'sun'} className="size-6" />
</button>
