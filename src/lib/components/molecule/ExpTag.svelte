<script lang="ts">
	import type { ExperienceTag } from '$lib/types/experienceTag';
	import { isEnglish } from '$lib/stores/language';

	let { name, company, date, desc }: ExperienceTag = $props();
</script>

<article
	class="exp-tag group relative z-10 grid grid-cols-[2.5rem_auto] gap-x-2.5 [grid-template-areas:'icon_comp''icon_name''void_desc']"
>
	<div class="grid place-items-center [grid-area:icon]">
		<div
			class={'relative z-10 aspect-square size-6 rounded-full border-3 border-main-sm transition-colors duration-300 ' +
				(date.includes('Present') ? 'bg-main-sm' : 'bg-bg')}
		></div>
	</div>
	<div class="overflow-hidden text-2xl text-nowrap text-ellipsis capitalize [grid-area:name]">
		{$isEnglish ? name.en : name.es}
	</div>
	<div
		class="flex h-5 gap-1 overflow-hidden text-sm text-nowrap text-ellipsis text-font-light [grid-area:comp]"
	>
		<a href={company.href} class="w-fit hover:underline">{company.name}</a><span> • {date}</span>
	</div>
	<div class="pt-4 indent-4 text-sm text-font-light [grid-area:desc]">
		{#each desc as paragraph, index (index)}
			<p>{$isEnglish ? paragraph.en : paragraph.es}</p>
		{/each}
	</div>
</article>
