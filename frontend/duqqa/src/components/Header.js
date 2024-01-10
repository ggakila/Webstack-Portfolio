'use client'
import { Comfortaa , Tangerine } from 'next/font/google'
import Link from "next/link";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/router";
import { useCallback, useEffect , useState } from "react";
import { getCart } from "@/utils/helperFunctions";



// const poppins = Comfortaa({
// 	weight: ["300", "400", "500", "600", "700"],
// 	subsets: ["latin"],
// });

// const tangerine = Tangerine({
// 	weight: [ "400", "700"],
// 	subsets: ["latin"],
// });


export default function Header() {
	const { username, token, logout, userId } = useAuth();
	const [cart, setCart] = useState([]);
	const router = useRouter();
useCallback(() => {
		async function fetchCart() {
			const response = await getCart(userId);
			setCart(response);
			console.log(response);
		}
		fetchCart();
	}, [userId]);
	// const cartnum = cart.length;

	return (
		<div
			className={`mix-blend-difference text-gray-200 w-full  py-4 md:py-8 flex justify-between items-center px-10 md:px-20 font-bold z-10 bg-transparent  md:sticky top-[1px] `}
		>
			<h1 className={`font-bold text-7xl `}>duqqa</h1>
			<div className="flex  gap-2 text-2xl text-right">
				<div className="flex flex-col md:flex-row  justify-end text-left gap-2 md:gap-5 font-light text-[2vw]  md:text-[1.2vw]">
					<Link
						href="/exhibition"
						className="border-transparent border-b hover:border-gray-200 hover:text-gray-200 font-extralight"
					>
						Exhibition
					</Link>
					<Link
						href="/showcase"
						className="border-transparent border-b hover:border-gray-200 hover:text-gray-200 font-extralight"
					>
						Showcase
					</Link>
					<Link
						href='/cart'
						className="border-transparent border-b hover:border-gray-200 hover:text-gray-200"
					>
						{/* Cart ({cartnum}) */}
						Cart
					</Link>
					{token ? (
						<Link
							href={{
								pathname: "/profile/[slug]",
								query: { slug: username },
							}}
							className="border-transparent border-b hover:border-gray-200 hover:text-gray-200"
						>
							{username}
						</Link>
					) : (
						<Link
							href="/login"
							className="border-transparent border-b hover:border-gray-200 hover:text-gray-200"
						>
							Login
						</Link>
					)}
					{token && (
						<button
							onClick={() => {
								logout();
								setCart([]); 
								router.push("/"); 
							}}
							className="border-transparent border-b hover:border-gray-200 hover:text-gray-200 cursor-pointer"
						>
							Logout
						</button>
					)}
				</div>
			</div>
		</div>
	);
}