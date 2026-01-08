export type CurrencyCode = 'EUR' | 'USD' | 'CHF' | 'CZK' | 'JPY';

export interface Currency {
	code: CurrencyCode;
	label: string;
	symbol: string;
	rateToBase: number; // base is EUR
}

export const CURRENCIES: Record<CurrencyCode, Currency> = {
	EUR: {
		code: 'EUR',
		label: 'Euro',
		symbol: '€',
		rateToBase: 1,
	},
	USD: {
		code: 'USD',
		label: 'US Dollar',
		symbol: '$',
		rateToBase: 1.08,
	},
	CHF: {
		code: 'CHF',
		label: 'Swiss Franc',
		symbol: 'CHF',
		rateToBase: 0.94,
	},
	CZK: {
		code: 'CZK',
		label: 'Czech Koruna',
		symbol: 'Kč',
		rateToBase: 24.28,
	},
	JPY: {
		code: 'JPY',
		label: 'Japanese Yen',
		symbol: '¥',
		rateToBase: 160.5,
	},
};
