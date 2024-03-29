import React from 'react';
import { Input, Label } from '@/components/ui/shadcn';

type InputLabelType = 'text' | 'email' | 'password';

interface IInputLabel {
	id: string;
	label: string;
	placeholder?: string | undefined;
	inputType?: InputLabelType | undefined;
	styles?: string | undefined;
}

export default function InputLabel({
	id,
	label,
	placeholder,
	inputType = 'text',
	styles
}: IInputLabel) {
	return (
		<div className={`grid w-full max-w-sm items-center gap-1.5 ${styles}`}>
			<Label aria-label={`Label of ${label}`} htmlFor={id}>
				{label}
			</Label>

			<Input
				role='textbox'
				aria-label={`Input of ${label}`}
				type={inputType}
				id={id}
				placeholder={placeholder}
			/>
		</div>
	);
}
