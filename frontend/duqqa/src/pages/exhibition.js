import Cards from "@/components/Cards";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../utils/helperFunctions";
import { useAuth } from "@/utils/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";


export default function Exhibition() {
	const { token } = useAuth();
	const router = useRouter();
	

	useEffect(() => {
		if (!token) {
			router.replace("/login");
		}
	}, [token, router]);

	const [data, setData] = useState(null);
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
		<div className="exhibition h-full p-10 lg:px-20 font-light">
			<div className="flex items-start h-[30dvh] md:h-[20dvh] gap-10 py-5 justify-between ">
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
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-5 w-full">
					<div className="">
						<h1 className="text-6xl text-white z-10">Exhibition</h1>
						<h1 className="text-5xl">Available works</h1>
					</div>
					<p className="text-2xl  md:w-1/3">
						Our goal is to democratize art, providing a space where talents are
						celebrated, stories are shared, and connections are forged{" "}
					</p>
				</div>
			</div>
			<div className="flex h-full w-full gap-10 lg:gap-30 flex-wrap justify-evenly ">
				{products?.map((product) => (
					<>
						<Cards
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
	);
}
