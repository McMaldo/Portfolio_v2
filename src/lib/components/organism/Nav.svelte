<script>
	import Button from '../atom/Button.svelte';
	import ThemeSelector from '../molecule/ThemeSelector.svelte';
	import { onMount } from 'svelte';

	const sections = [
		{ id: 'skills', name: 'My Skills' },
		{ id: 'projects', name: 'My Projects' },
		{ id: 'about', name: 'About Me' }
	];

	let activeSection = $state('');

	onMount(() => {
		const observerOptions = {
			root: null,
			rootMargin: '-50% 0px -50% 0px',
			threshold: 0
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					activeSection = entry.target.id;
				}
			});
		}, observerOptions);

		sections.forEach((section) => {
			const element = document.getElementById(section.id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	});
</script>

<nav class="sticky top-4 z-9 flex justify-center sm:justify-between lg:top-6 xl:top-8">
	<section
		class="z-1 rounded-2xl border border-main-sm bg-bg px-2 shadow-lg shadow-bg transition-colors"
	>
		<div class="relative grid grid-cols-3 gap-2 py-2">
			{#each sections as { id, name } (id)}
				<Button
					{name}
					fn={() => document.querySelector('#' + id)?.scrollIntoView({ behavior: 'smooth' })}
				/>
			{/each}
			<div
				class={`absolute bottom-0 left-0 h-1 w-1/3 px-4 transition-transform ${activeSection == 'projects' ? 'translate-x-full' : activeSection == 'about' ? 'translate-x-2/1' : ''}`}
			>
				<div class="w-fill h-1 rounded-t-full bg-main-sm"></div>
			</div>
		</div>
	</section>
	<section
		class="fixed right-4 bottom-4 z-1 flex flex-col gap-2 rounded-2xl border border-main-sm bg-bg p-2 shadow-lg shadow-bg transition-colors sm:static sm:flex-row"
	>
		<ThemeSelector />
		<Button icon="share" />
	</section>
	<div
		class="absolute bottom-0 z-0 h-[calc(100%+1rem)] w-full bg-linear-0 from-transparent to-bg transition-colors lg:h-[calc(100%+1.5rem)] xl:h-[calc(100%+2rem)]"
	></div>
</nav>
