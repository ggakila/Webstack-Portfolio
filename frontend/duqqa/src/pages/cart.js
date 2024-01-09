'use client'
import CartItem from "@/components/CartItem";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "@/utils/helperFunctions";

export default function Cart() {
	const { token, userId } = useAuth();
	const router = useRouter();
	const [cart, setCart] = useState([]);

	const fetchCart = useCallback(async () => {
		const response = await getCart(userId);
		setCart(response);
		console.log(response);
	}, [userId]);

	useEffect(() => {
		if (!token) {
			router.push("/login");
		}
	}, [token, router]);

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
		(total, item) => total + item.product.price * item.quantity,
		0
	);
	return (
		<div className="flex flex-col items-center justify-center p-10">
					<Link
						href="/"
						className="w-[40px] h-[40px] absolute top-10 left-10"
					>
						<Image
							src="/images/back.svg"
							fill={true}
							alt="back button home"
						/>
					</Link>
			<div className=" flex justify-start w-full sm:w-3/4 lg:w-1/2 flex-col items-center  gap-5 h-screen mt-16">
				<div className="flex flex-col justify-start items-start w-full gap-3  ">
					<h1 className="text-3xl font-bold">Cart.</h1>
					<h1 className="text-left text-xl ">
						You are about to acquire the ({cartnum}) work(s)
					</h1>
				</div>
				<div className="w-full">
					{cart.map((item) => (
						<>
							<CartItem
								key={item.product._id}
								imageUrl={item.product.imageUrl}
								price={item.product.price}
								productName={item.product.productName}
								productId={item.product._id}
								userId={userId}
								onRemove={handleRemove}
							/>
						</>
					))}
				</div>
				<div className="flex w-full justify-between p-3">
					<h3>Total Price</h3>
					<p>
						$<span>{totalPrice}</span>
					</p>
				</div>
				<div className="flex justify-evenly w-full">
					<Link
						href="/exhibition"
						className=" py-3 px-5 w-[150px] text-center rounded-full border border-gray-500 text-gray-300 hover:bg-gray-200 hover:text-black font-semibold"
					>
						continue shopping
					</Link>
					<button className=" py-3 px-5 w-[150px] rounded-full border border-gray-500 text-gray-300 hover:bg-gray-200 hover:text-black font-semibold">
						Checkout
					</button>
				</div>
			</div>
		</div>
	);
}
