import React from 'react';
import { cva } from 'class-variance-authority';
import { LeaderboardVariant, rankData } from '@/db/leaderboard-data';
import { ChevronDown, ChevronUp, Minus } from 'lucide-react';

const backgroundVariants = cva(
	['absolute', 'top-0', 'left-0', '-z-10', 'h-full w-full', 'opacity-10'],
	{
		variants: {
			rankDiff: {
				up: ['bg-linear-60 from-sky-600 via-emerald-600 to-emerald-800'],
				mid: ['bg-linear-60 from-amber-800 via-yellow-600 to-yellow-800'],
				down: ['bg-linear-60 from-amber-600 via-rose-600 to-red-500'],
			},
		},
	},
);

const CurrentPositionCard = ({ toggle }: { toggle: LeaderboardVariant }) => {
	return (
		<div className="relative z-0 flex w-full flex-col items-center overflow-clip rounded-md border border-zinc-100/10 px-5 py-6">
			<div
				className={backgroundVariants({
					rankDiff:
						rankData[toggle].diff > 0
							? 'up'
							: rankData[toggle].diff === 0
								? 'mid'
								: 'down',
				})}
			/>
			<div className="font-body text-foreground/50 text-center text-base font-medium">
				Current week position
			</div>
			<div className="flex flex-row flex-wrap items-end justify-center gap-2">
				<div className="font-title text-foreground text-4xl leading-none font-bold tracking-tight">
					{`#${rankData[toggle].currentRank}`}
				</div>
				<div
					className={`font-title flex flex-row items-end text-base leading-tight font-semibold ${
						rankData[toggle].diff > 0
							? 'text-teal-600'
							: rankData[toggle].diff === 0
								? 'text-amber-500'
								: 'text-rose-500'
					}`}
				>
					{rankData[toggle].diff > 0 ? (
						<ChevronUp size={16} />
					) : rankData[toggle].diff === 0 ? (
						<Minus size={16} />
					) : (
						<ChevronDown size={16} />
					)}
					{Math.abs(rankData[toggle].diff)}
				</div>
			</div>
			<div className="font-title text-foreground/70 pt-1 text-lg font-semibold">{`Top ${rankData[toggle].topPercent}% this week`}</div>
		</div>
	);
};

export default CurrentPositionCard;
