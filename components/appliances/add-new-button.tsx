'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

interface AddNewButtonProps {
	onClick: () => void;
}

const AddNewButton = ({ onClick }: AddNewButtonProps) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.button
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3, delay: 0.2 }}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			onClick={onClick}
			className="group relative overflow-hidden rounded-full bg-teal-500/10 border border-teal-500/20 px-6 py-3 text-sm font-medium text-teal-500 transition-all duration-300 hover:bg-teal-500/20 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/10"
		>
			<div className="flex items-center gap-2">
				<motion.div
					animate={{ rotate: isHovered ? 90 : 0 }}
					transition={{ duration: 0.3 }}
				>
					<Plus size={16} />
				</motion.div>
				<span>Add new...</span>
			</div>
			
			{/* Animated background effect */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-teal-400/20"
				initial={{ x: '-100%' }}
				animate={{ x: isHovered ? '0%' : '-100%' }}
				transition={{ duration: 0.3 }}
			/>
			
			{/* Ripple effect on click */}
			<motion.div
				className="absolute inset-0 bg-teal-500/30 rounded-full"
				initial={{ scale: 0, opacity: 0 }}
				whileTap={{ scale: 4, opacity: [0, 1, 0] }}
				transition={{ duration: 0.4 }}
			/>
		</motion.button>
	);
};

export default AddNewButton;
