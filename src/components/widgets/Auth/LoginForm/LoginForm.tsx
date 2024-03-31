import { ButtonCustom } from '@/components/ui/custom';
import { InputLabel } from '@/components/widgets';

export default function LoginForm() {
	return (
		<form action='#' method='POST' className='mt-10 mb-5'>
			<InputLabel
				id='email'
				inputType='email'
				label='Enter your email'
				placeholder='name@email.com'
			/>

			<InputLabel
				id='password'
				inputType='password'
				label='Enter your password'
				placeholder='**********'
				hasForgotPassword={true}
				styles='mt-3'
			/>

			<div className='grid w-full max-w-sm items-center gap-1.5'>
				<ButtonCustom text='Continue' styles='mt-3' />
			</div>
		</form>
	);
}
