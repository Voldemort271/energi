import React, { ReactNode } from 'react';

export default function MobileLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<div className="sm:border-foreground/20 bg-background h-screen w-screen rounded-xl sm:h-[844px] sm:w-sm sm:border">
			{children}
		</div>
	);
}
