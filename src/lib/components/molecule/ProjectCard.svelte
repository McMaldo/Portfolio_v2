<script lang="ts">
	import type { ProjectCard } from '$lib/types/projectCard';
	import FaIcon from '../atom/FaIcon.svelte';
	import IconButton from '../atom/IconButton.svelte';
	import Link from '../atom/Link.svelte';
	import TechIcon from '../atom/TechIcon.svelte';

	let project = $props<ProjectCard>();
</script>

<article
	class="grid grid-cols-[auto_min-content] gap-2.5 rounded-xl border border-transparent bg-btn p-2.5 transition-colors [grid-template-areas:'main_tech''link_link'] hover:border-btn-hover"
>
	<div class="flex flex-col gap-2.5 [grid-area:main]">
		{#if project.img}
			<img
				src={`/img/project/${project.img}.webp`}
				alt=""
				class="w-fill aspect-video rounded-lg bg-bg"
			/>
		{:else}
			<div class="w-fill grid aspect-video place-items-center rounded-lg bg-bg">
				<FaIcon name="image" />
			</div>
		{/if}
		<h3 class="text-2xl">{project.name}</h3>
		<p class="indent-4 text-font-light">{project.desc.en}</p>
	</div>
	<div class="flex flex-col gap-2.5 [grid-area:tech]">
		{#each project.techs as tech (tech)}
			<div class="group" title={tech}>
				<TechIcon name={tech} />
			</div>
		{/each}
	</div>
	<div class="w-fill flex items-end gap-2.5 [grid-area:link]">
		{#each project.links as { name, href } (name)}
			<IconButton {href} icon={name} size="sm" dark={true} />
		{/each}
		<Link href={project.demo} name="Go to Demo" className="flex-1" />
	</div>
</article>
