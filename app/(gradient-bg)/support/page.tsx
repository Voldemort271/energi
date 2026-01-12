import React from 'react';
import FAQSection from '@/components/support/faq-section';

const FAQPage = () => {
	return (
		<section className="flex h-full flex-col gap-2.5">
			<div className="font-title px-5 py-8 text-4xl font-bold tracking-tight text-zinc-100">
				Energi Support
			</div>
			<div className="bg-background flex flex-col items-center gap-5 rounded-t-2xl p-5 py-12">
				<div className="w-full space-y-2.5">
					<div className="font-title text-foreground/70 text-sm font-medium uppercase">
						Frequently asked questions
					</div>
					<FAQSection />
				</div>
			</div>
		</section>
	);
};

export default FAQPage;
