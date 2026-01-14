import { toast } from 'sonner';

export type availableTasks = 'task1' | 'task2';

export const startTimedTask = (taskName: availableTasks): void => {
	toast.success('Timer started');
	sessionStorage.setItem(taskName, Date.now().toString());
};

export const endTimedTask = (taskName: availableTasks): number => {
	const startTimeStr = sessionStorage.getItem(taskName);
	if (!startTimeStr) return -1;

	const startTime = parseInt(startTimeStr, 10);
	const elapsedTime = (Date.now() - startTime) / 1000;
	sessionStorage.removeItem(taskName);
	toast.success(`Task completed in ${elapsedTime} seconds`);
	return elapsedTime;
};
