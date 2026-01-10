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
	catchphrase: string;
	children: string;
}

const AlertContainer = ({ variant, catchphrase, children }: Props) => {
	return (
		<section className={alertVariants({ variant })}>
			{variant === 'warning' ? (
				<AlertTriangle />
			) : variant === 'success' ? (
				<PartyPopper />
			) : (
				<CircleX />
			)}
			<span className="text-sm leading-tight font-medium">
				<span className="font-semibold">{catchphrase}</span> {children}
			</span>
		</section>
	);
};

export default AlertContainer;
