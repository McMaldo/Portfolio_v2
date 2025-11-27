<script lang="ts">
	import { filteredProjects } from '../../stores/projectsFilter.ts';
	import ProjectCard from '../molecule/ProjectCard.svelte';
	import ProjectsFilter from '../molecule/ProjectsFilter.svelte';
</script>

<section
	id="projects"
	class="relative flex w-full flex-col gap-4 rounded-2xl border border-main-sm p-4 lg:p-6"
>
	<h2>My Projects</h2>
	<ProjectsFilter />
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(340px,1fr))]">
		{#each $filteredProjects as project (project.name)}
			<ProjectCard {...project} />
		{/each}
	</div>
</section>
