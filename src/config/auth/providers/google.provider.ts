import { OAuthConfig } from 'next-auth/providers/oauth';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';

import { CONFIG_ENVIRONMENTS } from '@/config';

/**
 * Configuration of the credential
 * provider for authentication with Google
 * */
export const googleProviderConfig: OAuthConfig<GoogleProfile> = GoogleProvider({
	clientId: CONFIG_ENVIRONMENTS.GOOGLE_CLIENT_ID,
	clientSecret: CONFIG_ENVIRONMENTS.GOOGLE_CLIENT_SECRET
});
