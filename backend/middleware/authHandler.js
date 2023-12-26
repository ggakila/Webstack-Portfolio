const authHandler = async (req, res, next) => {
	try {
		// Extract the token from the Authorization header
		const token = req.headers.authorization.split(" ")[1];

		if (!token) {
			// Set WWW-Authenticate header if token is missing
			return res
				.status(401)
				.set("WWW-Authenticate", "Bearer")
				.json({ message: "No token" });
		}

		// Verify the token and extract the user ID
		const decoded = jwt.verify(token, "sneaky");
		const user = await User.findById(decoded.sub);

		if (!user) {
			return res.status(401).json({ message: "NO user" });
		}

		req.user = user;
		next();
	} catch (error) {
		if (error.name === "TokenExpiredError") {
			// Set WWW-Authenticate header if token is expired
			return res
				.status(401)
				.set("WWW-Authenticate", "Bearer")
				.json({ message: "Token expired" });
		}
		if (error.name === "JsonWebTokenError") {
			// Set WWW-Authenticate header if token is invalid
			return res
				.status(401)
				.set("WWW-Authenticate", "Bearer")
				.json({ message: "Invalid token" });
		}
		console.error(error);
		// Set WWW-Authenticate header for generic unauthorized case
		return res
			.status(401)
			.set("WWW-Authenticate", "Bearer")
			.json({ message: "Unauthorized" });
	}
};

module.exports = authHandler;
