import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../../utils/helperFunctions";

export default function ProductPage() {
	const router = useRouter();
	const productId = router.query.slug;
	console.log(productId);
	const {
		data: product,
		isLoading,
		isError,
	} = useQuery({
		queryFn: () => fetchProductById(productId),
		queryKey: ["product", productId],
	});

	console.log(product);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError || !product) {
		return <div>Error loading product</div>;
	}

	return (
		<div className="w-full h-screen flex flex-col md:flex-row items-center p-10 md:p-20">
			<div className="w-full md:w-1/2 h-full relative">
				<Image
					src={product.imageUrl}
					fill={true}
					alt={product.productName}
					style={{ objectFit: "contain" }}
				/>
			</div>
			<div className="w-full md:w-1/2 md:p-10 flex flex-col gap-10  h-full justify-center text-xl text-gray-400 font-light">
				<div className="flex">
					<p className="w-1/4">Title</p>
					<p className="w-3/4">{product.productName}</p>
				</div>
				<div className="flex">
					<p className="w-1/4">Description</p>
					<p className="w-3/4">{product.description}</p>
				</div>
				<div className="flex">
					<p className="w-1/4">Price</p>
					<p className="w-3/4">${product.price}</p>
				</div>
				<div className="flex">
					<p className="w-1/4"></p>
					<button className="w-3/4 border border-gray-500 p-2 rounded-full hover:bg-gray-300 hover:text-gray-900">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}