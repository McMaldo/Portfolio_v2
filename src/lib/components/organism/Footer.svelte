<script lang="ts">
	import type { link } from '$lib/types/link';
	import FaIcon from '../atom/FaIcon.svelte';
	import TechIcon from '../atom/TechIcon.svelte';

	const techStack: link[] = [
		{ name: 'Svelte', href: 'https://svelte.dev/' },
		{ name: 'TypeScript', href: 'https://www.typescriptlang.org/' },
		{ name: 'Vite', href: 'https://vite.dev' },
		{ name: 'TailwindCSS', href: 'https://tailwindcss.com/' },
		{ name: 'Vercel', href: 'https://vercel.com/' }
	];
	const contacts: link[] = [
		{ icon: 'envelope', name: 'Email', href: 'mailto:maldonado.ignacio.pablo@gmail.com' },
		{ icon: 'github-square', name: 'Github', href: 'https://github.com/McMaldo' },
		{
			icon: 'linkedin-square',
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/pablo-ignacio-maldonado'
		},
		{ icon: 'devto-square', name: 'DevTo', href: 'https://dev.to/mcmaldo' },
		{ icon: 'gitlab-square', name: 'Gitlab', href: 'https://gitlab.com/maldonado.ignacio.pablo' }
	];
	const inspiration: link[] = [
		{
			name: 'CodingStella (layout)',
			href: 'https://codingstella.github.io/vCard-personal-portfolio/'
		},
		{ name: 'Andrijaweb (skill tags)', href: 'https://andrijaweb.vercel.app/' },
		{ name: 'Orbitron (heading font)', href: 'https://www.1001freefonts.com/es/orbitron.font' },
		{ name: 'skill-icons-gh (tech svgs)', href: 'https://github.com/tandpfun/skill-icons' },
		{ name: 'FontAwesome (icons)', href: 'https://fontawesome.com/' }
	];
	const license: string[] = ['-by', '-nc', '-sa'];
</script>

<footer class="flex w-full flex-col gap-4 rounded-2xl border border-main-sm p-6">
	<section
		class="flex h-full flex-wrap gap-4 lg:grid lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"
	>
		<article class="flex min-h-full flex-col justify-between">
			<div>
				<h2 class="h-10">McMaldo</h2>
				<h3 class="text-main">Web Developer</h3>
			</div>
			<div>
				<h3 class="text-xl text-icon">Tech Stack</h3>
				<div class="flex gap-4 pt-1">
					{#each techStack as { name, href } (name)}
						<a {href} title={name} class="group">
							<TechIcon {name} />
						</a>
					{/each}
				</div>
			</div>
		</article>
		<article class="flex min-h-full xl:justify-center">
			<div>
				<h3 class="text-xl text-icon">Contacts</h3>
				<div class="flex flex-col gap-2 pt-1 pl-2">
					{#each contacts as { icon, href, name } (icon)}
						<a {href} class="flex items-center gap-2 hover:underline" target="_blank">
							<FaIcon name={icon} className="size-6" />
							<span>{name}</span>
						</a>
					{/each}
				</div>
			</div>
		</article>
		<article class="flex min-h-full xl:justify-center">
			<div>
				<h3 class="text-xl text-icon">Inspiration</h3>
				<div class="flex flex-col gap-2 pt-1 pl-2">
					{#each inspiration as { href, name } (name)}
						<a {href} class="flex items-center gap-2 hover:underline" target="_blank">
							<FaIcon name="globe" className="size-6" />
							<span>{name}</span>
						</a>
					{/each}
				</div>
			</div>
		</article>
	</section>
	<section
		class="flex justify-between rounded-xl border border-main-sm bg-bg p-2.5 pb-0 text-lg text-icon"
	>
		<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" class="flex gap-1">
			<svg class="inline-block size-8 select-none">
				<use xlink:href="/icon/faLicense.svg#creative-commons"></use>
			</svg>
			<div class="flex flex-col gap-1">
				<div class="flex gap-1">
					{#each license as cc (cc)}
						<svg class="inline-block size-5 select-none">
							<use xlink:href={`/icon/faLicense.svg#creative-commons${cc}`}></use>
						</svg>
					{/each}
				</div>
				<span class="w-fill rounded-t-lg bg-main-sm text-center text-xs">License</span>
			</div>
		</a>
		<h3>Bs As | Arg</h3>
	</section>
</footer>
