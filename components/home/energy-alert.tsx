import React from 'react';
import { AlertTriangle, CircleX, PartyPopper } from 'lucide-react';
import { cva } from 'class-variance-authority';

const alertVariants = cva(
	[
		'font-body',
		'flex gap-2.5',
		'rounded-lg',
		'px-5',
		'py-2.5',
		'text-zinc-100/70',
	],
	{
		variants: {
			variant: {
				warning: ['bg-amber-950'],
				success: ['bg-emerald-950'],
				error: ['bg-rose-950'],
			},
		},
	},
);

interface Props {
	variant: 'warning' | 'success' | 'error';
}

const EnergyAlert = ({ variant }: Props) => {
	return (
		<section className={alertVariants({ variant })}>
			{variant === 'warning' ? (
				<>
					<AlertTriangle />
					<span className="text-sm leading-tight font-medium">
						<span className="font-semibold">Buckle up!</span> You&apos;ve used
						up 87% of your weekly energy limit.
					</span>
				</>
			) : variant === 'success' ? (
				<>
					<PartyPopper />
					<span className="text-sm leading-tight font-medium">
						<span className="font-semibold">Keep it up!</span> You&apos;ve used
						only 13% of your weekly energy limit.
					</span>
				</>
			) : (
				<>
					<CircleX />
					<span className="text-sm leading-tight font-medium">
						<span className="font-semibold">Oh no!</span> You&apos;ve used up
						124% of your weekly energy limit.
					</span>
				</>
			)}
		</section>
	);
};

export default EnergyAlert;
