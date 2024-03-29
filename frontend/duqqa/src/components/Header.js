'use client'
import { Comfortaa , Tangerine } from 'next/font/google'
import Link from "next/link";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/router";
import { useCallback, useEffect , useState } from "react";
import { getCart } from "@/utils/helperFunctions";
import { Syne } from "next/font/google";
import Navigation from './SmallScreenNav';

const syne = Syne({
	weight: [],
	subsets: ["latin"],
});


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
	

	return (
		<div
			className={`mix-blend-difference text-gray-400 w-full  py-4 md:py-8 flex justify-between items-center px-10 md:px-20 font-bold z-10 bg-transparent  md:sticky top-[1px] `}
		>
			<Link
				href="/"
				className={`font-extrabold uppercase text-xl md:text-3xl bg-orange-500 hover:bg-purple-500 p-3 my-2 rounded-full text-white ${syne.className}`}
			>
				duqqa
			</Link>
			{/* <Navigation/> */}
			<div className="flex gap-2 text-xl text-right">
				
				<div
					className={`hidden md:flex justify-center text-left gap-1 sm:gap-2 md:gap-5 font-light text-[10px] md:text-[18px] ${syne.className}`}
				>
					<Link
						href="/exhibition"
						className="border-transparent border-b-2 hover:border-gray-200 hover:text-white font-extralight py-2"
					>
						Exhibition
					</Link>
					<Link
						href="/showcase"
						className="border-transparent border-b-2 hover:border-gray-100 hover:text-white py-2"
					>
						Showcase
					</Link>
					<Link
						href="/cart"
						className="border-transparent border-b-2 hover:border-gray-200 hover:text-white py-2"
					>
						Cart
					</Link>
					{token ? (
						<Link
							href={{
								pathname: "/profile/[slug]",
								query: { slug: username },
							}}
							className="border-transparent border-b-2 hover:border-gray-200 hover:text-white py-2"
						>
							{username}
						</Link>
					) : (
						<Link
							href="/auth/login"
							className="border-transparent border-b-2 hover:border-gray-200 hover:text-white py-2"
						>
							Login
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}