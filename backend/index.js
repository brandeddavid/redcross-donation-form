import express from "express";
import mysql from "mysql";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = 8800;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_USER_PASSSWORD,
	database: process.env.DB_NAME,
});

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/campaigns", (req, res) => {
	const query = "SELECT * FROM donation_type WHERE status = 1";

	db.query(query, (error, data) => {
		if (error) {
			return res.json(error);
		}

		return res.json(data);
	});
});

app.post("/recommended", (req, res) => {
	const {
		body: { currency, donorType, campaignId },
	} = req;
	const query = `SELECT * FROM campaigndetail WHERE CampaignId = ${campaignId} and DonorType = ${donorType} and CurrencyType = ${currency}`;

	console.log(req);

	db.query(query, (error, data) => {
		if (error) {
			return res.json(error);
		}

		return res.json(data);
	});
});

app.listen(port, () => {
	console.log("Connected to the server on port:", port);
});
