<script lang="ts">
	import { theme, themesList } from '$lib/stores/theme';
	import type { Theme } from '$lib/stores/theme';
	import FaIcon from '../atom/FaIcon.svelte';

	let isThemeSelectorOpened = $state(false);

	function selectTheme(newTheme: Theme) {
		theme.set(newTheme);
		isThemeSelectorOpened = false;
	}
</script>

<div
	class=""
	tabindex="0"
	role="button"
	onmouseenter={() => (isThemeSelectorOpened = true)}
	onmouseleave={() => (isThemeSelectorOpened = false)}
>
	<button
		type="button"
		class="flex aspect-square cursor-pointer items-center justify-center gap-1 rounded-xl bg-btn p-2.5 transition-colors select-none hover:bg-btn-hover"
		onclick={() => (isThemeSelectorOpened = !isThemeSelectorOpened)}
		aria-expanded={isThemeSelectorOpened}
		aria-label="Seleccionar tema"
	>
		<FaIcon name={$theme === 'dark' || $theme === 'mocha' ? 'moon' : 'sun'} className="size-6" />
	</button>

	{#if isThemeSelectorOpened}
		<div
			class="absolute right-[calc(100%+1rem)] bottom-0 z-5 flex h-fit w-auto animate-slide-down flex-col gap-2 rounded-lg border border-main-sm bg-btn p-2 shadow-md shadow-bg sm:top-[calc(100%+1rem)] sm:right-0 sm:w-full"
		>
			<div
				class="absolute -right-6 bottom-0 h-full w-6 sm:right-0 sm:bottom-full sm:h-6 sm:w-full"
			></div>

			{#each themesList as itemTheme (itemTheme)}
				<button
					type="button"
					onclick={() => selectTheme(itemTheme)}
					class={`group flex cursor-pointer items-center rounded-md p-1 capitalize transition-colors select-none ${
						$theme === itemTheme ? 'bg-btn-hover text-font' : 'text-font-light hover:text-font'
					}`}
				>
					<span class="px-2">{itemTheme}</span>
				</button>
			{/each}
		</div>
	{/if}
</div>
