<script lang="ts">
	import { skillKeys, skillTagDictionary } from '$lib/utils/skillsList';
	import type { skillTag } from '$lib/types/skillTag';
	import SkillTag from './SkillTag.svelte';
	import Button from '../atom/Button.svelte';
	import { onMount } from 'svelte';

	let groupedTimeline = $derived.by(() => {
		const groups: Record<string, skillTag[]> = {};
		for (const key of skillKeys) {
			const skill = skillTagDictionary[key];
			if (skill?.date) {
				if (!groups[skill.date]) groups[skill.date] = [];
				groups[skill.date].push(skill);
			}
		}
		return Object.entries(groups).sort(([dateA], [dateB]) => {
			const [dA, mA, yA] = dateA.split('/').map(Number);
			const [dB, mB, yB] = dateB.split('/').map(Number);
			return new Date(yA, mA - 1, dA).getTime() - new Date(yB, mB - 1, dB).getTime();
		});
	});

	let scrollContainer: HTMLDivElement;
	let canScrollLeft = $state(false);
	let canScrollRight = $state(false);

	function updateScrollState() {
		if (!scrollContainer) return;
		canScrollLeft = scrollContainer.scrollLeft > 0;
		canScrollRight =
			scrollContainer.scrollLeft + scrollContainer.clientWidth < scrollContainer.scrollWidth - 1;
	}

	function scroll(direction: 'left' | 'right') {
		if (!scrollContainer) return;
		const amount = scrollContainer.clientWidth * 0.7;
		scrollContainer.scrollBy({
			left: direction === 'left' ? -amount : amount,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		updateScrollState();
		const resizeObserver = new ResizeObserver(updateScrollState);
		resizeObserver.observe(scrollContainer);
		return () => resizeObserver.disconnect();
	});
</script>

<div class="relative w-full overflow-hidden">
	<div
		class={`absolute top-0 left-0 z-10 flex h-full flex-col justify-center bg-linear-270 from-transparent to-bg transition-colors ${canScrollLeft ? 'animate-fade-in' : 'pointer-events-none animate-fade-out'}`}
		aria-label="Scroll left"
	>
		<Button icon="chevron-left" fn={() => scroll('left')} />
	</div>
	<div
		class={`absolute top-0 right-0 z-10 flex h-full flex-col justify-center bg-linear-90 from-transparent to-bg transition-colors ${canScrollRight ? 'animate-fade-in' : 'pointer-events-none animate-fade-out'}`}
		aria-label="Scroll right"
	>
		<Button icon="chevron-right" fn={() => scroll('right')} />
	</div>

	<div
		bind:this={scrollContainer}
		onscroll={updateScrollState}
		class="scrollbar-hide overflow-x-scroll scroll-smooth"
	>
		<div class="inline-flex items-start gap-8 px-4 pt-6">
			<div class="absolute top-9 h-0.5 w-full bg-main-sm" aria-hidden="true"></div>
			{#each groupedTimeline as [date, skills] (date)}
				<div class="relative grid shrink-0 grid-cols-1 gap-4">
					<div class="z-9 size-6 rounded-full border-2 border-main-sm bg-bg"></div>
					<time class="text-sm font-semibold text-font-light">{date}</time>
					<ul class="grid w-full grid-cols-1 gap-4">
						{#each skills as skill (skill.name)}
							<SkillTag {...skill} />
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</div>
