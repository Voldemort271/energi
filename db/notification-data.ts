export type NotificationCategory =
	| 'goal' // you're past the weekly goal etc etc
	| 'appliance' // this appliance used 30% of your goal today
	| 'profile' // related to account settings
	| 'leaderboard' // this person passed you
	| 'general'; // general app updates

export type NotificationData = {
	category: NotificationCategory;
	timestamp: Date;
	text: string;
};

export const notificationData: NotificationData[] = [
	{
		category: 'appliance',
		timestamp: new Date('2026-01-10T14:05:00Z'),
		text: 'Your appliance IFB Mb-MX444 has used 10% of your weekly energy limit so far.',
	},
	{
		category: 'goal',
		timestamp: new Date('2026-01-08T09:15:00Z'),
		text: "You've used up 50% of your limit this week.",
	},
	{
		category: 'leaderboard',
		timestamp: new Date('2026-01-08T07:45:00Z'),
		text: 'Alex just passed you on the weekly leaderboard.',
	},
	{
		category: 'profile',
		timestamp: new Date('2026-01-04T16:10:00Z'),
		text: 'Your account settings were updated successfully! :)',
	},
	{
		category: 'leaderboard',
		timestamp: new Date('2026-01-03T20:30:00Z'),
		text: "You're now in the top 10% of energy-conscious users this week!",
	},
	{
		category: 'general',
		timestamp: new Date('2026-01-02T10:00:00Z'),
		text: 'A new app update is available with performance improvements.',
	},
];
