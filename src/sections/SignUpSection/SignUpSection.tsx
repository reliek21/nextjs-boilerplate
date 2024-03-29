import { LoginTitle, LoginDescription } from '@/components/ui/custom';
import { LegalLoginText, SignUpForm, SupportLogin } from '@/components/widgets';
import { AUTH_ROUTES } from '@/routes';

export default function SignUpSection() {
	return (
		<div className='container w-2/3 p-3 max-md:w-full'>
			<LoginTitle title='Get Started with Project' />
			<LoginDescription
				description='Already have an account?'
				buttonText='Sign in'
				buttonUrl={AUTH_ROUTES.login}
			/>
			<SignUpForm />
			<LegalLoginText />
			<SupportLogin />
		</div>
	);
}
