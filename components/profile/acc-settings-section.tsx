'use client';

import React, { useState } from 'react';
import {
	DropdownSettingItem,
	ToggleSettingItem,
} from '@/components/profile/settings-items';
import { useRouter } from 'next/navigation';
import { authOptions, SettingsDropdownItem } from '@/db/settings-data';

const AccountSettingsSection = () => {
	const [mfa, setMfa] = useState<SettingsDropdownItem>(authOptions[0]);

	const router = useRouter();

	return (
		<div className="space-y-2.5">
			<div className="font-title text-foreground/70 text-sm font-medium uppercase">
				Account settings
			</div>
			<div className="bg-foreground/5 flex w-full flex-col gap-2.5 rounded-lg px-4 py-5">
				<DropdownSettingItem
					title={'Two-factor Authentication'}
					menuItems={authOptions}
					currItem={mfa}
					setCurrItem={setMfa}
				/>
				<div className="bg-foreground/5 h-px w-full" />
				<ToggleSettingItem title="Enable data backup">
					We&apos;ll store your energy usage data history on our public servers.
				</ToggleSettingItem>
				<div className="bg-foreground/5 h-px w-full" />
				<div className="flex w-full cursor-pointer flex-col rounded-md text-base font-medium transition-all">
					Request data
					<div className="text-foreground/70 text-sm font-normal">
						You will receive a compressed file containing all your data on our
						servers, within 7 days of the request.
					</div>
				</div>
				<div className="bg-foreground/5 h-px w-full" />
				<div
					onClick={() => router.push('/')}
					className="w-full cursor-pointer rounded-md border border-rose-500/10 bg-rose-500/5 px-4 py-2 text-base font-medium text-rose-600 transition-all hover:bg-rose-500/10"
				>
					Delete Account
				</div>
			</div>
		</div>
	);
};

export default AccountSettingsSection;
