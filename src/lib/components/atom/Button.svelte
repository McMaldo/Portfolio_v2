<script lang="ts">
	import FaIcon from './FaIcon.svelte';
	let {
		icon,
		name = 'Button',
		size = 'md',
		className = ''
	} = $props<{
		icon?: string;
		name: string;
		size?: string;
		className?: string;
	}>();
</script>

<button
	class={`flex cursor-pointer items-center gap-1 bg-btn transition-colors select-none hover:bg-btn-hover ${className}
		${size == 'md' ? 'rounded-xl px-5 py-2.5' : size == 'sm' ? 'rounded-lg px-4 py-2' : ''}`}
>
	{#if icon}
		<FaIcon name={icon} className="size-4" />
	{/if}
	{name}
</button>
