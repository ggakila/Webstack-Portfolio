const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const fetchAllProducts = asyncHandler(async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json(products);
	} catch (err) {
		res.status(500);
		throw new err(err.message);
	}
});

const fetchProductById = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);
		res.status(200).json(product);
	} catch (err) {
		res.status(500);
		throw new err(err.message);
	}
});

const createProduct = asyncHandler(async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(200).json(product);
	} catch (err) {
		res.status(500);
		throw new err(err.message);
	}
});

const updateProductById = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndUpdate(id, req.body);
		if (!product) {
			res.status(404);
			throw new err(`No product with ID ${id}`);
		}
		const updatedProduct = await Product.findById(id);
		res.status(200).json(updatedProduct);
	} catch (err) {
		res.status(500);
		throw new err(err.message);
	}
});

const deleteProductById = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndDelete(id);
		if (!product) {
			res.status(404);
			throw new err(`No product with ID ${id}`);
		}
		res.status(200).json(product);
	} catch (err) {
		res.status(500);
		throw new err(err.message);
	}
});

module.exports = {
	fetchAllProducts,
	fetchProductById,
	createProduct,
	updateProductById,
	deleteProductById,
};
