module.exports = {
	apps: [
		{
			script: "npm start",
			watch: ".",
		},
		{
			script: "./service-worker/",
			watch: ["./service-worker"],
		},
	],

	deploy: {
		production: {
			key: "donation-form-ec2.pem",
			user: "ubuntu",
			host: "18.202.244.58",
			ref: "origin/main",
			repo: "git@github.com:brandeddavid/redcross-donation-form.git",
			path: "/home/ubuntu/",
			"pre-deploy-local": "",
			"post-deploy":
				"source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
			"pre-setup": "",
			"ssh-options": "ForwardAgent=yes",
		},
	},
};
