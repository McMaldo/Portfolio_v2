<script>
	import { asset } from '$app/paths';
	import { theme } from '$lib/stores/theme'; // Ajusta la ruta a tu store
	import Contacts from '../molecule/Contacts.svelte';
	import GeneralInfo from '../molecule/GeneralInfo.svelte';

	// Temas que consideramos oscuros
	const darkThemes = ['dark', 'mocha'];
</script>

<aside
	class="sticky grid h-full w-full grid-cols-[auto_6rem] gap-4 [grid-template-areas:'top_contacts'] sm:grid-cols-2 sm:[grid-template-areas:'top_general''top_contacts'] lg:top-6 lg:w-1/3 lg:grid-cols-1 lg:gap-6 lg:[grid-template-areas:'top''general''contacts'] xl:top-8 xl:gap-8"
>
	<section
		class="flex animate-slide-right flex-col gap-4 rounded-2xl border border-main-sm p-4 text-center [grid-area:top] lg:p-6"
	>
		<div class="grid aspect-square w-full overflow-hidden rounded-xl bg-btn p-4">
			{#if !darkThemes.includes($theme)}
				<img
					src={asset('/img/avatar-light.jpg')}
					alt="Avatar Light"
					class="size-full animate-slide-right rounded-lg object-cover object-center"
				/>
			{:else}
				<img
					src={asset('/img/avatar-dark.webp')}
					alt="Avatar Dark"
					class="size-full animate-slide-left rounded-lg object-cover object-center"
				/>
			{/if}
		</div>
		<h2 class="text-sm md:text-3xl">McMaldo</h2>
		<div class="hidden rounded-xl bg-btn p-1.5 lg:block">Web Developer</div>
	</section>
	<GeneralInfo />
	<Contacts />
</aside>
