import { Metadata } from 'next';
import { MarginContainer } from '@/components/ui/custom';
import { SignUpSection } from '@/sections';

// TODO: improve SEO here
export const metadata: Metadata = {
	title: 'Sign Up Page',
	description: 'Sign Up Page'
};

export default function SignUpPage() {
	return (
		<main className='h-svh flex items-center justify-center flex-col bg-gradient-to-br from-orange-100'>
			<MarginContainer>
				<SignUpSection />
			</MarginContainer>
		</main>
	);
}
