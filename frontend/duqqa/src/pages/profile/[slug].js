import React from "react";
import Link from "next/link";
import CardsProfile from "@/components/CardsProfile";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "@/utils/helperFunctions";
import { useAuth } from "@/utils/AuthContext";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { Syne } from "next/font/google";

const syne = Syne({
	weight: [],
	subsets: ["latin"],
});


export default function Profile() {
	const router = useRouter();
	const { token, logout, loading } = useAuth();
	const [load, setLoad] = useState(true);	


	const username = router.query.slug;

	useEffect(() => {
		if (!loading && !token) {
			router.replace("/auth/login");
		}
	}, [token, router, loading]);
	
	useEffect(() => {
		if (!loading && !token) {
			router.replace("/auth/login");
		}
	}, [token, router, loading]);

	 useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 700); 

    return () => clearTimeout(timer); 
  }, []);


	const { data: products, isLoading , refetch} = useQuery({
		queryFn: () => fetchAllProducts(token),
		queryKey: ["products"],
	});
	console.log(products);

	const onRemove = () =>{
		refetch();
	}

	if (isLoading || load) {
		return <Loader load={load} />;
	}
	return (
		<div className={` ${syne.className} gap-10 py-10 px-5 lg:px-10 h-screen`}>
			<div className="flex justify-between items-start">
				<div className="flex flex-col items-start gap-5 ">
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
					<h1 className="text-[24px] md:text-[32px] font-light ">Hello, {username}</h1>
				</div>
				<div className="flex flex-row items-center justify-between text-left gap-3 text-[14px] text-gray-300">
					<Link
						href="/exhibition"
						className="border-transparent border-b-2 hover:border-gray-100 hover:text-white py-2"
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
						className="border-transparent border-b-2 hover:border-gray-100 hover:text-white py-2"
					>
						Cart
					</Link>
					{token && (
						<button
							onClick={() => {
								logout();
								router.push("/");
							}}
							className="border-transparent border-b-2 hover:border-gray-100 hover:text-white cursor-pointer py-2"
						>
							Logout
						</button>
					)}
				</div>
			</div>
			<div className="w-full pt-5">
				<h1 className="text-[14px] md:text-[24px]">The power is in your hands.</h1>
				<div>
					<div className="flex flex-wrap h-full w-full gap-10 lg:gap-30">
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
									onRemove={onRemove}
								/>
							</>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
