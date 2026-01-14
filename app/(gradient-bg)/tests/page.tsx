'use client';

import React from 'react';
import { endTimedTask, startTimedTask } from '@/utils/timer-utils';

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
						Your time is recorded as soon as you hit the &quot;Finish Task&quot;
						button, and you can see your results here on this page.
						<div className="bg-foreground/5 h-px w-full" />
						<div
							className="w-full bg-red-400 px-5 py-5"
							onClick={() => startTimedTask('task1')}
						>
							click1
						</div>
						<div
							className="w-full bg-red-400 px-5 py-5"
							onClick={() => endTimedTask('task1')}
						>
							click2
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestsPage;
