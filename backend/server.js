require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const cors = require('cors');
const authHandler = require("./middleware/authHandler");

const app = express();
const port = process.env.PORT || 5000;
const DB_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(cors());
app.use("/api", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);
app.use(authHandler);


app.get("/", (err, req, res) => {
	res.send("Server is live homie!")
});


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
