'use client';

import React, { useEffect, useState } from 'react';
import {
	DropdownSettingItem,
	ToggleSettingItem,
} from '@/components/profile/settings-items';
import {
	currencyOptions,
	SettingsDropdownList,
	themeOptions,
} from '@/db/settings-data';
import { useAppPreferencesContext } from '@/context/app-preferences-context';
import { CURRENCIES, CurrencyCode } from '@/db/currency';

const PreferencesSection = () => {
	const { theme, setTheme, currency, setCurrency } = useAppPreferencesContext();

	const [activeCurrency, setActiveCurrency] = useState<
		SettingsDropdownList[number]
	>({ id: currency.code, name: currency.label });

	useEffect(() => {
		setCurrency(CURRENCIES[activeCurrency.id as CurrencyCode]);
	}, [activeCurrency, setCurrency]);

	return (
		<div className="space-y-2.5">
			<div className="font-title text-foreground/70 text-sm font-medium uppercase">
				Preferences
			</div>
			<div className="bg-foreground/5 flex w-full flex-col gap-2.5 rounded-lg px-4 py-5">
				<ToggleSettingItem title="Notifications">
					Enable notifications for timely updates on your smartphone.
				</ToggleSettingItem>
				<div className="bg-foreground/5 h-px w-full" />
				<ToggleSettingItem title="Allow Location" toggle={true} />
				<div className="bg-foreground/5 h-px w-full" />
				<DropdownSettingItem
					title={'Currency'}
					menuItems={currencyOptions}
					currItem={activeCurrency}
					setCurrItem={setActiveCurrency}
				/>
				<div className="bg-foreground/5 h-px w-full" />
				<DropdownSettingItem
					title={'App Theme'}
					menuItems={themeOptions}
					currItem={theme}
					setCurrItem={setTheme}
				/>
			</div>
		</div>
	);
};

export default PreferencesSection;
