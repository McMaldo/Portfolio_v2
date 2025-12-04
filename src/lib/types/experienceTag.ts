import type { strMultiLang } from './strMultiLang';
import type { link } from './link';

export interface ExperienceTag {
	name: strMultiLang;
	company: link;
	date: string;
	desc: strMultiLang[];
}
