'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Zap, Wifi, Home, Lightbulb, Thermometer, Wind, Coffee, MonitorSpeaker, WashingMachine, Loader2 } from 'lucide-react';

interface AddApplianceModalProps {
	isOpen: boolean;
	onClose: () => void;
	onAdd: (appliance: any) => void;
}

const applianceTypes = [
	{ id: 'refrigerator', name: 'Refrigerator', icon: Home, avgWatts: 150, color: 'blue' },
	{ id: 'washing-machine', name: 'Washing Machine', icon: WashingMachine, avgWatts: 500, color: 'indigo' },
	{ id: 'air-conditioner', name: 'Air Conditioner', icon: Wind, avgWatts: 3000, color: 'cyan' },
	{ id: 'microwave', name: 'Microwave', icon: Coffee, avgWatts: 1000, color: 'orange' },
	{ id: 'dishwasher', name: 'Dishwasher', icon: MonitorSpeaker, avgWatts: 1800, color: 'purple' },
	{ id: 'heater', name: 'Space Heater', icon: Thermometer, avgWatts: 1500, color: 'red' },
	{ id: 'led-lights', name: 'LED Lights', icon: Lightbulb, avgWatts: 12, color: 'yellow' },
	{ id: 'tv', name: 'Smart TV', icon: MonitorSpeaker, avgWatts: 120, color: 'gray' },
];

