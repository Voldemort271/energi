'use client';

import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from 'react';
import { SettingsDropdownItem, themeOptions } from '@/db/settings-data';
import { CURRENCIES, Currency } from '@/db/currency';

// Theme, Nav variant, Currency, (optional:) Location, Notification preferences
interface AppPreferencesType {
	theme: SettingsDropdownItem;
	setTheme: Dispatch<SetStateAction<SettingsDropdownItem>>;
	currency: Currency;
	setCurrency: Dispatch<SetStateAction<Currency>>;
}

interface Props {
	children: ReactNode;
	initialTheme?: SettingsDropdownItem;
	initialCurrency?: Currency;
}

const AppPreferencesContext = createContext<AppPreferencesType | undefined>(
	undefined,
);

const AppPreferencesProvider = ({
	children,
	initialTheme = themeOptions[0],
	initialCurrency = CURRENCIES['EUR'],
}: Props) => {
	const [theme, setTheme] = useState<SettingsDropdownItem>(initialTheme);
	const [currency, setCurrency] = useState<Currency>(initialCurrency);

	return (
		<AppPreferencesContext.Provider
			value={{ theme, setTheme, currency, setCurrency }}
		>
			{children}
		</AppPreferencesContext.Provider>
	);
};

const useAppPreferencesContext = (): AppPreferencesType => {
	const context = useContext(AppPreferencesContext);
	if (!context) {
		throw new Error('useGlobalContext must be used within a GlobalProvider');
	}
	return context;
};

export { AppPreferencesProvider, useAppPreferencesContext };
