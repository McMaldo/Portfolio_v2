<script lang="ts">
	import type { strMultiLang } from '$lib/types/strMultiLang';
	import { isEnglish } from '$lib/stores/language';
	import SkillsGroup from '../molecule/SkillsGroup.svelte';
	import Button from '../atom/Button.svelte';
	import SkillsTimeLine from '../molecule/SkillsTimeLine.svelte';

	let sectionOpened = $state('main');
	const skills: {
		catName: strMultiLang;
		skills: string[] | strMultiLang[];
	}[] = [
		{
			catName: { en: 'Front-end', es: 'Front-end' },
			skills: ['react', 'tailwind', 'ts', 'figma']
		},
		{
			catName: { en: 'Back-end', es: 'Back-end' },
			skills: ['express', 'php', 'python', 'mysql']
		},
		{
			catName: { en: 'General', es: 'General' },
			skills: ['git', 'vercel', 'notion', 'trello']
		},
		{
			catName: { en: 'Concepts', es: 'Conceptos' },
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
	class="flex w-full animate-slide-left flex-col gap-4 rounded-2xl border border-main-sm p-4 lg:p-6"
>
	<h2>{isEnglish ? 'Mis Habilidades' : 'My Skills'}</h2>
	<div
		class="absolute top-4 right-4 z-2 grid w-fit grid-cols-2 gap-2 rounded-xl border border-main-sm bg-bg p-2 shadow-lg shadow-bg"
	>
		<Button icon="star" size="sm" fn={() => (sectionOpened = 'main')} title="Main Tech Stack" />
		<Button
			icon="timeline"
			size="sm"
			fn={() => (sectionOpened = 'timeline')}
			title="Tech Timeline"
		/>
		<div
			class={`absolute bottom-0 left-0 h-1 w-1/2 px-4 transition-transform ${sectionOpened == 'timeline' ? 'translate-x-full' : ''}`}
		>
			<div class="w-fill h-1 rounded-t-full bg-main-sm"></div>
		</div>
	</div>

	{#if sectionOpened == 'main'}
		{#each skills as cat (cat.catName)}
			<SkillsGroup {...cat} />
		{/each}
	{:else}
		<SkillsTimeLine />
	{/if}
</section>