const AddApplianceModal = ({ isOpen, onClose, onAdd }: AddApplianceModalProps) => {
	const [selectedType, setSelectedType] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		brand: '',
		model: '',
		location: '',
		wattage: '',
	});
	const [step, setStep] = useState(1);

	const handleTypeSelect = (type: any) => {
		setSelectedType(type.id);
		setFormData({
			...formData,
			name: type.name,
			wattage: type.avgWatts.toString(),
		});
		setStep(2);
	};

	const handleSubmit = async () => {
		setIsLoading(true);
		
		// Simulate API call delay for better UX
		await new Promise(resolve => setTimeout(resolve, 800));
		
		const newAppliance = {
			id: Date.now().toString(),
			name: formData.name,
			model: formData.brand + (formData.model ? ` ${formData.model}` : ''),
			status: 'standby' as const, // Use valid status from ApplianceData interface
			lastUsed: new Date(),
			image: '📱', // Default appliance icon
			powerUsage: parseInt(formData.wattage) || 0,
		};
		
		onAdd(newAppliance);
		setIsLoading(false);
		
		// Close modal immediately for better UX
		handleClose();
	};

	const handleClose = () => {
		if (isLoading) return; // Prevent closing during loading
		onClose();
		// Reset form when modal closes
		setTimeout(() => {
			setStep(1);
			setSelectedType(null);
			setFormData({ name: '', brand: '', model: '', location: '', wattage: '' });
		}, 300);
	};

	const selectedTypeData = applianceTypes.find(type => type.id === selectedType);

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleClose}
					/>

					{/* Modal */}
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center p-4"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.9 }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
					>
						<motion.div
							className="relative w-full max-w-lg mx-auto bg-background rounded-2xl shadow-2xl border border-foreground/10 max-h-[90vh] sm:max-h-[80vh] flex flex-col"
							onClick={(e) => e.stopPropagation()}
							initial={{ y: 50 }}
							animate={{ y: 0 }}
							transition={{ duration: 0.3, delay: 0.1 }}
						>
							{/* Header */}
							<div className="flex items-center justify-between p-6 border-b border-foreground/10">
								<div className="flex items-center gap-3">
									<motion.div 
										className="p-2 rounded-full bg-teal-500/10"
										initial={{ rotate: 0 }}
										animate={{ rotate: 360 }}
										transition={{ duration: 0.6, delay: 0.2 }}
									>
										<Zap className="h-5 w-5 text-teal-500" />
									</motion.div>
									<div>
										<motion.h2 
											className="text-xl font-semibold text-foreground"
											initial={{ opacity: 0, x: -10 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.2 }}
										>
											Add New Appliance
										</motion.h2>
										<motion.p 
											className="text-sm text-foreground/60"
											initial={{ opacity: 0, x: -10 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.25 }}
										>
											Step {step} of 2
										</motion.p>
									</div>
								</div>
								<motion.button
									onClick={handleClose}
									className="p-2 rounded-full hover:bg-foreground/5 transition-colors disabled:opacity-50"
									disabled={isLoading}
									whileHover={{ scale: isLoading ? 1 : 1.1 }}
									whileTap={{ scale: isLoading ? 1 : 0.9 }}
								>
									<X className="h-5 w-5 text-foreground/60" />
								</motion.button>
							</div>

							{/* Content */}
							<div className="flex-1 overflow-hidden flex flex-col">
								<div className="p-6 flex-1 overflow-y-auto">
									<AnimatePresence mode="wait">
										{step === 1 && (
											<motion.div
												key="step1"
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: -20 }}
												transition={{ duration: 0.3 }}
											>
												<h3 className="text-lg font-medium text-foreground mb-4">
													Choose Appliance Type
												</h3>
												<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 sm:max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-foreground/20 scrollbar-track-transparent">
													{applianceTypes.map((type, index) => (
														<motion.button
															key={type.id}
															initial={{ opacity: 0, y: 10 }}
															animate={{ opacity: 1, y: 0 }}
															transition={{ delay: index * 0.05 }}
															whileHover={{ scale: 1.02, y: -2 }}
															whileTap={{ scale: 0.98 }}
															onClick={() => handleTypeSelect(type)}
															className="p-3 sm:p-4 rounded-xl border border-foreground/10 hover:border-teal-500/30 hover:bg-teal-500/5 hover:shadow-lg transition-all duration-200 text-left group"
														>
															<div className="flex items-center gap-3">
																<motion.div 
																	className={`p-2 rounded-lg bg-${type.color}-500/10 group-hover:bg-${type.color}-500/20 transition-colors`}
																	whileHover={{ rotate: 5 }}
																>
																	<type.icon className={`h-5 w-5 text-${type.color}-500`} />
																</motion.div>
																<div>
																	<div className="font-medium text-foreground text-sm group-hover:text-teal-500 transition-colors">
																		{type.name}
																	</div>
																	<div className="text-xs text-foreground/60">
																		~{type.avgWatts}W avg
																	</div>
																</div>
															</div>
														</motion.button>
													))}
												</div>
											</motion.div>
										)}

									{step === 2 && (
										<motion.div
											key="step2"
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: -20 }}
											transition={{ duration: 0.3 }}
										>
											<div className="flex items-center gap-3 mb-6">
												<motion.button
													onClick={() => setStep(1)}
													className="text-teal-500 hover:text-teal-600"
													whileHover={{ scale: 1.05 }}
												>
													← Back
												</motion.button>
												<div className="flex items-center gap-2">
													{selectedTypeData && (
														<div className={`p-1.5 rounded-lg bg-${selectedTypeData.color}-500/10`}>
															<selectedTypeData.icon className={`h-4 w-4 text-${selectedTypeData.color}-500`} />
														</div>
													)}
													<span className="font-medium text-foreground">
														{selectedTypeData?.name} Details
													</span>
												</div>
											</div>

											<div className="space-y-4">
												<div>
													<label className="block text-sm font-medium text-foreground mb-2">
														Device Name
													</label>
													<input
														type="text"
														value={formData.name}
														onChange={(e) => setFormData({ ...formData, name: e.target.value })}
														className="w-full px-3 py-2 rounded-lg border border-foreground/20 bg-foreground/5 text-foreground focus:border-teal-500 focus:outline-none transition-colors"
														placeholder="e.g., Kitchen Refrigerator"
													/>
												</div>

												<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
													<div>
														<label className="block text-sm font-medium text-foreground mb-2">
															Brand
														</label>
														<input
															type="text"
															value={formData.brand}
															onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
															className="w-full px-3 py-2 rounded-lg border border-foreground/20 bg-foreground/5 text-foreground focus:border-teal-500 focus:outline-none transition-colors"
															placeholder="e.g., Samsung"
														/>
													</div>
													<div>
														<label className="block text-sm font-medium text-foreground mb-2">
															Model
														</label>
														<input
															type="text"
															value={formData.model}
															onChange={(e) => setFormData({ ...formData, model: e.target.value })}
															className="w-full px-3 py-2 rounded-lg border border-foreground/20 bg-foreground/5 text-foreground focus:border-teal-500 focus:outline-none transition-colors"
															placeholder="e.g., RF28T5001SR"
														/>
													</div>
												</div>

												<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
													<div>
														<label className="block text-sm font-medium text-foreground mb-2">
															Location
														</label>
														<input
															type="text"
															value={formData.location}
															onChange={(e) => setFormData({ ...formData, location: e.target.value })}
															className="w-full px-3 py-2 rounded-lg border border-foreground/20 bg-foreground/5 text-foreground focus:border-teal-500 focus:outline-none transition-colors"
															placeholder="e.g., Kitchen"
														/>
													</div>
													<div>
														<label className="block text-sm font-medium text-foreground mb-2">
															Power (Watts)
														</label>
														<input
															type="number"
															value={formData.wattage}
															onChange={(e) => setFormData({ ...formData, wattage: e.target.value })}
															className="w-full px-3 py-2 rounded-lg border border-foreground/20 bg-foreground/5 text-foreground focus:border-teal-500 focus:outline-none transition-colors"
															placeholder="150"
														/>
													</div>
												</div>
											</div>

											<div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-foreground/10 mt-6">
												<motion.button
													onClick={handleClose}
													disabled={isLoading}
													className="flex-1 px-4 py-2 rounded-lg border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors disabled:opacity-50 order-2 sm:order-1"
													whileHover={{ scale: isLoading ? 1 : 1.02 }}
													whileTap={{ scale: isLoading ? 1 : 0.98 }}
												>
													Cancel
												</motion.button>
												<motion.button
													onClick={handleSubmit}
													disabled={!formData.name || isLoading}
													className="flex-1 px-4 py-3 rounded-lg bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 order-1 sm:order-2"
													whileHover={{ scale: (formData.name && !isLoading) ? 1.02 : 1 }}
													whileTap={{ scale: (formData.name && !isLoading) ? 0.98 : 1 }}
												>
													{isLoading ? (
														<>
															<Loader2 className="h-4 w-4 animate-spin" />
															Adding...
														</>
													) : (
														<>
															<Wifi className="h-4 w-4" />
															Add Appliance
														</>
													)}
												</motion.button>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</div>
						</motion.div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default AddApplianceModal;
