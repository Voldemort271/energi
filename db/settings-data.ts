import { CURRENCIES } from '@/db/currency';

export type SettingsDropdownItem = {
	id: string;
	name: string;
};

export type SettingsDropdownList = readonly SettingsDropdownItem[];

export const themeOptions: SettingsDropdownList = [
	{ id: 'dark', name: 'Dark' },
	{ id: 'light', name: 'Light' },
	{ id: 'default', name: 'System Default' },
];

export const currencyOptions: SettingsDropdownList = Object.values(
	CURRENCIES,
).map((el) => ({ id: el.code, name: el.label }));
