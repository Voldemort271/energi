'use client';

import React from 'react';
import OpenFriendsLeaderboardTest from '@/components/tests/open-friends-leaderboard';
import AddApplianceTest from '@/components/tests/add-appliance-test';

const TestsPage = () => {
	return (
		<section className="flex h-full flex-col gap-2.5">
			<div className="font-title px-5 py-8 text-4xl font-bold tracking-tight text-zinc-100">
				UI/UX Tests
			</div>
			<div className="bg-background flex flex-1 flex-col items-center gap-5 rounded-t-2xl p-5">
				<div className="font-title text-foreground/70 pt-5 text-sm font-medium">
					Here are (some of) the tests we have implemented. Thank you for your
					time :)
				</div>
				<div className="w-full space-y-2.5">
					<div className="font-title text-foreground/70 text-sm font-medium uppercase">
						general instructions
					</div>
					<div className="bg-foreground/5 flex w-full flex-col gap-2.5 rounded-lg px-4 py-5">
						The timer starts as soon as you click the &quot;Start Task&quot;
						button.
						<div className="bg-foreground/5 h-px w-full" />
						You would then perform the task with the given constraints (e.g.,
						light mode only, floating nav only, etc)
						<div className="bg-foreground/5 h-px w-full" />
						Changing your preferences (e.g., theme, floating nav) will be
						prevented while a task is running, since these tasks focus on your
						performance given these constraints.
						<div className="bg-foreground/5 h-px w-full" />
						This is not a test of your reflexes; please take your time.
						<div className="bg-foreground/5 h-px w-full" />
						Your time is recorded as soon as you hit the &quot;Finish Task&quot;
						button, and you can see your results in a pop-up at the top.
					</div>
				</div>
				<div className="mt-5 w-full space-y-2.5">
					<div className="font-title text-foreground/70 text-sm font-medium uppercase">
						available tests
					</div>
					<OpenFriendsLeaderboardTest />
					<AddApplianceTest />
				</div>
			</div>
		</section>
	);
};

export default TestsPage;
