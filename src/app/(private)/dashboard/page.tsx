'use client';
import { signOut, useSession } from 'next-auth/react';

export default function DashboardPage() {
	const { data: session, status, update } = useSession();

	if (status === 'loading') return <div>Loading...</div>;

	const getUserName = session?.user?.name?.split(' ');
	const getName = getUserName![0];
	console.log(getName);

	return (
		<div>
			<h1>Bienvenido de nuevo, {getName}</h1>
			<img src={session?.user?.image} />
			<p>This is your email account: {session?.user?.email}</p>
			<button
				className='bg-red-500 p-2 border-zinc-900 rounded-full text-white'
				onClick={() => signOut()}
				type='submit'>
				Logout
			</button>
		</div>
	);
}
