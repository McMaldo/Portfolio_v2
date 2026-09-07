import type { skillTag } from '$lib/types/skillTag';

export type skillKey =
	| 'cpp'
	| 'html'
	| 'css'
	| 'sublime'
	| 'vscode'
	| 'js'
	| 'python'
	| 'php'
	| 'arduino'
	| 'mysql'
	| 'git'
	| 'github'
	| 'react'
	| 'vite'
	| 'node'
	| 'bash'
	| 'figma'
	| 'mui'
	| 'antd'
	| 'gitlab'
	| 'express'
	| 'trello'
	| 'notion'
	| 'windsurf'
	| 'trae'
	| 'obsidian'
	| 'tailwind'
	| 'ubuntu'
	| 'arch'
	| 'i3'
	| 'plasma'
	| 'gnome'
	| 'hyprland'
	| 'caelestia'
	| 'zed'
	| 'zen'
	| 'ts'
	| 'svelte'
	| 'vercel'
	| 'haskell';
export const skillKeys: skillKey[] = [
	'cpp',
	'html',
	'css',
	'sublime',
	'vscode',
	'js',
	'python',
	'php',
	'arduino',
	'mysql',
	'git',
	'github',
	'react',
	'vite',
	'node',
	'bash',
	'figma',
	'mui',
	'antd',
	'gitlab',
	'express',
	'trello',
	'notion',
	'windsurf',
	'trae',
	'obsidian',
	'tailwind',
	'ubuntu',
	'arch',
	'i3',
	'plasma',
	'gnome',
	'hyprland',
	'caelestia',
	'zed',
	'zen',
	'ts',
	'svelte',
	'vercel',
	'haskell'
];
export const skillTagDictionary: Record<skillKey, skillTag> = {
	cpp: { name: 'C++', desc: 'Programming Lang.', date: '05/07/2021' },
	html: { name: 'HTML', desc: 'Markup Lang.', date: '29/06/2022' },
	css: { name: 'CSS', desc: 'Style Sheet Lang.', date: '29/06/2022' },
	sublime: { name: 'Sublime Text', desc: 'Code Editor', date: '22/07/2022' },
	vscode: { name: 'VS Code', desc: 'Code Editor', date: '10/10/2022' },
	js: { name: 'Java Script', desc: 'Programming Lang.', date: '16/11/2022' },
	python: { name: 'Python', desc: 'Programming Lang.', date: '02/03/2023' },
	php: { name: 'PHP', desc: 'Programming Lang.', date: '06/03/2023' },
	arduino: { name: 'Arduino', desc: 'HW + SW Platform', date: '13/08/2023' },
	mysql: { name: 'MySQL', desc: 'RDBMS', date: '23/11/2023' },
	git: { name: 'Git', desc: 'Version Control', date: '02/04/2024' },
	github: { name: 'Github', desc: 'Version Control', date: '02/04/2024' },
	react: { name: 'React', desc: 'JS Library', isStarred: true, date: '17/04/2024' },
	vite: { name: 'Vite', desc: 'JS Library', date: '17/04/2024' },
	node: { name: 'Node JS', desc: 'JS Library', date: '17/04/2024' },
	bash: { name: 'Bash', desc: 'Shell Lang.', date: '07/05/2024' },
	figma: { name: 'Figma', desc: 'Design Tool', date: '30/05/2024' },
	mui: { name: 'MaterialUI', desc: 'React Library', date: '31/10/2024' },
	antd: { name: 'Ant Design', desc: 'Components Library', date: '31/10/2024' },
	gitlab: { name: 'Gitlab', desc: 'Version Control', date: '23/06/2024' },
	express: { name: 'Express JS', desc: 'Node JS Library', date: '28/08/2024' },
	trello: { name: 'Trello', desc: 'Organization', date: '23/09/2024' },
	notion: { name: 'Notion', desc: 'Organization & Notes', date: '05/10/2024' },
	windsurf: { name: 'Windsurf', desc: 'Code Editor', date: '11/03/2025' },
	trae: { name: 'TraeAI', desc: 'Code Editor', date: '11/03/2025' },
	obsidian: { name: 'Obsidian', desc: 'Organization & Notes', date: '03/07/2025' },
	tailwind: { name: 'Tailwind CSS', desc: 'CSS Library', isStarred: true, date: '11/08/2025' },
	ubuntu: { name: 'Ubuntu Linux', desc: 'Linux Distro', date: '23/08/2025' },
	arch: { name: 'Arch Linux', desc: 'Linux Distro', date: '30/08/2025' },
	i3: { name: 'I3 WM', desc: 'Window Manager', date: '30/08/2025' },
	plasma: { name: 'KDE Plasma', desc: 'Window Manager', date: '31/08/2025' },
	gnome: { name: 'Gnome', desc: 'Window Manager', date: '31/08/2025' },
	hyprland: { name: 'Hyprland', desc: 'Window Manager', date: '03/09/2025' },
	caelestia: { name: 'Caelestia', desc: 'Linux Setup', date: '07/09/2025' },
	zed: { name: 'Zeditor', desc: 'Code Editor', date: '18/09/2025' },
	zen: { name: 'Zen', desc: 'Web Browser', date: '18/09/2025' },
	ts: { name: 'Type Script', desc: 'JS Superset', date: '23/11/2025' },
	svelte: { name: 'Svelte', desc: 'JS Framework', date: '23/11/2025' },
	vercel: { name: 'Vercel', desc: 'Web Deployment', date: '12/12/2025' },
	haskell: { name: 'Haskell', desc: 'Programming Lang.', date: '24/08/2026' }
};
