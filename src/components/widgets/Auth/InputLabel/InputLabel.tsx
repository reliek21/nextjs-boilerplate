'use client';

import React, { useState } from 'react';
import { Button, Input, Label } from '@/components/ui/shadcn';
import { TextLink } from '@/components/ui/custom';

type InputLabelType = 'text' | 'email' | 'password';

interface IInputLabel {
	id: string;
	label: string;
	placeholder?: string | undefined;
	inputType?: InputLabelType | undefined;
	hasForgotPassword?: boolean | undefined;
	styles?: string | undefined;
}

export default function InputLabel({
	id,
	label,
	placeholder,
	inputType = 'text',
	hasForgotPassword = false,
	styles
}: IInputLabel) {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleClick = (): void => setShowPassword(!showPassword);

	return (
		<div className={`grid w-full max-w-sm items-center gap-1.5 ${styles}`}>
			<Label aria-label={`Label of ${label}`} htmlFor={id}>
				{label}
			</Label>

			<div className='flex items-center relative'>
				<Input
					id={id}
					role='textbox'
					aria-label={`Input of ${label}`}
					type={inputType === 'password' && !showPassword ? 'password' : 'text'}
					placeholder={placeholder}
				/>

				{inputType === 'password' ? (
					<Button
						onClick={handleClick}
						type='button'
						variant='ghost'
						size='icon'
						className='absolute right-2 hover:bg-transparent'>
						<i
							className={`bi bi-${showPassword ? 'eye-slash' : 'eye'} text-zinc-900 text-base`}></i>
					</Button>
				) : null}
			</div>

			{hasForgotPassword && (
				<TextLink
					link='#'
					text='Forgot password?'
					hasArrow={false}
					styles='pr-0 justify-end text-gray-500 text-sm font-medium hover:underline'
				/>
			)}
		</div>
	);
}
