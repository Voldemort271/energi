import React from 'react';
import Image from 'next/image';
import ClassroomPic from '@/public/images/classroom.jpg';
import Link from 'next/link';

const CharityDonation = () => {
	return (
		<div className="border-foreground/10 flex flex-col gap-2.5 rounded-lg border bg-teal-500/5 px-5 py-6">
			<div className="font-title text-xl font-semibold text-teal-400">
				Donate for a noble cause
			</div>
			<Image
				src={ClassroomPic}
				alt={'A picture of a classroom.'}
				className="aspect-video w-full rounded-sm object-cover"
			></Image>
			<div className="h-2.5"></div>
			<div className="font-body text-foreground/80 text-sm font-medium">
				We have partnered with <strong>VoltWallet&reg;</strong>, a non-profit
				organisation that organizes extensive bootcamps on energy conservation
				for school children aged 8-18 years. They rely on the generosity of
				donors like you to advance their mission. Please donate at the page
				linked below; even a small amount helps :)
			</div>
			<div className="h-2.5"></div>
			<Link
				href={'/'}
				className="font-title w-fit rounded-sm bg-amber-800 px-4 py-2 text-base font-semibold text-zinc-100 transition-all hover:scale-105"
			>
				Donate
			</Link>
		</div>
	);
};

export default CharityDonation;
