const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.register = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		// Lets check if the user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}

		//Before we store passowod we Hash it- saltrounds 10 
		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = new User({ username, email, password: hashedPassword });
		await newUser.save();

		res.status(201).json({ message: "User registered successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

exports.login = async (req, res) => {
	const { email, password } = req.body;
	
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ message: "Invalid email or password" });
		}

		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return res.status(401).json({ message: "Invalid email or password" });
		}

		// Lets then gen a token for the user who has been auth and send to frontend
		const token = jwt.sign(
			{ userId: user._id, username: user.username },
			"sneaky",
			{
				expiresIn: 3600,
			}
		);
		res
			.status(200)
			.json({
				message: "Authentication succeeded",
				username: user.username,
				userId: user._id,
				token: token,
			});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

exports.logout = (req, res) => {
	res.json({ message: "Logout successful" });
};
