export type ApplianceStatus = 'idle' | 'in-use' | 'standby';

export interface ApplianceData {
	id: string;
	name: string;
	model: string;
	status: ApplianceStatus;
	lastUsed: Date;
	image: string;
	powerUsage?: number; // in watts
}

export const applianceData: ApplianceData[] = [
	{
		id: '1',
		name: 'IFB Mb-MX444',
		model: 'Microwave',
		status: 'standby',
		lastUsed: new Date('2026-01-12T05:00:00Z'),
		image: '📱', // Modern microwave representation
		powerUsage: 800,
	},
	{
		id: '2',
		name: 'IFB Mb-MX444',
		model: 'Air Fryer',
		status: 'standby',
		lastUsed: new Date('2026-01-12T02:00:00Z'),
		image: '📱', // Air fryer representation  
		powerUsage: 1200,
	},
	{
		id: '3',
		name: 'IFB Mb-MX444',
		model: 'Refrigerator',
		status: 'standby',
		lastUsed: new Date('2026-01-12T05:00:00Z'),
		image: '📱', // Refrigerator representation
		powerUsage: 150,
	},
	{
		id: '4',
		name: 'IFB Mb-MX444',
		model: 'Washing Machine',
		status: 'in-use',
		lastUsed: new Date('2026-01-12T05:00:00Z'),
		image: '📱', // Washing machine representation
		powerUsage: 2000,
	},
];
