'use client';

import React from 'react';
import { motion } from 'motion/react';
import LeaderboardToggle from '@/components/leaderboard/toggle-bar';
import CurrentPositionCard from '@/components/leaderboard/current-position';
import { LeaderboardVariant } from '@/db/leaderboard-data';
import LeaderboardList from '@/components/leaderboard/leaderboard-list';

const LeaderboardPage = () => {
	const [toggle, setToggle] = React.useState<LeaderboardVariant>('global');

	return (
		<section className="flex h-full flex-col gap-2.5">
			<motion.div 
				className="font-title px-5 py-8 text-4xl font-bold tracking-tight text-zinc-100"
				initial={{ x: -20, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				Leaderboard
			</motion.div>
			<motion.div
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.4 }}
			>
				<LeaderboardToggle toggle={toggle} setToggle={setToggle} />
			</motion.div>
			<motion.div 
				className="bg-background flex flex-1 flex-col items-center gap-5 rounded-t-2xl p-5"
				initial={{ y: 30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.5 }}
			>
				{/* ProfileCard and LeaderboardList left unanimated to preserve images */}
				<CurrentPositionCard toggle={toggle} />
				<LeaderboardList toggle={toggle} />
			</motion.div>
		</section>
	);
};

export default LeaderboardPage;
