'use client';

import React, { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from '@/components/root/navbar';
import LogoBar from '@/components/root/logo-bar';
import Footer from '@/components/root/footer';

export default function MobileLayoutWithGradient({
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

		const raf = (time: number) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);

		const resizeObserver = new ResizeObserver(() => {
			lenis.resize();
		});

		resizeObserver.observe(containerRef.current);

		return () => {
			resizeObserver.disconnect();
			lenis.destroy();
		};
	}, []);

	return (
		<main
			ref={containerRef}
			className="bg-background relative z-0 h-screen w-screen overflow-y-scroll overscroll-none rounded-3xl shadow-xl sm:h-211 sm:w-sm sm:border sm:border-zinc-700"
		>
			{/*TODO: Colour border according to theme*/}
			<div className="bg-background relative z-0 min-h-full">
				<div className="absolute -z-10 h-100 w-full bg-linear-60 from-teal-800 via-teal-600 to-amber-600" />
				<div className="px-5 pt-12">
					<LogoBar />
				</div>
				{children}
				<Footer />
			</div>
			<div className="fixed bottom-0 z-50 w-full sm:sticky">
				<Navbar />
			</div>
		</main>
	);
}
