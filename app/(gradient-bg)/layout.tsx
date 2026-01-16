'use client';

import React, { ReactNode } from 'react';
import Navbar from '@/components/root/navbar';
import LogoBar from '@/components/root/logo-bar';
import Footer from '@/components/root/footer';
import FloatingNav from '@/components/root/floating-nav';
import { useAppPreferencesContext } from '@/context/app-preferences-context';
import { ToastProvider } from '@/components/ui/toast';

export default function MobileLayoutWithGradient({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	const { floatingNav } = useAppPreferencesContext();

	return (
		<ToastProvider>
			<main className="bg-background sm:border-border relative z-0 h-screen w-screen overflow-y-scroll overscroll-none rounded-3xl shadow-xl sm:h-211 sm:w-sm sm:border">
				<div className="bg-background relative z-0 min-h-full pb-20 sm:pb-5">
					<div className="absolute -z-10 h-100 w-full bg-linear-60 from-teal-800 via-teal-600 to-amber-600" />
					<div className="px-5 pt-12">
						<LogoBar />
					</div>
					{children}
					<Footer />
				</div>
				<div className="pointer-events-none fixed bottom-0 z-50 w-full sm:sticky">
					{floatingNav ? <FloatingNav /> : <Navbar />}
				</div>
			</main>
		</ToastProvider>
	);
}
