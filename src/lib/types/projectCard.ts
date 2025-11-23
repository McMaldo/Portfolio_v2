import type { strMultiLang } from '$lib/types/strMultiLang';
import type { link } from './link';

export interface projectCard {
	img: string;
	name: string;
	techs: string[];
	desc: strMultiLang;
	links: link[];
	demo: string | null;
	colaboratorsCount: number;
}
