import React, { Dispatch, SetStateAction } from 'react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { AvailableProfile, PROFILE_RECORDS } from '@/db/profiles';
import { useRouter } from 'next/navigation';

interface Props {
	currUser: AvailableProfile;
	setCurrUser: Dispatch<SetStateAction<AvailableProfile>>;
}

const AccountSelectMenu = ({ currUser, setCurrUser }: Props) => {
	const router = useRouter();

	return (
		<Select
			value={currUser}
			onValueChange={(val) => setCurrUser(val as AvailableProfile)}
		>
			<SelectTrigger className="mb-2.5 min-w-50 cursor-pointer rounded-full border-zinc-950/10! bg-zinc-950/20! text-sm font-medium text-zinc-100">
				<SelectValue />
			</SelectTrigger>
			<SelectContent className="bg-background/70 backdrop-blur-2xl">
				<SelectGroup className="font-title px-2 py-2.5 font-medium">
					{Object.entries(PROFILE_RECORDS).map(([key, { name }]) => (
						<SelectItem
							key={key}
							value={key}
							className="hover:bg-background/30! cursor-pointer"
						>
							{name}
						</SelectItem>
					))}
					<div className="bg-foreground/10 my-2.5 h-px w-full"></div>
					<div
						onClick={() => router.push('/')}
						className="w-full cursor-pointer rounded-md border border-rose-500/10 bg-rose-500/10 px-4 py-2 text-center text-sm text-rose-600 hover:scale-105"
					>
						Log out
					</div>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default AccountSelectMenu;
