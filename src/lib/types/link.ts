import type { skillKey } from '$lib/utils/skillsList';

export interface link {
	icon?: string;
	tech?: skillKey;
	name: string;
	href: string;
}
