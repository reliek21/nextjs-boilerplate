/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ['ts', 'tsx'],
	experimental: {
		scrollRestoration: true,
		webVitalsAttribution: ['CLS', 'LCP']
	}
};

export default nextConfig;
