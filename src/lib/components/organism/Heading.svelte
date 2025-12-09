<script lang="ts">
	import Button from '../atom/Button.svelte';
	import { lang } from '$lib/stores/language';

	let isCvPreviewOpened: boolean = $state(false);
</script>

<section
	class="relative flex h-75 w-full flex-col items-center justify-center gap-2 rounded-2xl border border-main-sm p-4 lg:p-6"
>
	<div class="absolute size-full overflow-hidden rounded-2xl">
		<svg class="size-full" aria-hidden="true">
			<use href="/img/wave.svg#headingWave"></use>
		</svg>
	</div>
	<h1 class="z-2 text-center text-5xl lg:text-6xl">
		{$lang == 'es' ? 'Desarrollador Web' : 'Web Developer'}
	</h1>
	<div class="z-2 flex gap-4">
		<a
			href="/docs/cv.pdf"
			target="_blank"
			class="relative flex"
			onmouseenter={() => (isCvPreviewOpened = true)}
			onmouseleave={() => (isCvPreviewOpened = false)}
		>
			<Button
				name={$lang == 'es' ? 'Descargar CV' : 'Download CV'}
				icon="download"
				className="border border-main-sm"
			/>
			{#if isCvPreviewOpened}
				<img
					src="/img/preview/cv.webp"
					alt=""
					class="animate-appear absolute top-[calc(100%+1rem)] right-0 aspect-11/16 w-full rounded-lg border border-main-sm object-cover object-center shadow-md shadow-bg"
				/>
			{/if}
		</a>
		<a href="mailto:maldonado.ignacio.pablo@gmail.com">
			<Button
				name={$lang == 'es' ? 'Contactame' : 'Get in Touch'}
				icon="envelope"
				className="border border-main-sm"
			/>
		</a>
	</div>
</section>
