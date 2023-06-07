/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
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
	},
};

process.on("unhandledRejection", (error) => {
	console.log("unhandledRejection", error);
});

module.exports = nextConfig;
