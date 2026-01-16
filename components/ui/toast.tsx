'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, X, AlertCircle, Info } from 'lucide-react';

export interface Toast {
	id: string;
	title: string;
	description?: string;
	type: 'success' | 'error' | 'info' | 'warning';
	duration?: number;
}

interface ToastProps extends Toast {
	onClose: (id: string) => void;
}

const ToastComponent = ({ id, title, description, type, duration = 4000, onClose }: ToastProps) => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
			setTimeout(() => onClose(id), 300);
		}, duration);

		return () => clearTimeout(timer);
	}, [id, duration, onClose]);

	const icons = {
		success: CheckCircle,
		error: AlertCircle,
		info: Info,
		warning: AlertCircle,
	};

	const colors = {
		success: 'text-green-500 bg-green-500/10 border-green-500/20',
		error: 'text-red-500 bg-red-500/10 border-red-500/20',
		info: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
		warning: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
	};

	const Icon = icons[type];

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, x: 300, scale: 0.9 }}
					animate={{ opacity: 1, x: 0, scale: 1 }}
					exit={{ opacity: 0, x: 300, scale: 0.9 }}
					transition={{ duration: 0.3, ease: 'easeOut' }}
					className={`relative flex items-start gap-3 p-4 rounded-xl border backdrop-blur-sm ${colors[type]} shadow-lg`}
				>
					<Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
					<div className="flex-1 min-w-0">
						<p className="text-sm font-semibold text-foreground">{title}</p>
						{description && (
							<p className="text-sm text-foreground/70 mt-1">{description}</p>
						)}
					</div>
					<button
						onClick={() => {
							setIsVisible(false);
							setTimeout(() => onClose(id), 300);
						}}
						className="p-1 rounded-full hover:bg-foreground/10 transition-colors"
					>
						<X className="h-4 w-4 text-foreground/60" />
					</button>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

interface ToastProviderProps {
	children: React.ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
	const [toasts, setToasts] = useState<Toast[]>([]);

	const addToast = (toast: Omit<Toast, 'id'>) => {
		const id = Math.random().toString(36).substring(7);
		setToasts(prev => [...prev, { ...toast, id }]);
	};

	const removeToast = (id: string) => {
		setToasts(prev => prev.filter(toast => toast.id !== id));
	};

	const toastContext = {
		addToast,
		removeToast,
	};

	return (
		<ToastContext.Provider value={toastContext}>
			{children}
			<div className="fixed top-4 right-4 z-[100] space-y-2 pointer-events-none">
				{toasts.map(toast => (
					<div key={toast.id} className="pointer-events-auto">
						<ToastComponent {...toast} onClose={removeToast} />
					</div>
				))}
			</div>
		</ToastContext.Provider>
	);
};

const ToastContext = React.createContext<{
	addToast: (toast: Omit<Toast, 'id'>) => void;
	removeToast: (id: string) => void;
} | null>(null);

export const useToast = () => {
	const context = React.useContext(ToastContext);
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider');
	}
	return context;
};
