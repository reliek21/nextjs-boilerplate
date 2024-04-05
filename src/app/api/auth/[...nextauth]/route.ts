import prisma from '@/config/db.config';
import NextAuth from 'next-auth';
import CreCredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { AUTH_ROUTES } from '@/routes';

export const authOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: AUTH_ROUTES.login
	},
	providers: [
		CreCredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'Email', type: 'email', placeholder: 'smith' },
				password: {
					label: 'Password',
					type: 'password',
					placeholder: 'password'
				}
			},
			async authorize(credentials, request) {
				console.log(credentials);

				const userFound = await prisma.user.findUnique({
					where: {
						email: credentials?.email
					}
				});

				if (!userFound) throw new Error('User does not exist');

				console.log(userFound);

				const matchPassword = await bcrypt.compare(
					credentials!.password,
					userFound.password
				);

				if (!matchPassword) throw new Error('email or password not match');

				console.log('Logged');

				return {
					id: userFound.id,
					name: userFound.name,
					username: userFound.username,
					email: userFound.email
				};
			}
		})
	]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
