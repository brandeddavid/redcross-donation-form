/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: "akamai",
		path: "/",
		domains: ["brandeddavid.s3.eu-west-1.amazonaws.com"],
	},
	env: {
		API_HOST: process.env.API_HOST,
	},
};

process.on("unhandledRejection", (error) => {
	console.log("unhandledRejection", error);
});

module.exports = nextConfig;
