import React from 'react';
import Link from 'next/link';

const SupportLinks = () => {
	return (
		<div className="font-title text-foreground/70 flex w-full flex-col items-center justify-center text-sm font-medium">
			<Link
				href={'/support/privacy-policy'}
				className="hover:text-foreground cursor-pointer transition-all"
			>
				Privacy Policy
			</Link>
			<Link
				href={'/support/terms-and-conditions'}
				className="hover:text-foreground cursor-pointer transition-all"
			>
				Terms and Conditions
			</Link>
			<Link
				href={'/support'}
				className="hover:text-foreground cursor-pointer transition-all"
			>
				FAQ and Support
			</Link>
		</div>
	);
};

export default SupportLinks;
