import type { strMultiLang } from './strMultiLang';
import type { link } from './link';

export interface ProjectCard {
	img: string;
	name: string;
	techs: string[];
	desc: strMultiLang;
	links: link[];
	demo: string | null;
	colaboratorsCount: number;
}
