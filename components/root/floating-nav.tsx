'use client';

import { motion } from 'motion/react';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Menu } from 'lucide-react';
import { availablePages, NavItemType } from '@/db/page-content-data';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavItemProps extends NavItemType {
	index: number;
	x: number;
	y: number;
	open: boolean;
	isOpen: Dispatch<SetStateAction<boolean>>;
	active: boolean;
}

const navRadius = 208;
const navItemRadius = 56;

const FloatingNavItem = ({
	index,
	x,
	y,
	open,
	isOpen,
	path,
	icon,
	active,
}: NavItemProps) => {
	return (
		<motion.div
			style={{
				width: `${navItemRadius}px`,
				height: `${navItemRadius}px`,
				right: `calc(100% - ${navItemRadius}px)`,
			}}
			whileHover={{
				scale: 1.05,
			}}
			onClick={() => isOpen(false)}
			className={`border-foreground/20 absolute bottom-0 flex cursor-pointer items-center justify-center rounded-full border backdrop-blur-2xl hover:bg-amber-400/10 ${active && 'pointer-events-none bg-amber-400/30'}`}
			animate={{
				x,
				y,
				rotateZ: open ? 90 : 0,
				transition: {
					duration: 0.5 + 0.2 * index,
					ease: [0, 0.55, 0.45, 1],
				},
			}}
			transition={{ duration: 0.3, ease: [0, 0.55, 0.45, 1] }}
		>
			<Link
				href={path}
				className="flex h-full w-full items-center justify-center"
			>
				{icon}
			</Link>
		</motion.div>
	);
};

const FloatingNav = () => {
	const [open, isOpen] = useState(false);
	const pathname = usePathname();

	return (
		<div className="pointer-events-none relative z-0 flex w-full flex-row items-end justify-end overflow-x-clip p-5">
			<motion.div
				className="border-foreground/10 bg-background/70 text-foreground pointer-events-auto flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border shadow-2xl backdrop-blur-2xl"
				onClick={() => isOpen(!open)}
				initial={{ rotateZ: 0 }}
				whileHover={{ rotateZ: open ? -45 : -30 }}
				animate={{ rotateZ: open ? -45 : 0, scale: open ? 1.05 : 1 }}
				transition={{ duration: 0.3, ease: [0, 0.55, 0.45, 1] }}
			>
				<Menu />
			</motion.div>
			<motion.div
				style={{
					width: `${navRadius}px`,
					height: `${navRadius}px`,
				}}
				className="border-foreground/10 bg-background/70 text-foreground pointer-events-auto absolute bottom-0 left-full -z-10 origin-bottom-left rounded-tr-full border"
				initial={{ rotateZ: 0 }}
				animate={{ rotateZ: open ? -90 : 0 }}
				transition={{ duration: 0.5, ease: [0, 0.55, 0.45, 1] }}
			>
				{availablePages.map(({ path, icon }, i) => {
					const angle = (Math.PI / 2) * (1 - i / (availablePages.length - 1));
					const x = ((navRadius + navItemRadius) / 2) * Math.cos(angle);
					const y = (-(navRadius + navItemRadius) / 2) * Math.sin(angle);

					return (
						<FloatingNavItem
							path={path}
							icon={icon}
							index={i}
							x={x}
							y={y}
							open={open}
							isOpen={isOpen}
							key={i}
							active={path === pathname}
						/>
					);
				})}
			</motion.div>
		</div>
	);
};

export default FloatingNav;
