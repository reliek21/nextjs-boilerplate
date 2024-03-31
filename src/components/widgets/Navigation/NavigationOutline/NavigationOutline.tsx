import Link from 'next/link';
import { Button } from '@/components/ui/shadcn';
import { AUTH_ROUTES, MAIN_ROUTES } from '@/routes';

export default function NavigationOutline() {
	return (
		<div className='flex items-center justify-between'>
			<Link
				role='link'
				href={MAIN_ROUTES.home}
				aria-label='Home link'
				className='text-lg font-bold text-gray-500 hover:text-zinc-900'>
				OpenStatus
			</Link>

			<ul className='flex gap-4 border px-5 py-1 bg-white rounded-full'>
				<li>
					<Link
						href='#'
						className='text-base font-medium text-gray-500 hover:underline'>
						Home
					</Link>
				</li>
				<li>
					<Link
						href='#'
						className='text-base font-medium text-gray-500 hover:underline'>
						Blog
					</Link>
				</li>
				<li>
					<Link
						href='#'
						className='text-base font-medium text-gray-500 hover:underline'>
						Changelog
					</Link>
				</li>
				<li>
					<Link
						href='#'
						className='text-base font-medium text-gray-500  hover:underline'>
						Pricing
					</Link>
				</li>
			</ul>

			<Button asChild className='rounded-full'>
				<Link role='link' aria-label='Sign In login' href={AUTH_ROUTES.login}>
					Sign In
				</Link>
			</Button>
		</div>
	);
}
