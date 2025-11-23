<script lang="ts">
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
	};
</script>

<svg
	class={`inline-block ${size} rounded-lg bg-btn-hover transition-colors select-none ${color(name)} ${className}`}
	aria-hidden="true"
>
	<use xlink:href={`/icon/techIcons.svg#${name}`}></use>
</svg>
