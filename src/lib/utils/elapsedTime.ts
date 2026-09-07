export function elapsedTime(fechaStr: string, isEn: boolean): string {
	const [day, month, year] = fechaStr.split('/').map(Number);

	if (!day || !month || !year) return isEn ? 'Invalid date' : 'Fecha inválida';

	const entryDate = new Date(year, month - 1, day);
	const now = new Date();
	const msDiference = now.getTime() - entryDate.getTime();

	if (msDiference < 0) return isEn ? 'In the future' : 'En el futuro';

	const days_total = Math.floor(msDiference / (1000 * 60 * 60 * 24));

	if (days_total < 1) return isEn ? 'Today' : 'Hoy';

	if (days_total < 31) {
		return isEn
			? `${days_total} ${days_total === 1 ? 'day' : 'days'} ago`
			: `Hace ${days_total} ${days_total === 1 ? 'día' : 'días'}`;
	}

	const month_total = Math.floor(days_total / 30.4375);
	if (month_total < 12) {
		return isEn
			? `${month_total} ${month_total === 1 ? 'month' : 'months'} ago`
			: `Hace ${month_total} ${month_total === 1 ? 'mes' : 'meses'}`;
	}

	const years_total = Math.floor(month_total / 12);
	const monthRest = month_total % 12;

	const years_text = isEn
		? `${years_total === 1 ? '1 year' : years_total + ' years'}`
		: `Hace ${years_total} ${years_total === 1 ? 'año' : 'años'}`;

	const month_text =
		monthRest > 0
			? isEn
				? ` and ${monthRest === 1 ? '1 month' : monthRest + ' months'}`
				: ` y ${monthRest} ${monthRest === 1 ? 'mes' : 'meses'}`
			: '';

	return years_text + month_text + (isEn ? ' ago' : '');
}
