'use client';

import React, { ReactNode, useEffect, useRef } from 'react';
import LogoBar from '@/components/root/logo-bar';
import Lenis from 'lenis';
import Navbar from '@/components/root/navbar';
import Footer from '@/components/root/footer';
import { ToastProvider } from '@/components/ui/toast';

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
		<ToastProvider>
			<main
				ref={containerRef}
				className="sm:border-foreground/10 bg-background relative z-0 h-screen w-screen overflow-y-scroll overscroll-none rounded-3xl shadow-xl sm:h-211 sm:w-sm sm:border"
			>
				<div className="min-h-full p-5 pt-12 pb-20 sm:pb-5">
					<LogoBar />
					{children}
					{/*<div className="h-5" />*/}
					<Footer />
				</div>
				<div className="fixed bottom-0 z-50 w-full sm:sticky">
					<Navbar />
				</div>
			</main>
		</ToastProvider>
	);
}
