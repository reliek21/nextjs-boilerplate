import React from 'react';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';

import { cn } from '@/lib/utils';
import { CONFIG_ENVIRONMENTS } from '@/config';
import { Inter as FontSans } from 'next/font/google';

import { IBodyWrapper } from './interfaces/BodyWrapper';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans'
});

export default function BodyWrapper({
	children
}: IBodyWrapper): React.ReactElement {
	return (
		<html lang='en'>
			<Analytics />
			<SpeedInsights />
			<GoogleAnalytics gaId={CONFIG_ENVIRONMENTS.GOOGLE_ANALYTICS} />
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}>
				{children}
			</body>
		</html>
	);
}
