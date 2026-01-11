'use client';

import React, { useState } from 'react';
import ProfileCard from '@/components/profile/profile-card';
import AccountSelectMenu from '@/components/profile/account-selector';
import { AvailableProfile, PROFILE_RECORDS } from '@/db/profiles';

const ProfilePage = () => {
	const [currUser, setCurrUser] = useState<AvailableProfile>('solarisxd');

	return (
		<section className="flex h-full flex-col gap-2.5">
			<div className="flex flex-col justify-start px-5">
				<div className="font-title py-8 text-4xl font-bold tracking-tight text-zinc-100">
					Your Profile
				</div>
				<div className="w-full">
					<AccountSelectMenu currUser={currUser} setCurrUser={setCurrUser} />
				</div>
			</div>
			<div className="bg-background flex flex-col items-center gap-5 rounded-t-2xl p-5">
				<ProfileCard
					username={currUser}
					name={PROFILE_RECORDS[currUser].name}
					location={PROFILE_RECORDS[currUser].location}
				/>
				<div className="bg-foreground/10 mb-5 h-px w-full" />

				{/*TODO: Extract into different component*/}
				<div className="flex w-full flex-col gap-2.5">
					<div>
						<div className="font-title text-foreground/70 text-sm font-medium uppercase">
							account settings
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProfilePage;
