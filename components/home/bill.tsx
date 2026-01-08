'use client';

import React, { useState } from 'react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { CURRENCIES, CurrencyCode } from '@/db/currency';
import { convertCurrency } from '@/utils/currency-utils';
import { ChevronRight } from 'lucide-react';

const consumption = 539;
const pastAvg = 427;
const rate = 0.25;

const MonthlyBill = () => {
	const [currency, setCurrency] = useState<CurrencyCode>('EUR');

	// TODO: Move currency selection logic to Settings page so that user doesn't have to do it multiple times.
	return (
		<section className="flex w-full flex-col items-start justify-start rounded-lg border border-zinc-100/10 bg-amber-500/5 px-5 py-6">
			<div className="font-title flex w-full flex-col">
				<Select
					value={currency}
					onValueChange={(val: CurrencyCode) => setCurrency(val)}
				>
					<SelectTrigger className="mb-2.5 rounded-full text-sm font-medium">
						<SelectValue />
					</SelectTrigger>
					<SelectContent className="bg-background">
						<SelectGroup>
							{Object.values(CURRENCIES).map(({ code, label }) => (
								<SelectItem key={code} value={code}>
									{label}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<div className="text-xl font-semibold text-zinc-500">
					Projected monthly bill
				</div>
				<div className="font-title mb-1 text-4xl font-bold text-amber-400">
					{`${Math.round(convertCurrency(consumption * rate, 'EUR', currency) * 100) / 100} ${CURRENCIES[currency].symbol || currency}`}
				</div>

				{/*TODO: Link this to tips page*/}

				<div className="font-body mb-2.5 flex cursor-pointer items-center justify-start text-sm font-medium text-teal-500">
					See tips to reduce consumption <ChevronRight size={14} />
				</div>
				<div className="text-xl font-semibold text-zinc-500">
					Average over 3 months
				</div>
				<div className="font-title text-foreground text-4xl font-bold">
					{`${Math.round(convertCurrency(pastAvg * rate, 'EUR', currency) * 100) / 100} ${CURRENCIES[currency].symbol || currency}`}
				</div>
			</div>
		</section>
	);
};

export default MonthlyBill;
