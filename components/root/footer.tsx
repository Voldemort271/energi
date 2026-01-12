import React from 'react';
import { Flower } from 'lucide-react';

const Footer = () => {
	return (
		<div className="font-title text-foreground/70 flex flex-col items-center justify-center gap-1 px-2.5 py-5 pt-12 text-center text-sm font-medium">
			<Flower size={24} />
			Every unit saved helps reduce collective energy waste. We&apos;re proud of
			you for taking this initiative!
		</div>
	);
};

export default Footer;
