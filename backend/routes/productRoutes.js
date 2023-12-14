const express = require('express');
const router = express.Router();
const Product = require("../models/productModel");
const {
	fetchAllProducts,
	fetchProductById,
	createProduct,
	updateProductById,
	deleteProductById,
} = require("../controllers/productControllers");


router.get("/products", fetchAllProducts);

router.get("/products/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		res.status(200).json(product);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ message: err.message });
	}
});

router.post("/products", async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(200).json(product);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ message: err.message });
	}
});

router.put("/products/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndUpdate(id, req.body);
		if (!product) {
			return res
				.status(404)
				.json({ message: `No products with the id: ${id}` });
		}
		const updatedProduct = await Product.findById(id);
		res.status(200).json(updatedProduct);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.delete("/products/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndDelete(id);
		if (!product) {
			return res
				.status(404)
				.json({ message: `No products with the id: ${id}` });
		}
		res.status(200).json(product);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;