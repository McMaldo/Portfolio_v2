<script>
	import EduTag from '../molecule/EduTag.svelte';
	let titles = {
		education: [
			{
				lvl: { en: 'High School', es: 'Secundaria' },
				logo: 'RobertoArlt',
				comp: {
					name: 'Técnica N°3, Malvinas Argentinas, Buenos Aires, Argentina',
					href: 'https://tecnica3.com.ar/'
				},
				title: 'Tecnicatura en Programación Personal y Profesional',
				pdf: 'titulo_educativo_TÉCNICO_EN_INFORMÁTICA_PERSONAL_Y_PROFESIONAL'
			},

			{
				lvl: { en: 'College', es: 'Universidad' },
				logo: 'uba',
				comp: {
					name: 'Universidad de Buenos Aires, Argentina',
					href: 'https://www.uba.ar/'
				},
				title: 'Licenciatura en Ciencia de la Computación',
				pdf: undefined
			}
		],
		certificates: [
			{
				skill: 'JavaScript',
				comp: 'HackerRank',
				link: 'https://www.hackerrank.com/skills-verification/javascript_basic',
				title: 'JavaScript (Basic) Certificate',
				pdf: 'hackerrack_js_basic_certificate'
			},

			{
				skill: 'CSS',
				comp: 'HackerRank',
				link: 'https://www.hackerrank.com/skills-verification/css',
				title: 'CSS (Basic) Certificate',
				pdf: 'hackerrack_css_basic_certificate'
			},

			{
				logo: 'CFP',
				comp: 'CFP 401 Tortuguitas',
				link: 'https://cfp401.edu.ar/',
				title: 'Pensamiento Computacional - Programación',
				pdf: 'CFP401_PensamientoComputacional-Programacion'
			},

			{
				logo: 'CFP',
				comp: 'CFP 401 Tortuguitas',
				link: 'https://cfp401.edu.ar/',
				title: 'Robotica y Automatización',
				pdf: 'CFP401_RoboticayAutomatizacion'
			},

			{
				logo: 'CFP',
				comp: 'CFP 401 Tortuguitas',
				link: 'https://cfp401.edu.ar/',
				title: 'Diseño y Fabricación Digital',
				pdf: 'CFP401_DisenoyFabricacionDigitial'
			},

			{
				skill: 'Powershell-Dark',
				comp: 'Cisco Networking Academy program',
				link: 'https://www.netacad.com/courses/linux-unhatched?courseLang=en-US',
				title: 'NDG Linux Unhatched',
				pdf: 'cisco_netacad_shellscript'
			}
		]
	};
</script>

<section id="about" class="flex w-full flex-col gap-4 rounded-2xl border border-main-sm p-6">
	<h2>About Me</h2>
	<div class="flex gap-4">
		<div class="w-fill max-w-70 indent-4 text-sm">
			<p>
				Maldonado Ignacio, también conocido como Maldo. Técnico en Informática Personal y
				Profesional, programando desde los 15 años.
			</p>
			<p>
				Gran afinidad por el Desarrollo Front-end y el Diseño Web, complementada con amplia práctica
				en Back-end y Bases de Datos para aplicaciones web.
			</p>
			<p>
				Actualmente enfocado en React JS y sus múltiples librerías, como MUI, AntD, RRD, entre
				otras.
			</p>
		</div>
		<div class="w-fill flex flex-1 flex-col gap-4">
			{#each titles.education as { title, comp, logo } (title)}
				<EduTag {title} {comp} {logo} />
			{/each}
		</div>
	</div>
</section>
