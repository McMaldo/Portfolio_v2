import { writable, derived } from 'svelte/store';
import type { ProjectCard } from '../types/projectCard';

export const filter = writable('');
export const projects = writable<ProjectCard[]>([
	{
		img: 'kiwi_tt',
		name: 'Kiwi TT',
		techs: ['React', 'JavaScript', 'CSS', 'MaterialUI', 'Antd', 'MySQL'],
		desc: {
			en: 'Allows you to administrate a work team through the agile methodology SCRUM, distributing tasks with different priorities & submission deadlines',
			es: 'Permite administrar a un grupo de trabajo mediante la metodología agil SCRUM, designando tareas con distintas prioridades y plazos de entrega.'
		},
		links: [{ name: 'github', href: 'https://github.com/Kiwi-jsx/KiwiTT_app' }],
		demo: 'https://kiwi.escuelarobertoarlt.com/',
		colaboratorsCount: 4
	},
	{
		img: 'App_Resto',
		name: 'App Resto',
		techs: ['React', 'JavaScript', 'ExpressJS', 'NodeJS', 'CSS', 'MySQL'],
		desc: {
			en: 'Offers multiples plates with differents clasifications, a cart to manage the purchases & generates the total to pay. Also brings an API to record all the purchases',
			es: 'Ofrece múltiples platos con diferentes clasificaciones, un carrito para administrar las compras y un generador del total a pagar. Además una API para registar las compras.'
		},
		links: [{ name: 'github', href: 'https://github.com/McMaldo/act_14_react' }],
		demo: 'https://mcmaldo.github.io/act_14_react/',
		colaboratorsCount: 2
	},
	{
		img: 'App_Station',
		name: 'App Station',
		techs: ['PHP', 'CSS', 'HTML', 'JavaScript', 'MySQL'],
		desc: {
			en: 'Shows the climate change in a web app completely responsive, check the statistics as the temperature, humidity, atmospheric pressure & more',
			es: 'Observa el cambio climatico en un app web totalmente responsive, verifica estadisticas como la temperatura, humedad, presión atmosferica y más.'
		},
		links: [
			{ name: 'github', href: 'https://github.com/McMaldo/app-estacion' },
			{ name: 'gitlab', href: 'https://gitlab.com/mcmaldo/app-estacion' }
		],
		demo: null,
		colaboratorsCount: 1
	},

	{
		img: 'Tech_Shop',
		name: 'Tech Shop',
		techs: ['React', 'JavaScript', 'TailwindCSS', 'HTML', 'Vercel'],
		desc: {
			en: 'E-commerce with a variety of peripherals to the computer, notebook, console & mobile, articles to your setup that you can filter by category, and price.',
			es: 'E-commerce con una variedad de perifericos de computadora, notebook, consola y móvil, artículos para tu setup, que podrás filtrar por categoría, y precio.'
		},
		links: [{ name: 'github', href: 'https://github.com/McMaldo/tech_shop' }],
		demo: 'https://tech-shop-nu-five.vercel.app/',
		colaboratorsCount: 1
	},
	{
		img: 'App_Clothing_Store',
		name: 'App Clothing Store',
		techs: ['CSS', 'JavaScript', 'HTML'],
		desc: {
			en: "E-commerce with multiples clothing options, & a cart to manage the purchases from the user. It's a SPA built with only JS Vanilla for its functionality",
			es: 'E-commerce con múltiples opciones de ropa, y un carrito para administrar las compras de un usuario. Es una SPA elaborada con únicamente JS Vanilla para su funcionalidad.'
		},
		links: [{ name: 'github', href: 'https://github.com/McMaldo/app_clothing_store' }],
		demo: 'https://mcmaldo.github.io/app_clothing_store/',
		colaboratorsCount: 1
	},
	{
		img: 'Webgenerator',
		name: 'Webgenerator',
		techs: ['PHP', 'HTML', 'Bash', 'MySQL'],
		desc: {
			en: 'Generates the structure for a web application and manage all the apps from your account. All user apps can be edited or deleted by an administrator.',
			es: 'Genera la estrucutra para una aplicación web. Además permite adminitrar las generadas por un mismo usuario y las de todos los registrados por un admin.'
		},
		links: [
			{ name: 'github', href: 'https://github.com/McMaldo/webgenerator' },
			{ name: 'gitlab', href: 'https://gitlab.com/mcmaldo/webgenerator' }
		],
		demo: null,
		colaboratorsCount: 1
	},

	{
		img: 'Mini_Games_JS',
		name: 'Mini Games JS',
		techs: ['JavaScript', 'CSS', 'HTML'],
		desc: {
			en: 'A collection of mini games made with Java Script Vanilla, with a bit of practice in OOP. Some of them are: space invaders, pac-man and more.',
			es: 'Una colección de mini juegos desarrollados con Java Script Vanilla, con una ligera practica de POO. Algunos de ellos: space invaders, pac-man y más.'
		},
		links: [{ name: 'github', href: 'https://github.com/McMaldo/mini_games_js' }],
		demo: 'https://mcmaldo.github.io/mini_games_js/',
		colaboratorsCount: 1
	},
	{
		img: 'D&D_Char',
		name: 'D&D Character',
		techs: ['React', 'TailwindCSS', 'HTML'],
		desc: {
			en: 'Build your own Character based on the Dungeons & Dragons rules from the 5th edition manuals. You can also learn about the different species and classes.',
			es: 'Crea tu propio personaje basado en los manuales de la 5ta edición de Dungeons & Dragons. Además puedes aprender acerca de las distintas especies y clases.'
		},
		links: [],
		demo: null,
		colaboratorsCount: 1
	}
]);

export const filteredProjects = derived([filter, projects], ([$filter, $projects]) => {
	if (!$filter) return $projects;
	return $projects.filter((item) => item.techs.includes($filter));
});
