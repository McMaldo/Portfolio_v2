<script lang="ts">
	import type { strMultiLang } from '$lib/types/strMultiLang';
	import type { skillTag } from '$lib/types/skillTag';
	import SkillTag from './SkillTag.svelte';
	import SkillsSummary from '../atom/SkillsSummary.svelte';

	let {
		isTranslatedToEnglish = true,
		catName,
		skills
	} = $props<{
		isTranslatedToEnglish?: boolean;
		catName: strMultiLang;
		skills: skillTag[] | strMultiLang[];
	}>();
	let isOpened: boolean = catName.en !== 'Concepts' && catName.en !== 'Soft Skills';
</script>

<details class="flex flex-col gap-1" open={isOpened}>
	<SkillsSummary {catName} {isOpened} />
	{#if catName.en === 'Concepts' || catName.en === 'Soft Skills'}
		<div class="flex flex-wrap gap-4">
			{#each skills as skill (skill.en)}
				<div
					class="rounded-xl border border-transparent bg-btn px-4 py-2 transition-colors select-none hover:border-btn-hover"
				>
					{isTranslatedToEnglish ? skill.en : skill.es}
				</div>
			{/each}
		</div>
	{:else}
		<div class="grid grid-cols-4 gap-4">
			{#each skills as skill (skill.name)}
				<SkillTag {...skill} />
			{/each}
		</div>
	{/if}
</details>
