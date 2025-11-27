<script lang="ts">
	import type { strMultiLang } from '$lib/types/strMultiLang';
	import type { skillTag } from '$lib/types/skillTag';
	import SkillsGroup from '../molecule/SkillsGroup.svelte';
	const skills: {
		catName: strMultiLang;
		skills: skillTag[] | strMultiLang[];
	}[] = [
		{
			catName: { en: 'Front-end', es: 'Front-end y Diseño' },
			skills: [
				{ name: 'React', desc: 'JS Library', isStarred: true },
				{ name: 'Tailwind CSS', desc: 'CSS Library', isStarred: true },
				{ name: 'Type Script', desc: 'JS Superset' },
				{ name: 'Figma', desc: 'Design Tool' }
			]
		},
		{
			catName: { en: 'Back-end', es: 'Back-end y Bases de Datos' },
			skills: [
				{ name: 'Express JS', desc: 'Node JS Library' },
				{ name: 'PHP', desc: 'Programming Lang.' },
				{ name: 'Python', desc: 'Programming Lang.' },
				{ name: 'MySQL', desc: 'RDBMS' }
			]
		},
		{
			catName: { en: 'General', es: 'Herramientas de Programación' },
			skills: [
				{ name: 'Git', desc: 'Version Control' },
				{ name: 'Vercel', desc: 'Web Deployment' },
				{ name: 'Notion', desc: 'Organization & Notes' },
				{ name: 'Trello', desc: 'Organization' }
			]
		},
		{
			catName: { en: 'Concepts', es: 'Conceptos de Programación' },
			skills: [
				{ en: 'SCRUM', es: 'SCRUM' },
				{ en: 'OOP', es: 'POO' },
				{ en: 'DOM', es: 'DOM' },
				{ en: 'React Custom Hooks', es: 'React Hooks Personalizados' },
				{ en: 'MVC Architecture', es: 'Arquitectura MVC' },
				{ en: 'Client-server Architecture', es: 'Arquitectura Cliente-Servidor' },
				{ en: 'Responsive Design', es: 'Diseño Responsive' },
				{ en: 'Design Systems w/Figma', es: 'Sistemas de Diseño c/Figma' },
				{ en: 'Atom Design', es: 'Diseño Atómico' }
			]
		},
		{
			catName: { en: 'Soft Skills', es: 'Habilidades Blandas' },
			skills: [
				{ en: 'Continuous learning mindset', es: 'Mentalidad de aprendizaje continuo' },
				{ en: 'Self-motivation', es: 'Auto-motivación' },
				{ en: 'Creativity', es: 'Creatividad' },
				{ en: 'Patience and perseverance', es: 'Paciencia y perseverancia' },
				{ en: 'Effective communication', es: 'Comunicación efectiva' },
				{ en: 'Active listening', es: 'Escucha activa' },
				{ en: 'Curiosity', es: 'Curiosidad' },
				{ en: 'Collaboration', es: 'Colaboración' },
				{ en: 'Empathy', es: 'Empatía' }
			]
		}
	];
</script>

<section
	id="skills"
	class="flex w-full flex-col gap-4 rounded-2xl border border-main-sm p-4 lg:p-6"
>
	<h2>My Skills</h2>
	{#each skills as cat (cat.catName)}
		<SkillsGroup {...cat} />
	{/each}
</section>
