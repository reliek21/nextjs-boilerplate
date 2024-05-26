import { Button } from '@/components/ui/shadcn';
import { IButtonIcon } from './interface/ButtonIcon';

export default function ButtonIcon({ icon, text, onClick }: IButtonIcon) {
	return (
		<Button
			type='button'
			role='button'
			aria-label={`Button of ${text}`}
			className='w-full flex items-center gap-2'
			onClick={onClick}>
			<i className={`bi bi-${icon}`}></i> {text}
		</Button>
	);
}
