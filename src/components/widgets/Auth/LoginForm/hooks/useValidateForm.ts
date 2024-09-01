import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, SignInResponse } from 'next-auth/react';

import { PRIVATE_ROUTES } from '@/routes';

export function useValidateFormLogin() {
	const router: any = useRouter();

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	const isFormIncomplete: boolean = !email || !password;

	const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();

		const response: SignInResponse | undefined = await signIn('credentials', {
			redirect: false,
			email: email,
			password: password
		});

		if (response?.error) {
			alert(response.error);
		} else {
			router.push(PRIVATE_ROUTES.dashboard);
		}

		console.log(response);
	};

	return {
		email,
		setEmail,
		password,
		setPassword,
		isSubmitted,
		setIsSubmitted,
		handleSubmit,
		isFormIncomplete
	};
}
