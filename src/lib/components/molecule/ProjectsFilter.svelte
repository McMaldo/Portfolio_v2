<script lang="ts">
	import { filter } from '../../stores/projectsFilter.js';
	import { isEnglish } from '$lib/stores/language.js';
	import Button from '../atom/Button.svelte';
	import TechIcon from '../atom/TechIcon.svelte';
	import { skillTagDictionary, type skillKey } from '$lib/utils/skillsList.js';
	const skills: skillKey[] = ['react', 'tailwind', 'js', 'express', 'php', 'mysql', 'css'];

	let isFilterOpened: boolean = $state(false);
	function setFilter(tech: skillKey) {
		$filter = tech;
	}
	function clearFilter() {
		$filter = '';
	}
</script>

<div
	class="absolute top-4 right-4 z-2 flex flex-col items-end gap-2"
	role="button"
	tabindex="0"
	onmouseenter={() => (isFilterOpened = true)}
	onmouseleave={() => (isFilterOpened = false)}
>
	<Button
		icon="filter"
		name={$isEnglish ? 'Filter' : 'Filtrar'}
		size="sm"
		fn={() => (isFilterOpened = !isFilterOpened)}
	/>
	{#if isFilterOpened}
		<div
			class="flex animate-slide-down flex-col gap-2 rounded-lg border border-main-sm bg-btn p-2 shadow-md shadow-bg"
		>
			{#each skills as tech, index (tech)}
				<button
					tabindex={index}
					onclick={() => {
						if ($filter == tech) clearFilter();
						else setFilter(tech);
					}}
					class={`group flex cursor-pointer items-center rounded-md transition-colors select-none ${$filter == tech ? 'bg-btn-hover' : 'text-font-light hover:text-font'}`}
				>
					<TechIcon name={tech} size="size-8" />
					<span class="px-2">{skillTagDictionary[tech].name}</span>
				</button>
			{/each}
			<button
				onclick={() => clearFilter()}
				class="flex h-8 cursor-pointer items-center justify-center rounded-md transition-colors select-none hover:bg-btn-hover"
			>
				{$isEnglish ? 'Clear Filter' : 'Borrar Filtro'}
			</button>
		</div>
	{/if}
</div>
