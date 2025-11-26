<script lang="ts">
	import FaIcon from './FaIcon.svelte';

	let {
		icon = 'envelope',
		href,
		size = 'md',
		dark = false,
		className = ''
	} = $props<{
		icon: string;
		href?: string;
		size?: string;
		dark?: boolean;
		className?: string;
	}>();

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
