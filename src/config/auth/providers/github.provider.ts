import { OAuthConfig } from 'next-auth/providers/oauth';
import GitHubProvider, { GithubProfile } from 'next-auth/providers/github';

import { CONFIG_ENVIRONMENTS } from '@/config';

/**
 * Configuration of the credential
 * provider for authentication with GitHub
 * */
export const githubProviderConfig: OAuthConfig<GithubProfile> = GitHubProvider({
	clientId: CONFIG_ENVIRONMENTS.GITHUB_ID,
	clientSecret: CONFIG_ENVIRONMENTS.GITHUB_ID
});
