const express = require('express');
const router = express.Router();
const Product = require("../models/Product");
const {
	fetchAllProducts,
	fetchProductById,
	createProduct,
	updateProductById,
	deleteProductById,
} = require("../controllers/productControllers");
const authHandler = require("../middleware/authHandler");



router.get("/products", fetchAllProducts);

router.get("/products/:id", fetchProductById);

router.post("/products", createProduct);

router.put("/products/:id", authHandler, updateProductById);

router.delete("/products/:id", authHandler, deleteProductById);

module.exports = router;