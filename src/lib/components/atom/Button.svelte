<script lang="ts">
	import FaIcon from './FaIcon.svelte';
	let {
		icon,
		name,
		size = 'md',
		className = '',
		fn
	} = $props<{
		icon?: string;
		name?: string;
		size?: string;
		className?: string;
		fn?: () => void | boolean | string;
	}>();

	className +=
		size == 'md' && !name
			? ' rounded-xl aspect-square p-2.5'
			: size == 'sm' && !name
				? ' rounded-lg aspect-square p-2'
				: size == 'md'
					? ' rounded-xl px-5 py-2.5'
					: size == 'sm'
						? ' rounded-lg px-4 py-2'
						: '';
</script>

<button
	class={`flex cursor-pointer items-center justify-center gap-1 bg-btn text-nowrap transition-colors select-none hover:bg-btn-hover ${className}`}
	onclick={fn}
>
	{#if icon}
		<FaIcon name={icon} className={name ? 'size-4' : 'size-6'} />
	{/if}
	{name && name}
</button>
