<script lang="ts">
	let { name = 'envelope', className = 'size-10' } = $props<{
		name: string;
		className?: string;
	}>();
	name = name.toLowerCase();
</script>

<svg class={`fa-icon ${className} inline-block select-none`} aria-hidden="true">
	<use xlink:href={`/icon/faIcons.svg#${name}`}></use>
</svg>
