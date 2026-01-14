'use client';

import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const FloatingNav = () => {
	const [open, isOpen] = useState(false);

	return (
		<div className="pointer-events-none relative z-0 flex w-full flex-row items-end justify-end overflow-x-clip p-5">
			<div className="h-14 w-14">
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
			</div>
			<motion.div
				className="border-foreground/10 bg-background/70 text-foreground pointer-events-auto absolute bottom-0 left-full -z-10 h-52 w-52 origin-bottom-left rounded-tr-full border"
				initial={{ rotateZ: 0 }}
				animate={{ rotateZ: open ? -90 : 0 }}
				transition={{ duration: 0.3, ease: [0, 0.55, 0.45, 1] }}
			>
				{Array.from({ length: 4 }).map((item, i) => {
					const angle = (Math.PI / 2) * (i / 3);
					const x = 125 * Math.cos(angle);
					const y = -125 * Math.sin(angle);

					return (
						<motion.div
							key={i}
							className="border-foreground/20 absolute right-[calc(100%-56px)] bottom-0 flex h-14 w-14 items-center justify-center rounded-full border"
							animate={{ x, y, rotateZ: 90 }}
							transition={{ type: 'spring', stiffness: 300, damping: 25 }}
						>
							{i}
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
};

export default FloatingNav;
