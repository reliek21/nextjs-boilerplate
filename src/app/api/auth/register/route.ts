import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/config/db.config';
import { BcryptHelper } from '@/helpers';
import { IUser } from '@/interface/auth';

export async function POST(request: NextRequest) {
	const bcryptHelper: BcryptHelper = new BcryptHelper();

	try {
		const data: IUser = await request.json();

		const { name, username, email, password } = data;

		const emailFound: IUser | null = await prisma.user.findUnique({
			where: {
				email
			}
		});

		if (emailFound) {
			return NextResponse.json({
				ok: false,
				status: 400,
				message: 'User already exists!'
			});
		}

		const lowerCaseEmail: string = data.email.toLowerCase();
		const hashedPassword: string = await bcryptHelper.hashPassword(
			password as string
		);

		const newUser: IUser = await prisma.user.create({
			data: {
				name: name,
				username: username,
				email: lowerCaseEmail,
				password: hashedPassword
			}
		});

		const { password: _, ...user } = newUser;

		return NextResponse.json(user);
	} catch (error: any | unknown) {
		console.log(`Error during creating user: ${error.message}`);
		throw new Error('Failed to assign user. Please try again.');
	}
}
