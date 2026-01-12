'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ApplianceData } from '@/db/appliance-data';
import { formatTimeDiff } from '@/utils/date-utils';
import { ChevronRight } from 'lucide-react';

interface ApplianceCardProps {
	appliance: ApplianceData;
	index: number;
}

const ApplianceCard = ({ appliance, index }: ApplianceCardProps) => {
	const [isHovered, setIsHovered] = useState(false);

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'in-use':
				return 'text-amber-500';
			case 'standby':
				return 'text-teal-500';
			default:
				return 'text-foreground/60';
		}
	};

	const getStatusBgColor = (status: string) => {
		switch (status) {
			case 'in-use':
				return 'bg-amber-500/10 border-amber-500/20';
			case 'standby':
				return 'bg-teal-500/10 border-teal-500/20';
			default:
				return 'bg-foreground/5 border-foreground/10';
		}
	};

	const getStatusText = (status: string) => {
		switch (status) {
			case 'in-use':
				return 'In use';
			case 'standby':
				return 'On standby';
			default:
				return 'Idle';
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ 
				duration: 0.5, 
				delay: index * 0.1,
				ease: [0.25, 0.46, 0.45, 0.94]
			}}
			whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			className="group relative overflow-hidden rounded-xl bg-foreground/5 border border-foreground/10 p-4 cursor-pointer transition-all duration-300 hover:bg-foreground/10 hover:border-foreground/20"
		>
			<div className="flex items-center gap-4">
				{/* Appliance Icon/Image */}
				<motion.div 
					className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-foreground/10 to-foreground/5 border border-foreground/10"
					animate={{ 
						rotate: appliance.status === 'in-use' ? [0, 2, -2, 0] : 0,
						scale: isHovered ? 1.05 : 1
					}}
					transition={{ 
						rotate: { duration: 3, repeat: appliance.status === 'in-use' ? Infinity : 0 },
						scale: { duration: 0.2 }
					}}
				>
					{/* Custom appliance icon based on model */}
					<div className="flex items-center justify-center text-foreground/70">
						{appliance.model === 'Microwave' && (
							<div className="relative">
								<div className="w-6 h-5 border-2 border-foreground/40 rounded-sm">
									<div className="w-2 h-2 bg-foreground/20 rounded-full absolute top-1 left-1"></div>
									<div className="w-3 h-0.5 bg-foreground/30 absolute bottom-1 left-1"></div>
								</div>
							</div>
						)}
						{appliance.model === 'Air Fryer' && (
							<div className="relative">
								<div className="w-5 h-6 bg-foreground/20 rounded-full border-2 border-foreground/40">
									<div className="w-2 h-1 bg-foreground/40 rounded absolute top-1 left-1.5"></div>
									<div className="w-1 h-1 bg-foreground/60 rounded-full absolute top-0 left-2"></div>
								</div>
							</div>
						)}
						{appliance.model === 'Refrigerator' && (
							<div className="relative">
								<div className="w-4 h-6 bg-foreground/20 rounded-sm border-2 border-foreground/40">
									<div className="w-3 h-0.5 bg-foreground/30 absolute top-2 left-0.5"></div>
									<div className="w-1 h-3 bg-foreground/30 absolute right-0 top-1 rounded-l"></div>
								</div>
							</div>
						)}
						{appliance.model === 'Washing Machine' && (
							<div className="relative">
								<div className="w-6 h-6 bg-foreground/20 rounded-full border-2 border-foreground/40">
									<motion.div 
										className="w-3 h-3 border border-foreground/40 rounded-full absolute top-1.5 left-1.5"
										animate={{ rotate: appliance.status === 'in-use' ? 360 : 0 }}
										transition={{ duration: 2, repeat: appliance.status === 'in-use' ? Infinity : 0, ease: "linear" }}
									>
										<div className="w-1 h-1 bg-foreground/60 rounded-full absolute top-1 left-1"></div>
									</motion.div>
								</div>
							</div>
						)}
					</div>
					
					{/* Status indicator dot */}
					<motion.div
						className={`absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-background ${
							appliance.status === 'in-use' ? 'bg-amber-500' : 'bg-teal-500'
						}`}
						animate={{ 
							scale: appliance.status === 'in-use' ? [1, 1.2, 1] : 1,
							opacity: appliance.status === 'in-use' ? [1, 0.7, 1] : 1
						}}
						transition={{ duration: 1.5, repeat: Infinity }}
					/>
				</motion.div>

				{/* Appliance Info */}
				<div className="flex-1">
					<h3 className="font-title text-lg font-semibold text-foreground">
						{appliance.name}
					</h3>
					<div className="flex items-center gap-2 mt-1">
						<motion.div 
							className={`flex items-center gap-1.5 rounded-full border px-2 py-1 text-xs font-medium ${getStatusBgColor(appliance.status)}`}
							animate={{ opacity: isHovered ? 1 : 0.8 }}
						>
							<div className={`h-1.5 w-1.5 rounded-full ${
								appliance.status === 'in-use' ? 'bg-amber-500' : 'bg-teal-500'
							}`} />
							<span className={getStatusColor(appliance.status)}>
								{getStatusText(appliance.status)}
							</span>
						</motion.div>
					</div>
					<p className="text-foreground/60 text-sm mt-1">
						Last used {formatTimeDiff(appliance.lastUsed)}
					</p>
				</div>

				{/* Action Button */}
				<motion.div
					className="flex items-center gap-2"
					animate={{ x: isHovered ? -5 : 0 }}
					transition={{ duration: 0.2 }}
				>
					<span className={`rounded-full px-3 py-1.5 text-xs font-medium ${getStatusBgColor(appliance.status)} ${getStatusColor(appliance.status)}`}>
						{appliance.status === 'in-use' ? 'Live' : 'Idle'}
					</span>
					<motion.div
						animate={{ x: isHovered ? 5 : 0, opacity: isHovered ? 1 : 0.6 }}
						transition={{ duration: 0.2 }}
					>
						<ChevronRight size={20} className="text-foreground/40" />
					</motion.div>
				</motion.div>
			</div>

			{/* Hover overlay effect */}
			<motion.div
				className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-foreground/5 to-transparent"
				initial={{ x: '-100%', opacity: 0 }}
				animate={{ 
					x: isHovered ? '100%' : '-100%',
					opacity: isHovered ? 1 : 0
				}}
				transition={{ duration: 0.6 }}
			/>
		</motion.div>
	);
};

export default ApplianceCard;
