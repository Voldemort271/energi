import React from 'react';

const NotificationItems = () => {
	return (
		<div className="space-y-4">
			{/* Caught up message */}
			<div className="rounded-lg bg-foreground/5 p-4">
				<div className="flex items-center gap-2 text-foreground">
					<span className="text-lg">🏁</span>
					<h3 className="font-title text-lg font-semibold">You're all caught up</h3>
				</div>
				<p className="text-foreground/80 text-sm mt-1">
					We'll notify you when something needs your attention.
				</p>
				<button className="text-amber-500 text-sm mt-2 underline">
					Notification settings
				</button>
			</div>

			{/* Notification items */}
			<div className="space-y-3">
				{/* Energy goal notification */}
				<button className="flex items-start gap-3 w-full p-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer text-left">
					<div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
					<div className="flex-1">
						<h4 className="font-title font-semibold text-foreground">
							Energy goal on track
						</h4>
						<p className="text-foreground/80 text-sm">
							You're within your weekly budget. Keep it up.
						</p>
					</div>
				</button>

				{/* Usage spike notification */}
				<button className="flex items-start gap-3 w-full p-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer text-left">
					<div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
					<div className="flex-1">
						<h4 className="font-title font-semibold text-foreground">
							Usage spike detected
						</h4>
						<p className="text-foreground/80 text-sm">
							Cooktop usage was higher than usual yesterday.
						</p>
					</div>
				</button>

				{/* Weekly summary notification */}
				<button className="flex items-start gap-3 w-full p-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer text-left">
					<div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
					<div className="flex-1">
						<h4 className="font-title font-semibold text-foreground">
							Weekly summary ready
						</h4>
						<p className="text-foreground/80 text-sm">
							View your energy report for this week.
						</p>
					</div>
				</button>
			</div>

			{/* Timestamp */}
			<p className="text-foreground/60 text-xs">
				Updated 2 hours ago
			</p>
		</div>
	);
};

export default NotificationItems;
