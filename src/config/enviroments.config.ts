import { IEnvironments } from '@/interface/enviroments';

export const CONFIG_ENVIRONMENTS: IEnvironments = {
	NODE_ENV: (process.env.NODE_ENV as string) || 'development',
	NEXT_AUTH_SECRET: (process.env.NEXTAUTH_SECRET as string) || '',
	GITHUB_ID: (process.env.GITHUB_ID as string) || '',
	GITHUB_SECRET: (process.env.GITHUB_SECRET as string) || '',
	GOOGLE_CLIENT_ID: (process.env.GOOGLE_CLIENT_ID as string) || '',
	GOOGLE_CLIENT_SECRET: (process.env.GOOGLE_CLIENT_SECRET as string) || '',
	RESEND_API_KEY: (process.env.RESEND_API_KEY as string) || '',
	GOOGLE_ANALYTICS: (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string) || ''
};
