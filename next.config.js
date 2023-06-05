/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["www.redcross.or.ke", "sandbox.finsprint.io"],
	},
	env: {
		API_HOST: process.env.API_HOST,
	},
};

process.on("unhandledRejection", (error) => {
	console.log("unhandledRejection", error);
});

module.exports = nextConfig;
