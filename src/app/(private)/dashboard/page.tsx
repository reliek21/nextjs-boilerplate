import { signOut } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/config';

const Nav = async () => {
	const session = await getServerSession(authOptions);
	return <h1>Hello, {session?.user?.name}</h1>;
};

export default function DashboardPage() {
	return (
		<div>
			<Nav />
			<button
				className='bg-red-500 p-2 border-zinc-900 rounded-full text-white'
				onClick={() => signOut()}
				type='submit'>
				Logout
			</button>
		</div>
	);
}
