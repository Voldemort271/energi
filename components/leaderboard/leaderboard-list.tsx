import React from 'react';
import { LeaderboardVariant, rankData } from '@/db/leaderboard-data';
import { Flower } from 'lucide-react';

interface ElementProps {
	rank: number;
	name: string;
	energy: number;
	currRank: number;
}

interface ListProps {
	toggle: LeaderboardVariant;
}

const LeaderboardElement = ({ rank, name, energy, currRank }: ElementProps) => {
	return (
		<div
			className={`${
				rank === 1
					? 'border border-amber-400/20 bg-amber-400/10 text-amber-400'
					: rank === 2
						? 'border border-zinc-600/20 bg-zinc-600/10 text-zinc-400'
						: rank === 3
							? 'border border-yellow-800/20 bg-yellow-800/10 text-yellow-800'
							: rank === currRank
								? 'border border-teal-500/20 bg-teal-600/10 text-teal-500'
								: 'bg-background text-foreground/70'
			} font-body flex w-full flex-row items-center justify-between gap-2.5 rounded-sm px-2.5`}
		>
			<div className="flex items-center justify-center gap-1">
				<div className="font-title min-w-8 py-1 pr-2 text-lg font-semibold">
					{rank}
				</div>
				<div className="font-medium">{name}</div>
			</div>
			<div className="text-sm font-medium">{energy} kWh</div>
		</div>
	);
};

const LeaderboardList = ({ toggle }: ListProps) => {
	const currRank = rankData[toggle].currentRank;
	const offset = currRank - 2;

	return (
		<div className="flex w-full flex-col items-center justify-center gap-1">
			{Array.from({ length: 5 }).map((_, i) => {
				return i < 4 ? (
					<LeaderboardElement
						currRank={currRank}
						key={i}
						rank={i + 1}
						name={`User ${i + 1}`}
						energy={i * 10}
					/>
				) : (
					<div className="border-foreground/10 w-full border-t" key={i}>
						<LeaderboardElement
							currRank={currRank}
							rank={i + 1}
							name={`User ${i + 1}`}
							energy={i * 10}
						/>
					</div>
				);
			})}
			{currRank > 5 && (
				<>
					<div className="text-foreground/70 mb-5 text-xl leading-none tracking-widest">
						...
					</div>
					{Array.from({ length: 5 }).map((_, i) => {
						return i + offset === currRank ||
							i + offset - 1 === currRank ||
							i === 0 ? (
							<LeaderboardElement
								currRank={currRank}
								key={i}
								rank={i + offset}
								name={`User ${i + offset}`}
								energy={(i + offset) * 10}
							/>
						) : (
							<div className="border-foreground/10 w-full border-t" key={i}>
								<LeaderboardElement
									currRank={currRank}
									rank={i + offset}
									name={`User ${i + offset}`}
									energy={(i + offset) * 10}
								/>
							</div>
						);
					})}
				</>
			)}
			<div className="font-title text-foreground/70 pt-1s2 flex flex-col items-center justify-center gap-1 px-2.5 py-5 text-center text-sm font-medium">
				<Flower size={24} />
				Every unit saved helps reduce collective energy waste. We&apos;re proud
				of you for taking this initiative!
			</div>
		</div>
	);
};

export default LeaderboardList;
