import React, { Dispatch, SetStateAction } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface ToggleSettingProps {
	title: string;
	children?: string;
	toggle?: boolean;
	setToggle?: Dispatch<SetStateAction<boolean>>;
}

const ToggleSettingItem = ({
	title,
	children,
	toggle,
	setToggle,
}: ToggleSettingProps) => {
	return (
		<div className="flex flex-col items-start justify-start">
			<div className="flex w-full items-center justify-between gap-5">
				<Label
					htmlFor="airplane-mode"
					className="text-foreground font-title text-base font-semibold"
				>
					{title}
				</Label>
				{toggle && setToggle ? (
					<Switch
						checked={toggle}
						onCheckedChange={(val) => setToggle(val)}
						id="airplane-mode"
						className="my-1 cursor-pointer data-[state=checked]:bg-teal-500 data-[state=unchecked]:bg-amber-800!"
					/>
				) : (
					<Switch
						id="airplane-mode"
						className="my-1 cursor-pointer data-[state=checked]:bg-teal-500 data-[state=unchecked]:bg-amber-800!"
					/>
				)}
			</div>
			<div className="text-foreground/70 max-w-60 text-sm font-normal">
				{children}
			</div>
		</div>
	);
};

const PreferencesSection = () => {
	return (
		<div className="space-y-2.5">
			<div className="font-title text-foreground/70 text-sm font-medium uppercase">
				Preferences
			</div>
			<div className="bg-foreground/5 flex w-full flex-col gap-2.5 rounded-lg px-4 py-5">
				<ToggleSettingItem title="Notifications">
					Enable notifications for timely updates on your smartphone.
				</ToggleSettingItem>
				<div className="bg-foreground/5 h-px w-full" />
				<ToggleSettingItem title="Location Access">
					This is needed to show your standing in the Local Leaderboard.
				</ToggleSettingItem>
			</div>
		</div>
	);
};

export default PreferencesSection;
