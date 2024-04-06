import { OAuthConfig } from 'next-auth/providers/oauth';
import GitHubProvider, { GithubProfile } from 'next-auth/providers/github';

export const githubProviderConfig: OAuthConfig<GithubProfile> = GitHubProvider({
	clientId: process.env.GITHUB_ID as string,
	clientSecret: process.env.GITHUB_SECRET as string
});
