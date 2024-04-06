import { AUTH_ROUTES } from '@/routes';
import { CONFIG_ENVIRONMENTS } from '../enviroments.config';
import { credentialsProviderConfig } from './providers/credentials.provider';

// Configuration options for NextAuth
export const authOptions = {
	secret: CONFIG_ENVIRONMENTS.NEXT_AUTH_SECRET,
	providers: [credentialsProviderConfig],
	pages: {
		signIn: AUTH_ROUTES.login
	}
};
