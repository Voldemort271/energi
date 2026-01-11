import React from 'react';
import ProfileCard from '@/components/profile/profile-card';

const ProfilePage = () => {
	return (
		<section className="flex h-full flex-col gap-2.5">
			<div className="font-title text-foreground pt-8 text-4xl font-bold tracking-tight">
				Your Profile
			</div>
			<ProfileCard />
		</section>
	);
};

export default ProfilePage;
