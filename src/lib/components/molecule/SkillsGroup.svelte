<script lang="ts">
	import type { strMultiLang } from '$lib/types/strMultiLang';
	import SkillTag from './SkillTag.svelte';
	import SkillsSummary from '../atom/SkillsSummary.svelte';
	import { skillTagDictionary } from '$lib/utils/skillsList';
	import { isEnglish } from '$lib/stores/language';

	let { catName, skills } = $props<{
		catName: strMultiLang;
		skills: string[] | strMultiLang[];
	}>();
	let isOpened: boolean = catName.en !== 'Concepts' && catName.en !== 'Soft Skills';
</script>

<details class="flex flex-col gap-1" open={isOpened}>
	<SkillsSummary {catName} {isOpened} />
	{#if isOpened}
		<div class="grid grid-cols-[repeat(auto-fit,minmax(145px,1fr))] gap-4">
			{#each skills as skill (skill)}
				<SkillTag {...skillTagDictionary[skill]} />
			{/each}
		</div>
	{:else}
		<div class="flex flex-wrap gap-4">
			{#each skills as skill (skill.en)}
				<div
					class="rounded-xl border border-transparent bg-btn px-4 py-2 transition-colors select-none hover:border-btn-hover"
				>
					{isEnglish ? skill.en : skill.es}
				</div>
			{/each}
		</div>
	{/if}
</details>
