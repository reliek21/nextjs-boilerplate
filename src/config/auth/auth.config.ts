import { AUTH_ROUTES } from '@/routes';
import { CONFIG_ENVIRONMENTS } from '../enviroments.config';
import { credentialsProviderConfig } from './providers/credentials.provider';

// Configuration options for NextAuth
export const authOptions = {
	secret: CONFIG_ENVIRONMENTS.NEXT_AUTH_SECRET,
	providers: [credentialsProviderConfig],
	pages: {
		signIn: AUTH_ROUTES.login,
		signOut: '/auth/signout',
		error: '/auth/error', // Error code passed in query string as ?error=
		verifyRequest: '/auth/verify-request', // (used for check email message)
		newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
	}
};
