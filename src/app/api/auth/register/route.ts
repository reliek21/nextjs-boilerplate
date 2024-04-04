import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/config/db.config';
import bcrypt from 'bcrypt';

export async function POST(request: NextRequest) {
	try {
		const data = await request.json();

		const emailFound = await prisma.user.findUnique({
			where: {
				email: data.email
			}
		});

		const userFound = await prisma.user.findUnique({
			where: {
				email: data.email
			}
		});

		if (userFound && emailFound) {
			return NextResponse.json(
				{
					message: 'User already exists!'
				},
				{
					status: 400
				}
			);
		}

		const lowerCaseEmail = data.email.toLowerCase();
		const hashedPassword = await bcrypt.hash(data.password, 10);

		const newUser = await prisma.user.create({
			data: {
				name: data.name,
				username: data.username,
				email: lowerCaseEmail,
				password: hashedPassword
			}
		});

		const { password: _, ...user } = newUser;

		return NextResponse.json(user);
	} catch (error: unknown) {
		return NextResponse.json(
			{
				message: error
			},
			{
				status: 500
			}
		);
	}
}
