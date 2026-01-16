'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { applianceData } from '@/db/appliance-data';
import ApplianceCard from '@/components/appliances/appliance-card';
import AddNewButton from '@/components/appliances/add-new-button';
import AddApplianceModal from '@/components/appliances/add-appliance-modal';
import { useToast } from '@/components/ui/toast';
import { toast } from 'sonner';

const AppliancesPage = () => {
	const [deviceCount, setDeviceCount] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const [appliances, setAppliances] = useState(applianceData);
	const [showAddModal, setShowAddModal] = useState(false);

	useEffect(() => {
		// Animate device count on mount
		setIsVisible(true);
		const timer = setTimeout(() => {
			let count = 0;
			const interval = setInterval(() => {
				if (count < appliances.length) {
					count++;
					setDeviceCount(count);
				} else {
					clearInterval(interval);
				}
			}, 150);
		}, 800);

		return () => clearTimeout(timer);
	}, [appliances.length]);

	const handleAddAppliance = (newAppliance: any) => {
		setAppliances(prev => [...prev, newAppliance]);
		
		// Show success toast - matching partner's test completion style
		toast.success(`Appliance "${newAppliance.name}" added successfully`, {
			position: 'top-center',
			duration: 6000,
			closeButton: true,
		});
	};

	return (
		<motion.section 
			className="flex h-full flex-col gap-6"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			{/* Header Section */}
			<motion.div 
				className="space-y-4 pt-8"
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.1 }}
			>
				<div className="flex items-start justify-between">
					<div className="space-y-2">
						<motion.h1 
							className="font-title text-4xl font-bold tracking-tight text-foreground"
							initial={{ x: -20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							Your Appliances
						</motion.h1>
						<motion.p 
							className="text-foreground/70 text-base max-w-sm"
							initial={{ x: -20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							Manage and monitor your energy-using devices.
						</motion.p>
					</div>
					
					{/* Add New Button */}
					<motion.div
						initial={{ x: 20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						<AddNewButton onClick={() => setShowAddModal(true)} />
					</motion.div>
				</div>
			</motion.div>

			{/* Appliances List */}
			<motion.div 
				className="space-y-3"
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.6 }}
			>
				<AnimatePresence mode="popLayout">
					{appliances.map((appliance, index) => (
						<motion.div
							key={appliance.id}
							layout
							initial={{ opacity: 0, scale: 0.8, y: 20 }}
							animate={{ 
								opacity: 1, 
								scale: 1, 
								y: 0,
								transition: { 
									duration: 0.4, 
									delay: index < applianceData.length ? index * 0.1 : 0,
									ease: 'easeOut'
								}
							}}
							exit={{ opacity: 0, scale: 0.8, y: -20 }}
							whileHover={{ y: -4 }}
							transition={{ layout: { duration: 0.3 } }}
						>
							<ApplianceCard
								appliance={appliance}
								index={index}
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>

			{/* Device Counter */}
			<motion.div 
				className="flex justify-center pt-4"
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
				transition={{ duration: 0.5, delay: 1.2 }}
			>
				<motion.div
					className="rounded-full bg-foreground/5 border border-foreground/10 px-6 py-3"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
				>
					<motion.span 
						className="text-foreground/70 text-sm font-medium"
						key={deviceCount}
						initial={{ scale: 1.2, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						{deviceCount} device{deviceCount !== 1 ? 's' : ''} connected
					</motion.span>
				</motion.div>
			</motion.div>

			{/* Bottom spacing for navbar */}
			<div className="h-5" />

			{/* Add Appliance Modal */}
			<AddApplianceModal 
				isOpen={showAddModal} 
				onClose={() => setShowAddModal(false)} 
				onAdd={handleAddAppliance} 
			/>
		</motion.section>
	);
};

export default AppliancesPage;
