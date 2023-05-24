import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const port = 8800;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "marigi@98",
	database: "krc_donation",
});

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/campaigns", (req, res) => {
	const query = "SELECT * FROM donation_type";

	db.query(query, (error, data) => {
		if (error) {
			return res.json(error);
		}

		// const formattedData = rawData.map(
		// 	({ id, name, description, start_date, end_date }) => {
		// 		return {
		// 			id,
		// 			name,
		// 			description,
		// 			startDate: start_date,
		// 			endDate: end_date,
		// 		};
		// 	}
		// );

		return res.json(data);
	});
});

app.listen(port, () => {
	console.log("Connected to the server on port:", port);
});
