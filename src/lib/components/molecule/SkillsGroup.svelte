<script lang="ts">
	import type { strMultiLang } from '$lib/types/strMultiLang';
	import SkillTag from './SkillTag.svelte';
	import SkillsSummary from '../atom/SkillsSummary.svelte';
	import { type skillKey } from '$lib/utils/skillsList';
	import { isEnglish } from '$lib/stores/language';

	let { catName, skills } = $props<{
		catName: strMultiLang;
		skills: skillKey[] | strMultiLang[];
	}>();

	const isSkillKeyList = typeof skills[0] === 'string';

	let isOpened = $state(catName.en !== 'Concepts' && catName.en !== 'Soft Skills');

	// Animación de altura
	let contentEl: HTMLDivElement | undefined = $state();
	let contentHeight = $state(0);
	let hasMeasured = $state(false);

	$effect(() => {
		if (!contentEl) return;

		const resizeObserver = new ResizeObserver((entries) => {
			contentHeight = entries[0].contentRect.height;
			hasMeasured = true;
		});
		resizeObserver.observe(contentEl);

		return () => resizeObserver.disconnect();
	});

	let displayHeight = $derived(
		!hasMeasured ? (isOpened ? 'auto' : '0px') : `${isOpened ? contentHeight : 0}px`
	);
</script>

<details class="flex flex-col gap-1" open>
	<SkillsSummary {catName} {isOpened} onToggle={() => (isOpened = !isOpened)} />
	<div
		class="overflow-hidden {hasMeasured ? 'transition-[height] duration-300 ease-in-out' : ''}"
		style="height: {displayHeight}"
	>
		<div bind:this={contentEl}>
			{#if isSkillKeyList}
				<div class="grid grid-cols-[repeat(auto-fit,minmax(145px,1fr))] gap-4">
					{#each skills as skill (skill)}
						<SkillTag {skill} />
					{/each}
				</div>
			{:else}
				<div class="flex flex-wrap gap-4">
					{#each skills as skill (skill.en)}
						<div
							class="rounded-xl border border-transparent bg-btn px-4 py-2 transition-colors select-none hover:border-btn-hover"
						>
							{$isEnglish ? skill.en : skill.es}
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</details>
