export type FaqItemType = {
	question: string;
	answer: string[];
};

// TODO: Add more FAQ elements
export const faqItems: FaqItemType[] = [
	{
		question: 'What is Energi, and why should I use it?',
		answer: [
			"Energi is an energy saver app where you can track your energy consumption trends. We're focused on the UN SDG 7: Affordable and Clean Energy. ",
			'Through our app we intend to provide our users with a simple and easy-to-use way of being energy conscious, for the ultimate goal of healing the Earth.',
		],
	},
];
