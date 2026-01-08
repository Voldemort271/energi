'use client';

import React, { ReactNode, useEffect, useRef } from 'react';
import LogoBar from '@/components/root/logo-bar';
import Lenis from 'lenis';

export default function MobileLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const lenis = new Lenis({
			wrapper: containerRef.current,
			lerp: 0.1,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return (
		<main
			ref={containerRef}
			className="sm:border-foreground/10 bg-background relative h-screen w-screen overflow-y-scroll overscroll-none rounded-3xl shadow-xl sm:h-[844px] sm:w-sm sm:border"
		>
			<div className="p-5 pt-12">
				<LogoBar />
				{children}
			</div>
			<div className="sticky bottom-0 h-16 w-full bg-red-400"></div>
		</main>
	);
}
