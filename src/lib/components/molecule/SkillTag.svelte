<script lang="ts">
	import type { skillTag } from '$lib/types/skillTag';
	import { skillTagDictionary, type skillKey } from '$lib/utils/skillsList';
	import FaIcon from '../atom/FaIcon.svelte';
	import TechIcon from '../atom/TechIcon.svelte';

	let { skill = 'svelte' }: { skill: skillKey } = $props();
	let { name, desc, isStarred }: skillTag = skillTagDictionary[skill];
</script>

<article
	class="skill-tag group relative grid grid-cols-[2.5rem_auto] gap-x-2.5 rounded-xl border border-transparent bg-btn p-2.5 transition-colors [grid-template-areas:'icon_name''icon_desc'] hover:border-btn-hover"
>
	<TechIcon className="[grid-area:icon]" name={skill} />
	<div class="h-6 overflow-hidden text-nowrap text-ellipsis capitalize [grid-area:name]">
		{name}
	</div>
	<div
		class="h-5 w-full overflow-hidden text-sm text-nowrap text-ellipsis text-font-light [grid-area:desc]"
	>
		{desc}
	</div>
	{#if isStarred}
		<div class="absolute top-2.5 right-2.5 hidden md:block">
			<FaIcon name="star" className="size-6" />
		</div>
	{/if}
</article>
