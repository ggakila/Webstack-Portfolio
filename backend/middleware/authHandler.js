const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authHandler = async (req, res, next) => {
	try {
		// Extract the token from the Authorization header
		const token = req.headers.authorization.split(" ")[1];

		if (!token) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		// Verify the token and extract the user ID
		const decoded = jwt.verify(token, "sneaky");
		const user = await User.findById(decoded.sub);

		if (!user) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		req.user = user;
		next();
	} catch (error) {
  if (error.name === 'TokenExpiredError') {
    return res.status(401).json({ message: 'Token expired' });
  }
  if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Invalid token' });
  }
  console.error(error);
  return res.status(401).json({ message: 'Unauthorized' });
};
}

module.exports = authHandler;
