'use client'
import CartItem from "@/components/CartItem";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback} from "react";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "@/utils/helperFunctions";
import { Syne } from "next/font/google";

const syne = Syne({
	weight: [],
	subsets: ["latin"],
});

export default function Cart() {
	const { token, userId, loading } = useAuth();
	const router = useRouter();
	const [cart, setCart] = useState([]);

	const fetchCart = useCallback(async () => {
		const response = await getCart(userId);
		const validItems = response.filter((item) => item.product !== null);
		setCart(validItems);
		console.log(validItems);
	}, [userId]);


	useEffect(() => {
		if (!loading && !token) {
			router.replace("/auth/login");
		}
	}, [token, router, loading]);

	useEffect(() => {
		fetchCart();
	}, [fetchCart]);

	const handleRemove = (productIdToRemove) => {
		setCart((prevCart) =>
			prevCart.filter((item) => item.product._id !== productIdToRemove)
		);
	};

	const cartnum = cart?.length;

	// if (isLoading) {
	// 	return <div>is Loading...</div>;
	// }
	const totalPrice = cart.reduce(
		(total, item) =>
			item.product ? total + item.product.price * item.quantity : total,
		0
	);

	return (
		<div
			className={` ${syne.className} flex flex-col items-center justify-center p-5 md:p-10 bg-neutral-950 min-h-screen `}
		>
			
			
			<div className=" flex justify-start w-full sm:w-3/4 lg:w-2/3 flex-col items-center  gap-5 h-full ">
				<div className="flex flex-col justify-center items-center w-full gap-3  ">
					<h1 className="text-[24px] font-bold">Cart.</h1>
					<h1 className="text-left text-[16px] ">
						You are about to acquire the ({cartnum}) work(s)
					</h1>
				</div>
				<div className="w-full">
					{cart.map(
						(item) =>
							item.product && (
								<CartItem
									key={item.product._id}
									imageUrl={item.product.imageUrl}
									price={item.product.price}
									productName={item.product.productName}
									productId={item.product._id}
									onRemove={handleRemove}
								/>
							)
					)}
				</div>
				<div className="flex w-full justify-between p-3 text-[14px]">
					<h3>Total Price</h3>
					<p>
						$<span>{totalPrice}</span>
					</p>
				</div>
				<div className="flex justify-evenly w-full">
					<Link
						href="/exhibition"
						className=" py-2 px-3 w-[200px] text-[14px] flex items-center justify-center text-center rounded-md border border-gray-500 text-gray-300 hover:bg-purple-500 hover:text-gray-200 font-semibold"
					>
						continue shopping
					</Link>
					<button className=" py-2 px-3 w-[200px] text-[14px] flex items-center justify-center  rounded-md border border-gray-500 text-gray-300 hover:bg-green-500 hover:text-gray-200 font-semibold">
						Checkout
					</button>
				</div>
			</div>
		</div>
	);
}
