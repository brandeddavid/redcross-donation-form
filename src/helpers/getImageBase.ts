const getImageBase = () => {
	const env = process.env.NODE_ENV;

	return env === "development" ? "" : "/public";
};

export default getImageBase;
