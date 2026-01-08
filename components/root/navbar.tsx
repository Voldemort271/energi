'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { BellDot, Home, Medal, Microwave } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface Props {
	path: string;
	icon: ReactNode;
	active: boolean;
}

// TODO: Move this to separate file in db maybe
const pages = [
	{ path: '/', icon: <Home size={24} /> },
	{ path: '/appliances', icon: <Microwave size={24} /> },
	{ path: '/leaderboard', icon: <Medal size={24} /> },
	{ path: '/inbox', icon: <BellDot size={24} /> },
];

const NavButton = ({ path, icon, active }: Props) => {
	return (
		<Link
			className={`text-foreground flex items-center justify-center rounded-lg p-2.5 transition-all hover:bg-amber-400/10 ${active && 'pointer-events-none bg-amber-400/30'}`}
			href={path}
		>
			{icon}
		</Link>
	);
};

const Navbar = () => {
	const pathname = usePathname();

	return (
		<nav className="bg-background/90 border-foreground/10 flex w-full justify-between gap-5 border-t px-12 py-3 backdrop-blur-2xl">
			{pages.map(({ path, icon }) => (
				<NavButton
					key={path}
					path={path}
					icon={icon}
					active={path === pathname}
				/>
			))}
		</nav>
	);
};

export default Navbar;
