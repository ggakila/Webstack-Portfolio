const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const authHandler = require("../middleware/authHandler");

router.get("/cart/:userId", userControllers.getCart);
router.post("/cart/add/:userId", userControllers.addToCart);
router.delete("/cart/delete", userControllers.deleteFromCart);

module.exports = router; 

