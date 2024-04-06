import { NextResponse } from 'next/server';

import { IUser } from '@/interface/auth';
import prisma from '@/config/db.config';

import { BcryptHelper } from '@/helpers';

export async function authorizeConfig(
	credentials: Record<string, string> | undefined
): Promise<any> {
	const bCryptHelper: BcryptHelper = new BcryptHelper();

	try {
		// Search for the user in the database by email address
		const user: IUser | null = await prisma.user.findUnique({
			where: {
				email: credentials?.email
			}
		});

		if (!user) {
			return NextResponse.json({
				ok: false,
				status: 400,
				message: 'User not found. Please check your email address.'
			});
		}

		const isPasswordCorrect: boolean = await bCryptHelper.comparePassword(
			credentials?.password as string,
			user?.password as string
		);

		if (!isPasswordCorrect) {
			return NextResponse.json({
				ok: false,
				status: 400,
				message: 'Incorrect email or password. Please try again'
			});
		}

		return {
			id: user.id,
			name: user.name,
			username: user.username,
			email: user.email
		};
	} catch (error: any | unknown) {
		console.log(`Error during authorization: ${error.message}`);
		throw new Error('Failed to authorize. Please try again later');
	}
}
