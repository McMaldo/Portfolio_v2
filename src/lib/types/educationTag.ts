import type { strMultiLang } from './strMultiLang';
import type { link } from './link';

export interface EducationTag {
	lvl?: strMultiLang;
	logo: string;
	comp: link;
	title: string;
	date?: string;
	pdf?: string;
}
