'use client';

import { ReactNode, useEffect } from 'react';
import { useAppPreferencesContext } from './app-preferences-context';

interface ThemeProviderWrapperProps {
	children: ReactNode;
}

export const ThemeProviderWrapper = ({
	children,
}: ThemeProviderWrapperProps) => {
	const { theme } = useAppPreferencesContext();

	useEffect(() => {
		const body = document.body;
		if (theme.id === 'dark' || theme.id === 'default') {
			body.classList.add('dark');
		} else {
			body.classList.remove('dark');
		}
	}, [theme]);

	return <>{children}</>;
};
