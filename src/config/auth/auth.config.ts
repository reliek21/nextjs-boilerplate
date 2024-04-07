import { googleProviderConfig } from './providers/google.provider';
import { credentialsProviderConfig } from './providers/credentials.provider';
import { githubProviderConfig } from './providers/github.provider';

import { AUTH_ROUTES } from '@/routes';
import { CONFIG_ENVIRONMENTS } from '@/config';

// Configuration options for NextAuth
export const authOptions = {
	secret: CONFIG_ENVIRONMENTS.NEXT_AUTH_SECRET,
	providers: [
		credentialsProviderConfig,
		googleProviderConfig,
		githubProviderConfig
	],
	pages: {
		signIn: AUTH_ROUTES.signIn,
		signOut: AUTH_ROUTES.signOut,
		error: AUTH_ROUTES.error, // Error code passed in query string as ?error=
		verifyRequest: AUTH_ROUTES.verifyRequest, // (used for check email message)
		newUser: AUTH_ROUTES.newUser // New users will be directed here on first sign in (leave the property out if not of interest)
	}
};
