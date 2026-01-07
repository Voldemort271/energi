import React from 'react';
import ProfileImg from '@/public/images/profile-image.png';
import Image from 'next/image';

const LogoBar = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="font-title text-2xl font-semibold">energi.</div>
			<div className="border-foreground/30 h-8 w-8 overflow-clip rounded-full border">
				<Image
					src={ProfileImg}
					alt={'Profile image'}
					className="h-full w-full object-cover"
				/>
			</div>
		</div>
	);
};

export default LogoBar;
