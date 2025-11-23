<script lang="ts">
	import type { skillTag } from '$lib/types/skillTag';
	import FaIcon from '../atom/FaIcon.svelte';
	import Icon from '../atom/TechIcon.svelte';

	let { name = 'Svelte', desc = 'JS Framework', isStarred }: skillTag = $props();
</script>

<article
	class="group relative grid grid-cols-[2.5rem_auto] gap-x-2.5 rounded-xl border border-transparent bg-btn p-2.5 transition-colors [grid-template-areas:'icon_name''icon_desc'] hover:border-btn-hover"
>
	<Icon className="[grid-area:icon]" name={name.replace(' ', '')} />
	<div class="h-6 overflow-hidden text-nowrap text-ellipsis capitalize [grid-area:name]">
		{name}
	</div>
	<div
		class="h-5 w-full overflow-hidden text-sm text-nowrap text-ellipsis text-font-light [grid-area:desc]"
	>
		{desc}
	</div>
	{#if isStarred}
		<FaIcon name="star" className="size-6 absolute top-2.5 right-2.5" />
	{/if}
</article>
