'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { availablePages } from '@/db/page-content-data';

interface Props {
	path: string;
	icon: ReactNode;
	active: boolean;
}

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
		<nav className="bg-background/90 border-foreground/10 pointer-events-auto flex w-full justify-between gap-5 border-t px-5 py-3 backdrop-blur-2xl sm:px-12">
			{availablePages.map(({ path, icon }) => (
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
