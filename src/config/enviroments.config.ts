interface IEnviroments {
	GOOGLE_ANALYTICS: string;
	RESEND_API_KEY: string;
}

export const CONFIG_ENVIROMENTS: IEnviroments = {
	GOOGLE_ANALYTICS: (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string) || '',
	RESEND_API_KEY: (process.env.RESEND_API_KEY as string) || ''
};
