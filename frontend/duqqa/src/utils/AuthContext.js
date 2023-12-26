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

	// useEffect to run on mount and check if token is in localStorage
	useEffect(() => {
		const storedToken = localStorage.getItem("token");
		if (storedToken) {
			setToken(storedToken);
		}
	}, []);

	// Function to set the token and store it in localStorage
	const login = (newToken) => {
		setToken(newToken);
		localStorage.setItem("token", newToken);
	};

	// Function to clear the token from state and localStorage
	const logout = () => {
		setToken(null);
		localStorage.removeItem("token");
	};

	// The context value to be provided
	const contextValue = {
		token,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};
