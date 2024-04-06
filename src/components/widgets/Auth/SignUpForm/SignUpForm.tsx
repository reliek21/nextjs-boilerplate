'use client';

import { ButtonCustom, ValidatedText } from '@/components/ui/custom';
import { InputLabel } from '@/components/widgets';

import { useValidateForm } from './hooks/useValidateForm';
import { handleChangeInputHelper } from '@/helpers';

export default function SignUpForm() {
	const {
		name,
		setName,
		username,
		setUsername,
		email,
		setEmail,
		password,
		setPassword,
		passwordConfirm,
		setPasswordConfirm,
		handleSubmit,
		specialChars,
		isValidEmail,
		passwordLength,
		confirmPassword,
		passwordHasNumbers,
		hasUpperAndLowerLetters
	}: any = useValidateForm();

	return (
		<form method='POST' onSubmit={handleSubmit} className='mt-10 mb-5'>
			<InputLabel
				id='name'
				label='Full Name'
				value={name}
				onChange={handleChangeInputHelper(setName)}
				placeholder='John Doe'
				required
			/>

			<InputLabel
				id='username'
				label='Username'
				value={username}
				onChange={handleChangeInputHelper(setUsername)}
				placeholder='Doe'
				required
				styles='mt-3'
			/>

			<InputLabel
				id='email'
				inputType='email'
				label='Enter your email'
				placeholder='name@email.com'
				value={email}
				onChange={handleChangeInputHelper(setEmail)}
				required
				styles='mt-3'
			/>

			<InputLabel
				id='password'
				inputType='password'
				label='Enter your password'
				placeholder='**********'
				value={password}
				onChange={handleChangeInputHelper(setPassword)}
				required
				styles='mt-3'
			/>

			<InputLabel
				id='password-repeat'
				inputType='password'
				label='Repeat your password'
				placeholder='**********'
				value={passwordConfirm}
				onChange={handleChangeInputHelper(setPasswordConfirm)}
				required
				styles='mt-3'
			/>

			<div className='flex flex-col gap-1 my-5'>
				<ValidatedText text='Valid email address' isValid={isValidEmail} />
				<ValidatedText
					text='Mix of uppercase and lowercase'
					isValid={hasUpperAndLowerLetters}
				/>
				<ValidatedText
					text='Minimum 8 characters long'
					isValid={passwordLength}
				/>
				<ValidatedText
					text='Contain at least 1 number'
					isValid={passwordHasNumbers}
				/>
				<ValidatedText
					text='Contain at least one special character'
					isValid={specialChars}
				/>
				<ValidatedText text='Passwords match' isValid={confirmPassword} />
			</div>

			<div className='grid w-full max-w-sm items-center gap-1.5'>
				<ButtonCustom
					buttonType='submit'
					text='Continue'
					styles='mt-3'
					disabled={false}
				/>
			</div>
		</form>
	);
}
