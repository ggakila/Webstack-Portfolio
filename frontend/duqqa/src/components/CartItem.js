"use client";
import Image from "next/image";
import { deleteFromCart } from "@/utils/helperFunctions";
import { useAuth } from "@/utils/AuthContext";

export default function CartItem({ productId, imageUrl, price, productName, onRemove}) {
	const { userId } = useAuth();
	console.log(userId);

	const handleRemove = async () => {
		try {
			await deleteFromCart( productId , userId);
			console.log("Done carted del");
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
				<h1 className="font-semibold text-xl">{productName}</h1>
			</div>
			<p className="font-bold">
				$<span>{price}</span>
			</p>
			<button
				className="absolute z-10 top-0 p-1 right-0 text-red-500  hidden group-hover:flex"
				onClick={handleRemove}
			>
				remove
			</button>
		</div>
	);
}
