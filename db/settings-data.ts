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

export const authOptions: SettingsDropdownList = [
	{ id: 'none', name: '2FA disabled' },
	{ id: 'passkey', name: 'Passkey' },
	{ id: 'authenticator', name: 'Authenticator app' },
	{ id: 'otp', name: 'One-time security code' },
];
