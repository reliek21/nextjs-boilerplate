import React from 'react';
import { Metadata } from 'next';

import { BodyWrapper, SessionWrapper } from '@/components/context';

import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Dashboard'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<BodyWrapper>
			<SessionWrapper>{children}</SessionWrapper>
		</BodyWrapper>
	);
}
