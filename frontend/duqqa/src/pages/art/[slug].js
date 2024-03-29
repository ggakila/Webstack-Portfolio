import React, {useState, useEffect} from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../../utils/helperFunctions";
import { addToCart } from "@/utils/helperFunctions";
import { useAuth } from "@/utils/AuthContext";
import Loader from "@/components/Loader";
import Link from "next/link";
import { Syne } from "next/font/google";

const syne = Syne({
	weight: [],
	subsets: ["latin"],
});
export default function ProductPage() {
	const { userId } = useAuth();
	const router = useRouter();
	const productId = router.query.slug;
	const [load, setLoad] = useState(true);	

	
	const {
		data: product,
		isLoading,
		isError,
	} = useQuery({
		queryFn: () => fetchProductById(productId),
		queryKey: ["product", productId],
	});
  useEffect(() => {
		const timer = setTimeout(() => {
			setLoad(false);
		}, 700);

		return () => clearTimeout(timer);
	}, []);

	const cartItem = {
		productId: productId,
		quantity: 1,
	};

	const onSubmit = () => {
		addToCart(cartItem, userId);
		console.log(userId, cartItem);
	}; 

	if (isLoading || load) {
		return <Loader />;
	}

	if (isError || !product) {
		return <div>Error loading product</div>;
	}

	return (
		<div className={` ${syne.className} w-full h-screen flex flex-col md:flex-row items-center p-10 md:p-20`}>
			<div className="w-full md:w-1/2 h-full relative">
				<Image
					src={product.imageUrl}
					fill={true}
					alt={product.productName}
					style={{ objectFit: "contain" }}
				/>
			</div>
			<div className="w-full md:w-1/2 md:p-10 flex flex-col gap-10  h-full justify-center text-lg text-gray-400 font-light">
				<div className="flex">
					<p className="w-1/4 text-xl font-semibold">Title:</p>
					<p className="w-3/4 text-gray-100">{product.productName}</p>
				</div>
				<div className="flex">
					<p className="w-1/4 text-xl font-semibold">Description:</p>
					<p className="w-3/4 text-gray-100">{product.description}</p>
				</div>
				<div className="flex">
					<p className="w-1/4 text-xl font-semibold">Price:</p>
					<p className="w-3/4 text-gray-100">${product.price}</p>
				</div>
				<div className="flex">
					<p className="w-1/4"></p>
					<Link
						href='/exhibition'
						className="w-3/4 bg-gray-100 text-black p-3 rounded-md hover:text-gray-100 text-[14px] font-medium hover:bg-orange-500 text-center max-w-[200px] "
					>
						back to exhibition
					</Link>
				</div>
			</div>
		</div>
	);
}