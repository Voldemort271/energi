'use client';

import React from 'react';
import LeaderboardToggle from '@/components/leaderboard/toggle-bar';
import CurrentPositionCard from '@/components/leaderboard/current-position';
import { LeaderboardVariant } from '@/db/leaderboard-data';

const LeaderboardPage = () => {
	const [toggle, setToggle] = React.useState<LeaderboardVariant>('global');

	return (
		<section className="flex h-full flex-col gap-2.5">
			<div className="font-title px-5 py-8 text-4xl font-bold tracking-tight text-zinc-100">
				Leaderboard
			</div>
			<LeaderboardToggle toggle={toggle} setToggle={setToggle} />
			<div className="bg-background flex min-h-dvh flex-col items-center gap-5 rounded-t-2xl p-5">
				<div className="w-full px-5">
					<CurrentPositionCard toggle={toggle} />
				</div>
			</div>
		</section>
	);
};

export default LeaderboardPage;
