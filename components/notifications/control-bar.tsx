import React from 'react';
import { MailCheck, Trash } from 'lucide-react';

const ControlBar = () => {
	return (
		<div className="border-foreground/10 font-title flex h-9 w-full flex-row items-stretch justify-center gap-0 overflow-clip rounded-full border text-sm font-medium">
			<div className="bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground flex h-full w-full cursor-pointer items-center justify-center transition-all">
				<MailCheck size={16} />
				<span className="hidden pl-2 sm:block">Mark as read</span>
			</div>
			<div className="bg-foreground/10 h-full w-px"></div>
			<div className="bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground flex h-full w-full cursor-pointer items-center justify-center transition-all">
				<Trash size={16} />
				<span className="hidden pl-2 sm:block">Clear all</span>
			</div>
		</div>
	);
};

export default ControlBar;
