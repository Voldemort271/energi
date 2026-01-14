import { BellDot, Home, Medal, Microwave } from 'lucide-react';
import React, { ReactNode } from 'react';

export type NavItemType = {
	path: string;
	icon: ReactNode;
	name?: string;
};

export const availablePages: NavItemType[] = [
	{ path: '/', icon: <Home size={24} />, name: 'Home' },
	{ path: '/appliances', icon: <Microwave size={24} />, name: 'Appliances' },
	{ path: '/leaderboard', icon: <Medal size={24} />, name: 'Leaderboard' },
	{ path: '/inbox', icon: <BellDot size={24} />, name: 'Inbox' },
];
