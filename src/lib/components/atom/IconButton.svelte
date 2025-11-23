<script lang="ts">
	import FaIcon from './FaIcon.svelte';

	export let icon: string = 'envelope';
	export let href: string | null | undefined;

	export let size: string = 'md';
	export let dark: boolean = false;
	export let className: string = '';
	className += dark
		? ' bg-bg border border-transparent hover:border-btn-border'
		: ' bg-btn group-hover:bg-btn-hover hover:bg-btn-hover';
</script>

{#if href}
	<a
		{href}
		target="_blank"
		class={`${className} grid ${size == 'sm' ? 'size-10' : size == 'md' ? 'size-14' : ''} aspect-square cursor-pointer place-items-center rounded-xl transition-colors`}
	>
		<FaIcon name={icon} className="size-2/3" />
	</a>
{:else}
	<div
		class={`${className}  ${size == 'sm' ? 'size-10' : size == 'md' ? 'size-14' : ''} grid aspect-square place-items-center rounded-xl`}
	>
		<FaIcon name={icon} />
	</div>
{/if}
