<script lang="ts">
	import FaIcon from './FaIcon.svelte';
	let {
		icon,
		name,
		size = 'md',
		className = '',
		navigateTo
	} = $props<{
		icon?: string;
		name?: string;
		size?: string;
		className?: string;
		navigateTo?: string;
	}>();

	className +=
		size == 'md' && !name
			? 'rounded-xl aspect-square p-2.5'
			: size == 'sm' && !name
				? 'rounded-lg aspect-square p-2'
				: size == 'md'
					? 'rounded-xl px-5 py-2.5'
					: size == 'sm'
						? 'rounded-lg px-4 py-2'
						: '';
</script>

<button
	class={`bg-btn hover:bg-btn-hover flex cursor-pointer items-center justify-center gap-1 transition-colors select-none ${className}`}
	onclick={() =>
		navigateTo
			? document.querySelector('#' + navigateTo)?.scrollIntoView({ behavior: 'smooth' })
			: ''}
>
	{#if icon}
		<FaIcon name={icon} className={name ? 'size-4' : 'size-6'} />
	{/if}
	{name && name}
</button>
