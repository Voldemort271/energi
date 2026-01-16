import React from 'react';
import { Flower } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className="font-title text-foreground/70 flex flex-col items-center justify-center gap-1 px-2.5 py-5 pt-12 pb-5 text-center text-sm font-medium sm:pb-12">
			<Flower size={24} />
			Every unit saved helps reduce collective energy waste. We&apos;re proud of
			you for taking this initiative!
			<div className="h-px" />
			<Link
				href={'/tests'}
				className="cursor-pointer font-semibold text-teal-600 underline transition-all hover:scale-105"
			>
				Go to tests
			</Link>
		</div>
	);
};

export default Footer;
