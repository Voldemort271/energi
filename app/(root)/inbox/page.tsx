'use client';

import React from 'react';
import { motion } from 'motion/react';
import StatusSection from '@/components/notifications/status-section';
import ControlBar from '@/components/notifications/control-bar';
import NotificationDisplay from '@/components/notifications/notification-display';

const InboxPage = () => {
	return (
		<motion.section 
			className="flex h-full flex-col gap-2.5"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			<motion.div 
				className="font-title text-foreground pt-8 text-4xl font-bold tracking-tight"
				initial={{ x: -20, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				Notifications
			</motion.div>
			<motion.div
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.4 }}
			>
				<StatusSection />
			</motion.div>
			<motion.div
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.5 }}
			>
				<ControlBar />
			</motion.div>
			<motion.div
				initial={{ y: 30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.6 }}
			>
				<NotificationDisplay />
			</motion.div>
		</motion.section>
	);
};

export default InboxPage;
