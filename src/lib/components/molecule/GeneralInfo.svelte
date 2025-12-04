<script>
	import IconButton from '../atom/IconButton.svelte';
	const contacts = [
		{
			icon: 'envelope',
			name: { en: 'EMAIL', es: 'CORREO' },
			desc: 'maldonado.ignacio.pablo@gmail.com'
		},
		{
			icon: 'calendar',
			name: { en: 'BIRTRHDAY', es: 'NACIMIENTO' },
			desc: { en: 'December 24, 2005', es: '24 de Diciembre, 2005' }
		},
		{ icon: 'location', name: { en: 'LOCATION', es: 'UBICACIÓN' }, desc: 'Buenos Aires, Argentina' }
	];
	const textClass = 'overflow-hidden text-ellipsis ';
</script>

<section
	class="hidden flex-col gap-4 rounded-2xl border border-main-sm p-4 [grid-area:general] sm:flex lg:p-6"
>
	{#each contacts as { icon, name, desc } (icon)}
		<article
			class="group grid grid-cols-[3.5rem_auto] items-center gap-x-2.5 gap-y-0 overflow-hidden rounded-xl border border-transparent transition-colors [grid-template-areas:'icon_name''icon_desc'] hover:border-btn-hover"
		>
			<IconButton className="[grid-area:icon]" {icon} />
			<div class={textClass + 'text-sm text-font-light uppercase [grid-area:name]'}>
				{name.en}
			</div>
			<div class={textClass + '[grid-area:desc]'}>
				{typeof desc === 'string' ? desc : desc.en}
			</div>
		</article>
	{/each}
</section>
