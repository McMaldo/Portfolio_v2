<script>
	import Button from '../atom/Button.svelte';
	import ThemeSelector from '../molecule/ThemeSelector.svelte';

	const sections = [
		{ id: 'skills', name: 'My Skills' },
		{ id: 'projects', name: 'My Projects' },
		{ id: 'about', name: 'About Me' }
	];
</script>

<nav class="sticky top-6 z-9 flex justify-between xl:top-8">
	<section class="flex gap-2 rounded-2xl border border-main-sm bg-bg p-2 shadow-lg shadow-bg">
		{#each sections as { id, name } (id)}
			<Button {name} navigateTo={id} />
		{/each}
	</section>
	<section class="flex gap-2 rounded-2xl border border-main-sm bg-bg p-2 shadow-lg shadow-bg">
		<ThemeSelector />
		<Button icon="share" />
	</section>
</nav>
