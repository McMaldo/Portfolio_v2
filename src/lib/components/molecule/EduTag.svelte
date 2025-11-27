<script lang="ts">
	import type { EducationTag } from '$lib/types/educationTag';

	let {
		title = 'Titulo',
		logo = 'uba',
		comp = { name: 'Institute', href: '' }
	} = $props<EducationTag>();
</script>

<article
	class="group grid cursor-pointer grid-cols-[2.5rem_auto] gap-x-2.5 rounded-xl border border-transparent bg-btn p-2.5 transition-colors [grid-template-areas:'logo_comp''logo_title'] hover:border-btn-hover"
>
	<svg class="size-11 rounded-lg select-none [grid-area:logo]" aria-hidden="true">
		<use xlink:href={`/icon/eduIcons.svg#${logo}`}></use>
	</svg>
	<a
		href={comp.href}
		class="h-5 w-full overflow-hidden text-sm text-nowrap text-ellipsis text-font-light [grid-area:comp]"
	>
		{comp.name}
	</a>
	<div class="h-6 overflow-hidden text-nowrap text-ellipsis capitalize [grid-area:title]">
		{title}
	</div>
</article>
