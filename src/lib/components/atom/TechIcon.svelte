<script lang="ts">
	import { colorScheme } from '$lib/stores/theme';
	import type { skillKey } from '$lib/utils/skillsList';

	let {
		name,
		className = '',
		size = 'size-11'
	} = $props<{
		name: skillKey;
		className?: string;
		size?: string;
	}>();

	const bgByScheme = (bgDark: string, bgLight: string) =>
		$colorScheme == 'dark' ? bgDark : bgLight;
	const color = (name: skillKey) => {
		switch (name) {
			case 'react':
			case 'trello':
			case 'ts':
			case 'vscode':
			case 'python':
			case 'css':
			case 'mui':
			case 'antd':
			case 'arch':
			case 'hyprland':
				return bgByScheme('group-hover:bg-[#102330]', 'group-hover:bg-[#D5F0FF]');
			case 'tailwind':
				return bgByScheme('group-hover:bg-[#112625]', 'group-hover:bg-[#DAFBF7]');
			case 'git':
			case 'zen':
			case 'html':
			case 'svelte':
			case 'ubuntu':
				return bgByScheme('group-hover:bg-[#3C261F]', 'group-hover:bg-[#FFE3DA]');
			case 'figma':
			case 'php':
			case 'vite':
			case 'haskell':
				return bgByScheme('group-hover:bg-[#2D1F3F]', 'group-hover:bg-[#F4E0FF]');
			default:
				return bgByScheme('group-hover:bg-[#262430]', 'group-hover:bg-[#F4F2ED]');
		}
	};
</script>

<svg
	class={`tech-icon inline-block fill-font ${size} rounded-lg bg-bg transition-colors select-none ${color(name)} ${className}`}
	aria-hidden="true"
>
	<use xlink:href={`/icon/techIcons.svg#${name}`}></use>
</svg>
