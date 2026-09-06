<script lang="ts">
	import type { ExperienceTag } from '$lib/types/experienceTag';
	import ExpTag from '../molecule/ExpTag.svelte';
	import { isEnglish } from '$lib/stores/language';

	const experience: ExperienceTag[] = [
		{
			name: {
				es: 'Profesor de Taller de Informática',
				en: 'IT Workshop Teacher'
			},
			company: {
				icon: undefined,
				name: 'Inst. Juan Ramón Jimenez, Garín',
				href: 'https://www.instagram.com/institutojuanramonjimenezgarin/'
			},
			date: 'Apr 2026 - Present',
			desc: [
				{
					es: 'Material de estudio desarrollado para los alumnos: maldoprofe.vercel.app',
					en: 'Study material developed for students: maldoprofe.vercel.app'
				},
				{
					es: '- 1er año: Computación (Introducción a la Informática)',
					en: '- 1st year: Computing (Intro to Computer Science)'
				},
				{
					es: '- 2do año: Computación (Introducción a la Informática)',
					en: '- 2nd year: Computing (Intro to Computer Science)'
				},
				{
					es: '- 3er año: Informática (Prácticas con Excel)',
					en: '- 3rd year: IT (Hands-on Excel / Excel Exercises)'
				},
				{
					es: '- 4to año: Informática (Prácticas con PowerPoint)',
					en: '- 4th year: IT (Hands-on PowerPoint / PowerPoint Exercises)'
				},
				{
					es: '- 5to año: Informática (Prácticas con PowerPoint)',
					en: '- 5th year: IT (Hands-on PowerPoint / PowerPoint Exercises)'
				},
				{
					es: '- 6to año: Informática (Introducción a la Programación)',
					en: '- 6th year: Computer Science (Intro to Programming)'
				}
			]
		},
		{
			name: {
				es: 'Proyecto Freelance: Web App en React.TS',
				en: 'Freelance React & TypeScript Web Developer'
			},
			company: {
				icon: undefined,
				name: 'Startec Argentina SRL',
				href: 'href: https://startec.com.ar/'
			},
			date: 'Dec 2025 - Present',
			desc: [
				{
					es: 'Tecnologias implementadas: React, TypeScript, React-Router-Dom, Express y MySQL',
					en: 'Tech stack: React, TypeScript, React Router, Express, and MySQL'
				},
				{
					es: 'Desarrollo de una aplicación web full-stack orientada a la gestión y control de procesos industriales.',
					en: 'Developed a full-stack web application focused on industrial management and operational workflows.'
				},
				{
					es: 'Trabajo en equipo junto a @AgustínPupich (Back-end Dev) para la planificación y entrega del proyecto.',
					en: 'Collaborated in a team alongside @AgustínPupich (Back-end Dev) for project planning and feature delivery.'
				},
				{
					es: 'Diseño de REST APIs eficientes en Express y MySQL para la gestión, trazabilidad y persistencia de datos del entorno industrial.',
					en: 'Designed efficient REST APIs with Express and MySQL for real-time data tracking and management.'
				},
				{
					es: 'Desarrollo de interfaces de usuario interactivas, responsivas y fuertemente tipadas utilizando React y TypeScript.',
					en: 'Built responsive, strongly-typed, and interactive user interfaces using React and TypeScript.'
				}
			]
		},
		{
			name: {
				es: 'Suplencia Docente en Informática',
				en: 'Substitute IT Teacher'
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
					en: '- 4th year: ITC (Information Technology Concepts)'
				},
				{
					es: '- 6to año: Informática (Introducción a la Programación)',
					en: '- 6th year: Computer Science (Introduction to Programming)'
				}
			]
		}
	];
</script>

<section
	id="about"
	class="flex w-full animate-slide-left flex-col gap-4 rounded-2xl border border-main-sm p-4 lg:p-6"
>
	<h2>{$isEnglish ? 'Experience' : 'Experiencia'}</h2>
	<div class="relative flex flex-col gap-8 py-1">
		<div
			class="absolute top-6 bottom-1 left-5 z-0 -translate-x-1/2 border-2 border-main-sm"
			aria-hidden="true"
		></div>
		{#each experience as exp (exp.name)}
			<ExpTag {...exp} />
		{/each}
	</div>
</section>
