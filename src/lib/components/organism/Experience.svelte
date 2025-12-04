<script lang="ts">
	import type { ExperienceTag } from '$lib/types/experienceTag';
	import ExpTag from '../molecule/ExpTag.svelte';

	const experience: ExperienceTag[] = [
		{
			name: {
				es: 'Suplencia Docente en Informática',
				en: 'Substitute Teacher in Computer Science'
			},
			company: {
				icon: undefined,
				name: 'Inst. Juan Ramón Jimenez, Garín',
				href: 'https://www.instagram.com/institutojuanramonjimenezgarin/'
			},
			date: 'Oct 2025 - Nov 2025',
			desc: [
				{ es: 'Material de estudio desarrollado para los alumnos: maldoprofe.vercel.app', en: '' },
				{ es: '- 1er año: Computación (Introducción a la Informática)', en: '' },
				{ es: '- 3er año: Informática (Prácticas con Excel)', en: '' },
				{ es: '- 4to año: NTICX (Conceptos de la Informática)', en: '' },
				{ es: '- 6to año: Informática (Introducción a la Programación)', en: '' }
			]
		}
	];
</script>

<section id="about" class="flex w-full flex-col gap-4 rounded-2xl border border-main-sm p-4 lg:p-6">
	<h2>Experience</h2>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(340px,1fr))]">
		{#each experience as exp (exp.name)}
			<ExpTag {...exp} />
		{/each}
	</div>
</section>
