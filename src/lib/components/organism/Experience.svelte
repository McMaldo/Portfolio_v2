<script lang="ts">
	import type { ExperienceTag } from '$lib/types/experienceTag';
	import ExpTag from '../molecule/ExpTag.svelte';
	import { lang } from '$lib/stores/language';

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
				{
					es: 'Material de estudio desarrollado para los alumnos: maldoprofe.vercel.app',
					en: 'Study material developed for students: maldoprofe.vercel.app'
				},
				{
					es: '- 1er año: Computación (Introducción a la Informática)',
					en: '- 1st year: Computing (Introduction to Computer Science)'
				},
				{
					es: '- 3er año: Informática (Prácticas con Excel)',
					en: '- 3rd year: Computer Science (Excel practice)'
				},
				{
					es: '- 4to año: NTICX (Conceptos de la Informática)',
					en: '- 4th year: ICT (Information Technology Concepts)'
				},
				{
					es: '- 6to año: Informática (Introducción a la Programación)',
					en: '- 6th year: Computer Science (Introduction to Programming)'
				}
			]
		}
	];
</script>

<section id="about" class="flex w-full flex-col gap-4 rounded-2xl border border-main-sm p-4 lg:p-6">
	<h2>{$lang == 'es' ? 'Experiencia' : 'Experience'}</h2>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(340px,1fr))]">
		{#each experience as exp (exp.name)}
			<ExpTag {...exp} />
		{/each}
	</div>
</section>
