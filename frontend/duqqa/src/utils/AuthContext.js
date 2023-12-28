// authContext.js

import { createContext, useContext, useState, useEffect } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
	return useContext(AuthContext);
};

// AuthProvider component to wrap your application
export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);
	const [username, setUsername] = useState(null);

	// useEffect to run on mount and check if token is in localStorage
	useEffect(() => {
		const storedToken = localStorage.getItem("token");
		if (storedToken) {
			setToken(storedToken);
			// Fetch and set user details if available
			const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));
			if (storedUserDetails) {
				setUserId(storedUserDetails.userId);
				setUsername(storedUserDetails.username);
			}
		}
	}, []);

	// Function to set the token, userId, and username, and store them in localStorage
	const login = (newToken, userDetails) => {
		setToken(newToken);
		setUserId(userDetails.userId);
		setUsername(userDetails.username);
		localStorage.setItem("token", newToken);
		// Store user details in localStorage
		localStorage.setItem("userDetails", JSON.stringify(userDetails));
	};

	// Function to clear the token and user details from state and localStorage
	const logout = () => {
		setToken(null);
		setUserId(null);
		setUsername(null);
		localStorage.removeItem("token");
		localStorage.removeItem("userDetails");
	};

	// The context value to be provided
	const contextValue = {
		token,
		userId,
		username,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};
