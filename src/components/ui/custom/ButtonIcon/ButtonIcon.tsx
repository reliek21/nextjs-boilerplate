import { Button } from '@/components/ui/shadcn';

type ButtonIconType = 'github' | 'google' | 'twitter' | 'facebook';

interface IButtonIcon {
	icon: ButtonIconType;
	text: string;
}

export default function ButtonIcon({ icon, text }: IButtonIcon) {
	return (
		<Button className='w-full flex items-center gap-2 '>
			<i className={`bi bi-${icon}`}></i> {text}
		</Button>
	);
}
