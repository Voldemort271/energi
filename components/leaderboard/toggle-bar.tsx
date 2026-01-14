import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Globe, MapPin, Users } from 'lucide-react';
import { LeaderboardVariant } from '@/db/leaderboard-data';
import { finishTimedTask } from '@/utils/timer-utils';

interface Props {
	toggle: LeaderboardVariant;
	setToggle: React.Dispatch<React.SetStateAction<LeaderboardVariant>>;
}

const LeaderboardToggle = ({ toggle, setToggle }: Props) => {
	const finishFriendsLeaderboardTask = () => {
		finishTimedTask('open_friends_leaderboard_bottom_nav');
		finishTimedTask('open_friends_leaderboard_floating_nav');
	};

	return (
		<ToggleGroup
			type="single"
			variant="outline"
			spacing={2}
			size="sm"
			className="font-title flex flex-wrap px-5 pb-2.5 text-sm"
			value={toggle}
			onValueChange={(value) => setToggle(value as LeaderboardVariant)}
		>
			<ToggleGroupItem
				value="global"
				aria-label="Toggle global leaderboard"
				className="cursor-pointer rounded-full border-zinc-900/10 bg-zinc-950/20 text-zinc-100! transition-all hover:scale-105 hover:bg-zinc-950/40 data-[state=on]:bg-amber-700/20 data-[state=on]:*:[svg]:stroke-amber-200"
			>
				<Globe />
				Global
			</ToggleGroupItem>
			<ToggleGroupItem
				value="friends"
				aria-label="Toggle friends leaderboard"
				className="cursor-pointer rounded-full border-zinc-900/10 bg-zinc-950/20 text-zinc-100! transition-all hover:scale-105 hover:bg-zinc-950/40 data-[state=on]:bg-amber-700/20 data-[state=on]:*:[svg]:stroke-amber-200"
				onClick={finishFriendsLeaderboardTask}
			>
				<Users />
				Friends
			</ToggleGroupItem>
			<ToggleGroupItem
				value="local"
				aria-label="Toggle local leaderboard"
				className="cursor-pointer rounded-full border-zinc-900/10 bg-zinc-950/20 text-zinc-100! transition-all hover:scale-105 hover:bg-zinc-950/40 data-[state=on]:bg-amber-700/20 data-[state=on]:*:[svg]:stroke-amber-200"
			>
				<MapPin />
				Local
			</ToggleGroupItem>
		</ToggleGroup>
	);
};

export default LeaderboardToggle;
