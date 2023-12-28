import { Comfortaa , Tangerine } from 'next/font/google'
import Link from "next/link";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/router";
import { useEffect , useState } from "react";



// const poppins = Comfortaa({
// 	weight: ["300", "400", "500", "600", "700"],
// 	subsets: ["latin"],
// });

// const tangerine = Tangerine({
// 	weight: [ "400", "700"],
// 	subsets: ["latin"],
// });

export default function Header() {
	const { username, token, logout } = useAuth();
	const router = useRouter();
	return (
		<div
			className={`mix-blend-difference text-gray-200 w-full  py-4 md:py-8 flex justify-between items-center px-10 md:px-20 font-bold z-10 bg-transparent  md:sticky top-[1px] `}
		>
			<h1 className={`font-bold text-7xl `}>duqqa</h1>
			<div className="flex  gap-2 text-2xl text-right">
				<div className="flex flex-col md:flex-row  justify-end text-left gap-2 md:gap-5 font-light text-[12px] md:text-xl">
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
						href="/cart"
						className="border-transparent border-b hover:border-gray-200 hover:text-gray-200"
					>
						Cart (0)
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
					{/* Optionally, you can add a logout button if the user is logged in */}
					{token && (
						<button
							onClick={() => {
								logout(); // Call your logout function from the AuthContext
								router.push("/"); // Redirect to the home page after logout
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