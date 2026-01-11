import React from 'react';
import Image from 'next/image';
import ProfileImg from '@/public/images/profile-image.png';
import { Pencil } from 'lucide-react';

const ProfileCard = () => {
	return (
		<div className="flex w-full flex-col gap-1 py-4">
			<div className="flex flex-row items-center gap-2.5">
				<Image
					src={ProfileImg}
					alt={'Profile image'}
					className="h-20 w-20 rounded-lg"
				/>
				<div className="flex flex-col">
					<div className="font-title text-foreground text-2xl leading-none font-semibold">
						Mark Gunthers
					</div>
					<div className="text-foreground/70 flex flex-row items-center justify-start gap-1 text-base font-medium">
						<span>@markdolla</span>
						<span>&middot;</span>
						<span>Munich, DE</span>
					</div>
					<div className="flex flex-row items-center gap-1 text-sm font-medium text-teal-600 underline">
						Edit profile <Pencil size={14} />
					</div>
				</div>
			</div>
			<div className="grid w-full grid-cols-2 grid-rows-1 gap-5 pt-2.5">
				<div className="bg-foreground/5 border-foreground/10 h-full w-full rounded-md border px-2.5 py-3">
					<div className="text-foreground/80 text-sm font-medium">
						Current streak
					</div>
					<div className="font-title text-foreground text-lg font-semibold">
						23 weeks
					</div>
				</div>
				<div className="bg-foreground/5 border-foreground/10 h-full w-full rounded-md border px-2.5 py-3">
					<div className="text-foreground/80 text-sm font-medium">
						Weekly limit
					</div>
					<div className="font-title text-foreground text-lg font-semibold">
						300 kWh
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
