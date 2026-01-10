'use client';

import React, { useEffect, useState } from 'react';
import { notificationData, NotificationData } from '@/db/notification-data';
import { CheckCircle, Medal, Microwave, PartyPopper, User } from 'lucide-react';
import { formatTimeDiff } from '@/utils/date-utils';

interface NotificationElementProps extends NotificationData {
	currTime: Date;
}

const NotificationElement = ({
	category,
	timestamp,
	text,
	currTime,
}: NotificationElementProps) => {
	return (
		<div className="flex w-full flex-row items-start justify-center gap-2.5">
			{category === 'goal' ? (
				<div className="flex items-center justify-center rounded-full border border-teal-500/20 bg-teal-500/10 p-2.5 text-teal-500">
					<CheckCircle size={20} />
				</div>
			) : category === 'appliance' ? (
				<div className="bg-foreground/10 border-foreground/20 flex items-center justify-center rounded-full border p-2.5 text-zinc-400">
					<Microwave size={20} />
				</div>
			) : category === 'leaderboard' ? (
				<div className="flex items-center justify-center rounded-full border border-amber-500/20 bg-amber-500/10 p-2.5 text-amber-500">
					<Medal size={20} />
				</div>
			) : category === 'profile' ? (
				<div className="flex items-center justify-center rounded-full border border-sky-500/20 bg-sky-500/10 p-2.5 text-sky-600">
					<User size={20} />
				</div>
			) : (
				<div className="bg-foreground/5 border-foreground/10 text-foreground flex items-center justify-center rounded-full border p-2.5">
					<PartyPopper size={20} />
				</div>
			)}

			<div className="flex flex-col gap-1">
				<div className="font-body text-foreground w-full text-base">{text}</div>
				<div className="font-body text-foreground/70 w-full text-sm font-medium">
					{formatTimeDiff(timestamp, currTime)}
				</div>
			</div>
		</div>
	);
};

const NotificationDisplay = () => {
	const [currTime, setCurrTime] = useState(() => new Date());

	useEffect(() => {
		const id = setInterval(() => {
			setCurrTime(new Date());
		}, 60_000);

		return () => clearInterval(id);
	}, []);

	return (
		<div className="flex w-full flex-col gap-2.5 py-2.5">
			{notificationData.map((data, i) =>
				i === 0 ? (
					<NotificationElement
						key={i}
						category={data.category}
						timestamp={data.timestamp}
						text={data.text}
						currTime={currTime}
					/>
				) : (
					<div className="border-foreground/10 border-t pt-2.5" key={i}>
						<NotificationElement
							category={data.category}
							timestamp={data.timestamp}
							text={data.text}
							currTime={currTime}
						/>
					</div>
				),
			)}
		</div>
	);
};

export default NotificationDisplay;
