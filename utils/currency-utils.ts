import { CURRENCIES, CurrencyCode } from '@/db/currency';

export function convertCurrency(
	amount: number,
	from: CurrencyCode,
	to: CurrencyCode,
): number {
	const fromRate = CURRENCIES[from].rateToBase;
	const toRate = CURRENCIES[to].rateToBase;

	return (amount / fromRate) * toRate;
}
