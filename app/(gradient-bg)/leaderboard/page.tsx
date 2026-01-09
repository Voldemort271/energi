'use client';

import React from 'react';
import LeaderboardToggle from '@/components/leaderboard/toggle-bar';

const LeaderboardPage = () => {
	const [toggle, setToggle] = React.useState<'global' | 'friends' | 'local'>(
		'global',
	);

	return (
		<div className="flex h-full flex-col gap-2.5">
			<div className="font-title px-5 py-8 text-4xl font-bold tracking-tight text-zinc-100">
				Leaderboard
			</div>
			<LeaderboardToggle toggle={toggle} setToggle={setToggle} />
			<div className="bg-background min-h-dvh rounded-t-2xl p-5">{toggle}</div>
		</div>
	);
};

export default LeaderboardPage;
