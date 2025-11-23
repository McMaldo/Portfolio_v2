<script lang="ts">
	import FaIcon from './FaIcon.svelte';

	let {
		name = 'Link',
		href,
		className = ''
	} = $props<{
		name: string;
		href: string | null | undefined;
		className: string;
	}>();

	let isShowingMsg: boolean = $state(false);

	className = `flex h-10 items-center justify-center gap-1 border border-transparent bg-bg transition-colors select-none rounded-xl px-5 ${className}`;
</script>

{#if href}
	<a {href} class={className + ' cursor-pointer  hover:border-btn-border'}>
		{name}
		<FaIcon name="chevron-right" className="size-4" />
	</a>
{:else}
	<div
		class={className + ' relative cursor-not-allowed overflow-hidden  text-font-light'}
		onmouseenter={() => (isShowingMsg = true)}
		onmouseleave={() => (isShowingMsg = false)}
		aria-hidden="true"
	>
		<div
			class={`flex items-center gap-1 transition-transform ${isShowingMsg ? '-translate-y-10' : 'translate-y-0'} `}
		>
			{name}
			<FaIcon name="chevron-right" className="size-4" />
		</div>
		<div
			class={`w-fill absolute flex h-10 items-center gap-1 bg-bg transition-transform ${isShowingMsg ? 'translate-y-0' : 'translate-y-10'} `}
		>
			Coming Soon
		</div>
	</div>
{/if}
