import { Separator } from '@/components/ui/shadcn';

interface ISeparatorText {
	text: string;
	className?: string | undefined;
}

export default function SeparatorText({ text, className }: ISeparatorText) {
	return (
		<div className={`flex items-center justify-between ${className}`}>
			<Separator className='w-2/12 bg-gray-500' />
			<p className='text-sm text-gray-500'>{text}</p>
			<Separator className='w-2/12 bg-gray-500' />
		</div>
	);
}
