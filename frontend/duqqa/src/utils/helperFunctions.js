import axios from "axios";

const BASE_URL = "https://webstack-backend.onrender.com/api";

//These are the endpionts for when we are auth-ing the user etc
export const registerUser = async (userData) => {
	try {
		const response = await axios.post(`${BASE_URL}/auth/register`, userData);
		return response.data;
	} catch (error) {
		throw error.response ? error.response.data : error.message;
	}
};

export const loginUser = async (userData) => {
	try {
		const response = await axios.post(`${BASE_URL}/auth/login`, userData);
		return response.data;
	} catch (error) {
		throw error.response ? error.response.data : error.message;
	}
};

export const logoutUser = async () => {
	try {
		const response = await axios.post(`${BASE_URL}/auth/logout`);
		return response.data;
	} catch (error) {
		throw error.response ? error.response.data : error.message;
	}
};

// These are the endpoints for dealing with the Products
export const fetchAllProducts = async (token) => {
	try {
		const response = await fetch(`${BASE_URL}/products`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		throw error.response ? error.response.data : error.message;
	}
};

export const fetchProductById = async (productId) => {
	try {
		const response = await axios.get(`${BASE_URL}/products/${productId}`);
		return response.data;
	} catch (error) {
		throw error.response ? error.response.data : error.message;
	}
};

export const createProduct = async (productData) => {
	try {
		const response = await axios.post(`${BASE_URL}/products`, productData);
		return response.data;
	} catch (error) {
		throw error.response ? error.response.data : error.message;
	}
};

export const updateProductById = async (productId, productData) => {
	try {
		const response = await axios.put(
			`${BASE_URL}/products/${productId}`,
			productData
		);
		return response.data;
	} catch (error) {
		throw error.response ? error.response.data : error.message;
	}
};

export const deleteProductById = async (productId) => {
	try {
		const response = await axios.delete(`${BASE_URL}/products/${productId}`);
		return response.data;
	} catch (error) {
		throw error.response ? error.response.data : error.message;
	}
};

// These ones deal with the carts (getting the cart data, deleting items and adding )
export const getCart = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/cart`);
		return response.data;
	} catch (error) {
		throw error.response ? error.response.data : error.message;
	}
};

export const addToCart = async (cartItem) => {
	try {
		const response = await axios.post(`${BASE_URL}/cart/add`, cartItem);
		return response.data;
	} catch (error) {
		throw error.response ? error.response.data : error.message;
	}
};

export const deleteFromCart = async (cartItem) => {
	try {
		const response = await axios.delete(`${BASE_URL}/cart/delete`, {
			data: cartItem,
		});
		return response.data;
	} catch (error) {
		throw error.response ? error.response.data : error.message;
	}
};
