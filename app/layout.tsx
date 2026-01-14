import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import Satoshi from 'next/font/local';
import './globals.css';
import React, { ReactNode } from 'react';
import { AppPreferencesProvider } from '@/context/app-preferences-context';
import { ThemeProviderWrapper } from '@/context/theme-provider';
import { Analytics } from '@vercel/analytics/next';

const instrumentSans = Instrument_Sans({
	variable: '--font-instrument-sans',
	subsets: ['latin'],
});

const satoshi = Satoshi({
	src: [
		{
			path: '../public/fonts/satoshi/base.ttf',
			style: 'normal',
		},
		{
			path: '../public/fonts/satoshi/italic.ttf',
			style: 'italic',
		},
	],
	variable: '--font-satoshi',
});

export const metadata: Metadata = {
	title: 'Energi | Energy saver app for the future',
	description: 'Insert sample description here.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${satoshi.variable} ${instrumentSans.variable} dark antialiased`}
			>
				<AppPreferencesProvider>
					<ThemeProviderWrapper>{children}</ThemeProviderWrapper>
				</AppPreferencesProvider>
				<Analytics />
			</body>
		</html>
	);
}
