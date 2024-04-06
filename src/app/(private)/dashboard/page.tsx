'use client';
import { signOut } from 'next-auth/react';

export default function DashboardPage() {
	return (
		<div>
			<button
				className='bg-red-500 p-2 border-zinc-900 rounded-full text-white'
				onClick={() => signOut()}
				type='submit'>
				Logout
			</button>
		</div>
	);
}
