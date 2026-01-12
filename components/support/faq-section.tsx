import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { faqItems } from '@/db/support-data';

const FAQSection = () => {
	return (
		<Accordion
			type="single"
			collapsible
			className="bg-foreground/5 flex w-full flex-col gap-2.5 rounded-lg px-4 py-5"
			defaultValue="item-1"
		>
			{faqItems.map(({ question, answer }, i) => (
				<AccordionItem value={`item-${i + 1}`} key={i}>
					<AccordionTrigger className="py-2.5">{question}</AccordionTrigger>
					<AccordionContent className="text-foreground/80 flex w-full flex-col gap-4 text-balance">
						{answer.map((el, j) => {
							return (
								<div key={j} className="w-full">
									{el}
								</div>
							);
						})}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
};

export default FAQSection;
