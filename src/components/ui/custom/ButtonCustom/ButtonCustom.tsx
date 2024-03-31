import { Button } from '@/components/ui/shadcn';

interface IButtonCustom {
	text: string;
	disabled?: boolean;
	styles?: string;
}

export default function ButtonCustom({
	text,
	disabled = false,
	styles
}: IButtonCustom) {
	return (
		<Button
			role='button'
			aria-label={`button for ${text}`}
			type='submit'
			className={styles}
			disabled={disabled}>
			{text}
		</Button>
	);
}
