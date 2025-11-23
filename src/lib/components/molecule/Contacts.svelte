<script>
	import IconButton from '../atom/IconButton.svelte';
	const contacts = [
		{ icon: 'github', href: 'https://github.com/McMaldo' },
		{ icon: 'linkedin', href: 'https://www.linkedin.com/in/pablo-ignacio-maldonado' },
		{ icon: 'devto', href: 'https://dev.to/mcmaldo' },
		{ icon: 'gitlab', href: 'https://gitlab.com/maldonado.ignacio.pablo' }
	];
</script>

<section class="grid grid-cols-4 gap-4 rounded-2xl border border-main-md p-6">
	{#each contacts as { icon, href } (icon)}
		<IconButton {icon} {href} size="auto" />
	{/each}
</section>
