const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
	product: {
		type: Schema.Types.ObjectId,
		ref: "Product", 
		required: true,
	},
	quantity: {
		type: Number,
		required: false,
		default: 1,
	},
});

const userSchema = new Schema({
	username: {
		type: String,
		required: false,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	cart: [cartItemSchema], 
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
