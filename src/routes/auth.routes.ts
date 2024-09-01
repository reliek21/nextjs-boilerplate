import { IAuthRoutes } from '@/interface/routes';

export const AUTH_ROUTES: IAuthRoutes = {
	signIn: '/auth/login',
	signUp: '/auth/sign-up',
	signOut: '/auth/sign-out',
	error: '/auth/error',
	newUser: '/auth/new-user',
	verifyRequest: '/auth/verify-request'
};
