import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/utils/AuthContext";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const { username, token, logout, userId } = useAuth();

	return (
		<div>
			<button
				className="sm:hidden fixed top-0 right-0 z-50 p-4"
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? "X" : "Menu"}
			</button>
			<div
				className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-transform duration-200 ease-in-out transform ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				} sm:translate-x-0 sm:static sm:bg-transparent`}
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
	);
}
