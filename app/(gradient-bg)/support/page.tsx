'use client';

import React from 'react';
import { motion } from 'motion/react';
import FAQSection from '@/components/support/faq-section';
import TicketForm from '@/components/support/ticket-form';

const FAQPage = () => {
	return (
		<motion.section 
			className="flex h-full flex-col gap-2.5"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			<motion.div 
				className="font-title px-5 py-8 text-4xl font-bold tracking-tight text-zinc-100"
				initial={{ x: -20, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				Energi Support
			</motion.div>
			<motion.div 
				className="bg-background flex flex-col items-center gap-12 rounded-t-2xl p-5 pt-12"
				initial={{ y: 30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.5 }}
			>
				<motion.div 
					className="w-full space-y-2.5"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.7 }}
				>
					<div className="font-title text-foreground/70 text-sm font-medium uppercase">
						Frequently asked questions
					</div>
					<FAQSection />
				</motion.div>
				<motion.div 
					className="w-full space-y-2.5"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.9 }}
				>
					<div className="font-title text-foreground/70 text-sm font-medium uppercase">
						Write a support ticket
					</div>
					<TicketForm />
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default FAQPage;
