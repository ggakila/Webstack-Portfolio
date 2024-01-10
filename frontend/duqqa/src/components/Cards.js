import Image from "next/image";
import Link from "next/link";
import { addToCart } from "@/utils/helperFunctions";
import { useAuth } from "@/utils/AuthContext";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cards({ url, id, productName,  price }) {

	const { userId } = useAuth();
	const notify = () => {
		toast.success("Added to Cart", {
			theme: "dark",
			pauseOnFocusLoss: false,
			position: toast.POSITION.TOP_CENTER,
			autoClose: 200,
			hideProgressBar: true,
		});
	};

	const cartItem = {
		productId: id,
		quantity: 1,
	};
	
	const onSubmit = async () => {
		const isSuccessful = await addToCart(cartItem, userId);
		if (isSuccessful) {
			notify();
		}
		
	}; 

	return (
		<div className="w-[400px] h-[500px] my-6 border border-gray-700 rounded-lg relative">
			<Link
				href={{
					pathname: "/art/[slug]",
					query: { slug: id },
				}}
			>
				<Image
					src={url}
					fill={true}
					alt="art for sale"
					style={{ objectFit: "cover" }}
					className="rounded overflow-hidden hover:scale-105 transform transition-transform duration-300 ease-in-out"
				/>
			</Link>
			<div className="flex justify-between items-center px-5 w-full absolute bottom-0  bg-black opacity-80 py-3">
				<h3 className="w-1/2 text-lg font-semibold tracking-wide">
					{productName}
				</h3>
				<p className="price font-bold">${price}</p>
				<button
					className="border px-3 text-sm min-w-[100px] max-h-[30px] py-2 rounded-full hover:bg-gray-100 hover:text-gray-900"
					onClick={onSubmit}
				>
					Add to Cart
				</button>
				<ToastContainer limit={3} />
			</div>
		</div>
	);
}
