<script lang="ts">
	import Button from '../atom/Button.svelte';
	import { isEnglish } from '$lib/stores/language';
</script>

<section
	class="relative z-2 flex h-75 w-full animate-slide-left flex-col items-center justify-center gap-2 rounded-2xl border border-main-sm p-4 lg:p-6"
>
	<div class="absolute size-full overflow-hidden rounded-2xl">
		<svg class="size-full" aria-hidden="true">
			<use href="/img/wave.svg#headingWave"></use>
		</svg>
	</div>
	<h1 class="z-4 text-center text-5xl lg:text-6xl">
		{$isEnglish ? 'Web Developer' : 'Desarrollador Web'}
	</h1>
	<div class="z-4 flex gap-4">
		<a href="/docs/cv.pdf" target="_blank" class="group relative inline-flex">
			<Button
				name={$isEnglish ? 'Download CV' : 'Descargar CV'}
				icon="download"
				className="border border-main-sm"
			/>
			<img
				src="/img/preview/cv.webp"
				alt=""
				class="pointer-events-none absolute top-[calc(100%+0.5rem)] right-0 aspect-11/16 w-48 rounded-lg border border-main-sm object-cover object-center opacity-0 shadow-md shadow-bg transition-all duration-200 group-hover:pointer-events-auto group-hover:animate-slide-down group-hover:opacity-100"
			/>
		</a>
		<a href="mailto:maldonado.ignacio.pablo@gmail.com">
			<Button
				name={$isEnglish ? 'Get in Touch' : 'Contactame'}
				icon="envelope"
				className="border border-main-sm"
			/>
		</a>
	</div>
</section>
