export type AvailableProfile = 'solarisxd' | 'markdolla' | 'meisabella';

export type ProfileData = {
	name: string;
	location?: string;
};

export const PROFILE_RECORDS: Record<AvailableProfile, ProfileData> = {
	markdolla: {
		name: 'Mark Gunthers',
		location: 'Munich, DE',
	},
	meisabella: {
		name: 'Isabella Gunthers',
		location: 'Mumbai, IN',
	},
	solarisxd: {
		name: 'Solar Powell',
	},
};
