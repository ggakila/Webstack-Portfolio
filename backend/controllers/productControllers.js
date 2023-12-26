const Product = require("../models/Product");
const asyncHandler = require("express-async-handler");

const fetchAllProducts = asyncHandler(async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json(products);
	} catch (err) {
		res.status(500).json({ message: "Error fetching all products" });
	}
});

const fetchProductById = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		res.status(200).json(product);
	} catch (err) {
		res.status(500).json({ message: "Error fetching product by ID" });
	}
});

const createProduct = asyncHandler(async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(200).json(product);
	} catch (err) {
		res.status(500).json({ message: "Error creating product" });
	}
});

const updateProductById = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndUpdate(id, req.body);
		if (!product) {
			return res.status(404).json(`No product with ID ${id}`);
		}
		const updatedProduct = await Product.findById(id);
		res.status(200).json(updatedProduct);
	} catch (err) {
		res.status(500).json({ message: "Error updating product by ID" });
	}
});

const deleteProductById = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndDelete(id);
		if (!product) {
			res.status(404);
			throw new Error(`No product with ID ${id}`);
		}
		res.status(200).json(product);
	} catch (err) {
		res.status(500).json({ message: "Error deleting product by ID" });
	}
});

module.exports = {
	fetchAllProducts,
	fetchProductById,
	createProduct,
	updateProductById,
	deleteProductById,
};
