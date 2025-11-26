<script>
	import About from '$lib/components/organism/About.svelte';
	import Aside from '$lib/components/organism/Aside.svelte';
	import Footer from '$lib/components/organism/Footer.svelte';
	import Heading from '$lib/components/organism/Heading.svelte';
	import Nav from '$lib/components/organism/Nav.svelte';
	import Projects from '$lib/components/organism/Projects.svelte';
	import Skills from '$lib/components/organism/Skills.svelte';
</script>

<main class="relative flex size-full flex-col gap-4 lg:gap-6 xl:gap-8">
	<Nav />
	<Heading />
	<Skills />
	<Projects />
	<About />
	<Footer />
</main>
<Aside />
