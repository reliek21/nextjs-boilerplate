import { NavigationOutline } from '@/components/widgets/';
import { MarginContainer } from '@/components/ui/custom';

export default function HomePage() {
	return (
		<MarginContainer>
			<header className='mt-8'>
				<NavigationOutline />
			</header>

			<main className='flex min-h-screen flex-col items-center justify-between p-24'>
				<h1 className='text-3xl font-semibold uppercase'>
					Start to write your next project
				</h1>
			</main>
		</MarginContainer>
	);
}
