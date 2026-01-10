import React from 'react';
import StatusSection from '@/components/notifications/status-section';
import ControlBar from '@/components/notifications/control-bar';
import NotificationDisplay from '@/components/notifications/notification-display';

const InboxPage = () => {
	return (
		<section className="flex h-full flex-col gap-2.5">
			<div className="font-title text-foreground pt-8 text-4xl font-bold tracking-tight">
				Notifications
			</div>
			<StatusSection />
			<ControlBar />
			<NotificationDisplay />
		</section>
	);
};

export default InboxPage;
