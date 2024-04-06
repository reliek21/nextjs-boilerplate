'use client';

import { signIn } from 'next-auth/react';
import {
	LoginTitle,
	LoginDescription,
	ButtonIcon,
	SeparatorText
} from '@/components/ui/custom';
import {
	FlexContainer,
	LegalLoginText,
	LoginForm,
	SupportLogin
} from '@/components/widgets';
import { AUTH_ROUTES, MAIN_ROUTES } from '@/routes';

export default function LoginSection() {
	return (
		<div className='container w-3/4 p-3 max-md:w-full'>
			<LoginTitle title='Sign in to Project' />
			<LoginDescription
				description="Don't have an account?"
				buttonText='Get started'
				buttonUrl={AUTH_ROUTES.signUp}
			/>

			<FlexContainer>
				<ButtonIcon
					icon='github'
					text='Github'
					onClick={async () =>
						await signIn('github', {
							redirect: false,
							callbackUrl: '/dashboard'
						})
					}
				/>
				<ButtonIcon
					icon='google'
					text='Google'
					onClick={async (): Promise<void> => {
						const result = await signIn('google', {
							redirect: false,
							callbackUrl: '/dashboard'
						});
						console.log(result);
					}}
				/>
			</FlexContainer>

			<SeparatorText text='OR CONTINUE WITH' />

			<LoginForm />

			<LegalLoginText />
			<SupportLogin />
		</div>
	);
}
