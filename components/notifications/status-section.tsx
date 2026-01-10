import React from 'react';

const StatusSection = () => {
	return (
		<div className="grid w-full grid-cols-2 grid-rows-1 gap-2.5 py-5">
			<div className="h-full w-full rounded-md border border-amber-500/10 bg-amber-500/10 px-2.5 py-3">
				<div className="font-title text-lg font-semibold text-amber-500">
					Current Usage
				</div>
				<div className="text-foreground/80 text-sm font-medium">
					87% of weekly limit used
				</div>
			</div>
			<div className="h-full w-full rounded-md border border-teal-500/10 bg-teal-500/10 px-2.5 py-3">
				<div className="font-title text-lg font-semibold text-teal-600">
					Weekly Report
				</div>
				<div className="text-foreground/80 text-sm font-medium">View here</div>
			</div>
		</div>
	);
};

export default StatusSection;
