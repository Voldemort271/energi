import React, { Dispatch, SetStateAction } from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SettingsDropdownItem, SettingsDropdownList } from '@/db/settings-data';

interface ToggleSettingProps {
	title: string;
	children?: string;
	toggle?: boolean;
	setToggle?: Dispatch<SetStateAction<boolean>>;
}

interface DropdownSettingProps<T extends readonly SettingsDropdownItem[]> {
	title: string;
	menuItems: T;
	currItem: T[number];
	setCurrItem: Dispatch<SetStateAction<T[number]>>;
}

export const ToggleSettingItem = ({
	title,
	children,
	toggle,
	setToggle,
}: ToggleSettingProps) => {
	const isTaskInProgress = sessionStorage.getItem('taskInProgress') === 'true';

	return (
		<div className="flex w-full flex-col items-start justify-start">
			<div className="flex w-full items-center justify-between gap-5">
				<Label
					htmlFor={title}
					className="text-foreground font-title text-base font-semibold"
				>
					{title}
				</Label>
				<Switch
					checked={toggle}
					disabled={isTaskInProgress}
					onCheckedChange={(val) => setToggle?.(val)}
					id={title}
					className="disabled:bg-foreground/70! my-1 cursor-pointer data-[state=checked]:bg-teal-500 data-[state=unchecked]:bg-amber-800!"
				/>
			</div>
			<div className="text-foreground/70 max-w-60 text-sm font-normal">
				{children}
			</div>
		</div>
	);
};

export const DropdownSettingItem = ({
	title,
	menuItems,
	currItem,
	setCurrItem,
}: DropdownSettingProps<SettingsDropdownList>) => {
	const isTaskInProgress = sessionStorage.getItem('taskInProgress') === 'true';

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger
				className="flex w-full cursor-pointer flex-col items-start justify-start outline-none"
				disabled={isTaskInProgress}
			>
				<div className="text-foreground font-title text-base font-semibold">
					{title}
				</div>
				<div
					className={`text-sm font-semibold ${isTaskInProgress ? 'text-teal-600' : 'text-foreground/70'}`}
				>
					{currItem.name}
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-background/70 font-title w-full px-2 py-2.5 font-medium backdrop-blur-2xl">
				{menuItems.map((item) => (
					<DropdownMenuItem
						className="cursor-pointer"
						key={item.id}
						onClick={() => setCurrItem(item)}
					>
						{item.name}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
