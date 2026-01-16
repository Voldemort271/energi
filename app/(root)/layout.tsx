'use client';

import React, { ReactNode } from 'react';
import LogoBar from '@/components/root/logo-bar';
import Footer from '@/components/root/footer';
import { ToastProvider } from '@/components/ui/toast';
import FloatingNav from '@/components/root/floating-nav';
import Navbar from '@/components/root/navbar';
import { useAppPreferencesContext } from '@/context/app-preferences-context';

export default function MobileLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	const { floatingNav } = useAppPreferencesContext();

	return (
		<ToastProvider>
			<main className="sm:border-foreground/10 bg-background relative z-0 h-screen w-screen overflow-x-clip overflow-y-scroll overscroll-none rounded-3xl shadow-xl sm:h-211 sm:w-sm sm:border">
				<div className="min-h-full p-5 pt-12 pb-20 sm:pb-5">
					<LogoBar />
					{children}
					{/*<div className="h-5" />*/}
					<Footer />
				</div>
				<div className="pointer-events-none fixed bottom-0 z-50 w-full sm:sticky">
					{floatingNav ? <FloatingNav /> : <Navbar />}
				</div>
			</main>
		</ToastProvider>
	);
}
