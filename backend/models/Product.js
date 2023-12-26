const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
	{
		productName: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		imageUrl: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: false,
		},
	},
	{
		timestamps: true, 
	}
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
