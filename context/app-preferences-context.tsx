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
	floatingNav: boolean;
	setFloatingNav: Dispatch<SetStateAction<boolean>>;
	currency: Currency;
	setCurrency: Dispatch<SetStateAction<Currency>>;
}

interface Props {
	children: ReactNode;
	initialTheme?: SettingsDropdownItem;
	initialCurrency?: Currency;
	initialFloatingNav?: boolean;
}

const AppPreferencesContext = createContext<AppPreferencesType | undefined>(
	undefined,
);

const AppPreferencesProvider = ({
	children,
	initialTheme = themeOptions[2], // 0 - dark, 1 - light, 2 - default (dark)
	initialCurrency = CURRENCIES['EUR'],
	initialFloatingNav = false,
}: Props) => {
	const [theme, setTheme] = useState<SettingsDropdownItem>(initialTheme);
	const [currency, setCurrency] = useState<Currency>(initialCurrency);
	const [floatingNav, setFloatingNav] = useState(initialFloatingNav);

	return (
		<AppPreferencesContext.Provider
			value={{
				theme,
				setTheme,
				currency,
				setCurrency,
				floatingNav,
				setFloatingNav,
			}}
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
