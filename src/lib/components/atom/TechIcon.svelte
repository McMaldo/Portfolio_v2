<script lang="ts">
	import { theme } from '$lib/stores/theme';

	let {
		name,
		className = '',
		size = 'size-11'
	} = $props<{
		name: string;
		className?: string;
		size?: string;
	}>();

	name = name.replace(' ', '');

	const color = (name: string) => {
		if ($theme == 'dark') {
			switch (name) {
				case 'React':
				case 'Trello':
				case 'TypeScript':
				case 'Python':
				case 'CSS':
				case 'MaterialUI':
				case 'Antd':
					return 'group-hover:bg-[#102330]';
				case 'TailwindCSS':
					return 'group-hover:bg-[#112625]';
				case 'Git':
				case 'Zen':
				case 'HTML':
				case 'Svelte':
					return 'group-hover:bg-[#3C261F]';
				case 'Figma':
				case 'PHP':
				case 'Vite':
					return 'group-hover:bg-[#2D1F3F]';
				default:
					return 'group-hover:bg-[#262430]';
			}
		} else {
			switch (name) {
				case 'React':
				case 'Trello':
				case 'TypeScript':
				case 'Python':
				case 'CSS':
				case 'MaterialUI':
				case 'Antd':
					return 'group-hover:bg-[#D5F0FF]';
				case 'TailwindCSS':
					return 'group-hover:bg-[#DAFBF7]';
				case 'Git':
				case 'Zen':
				case 'HTML':
				case 'Svelte':
					return 'group-hover:bg-[#FFE3DA]';
				case 'Figma':
				case 'PHP':
				case 'Vite':
					return 'group-hover:bg-[#F4E0FF]';
				default:
					return 'group-hover:bg-[#F4F2ED]';
			}
		}
	};
</script>

<svg
	class={`${name} inline-block ${size} rounded-lg bg-bg transition-colors select-none ${color(name)} ${className}`}
	aria-hidden="true"
>
	<use xlink:href={`/icon/techIcons.svg#${name}`}></use>
</svg>

<style>
	.Bash,
	.Github,
	.MySQL,
	.Notion,
	.ExpressJS,
	.Vercel {
		fill: var(--color-font);
	}
</style>
