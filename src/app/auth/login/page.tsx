'use client';
import { Button } from '@/components/ui/shadcn';
import {
	MarginContainer,
	TextLink,
	UnderlineLink
} from '@/components/ui/custom';
import { InputLabel } from '@/components/widgets';
import { LEGAL_ROUTES, MAIN_ROUTES } from '@/routes';
import { z } from 'zod';

/** TODO:
 * 1. Separate components [done]
 * 2. Separate widgets [done]
 * 2. Create accessibility components [done]
 * 3. Create respective routes [done]
 * 4. Responsive
 * 5. Respective validations
 * **/

const loginSchema = z.object({
	email: z.string().email({
		message: 'Email address is required'
	}),
	password: z
		.string()
		.trim()
		.min(8, {
			message: 'Password must be at least 8 characters long'
		})
		.max(50, {
			message: 'Password must not be longer than 50 characters'
		})
});
export default function LoginPage() {
	// const form = useForm<z.infer<typeof loginSchema>>({
	// 	resolver: zodResolver(loginSchema),
	// 	defaultValues: {
	// 		email: '',
	// 		password: ''
	// 	}
	// });

	const onSubmit = async (): Promise<void> => {};

	return (
		<div className='h-svh flex items-center justify-center flex-col bg-gradient-to-br from-orange-100'>
			<MarginContainer>
				<div className='container w-2/3 p-3 max-md:w-full'>
					<h1
						role='heading'
						aria-label='title of the login'
						className='text-2xl font-bold text-zinc-900'>
						Sign in to Project
					</h1>

					<p
						role='contentinfo'
						aria-label='description'
						className='flex items-center gap-1 text-sm text-gray-500'>
						Don&apos;t have an account? <TextLink text='Get started' link='#' />
					</p>

					<form
						action=''
						onSubmit={(): void => {}}
						method='POST'
						className='mt-10 mb-5'>
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
							styles='mt-3'
						/>

						<div className='grid w-full max-w-sm items-center gap-1.5'>
							<Button
								role='button'
								aria-label='Continue button of login form'
								type='submit'
								className='mt-3'>
								Continue
							</Button>
						</div>
					</form>

					<span className='text-sm'>
						By signing in, you agree to the{' '}
						<UnderlineLink text='Terms of Service ' link={LEGAL_ROUTES.term} />
						and{' '}
						<UnderlineLink text='Privacy Policy' link={LEGAL_ROUTES.privacy} />
					</span>

					<p
						role='contentinfo'
						aria-label='description'
						className='flex items-center gap-1 text-sm text-gray-500 mt-10'>
						Need help?
						<TextLink text='Contact support' link={MAIN_ROUTES.support} />
					</p>
				</div>
			</MarginContainer>
		</div>
	);
}
