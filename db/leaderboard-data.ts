export type LeaderboardVariant = 'global' | 'friends' | 'local';

export type PositionData = {
	currentRank: number;
	diff: number;
	topPercent: number;
};

export const RANK_DATA: Record<LeaderboardVariant, PositionData> = {
	global: {
		currentRank: 145,
		diff: 62,
		topPercent: 16,
	},
	local: {
		currentRank: 4,
		diff: 0,
		topPercent: 2,
	},
	friends: {
		currentRank: 15,
		diff: -7,
		topPercent: 5,
	},
};
