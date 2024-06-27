"use client";
import Image from "next/image";
import { deleteFromCart } from "@/utils/helperFunctions";
import { useAuth } from "@/utils/AuthContext";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartItem({ productId, imageUrl, price, productName, onRemove}) {
	const { userId } = useAuth();
	console.log(userId);

	const notify = () => {
		toast.success("Removed from Cart", {
			theme: "dark",
			pauseOnFocusLoss: false,
			position: toast.POSITION.TOP_CENTER,
			autoClose: 200,
			hideProgressBar: true,
		});
	};

	const handleRemove = async () => {
		try {
			const success = await deleteFromCart( productId , userId);
			if (success) {
				notify();
			}
			onRemove(productId);
		} catch (error) {
			console.log("Error deleting from cart");
		}
	};

	return (
		<div className="group hover:bg-zinc-950 relative flex justify-between w-full items-center border-b border-gray-800 text-white p-3 shadow-lg">
			<div className="flex items-center gap-5">
				<div className="relative w-[80px] h-[10vh]">
					{imageUrl ? (
						<Image
							src={imageUrl}
							fill={true}
							alt="cart item"
							style={{ objectFit: "cover" }}
							className="rounded shadow-md"
						/>
					) : (
						<p>hi there</p>
					)}
				</div>
				<h1 className="font-semibold text-[14px] md:text-[16px]">
					{productName}
				</h1>
			</div>
			<ToastContainer limit={3} />
			<p className="text-[14px] md:text-[16px]">
				$<span>{price}</span>
			</p>
			<button
				className="absolute z-10 top-0 p-1 right-0 text-red-500  hidden group-hover:flex  text-[14px] "
				onClick={handleRemove}
			>
				remove
			</button>
		</div>
	);
}
