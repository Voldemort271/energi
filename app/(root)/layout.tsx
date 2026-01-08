import React, { ReactNode } from 'react';
import LogoBar from '@/components/root/logo-bar';

export default function MobileLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<div className="sm:border-foreground/10 bg-background h-screen w-screen overflow-y-scroll rounded-3xl p-5 pt-12 shadow-xl sm:h-[844px] sm:w-sm sm:border">
			<LogoBar />
			{children}
		</div>
	);
}
