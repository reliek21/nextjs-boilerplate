import { LoginTitle, LoginDescription } from '@/components/ui/custom';
import { LegalLoginText, LoginForm, SupportLogin } from '@/components/widgets';
import { AUTH_ROUTES } from '@/routes';

export default function LoginSection() {
	return (
		<div className='container w-2/3 p-3 max-md:w-full'>
			<LoginTitle title='Sign in to Project' />
			<LoginDescription
				description="Don't have an account?"
				buttonText='Get started'
				buttonUrl={AUTH_ROUTES.signUp}
			/>
			<LoginForm />
			<LegalLoginText />
			<SupportLogin />
		</div>
	);
}
