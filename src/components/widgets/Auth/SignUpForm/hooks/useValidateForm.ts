import React, { useState } from 'react';
import { FormDataValidator } from '@/helpers';
import { useRouter } from 'next/navigation';

export function useValidateForm(): any {
	const router = useRouter();
	const [name, setName] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [passwordConfirm, setPasswordConfirm] = useState<string>('');

	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	const formDataValidator: FormDataValidator = new FormDataValidator();

	const isValidEmail: boolean = formDataValidator.validateEmail(email);
	const passwordLength: boolean = formDataValidator.validatePasswordLength(
		password,
		8
	);
	const confirmPassword: boolean = formDataValidator.matchPassword(
		password,
		passwordConfirm
	);
	const specialChars: boolean = formDataValidator.hasSpecialChars(password);
	const passwordHasNumbers: boolean = formDataValidator.hasNumbers(password);
	const hasUpperAndLowerLetters: boolean =
		formDataValidator.hasUpperAndLowerCaseLetters(password);

	const isFormIncomplete: boolean =
		!name || !username || !email || !password || !passwordConfirm;

	const isFormValid: () => boolean = (): boolean => {
		return (
			isValidEmail &&
			passwordLength &&
			confirmPassword &&
			specialChars &&
			passwordHasNumbers &&
			hasUpperAndLowerLetters
		);
	};

	const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();

		try {
			const result: Response = await fetch('/api/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: name,
					username: username,
					email: email,
					password: password
				})
			});

			console.log({
				status: 'success',
				result: result.json()
			});

			if (result.ok) {
				setTimeout(() => setIsSubmitted(true), 1500);

				setName('');
				setUsername('');
				setEmail('');
				setPassword('');
				setPasswordConfirm('');
				router.push('/login');
			} else {
				setIsSubmitted(false);
				console.log('Error creating user');
			}
		} catch (error: unknown) {
			setIsSubmitted(false);
			console.log('Error creating user - catch:', error);
		}
	};

	return {
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
		isSubmitted,
		handleSubmit,
		isValidEmail,
		passwordLength,
		confirmPassword,
		specialChars,
		passwordHasNumbers,
		hasUpperAndLowerLetters,
		isFormIncomplete,
		isFormValid
	};
}
