import React from 'react';
import { Metadata } from 'next';

import { MarginContainer } from '@/components/ui/custom';
import { GradientContainer } from '@/components/context';
import { LoginSection } from '@/sections';

// TODO: improve SEO here
export const metadata: Metadata = {
	title: 'Login',
	description: 'Login page'
};

export default function LoginPage(): React.ReactElement {
	return (
		<GradientContainer>
			<MarginContainer>
				<LoginSection />
			</MarginContainer>
		</GradientContainer>
	);
}
