import React from 'react';
import { Button } from '@/components/ui/button';
import { abortTimedTask, startTimedTask } from '@/utils/timer-utils';
import { useAppPreferencesContext } from '@/context/app-preferences-context';

const OpenFriendsLeaderboardTest = () => {
	const { setFloatingNav } = useAppPreferencesContext();

	const startVariant1Test = () => {
		setFloatingNav(false);
		startTimedTask('open_friends_leaderboard_bottom_nav');
	};

	const abortVariant1Test = () => {
		abortTimedTask('open_friends_leaderboard_bottom_nav');
	};

	const startVariant2Test = () => {
		setFloatingNav(true);
		startTimedTask('open_friends_leaderboard_floating_nav');
	};

	const abortVariant2Test = () => {
		abortTimedTask('open_friends_leaderboard_floating_nav');
	};

	return (
		<div className="bg-foreground/5 flex w-full flex-col gap-0 rounded-lg px-4 py-5">
			<div className="text-foreground font-title text-base font-semibold">
				Open Friends Leaderboard
			</div>
			<div className="text-foreground/70 mt-1 w-full text-sm font-normal">
				This is a straightforward task; you only need to open the
				&quot;Friends&quot; tab on the Leaderboard. Remember, time will be
				measured from as soon as you click the start button.
			</div>
			<div className="h-2.5" />
			<div className="bg-foreground/5 h-px w-full" />
			<div className="flex flex-col gap-1 py-2.5">
				<div className="font-title text-foreground/70 text-sm font-medium uppercase">
					type 1: bottom navbar
				</div>
				<div className="flex w-full flex-row flex-wrap items-center justify-start gap-x-2.5 gap-y-1">
					<Button
						onClick={startVariant1Test}
						className="font-title text-foreground cursor-pointer border border-teal-600/10 bg-teal-600/10 text-base font-medium transition-all hover:bg-teal-600/30"
					>
						Start
					</Button>
					<Button
						onClick={abortVariant1Test}
						className="font-title text-foreground cursor-pointer border border-amber-600/10 bg-amber-600/10 text-base font-medium transition-all hover:bg-amber-600/30"
					>
						Abort
					</Button>
				</div>
			</div>
			<div className="flex flex-col gap-1 py-2.5">
				<div className="font-title text-foreground/70 text-sm font-medium uppercase">
					type 2: floating navbar
				</div>
				<div className="flex w-full flex-row flex-wrap items-center justify-start gap-x-2.5 gap-y-1">
					<Button
						onClick={startVariant2Test}
						className="font-title text-foreground cursor-pointer border border-teal-600/10 bg-teal-600/10 text-base font-medium transition-all hover:bg-teal-600/30"
					>
						Start
					</Button>
					<Button
						onClick={abortVariant2Test}
						className="font-title text-foreground cursor-pointer border border-amber-600/10 bg-amber-600/10 text-base font-medium transition-all hover:bg-amber-600/30"
					>
						Abort
					</Button>
				</div>
			</div>
		</div>
	);
};

export default OpenFriendsLeaderboardTest;
