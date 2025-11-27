<script>
	import Button from '../atom/Button.svelte';
	import ThemeSelector from '../molecule/ThemeSelector.svelte';

	const sections = [
		{ id: 'skills', name: 'My Skills' },
		{ id: 'projects', name: 'My Projects' },
		{ id: 'about', name: 'About Me' }
	];
</script>

<nav class="sticky top-4 z-9 flex justify-center sm:justify-between lg:top-6 xl:top-8">
	<section class="flex gap-2 rounded-2xl border border-main-sm bg-bg p-2 shadow-lg shadow-bg">
		{#each sections as { id, name } (id)}
			<Button
				{name}
				fn={() => document.querySelector('#' + id)?.scrollIntoView({ behavior: 'smooth' })}
			/>
		{/each}
	</section>
	<section
		class="fixed right-4 bottom-4 flex flex-col gap-2 rounded-2xl border border-main-sm bg-bg p-2 shadow-lg shadow-bg sm:static sm:flex-row"
	>
		<ThemeSelector />
		<Button icon="share" />
	</section>
</nav>
