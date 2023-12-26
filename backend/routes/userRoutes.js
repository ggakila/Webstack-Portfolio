const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const authHandler = require("../middleware/authHandler");

router.get("/cart", authHandler, userControllers.getCart);
router.post("/cart/add", authHandler, userControllers.addToCart);
router.delete("/cart/delete", authHandler, userControllers.deleteFromCart);

module.exports = router; 

