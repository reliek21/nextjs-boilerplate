interface IEnviroments {
	ANALYTICS: string;
}

export const CONFIG_ENVIROMENTS: IEnviroments = {
	ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ''
};
