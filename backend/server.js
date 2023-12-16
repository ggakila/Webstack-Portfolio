require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middleware/errorHandler");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const DB_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(cors());
app.use("/api", productRoutes)


app.get("/", (err, req, res) => {
	throw new Error(err.status)
});

app.use(errorHandler);

mongoose
	.connect(
		DB_URL
	)
	.then(() => {
		console.log("Connected to MongoDb");
		app.listen(port, () => {
			console.log(`App listening on port ${port}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
