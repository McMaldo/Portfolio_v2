<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { theme } from '$lib/stores/theme';
	import type { Theme } from '$lib/stores/theme';
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

	let isThemeSelectorOpened: boolean = $state(false);

	const themes: Theme[] = ['dark', 'light', 'mocha', 'latte'];
</script>

<div
	class=""
	tabindex="0"
	role="button"
	onmouseenter={() => (isThemeSelectorOpened = true)}
	onmouseleave={() => (isThemeSelectorOpened = false)}
>
	<button
		class="flex aspect-square cursor-pointer items-center justify-center gap-1 rounded-xl bg-btn p-2.5 transition-colors select-none hover:bg-btn-hover"
		onclick={() => (isThemeSelectorOpened = !isThemeSelectorOpened)}
	>
		<FaIcon name={$theme == 'dark' || $theme == 'mocha' ? 'moon' : 'sun'} className="size-6" />
	</button>
	{#if isThemeSelectorOpened}
		<div
			class="absolute right-[calc(100%+1rem)] bottom-0 flex h-fit w-auto flex-col gap-2 rounded-lg border border-main-sm bg-btn p-2 shadow-md shadow-bg sm:top-[calc(100%+1rem)] sm:right-0 sm:w-full"
		>
			<div
				class="absolute -right-6 bottom-0 h-full w-6 sm:right-0 sm:bottom-full sm:h-6 sm:w-full"
			></div>
			{#each themes as newTheme, index (index)}
				<button
					tabindex={index}
					onclick={() => theme.set(newTheme)}
					class={`group flex cursor-pointer items-center rounded-md capitalize transition-colors select-none ${$theme == newTheme ? 'bg-btn-hover' : 'text-font-light hover:text-font'}`}
				>
					<span class="px-2">{newTheme}</span>
				</button>
			{/each}
		</div>
	{/if}
</div>
