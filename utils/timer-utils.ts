import { toast } from 'sonner';

export type availableTasks = 'task1' | 'task2';

export const startTimedTask = (taskName: availableTasks): void => {
	if (typeof window === 'undefined') return;

	const isAnyTaskRunning = sessionStorage.getItem('taskInProgress') === 'true';
	const isThisTaskRunning = !!sessionStorage.getItem(taskName);

	if (isThisTaskRunning) {
		toast.error('This task is already running', { position: 'top-center' });
		return;
	}

	if (isAnyTaskRunning) {
		toast.error('Another task is already running', { position: 'top-center' });
		return;
	}

	sessionStorage.setItem('taskInProgress', 'true');
	sessionStorage.setItem(taskName, Date.now().toString());
	toast.success('Timer started', { position: 'top-center' });
};

export const endTimedTask = (taskName: availableTasks): number => {
	if (typeof window === 'undefined') return -1;

	const startTimeStr = sessionStorage.getItem(taskName);
	const isTaskRunning = !!sessionStorage.getItem('taskInProgress');

	if (!startTimeStr || !isTaskRunning) return -1;

	const startTime = parseInt(startTimeStr, 10);
	const elapsedTime = (Date.now() - startTime) / 1000;
	sessionStorage.removeItem('taskInProgress');
	sessionStorage.removeItem(taskName);
	toast.success(`Task completed in ${elapsedTime} seconds`, {
		position: 'top-center',
	});
	return elapsedTime;
};
