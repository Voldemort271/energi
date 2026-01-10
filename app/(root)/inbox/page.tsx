import React from 'react';
import StatusSection from '@/components/notifications/status-section';
import ControlBar from '@/components/notifications/control-bar';

const InboxPage = () => {
	return (
		<section className="flex h-full flex-col gap-2.5">
			<div className="font-title pt-8 text-4xl font-bold tracking-tight text-zinc-100">
				Notifications
			</div>
			<StatusSection />
			<ControlBar />
		</section>
	);
};

export default InboxPage;
