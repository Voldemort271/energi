'use client';

import React, { useState } from 'react';

const NotificationTabs = () => {
	const [activeTab, setActiveTab] = useState('All');
	const tabs = ['All', 'Alerts', 'Insights', 'Weekly'];

	return (
		<div className="flex gap-1 p-1 bg-foreground/5 rounded-lg">
			{tabs.map((tab) => (
				<button
					key={tab}
					onClick={() => setActiveTab(tab)}
					className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
						activeTab === tab
							? 'bg-foreground text-background'
							: 'text-foreground/70 hover:text-foreground'
					}`}
				>
					{tab}
				</button>
			))}
		</div>
	);
};

export default NotificationTabs;
