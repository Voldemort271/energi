'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import ProfileCard from '@/components/profile/profile-card';
import AccountSelectMenu from '@/components/profile/account-selector';
import { AvailableProfile, PROFILE_RECORDS } from '@/db/profiles';
import SupportLinks from '@/components/profile/support-links';
import dynamic from 'next/dynamic';

const PreferencesSection = dynamic(
	() => import('@/components/profile/preferences-section'),
	{ ssr: false },
);
const AccountSettingsSection = dynamic(
	() => import('@/components/profile/acc-settings-section'),
	{ ssr: false },
);

const ProfilePage = () => {
	const [currUser, setCurrUser] = useState<AvailableProfile>('solarisxd');

	return (
		<motion.section
			className="flex h-full flex-col gap-2.5"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			<motion.div
				className="flex flex-col justify-start px-5"
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.1 }}
			>
				<motion.div
					className="font-title py-8 text-4xl font-bold tracking-tight text-zinc-100"
					initial={{ x: -20, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					Your Profile
				</motion.div>
				<motion.div
					className="w-full"
					initial={{ x: -20, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<AccountSelectMenu currUser={currUser} setCurrUser={setCurrUser} />
				</motion.div>
			</motion.div>
			<motion.div
				className="bg-background flex flex-col items-center gap-5 rounded-t-2xl p-5"
				initial={{ y: 30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.5 }}
			>
				<ProfileCard
					username={currUser}
					name={PROFILE_RECORDS[currUser].name}
					location={PROFILE_RECORDS[currUser].location}
				/>
				<motion.div
					className="bg-foreground/10 mb-2.5 h-px w-full"
					initial={{ scaleX: 0, opacity: 0 }}
					animate={{ scaleX: 1, opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.7 }}
				/>
				<motion.div
					className="flex w-full flex-col gap-2.5"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
				>
					<PreferencesSection />
				</motion.div>
				<motion.div
					className="flex w-full flex-col gap-2.5"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.9 }}
				>
					<AccountSettingsSection />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.0 }}
				>
					<SupportLinks />
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default ProfilePage;
