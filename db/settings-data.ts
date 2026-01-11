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
