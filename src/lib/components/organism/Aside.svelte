<script>
	import Contacts from '../molecule/Contacts.svelte';
	import GeneralInfo from '../molecule/GeneralInfo.svelte';
</script>

<aside
	class="sticky grid h-full w-full grid-cols-[auto_6rem] gap-4 [grid-template-areas:'top_contacts'] sm:grid-cols-2 sm:[grid-template-areas:'top_general''top_contacts'] lg:top-6 lg:w-1/3 lg:grid-cols-1 lg:gap-6 lg:[grid-template-areas:'top''general''contacts'] xl:top-8 xl:gap-8"
>
	<section
		class="flex flex-col gap-4 rounded-2xl border border-main-sm p-4 text-center [grid-area:top] lg:p-6"
	>
		<div class="aspect-square w-full rounded-xl bg-btn"></div>
		<h2 class="text-sm md:text-3xl">McMaldo</h2>
		<div class="hidden rounded-xl bg-btn p-1.5 lg:block">Web Developer</div>
		<div class="hidden grid-cols-2 gap-4 lg:grid">
			<div class="rounded-xl bg-btn p-1.5">Español</div>
			<div class="rounded-xl bg-btn p-1.5">English</div>
		</div>
	</section>
	<GeneralInfo />
	<Contacts />
</aside>
