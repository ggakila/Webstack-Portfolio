const User = require("../models/User");

exports.getCart = async (req, res) => {
	try {
		const {userId} = req.params;
		const user = await User.findById(userId).populate("cart.product");

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const userCart = user.cart;
		res.json({ userCart });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error retrieving cart data" });
	}
};

// Controller to add an item to the user's cart
exports.addToCart = async (req, res) => {
	try {
		const { productId, quantity } = req.body;
		const { userId } = req.params; // Assuming the user ID is stored in req.user after authentication

		// Find the user by ID
		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Check if the product is already in the cart
		const existingCartItemIndex = user.cart.findIndex((item) =>
			item.product.equals(productId)
		);

		if (existingCartItemIndex !== -1) {
			// If the product is already in the cart, update the quantity
			user.cart[existingCartItemIndex].quantity += quantity || 1;
		} else {
			// If the product is not in the cart, add it
			user.cart.push({ product: productId, quantity: quantity || 1 });
		}

		// Save the updated user document
		await user.save();

		res.json({ message: "Item added to cart successfully", user });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error adding item to the cart" });
	}
};

exports.deleteFromCart = async (req, res) => {
	try {
		const { productId } = req.body;
		const { userId } = req.params;// Assuming the user ID is stored in req.user after authentication

		// Find the user by ID
		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Check if the product is in the cart
		const existingCartItemIndex = user.cart.findIndex((item) =>
			item.product.equals(productId)
		);

		if (existingCartItemIndex !== -1) {
			// If the product is in the cart, remove it
			user.cart.splice(existingCartItemIndex, 1);

			// Save the updated user document
			await user.save();

			res.json({ message: "Item removed from cart successfully", user });
		} else {
			res.status(404).json({ message: "Item not found in the cart" });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error removing item from the cart" });
	}
};

