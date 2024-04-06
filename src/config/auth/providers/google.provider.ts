import { OAuthConfig } from 'next-auth/providers/oauth';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';

/**
 * Configuration of the credential
 * provider for authentication with Google
 * */
export const googleProviderConfig: OAuthConfig<GoogleProfile> = GoogleProvider({
	clientId: process.env.GOOGLE_CLIENT_ID as string,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
});
