/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: "akamai",
		path: "/",
		domains: ["www.redcross.or.ke"],
	},
	env: {
		API_HOST: process.env.API_HOST,
	},
};

process.on("unhandledRejection", (error) => {
	console.log("unhandledRejection", error);
});

module.exports = nextConfig;