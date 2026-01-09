import React from 'react';
import ProfileImg from '@/public/images/profile-image.png';
import Image from 'next/image';
import Link from 'next/link';

const LogoBar = () => {
	return (
		<header className="flex items-center justify-between">
			<div className="font-title text-2xl font-semibold">energi.</div>
			<Link
				className="h-8 w-8 overflow-clip rounded-full transition-all hover:scale-110"
				href={'/profile'}
			>
				<Image
					src={ProfileImg}
					alt={'Profile image'}
					className="h-full w-full object-cover"
				/>
			</Link>
		</header>
	);
};

export default LogoBar;
