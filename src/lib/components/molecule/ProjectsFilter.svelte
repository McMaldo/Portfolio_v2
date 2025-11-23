<script lang="ts">
	import { filter } from '../../utils/projectsFilter.js';
	import Button from '../atom/Button.svelte';
	import TechIcon from '../atom/TechIcon.svelte';
	const skills: string[] = [
		'React',
		'Tailwind CSS',
		'Java Script',
		'Figma',
		'Express JS',
		'PHP',
		'MySQL',
		'CSS',
		'MaterialUI',
		'Antd',
		'Node JS'
	];

	let isFilterOpened: boolean = $state(false);
	function setFilter(tech: string) {
		$filter = tech;
	}
	function clearFilter() {
		$filter = '';
	}
</script>

<div
	class="absolute top-6 right-6 z-2 flex flex-col items-end gap-2"
	role="button"
	tabindex="0"
	onmouseenter={() => (isFilterOpened = true)}
	onmouseleave={() => (isFilterOpened = false)}
>
	<Button icon="filter" name="Filter" size="sm" />
	{#if isFilterOpened}
		<div
			class="flex flex-col gap-2 rounded-lg border border-main-sm bg-btn p-2 shadow-md shadow-bg"
		>
			{#each skills as name, index (name)}
				<button
					tabindex={index}
					onclick={() => {
						let tech = name.replace(' ', '');
						if ($filter == tech) clearFilter();
						else setFilter(tech);
					}}
					class={`group flex cursor-pointer items-center rounded-md transition-colors select-none ${$filter == name.replace(' ', '') ? 'bg-btn-hover' : 'text-font-light hover:text-font'}`}
				>
					<TechIcon {name} size="size-8" />
					<span class="px-2">{name}</span>
				</button>
			{/each}
			<button
				onclick={() => clearFilter()}
				class="flex h-8 cursor-pointer items-center justify-center rounded-md transition-colors select-none hover:bg-btn-hover"
			>
				Clear Filter
			</button>
		</div>
	{/if}
</div>
