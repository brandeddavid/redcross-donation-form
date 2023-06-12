/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
		loader: "imgix",
		path: "http://196.43.239.57_next/image",
		domains: [
			"www.redcross.or.ke",
			"sandbox.finsprint.io",
			"brandeddavid.s3.eu-west-1.amazonaws.com",
		],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
				port: "",
				pathname: "**",
			},
		],
	},
	env: {
		API_HOST: process.env.API_HOST,
		HOME: process.env.HOME || "/form",
	},
};

process.on("unhandledRejection", (error) => {
	console.log("unhandledRejection", error);
});

module.exports = nextConfig;
