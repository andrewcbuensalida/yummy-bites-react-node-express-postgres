const express = require("express");
const db = require("./db");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/v1/", async (req, res) => {
    console.log(`get hit`)
    
	const result = await db.query(`SELECT * FROM customer ORDER BY "lastName"`);
    console.log(result.rows)
    const withConvertIdToNumber = 
    
	res.status(200).json({ status: "success", data: result.rows });
});

app.post("/api/v1/", async (req, res) => {
	try {
		const result = await db.query(
			"INSERT INTO customer (firstName,lastName,homeAddress,cellPhone) VALUES ($1,$2,$3,$4) RETURNING *",
			[
				req.body.firstName,
				req.body.lastName,
				req.body.homeAddress,
				req.body.cellPhone,
			]
		);
		res.status(201).json({
			status: "success",
			data: result.rows[0],
		});
	} catch (error) {
		console.log(error);
	}
});
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`Connected to server`));
