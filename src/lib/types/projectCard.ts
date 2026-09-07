import type { strMultiLang } from './strMultiLang';
import type { link } from './link';
import type { skillKey } from '$lib/utils/skillsList';

export interface ProjectCard {
	img: string;
	name: string;
	techs: skillKey[];
	desc: strMultiLang;
	links: link[];
	demo: string | null;
	colaboratorsCount: number;
}
