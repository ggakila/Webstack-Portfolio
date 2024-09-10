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
			className={` text-gray-900 w-full  h-[10vh] flex justify-between items-center px-5 md:px-10 z-50 shadow-sm   fixed bg-white top-0 `}
		>
			{/* <Navigation/> */}
			<div className="flex w-full gap-2 text-[0.85rem] md:text-[0.9rem] ">
				<div
					className={`hidden md:flex justify-center text-left gap-1 sm:gap-2 md:gap-5 font-light text-[12px] md:text-[14px] ${syne.className}`}
				>
					<Link
						href="/exhibition"
						className="border-transparent border-b-2 hover:border-orange-600 hover:text-orange-600 font-extralight "
					>
						Exhibition
					</Link>
					<Link
						href="/showcase"
						className="border-transparent border-b-2 hover:border-orange-600 hover:text-orange-600 "
					>
						Submit your work
					</Link>
					<Link
						href="/about"
						className="border-transparent border-b-2 hover:border-orange-600 hover:text-orange-600 "
					>
						About us
					</Link>
					<Link
						href="/cart"
						className="border-transparent border-b-2 hover:border-orange-600 hover:text-orange-600 "
					>
						Cart
					</Link>
				</div>
			</div>
			<Link
				href="/"
				className={`font-extrabold uppercase text-[0.85rem]   px-3 py-1 text-center rounded-full w-full ${syne.className}`}
			>
				duqqa.
			</Link>
			<div className="w-full  text-end text-[0.85rem] md:text-[0.9rem]">
				{token ? (
					<Link
						href={{
							pathname: "/profile/[slug]",
							query: { slug: username },
						}}
						className="border-transparent border-b-2 hover:border-orange-600 hover:text-orange-600 "
					>
						{username}
					</Link>
				) : (
					<Link
						href="/auth/login"
						className="border-transparent border-b-2 hover:border-orange-600 hover:text-orange-600"
					>
						Login
					</Link>
				)}
			</div>
		</div>
	);
}