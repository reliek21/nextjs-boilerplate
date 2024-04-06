import { CONFIG_ENVIRONMENTS } from '@/config';
import { credentialsProviderConfig } from './providers/credentials.provider';

import { AUTH_ROUTES } from '@/routes';

// Configuration options for NextAuth
export const authOptions = {
	secret: CONFIG_ENVIRONMENTS.NEXT_AUTH_SECRET,
	providers: [credentialsProviderConfig],
	pages: {
		signIn: AUTH_ROUTES.login
	}
};
