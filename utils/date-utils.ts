export function formatTimeDiff(
	from: Date,
	to: Date = new Date(),
	locale: string = 'en',
): string {
	const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

	const diffMs = to.getTime() - from.getTime();

	const seconds = Math.round(diffMs / 1000);
	const minutes = Math.round(seconds / 60);
	const hours = Math.round(minutes / 60);
	const days = Math.round(hours / 24);

	const yearDiff = to.getFullYear() - from.getFullYear();
	const monthDiff = yearDiff * 12 + (to.getMonth() - from.getMonth());

	if (Math.abs(seconds) < 60) return rtf.format(-seconds, 'second');
	if (Math.abs(minutes) < 60) return rtf.format(-minutes, 'minute');
	if (Math.abs(hours) < 24) return rtf.format(-hours, 'hour');
	if (Math.abs(days) < 30) return rtf.format(-days, 'day');
	if (Math.abs(monthDiff) < 12) return rtf.format(-monthDiff, 'month');
	return rtf.format(-yearDiff, 'year');
}
