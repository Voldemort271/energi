'use client';

import React, { useState } from 'react';
import {
	DropdownSettingItem,
	ToggleSettingItem,
} from '@/components/profile/settings-items';
import { SettingsDropdownList, themeOptions } from '@/db/settings-data';

const PreferencesSection = () => {
	const [theme, setTheme] = useState<SettingsDropdownList[number]>(
		themeOptions[0],
	);

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
				<ToggleSettingItem title="Allow Location" />
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
