<script lang="ts">
	import { filteredProjects } from '../../utils/projectsFilter.ts';
	import ProjectCard from '../molecule/ProjectCard.svelte';
	import ProjectsFilter from '../molecule/ProjectsFilter.svelte';
</script>

<section class="relative flex w-full flex-col gap-4 rounded-2xl border border-main-sm p-6">
	<h2>My Projects</h2>
	<ProjectsFilter />
	<div class="grid grid-cols-2 gap-4">
		{#each $filteredProjects as project (project.name)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
