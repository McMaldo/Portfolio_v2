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
				logo: 'HackerRank',
				comp: {
					name: 'HackerRank',
					href: 'https://www.hackerrank.com/skills-verification/javascript_basic'
				},
				title: 'JavaScript (Basic) Certificate',
				pdf: 'hackerrack_js_basic_certificate'
			},

			{
				logo: 'HackerRank',
				comp: {
					name: 'HackerRank',
					href: 'https://www.hackerrank.com/skills-verification/css'
				},
				title: 'CSS (Basic) Certificate',
				pdf: 'hackerrack_css_basic_certificate'
			},

			{
				logo: 'CFP',
				comp: {
					name: 'CFP 401 Tortuguitas',
					href: 'https://cfp401.edu.ar/'
				},
				title: 'Pensamiento Computacional - Programación',
				pdf: 'CFP401_PensamientoComputacional-Programacion'
			},

			{
				logo: 'CFP',
				comp: {
					name: 'CFP 401 Tortuguitas',
					href: 'https://cfp401.edu.ar/'
				},
				title: 'Robotica y Automatización',
				pdf: 'CFP401_RoboticayAutomatizacion'
			},

			{
				logo: 'CFP',
				comp: {
					name: 'CFP 401 Tortuguitas',
					href: 'https://cfp401.edu.ar/'
				},
				title: 'Diseño y Fabricación Digital',
				pdf: 'CFP401_DisenoyFabricacionDigitial'
			},

			{
				logo: 'Cisco',
				comp: {
					name: 'Cisco Networking Academy program',
					href: 'https://www.netacad.com/courses/linux-unhatched?courseLang=en-US'
				},
				title: 'NDG Linux Unhatched',
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
		<div class="w-fill flex min-w-60 flex-1 flex-col gap-4 overflow-hidden overflow-y-scroll">
			<div class="flex w-fit gap-2 rounded-xl border border-main-sm p-2">
				<Button name="Education" size="sm" fn={() => (sectionOpened = 'education')} />
				<Button name="Certificates" size="sm" fn={() => (sectionOpened = 'certificates')} />
			</div>
			{#each sectionOpened == 'education' ? titles.education : titles.certificates as eduTag (eduTag.title)}
				<EduTag {...eduTag} />
			{/each}
		</div>
	</div>
</section>
