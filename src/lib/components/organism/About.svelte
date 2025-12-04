<script lang="ts">
	import type { EducationTag } from '$lib/types/educationTag';
	import Button from '../atom/Button.svelte';
	import EduTag from '../molecule/EduTag.svelte';
	let titles: {
		education: EducationTag[];
		certificates: EducationTag[];
	} = {
		education: [
			{
				lvl: { en: 'High School', es: 'Secundaria' },
				logo: 'RobertoArlt',
				comp: {
					name: 'Técnica N°3, Malvinas Argentinas, Buenos Aires, Argentina',
					href: 'https://tecnica3.com.ar/'
				},
				title: 'Tecnicatura en Programación Personal y Profesional',
				date: '2018 - 2024',
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
				date: '2025 - act.'
			}
		],
		certificates: [
			{
				logo: 'HackerRank',
				comp: {
					name: 'HackerRank',
					href: 'https://www.hackerrank.com/skills-verification/javascript_basic'
				},
				title: 'JavaScript (Basic) Certificate',
				date: '2025',
				pdf: 'hackerrack_js_basic_certificate'
			},

			{
				logo: 'HackerRank',
				comp: {
					name: 'HackerRank',
					href: 'https://www.hackerrank.com/skills-verification/css'
				},
				title: 'CSS (Basic) Certificate',
				date: '2025',
				pdf: 'hackerrack_css_basic_certificate'
			},

			{
				logo: 'CFP',
				comp: {
					name: 'CFP 401 Tortuguitas',
					href: 'https://cfp401.edu.ar/'
				},
				title: 'Pensamiento Computacional - Programación',
				date: '2024',
				pdf: 'CFP401_PensamientoComputacional-Programacion'
			},

			{
				logo: 'CFP',
				comp: {
					name: 'CFP 401 Tortuguitas',
					href: 'https://cfp401.edu.ar/'
				},
				title: 'Robotica y Automatización',
				date: '2024',
				pdf: 'CFP401_RoboticayAutomatizacion'
			},

			{
				logo: 'CFP',
				comp: {
					name: 'CFP 401 Tortuguitas',
					href: 'https://cfp401.edu.ar/'
				},
				title: 'Diseño y Fabricación Digital',
				date: '2024',
				pdf: 'CFP401_DisenoyFabricacionDigitial'
			},

			{
				logo: 'Cisco',
				comp: {
					name: 'Cisco Networking Academy program',
					href: 'https://www.netacad.com/courses/linux-unhatched?courseLang=en-US'
				},
				title: 'NDG Linux Unhatched',
				date: '2023',
				pdf: 'cisco_netacad_shellscript'
			}
		]
	};

	let sectionOpened = $state('education');
</script>

<section id="about" class="flex w-full flex-col gap-4 rounded-2xl border border-main-sm p-4 lg:p-6">
	<h2>About Me</h2>
	<div class="flex flex-wrap gap-4">
		<div class="w-fill min-w-60 indent-4 text-sm sm:max-w-70">
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
		<div
			class="custom-scroll w-fill relative flex min-w-60 flex-1 flex-col gap-4 overflow-hidden overflow-y-scroll sm:max-h-60"
		>
			<div
				class="sticky top-0 grid w-fit grid-cols-2 gap-2 rounded-xl border border-main-sm bg-bg p-2 shadow-lg shadow-bg"
			>
				<Button name="Education" size="sm" fn={() => (sectionOpened = 'education')} />
				<Button name="Certificates" size="sm" fn={() => (sectionOpened = 'certificates')} />
				<div
					class={`absolute bottom-0 left-0 h-1 w-1/2 px-4 transition-transform ${sectionOpened == 'certificates' ? 'translate-x-full' : ''}`}
				>
					<div class="w-fill h-1 rounded-t-full bg-main-sm"></div>
				</div>
			</div>
			{#each sectionOpened == 'education' ? titles.education : titles.certificates as eduTag (eduTag.title)}
				<EduTag {...eduTag} />
			{/each}
		</div>
	</div>
</section>
