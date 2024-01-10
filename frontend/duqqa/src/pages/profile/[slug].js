import React from "react";
import Link from "next/link";
import CardsProfile from "@/components/CardsProfile";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "@/utils/helperFunctions";
import { useAuth } from "@/utils/AuthContext";
import { useEffect } from "react";

export default function Profile() {
	const router = useRouter();
	const { token } = useAuth();

	const username = router.query.slug;

	useEffect(() => {
		if (!token) {
			router.replace("/login");
		}
	}, [token, router]);
	console.log(token);

	const { data: products, isLoading } = useQuery({
		queryFn: () => fetchAllProducts(token),
		queryKey: ["products"],
	});
	console.log(products);

	if (isLoading) {
		return <div>is Loading...</div>;
	}
	return (
		<div className="gap-10 py-10 px-10 lg:px-20 h-screen">
			<div className="flex justify-between">
				<Link
					href="/"
					className="w-[40px] h-[40px] relative"
				>
					<Image
						src="/images/back.svg"
						fill={true}
						alt="back button home"
					/>
				</Link>
				<h1 className="text-8xl font-light ">{username}</h1>
				<div className="flex flex-col  items-start justify-end text-left gap-3 text-2xl">
					<Link
						href="/exhibition"
						className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
					>
						Exhibition
					</Link>
					<Link
						href="/showcase"
						className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
					>
						Showcase
					</Link>
					<Link
						href="/cart"
						className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
					>
						Cart
					</Link>
					
				</div>
			</div>
			<div className="w-full ">
				<h1 className="text-2xl">Your works.</h1>
				<div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 h-full w-full gap-10 lg:gap-30">
						{products?.map((product) => (
							<>
								<CardsProfile
									key={product._id}
									url={product.imageUrl}
									id={product._id}
									productName={product.productName}
									description={product.description}
									price={product.price}
									className="slide "
								/>
							</>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
