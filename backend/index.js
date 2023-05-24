import express from "express";

const app = express();
const port = 8800;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log("Connected to the server on port:", port);
});
