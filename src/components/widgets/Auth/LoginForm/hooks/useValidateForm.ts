import React, { useState } from 'react';
import { signIn, SignInResponse } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function useValidateFormLogin(): any {
	const router = useRouter();

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	const isFormIncomplete: boolean = !email || !password;

	const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();

		const res: SignInResponse | undefined = await signIn('credentials', {
			email: email,
			password: password,
			redirect: false
		});

		if (res?.error) {
			alert(res.error);
		} else {
			router.push('/dashboard');
		}

		console.log(res);
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
