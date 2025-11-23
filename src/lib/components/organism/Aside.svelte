<script>
	import Contacts from '../molecule/Contacts.svelte';
	import GeneralInfo from '../molecule/GeneralInfo.svelte';
</script>

<aside class="sticky top-6 flex h-full w-1/3 flex-col gap-6 xl:top-8 xl:gap-8">
	<section class="flex flex-col gap-4 rounded-2xl border border-main-md p-6 text-center">
		<div class="aspect-square w-full rounded-xl bg-btn"></div>
		<h2 class="text-3xl">McMaldo</h2>
		<div class="rounded-xl bg-btn p-1.5">Web Developer</div>
		<div class="grid grid-cols-2 gap-4">
			<div class="rounded-xl bg-btn p-1.5">Español</div>
			<div class="rounded-xl bg-btn p-1.5">English</div>
		</div>
	</section>
	<GeneralInfo />
	<Contacts />
</aside>
