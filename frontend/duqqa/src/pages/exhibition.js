'use client'
import Cards from "@/components/Cards";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../utils/helperFunctions";
import { useAuth } from "@/utils/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import { Syne } from "next/font/google";

const syne = Syne({
	weight: [],
	subsets: ["latin"],
});



export default function Exhibition() {
	const { token , loading } = useAuth();
	const router = useRouter();
	const [load, setLoad] = useState(true);	
	

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

	const { data: products, isLoading } = useQuery({
		queryKey: ["products", token],
		queryFn: () => fetchAllProducts(token),
		enabled: !!token, 
	});

	if (isLoading || load) {
		return <Loader load={load} />;
	}
	return (
		<div className={` ${syne.className} exhibition h-full p-10 lg:px-20 font-light`}>
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
						<h1 className="text-2xl md:text-4xl text-white z-10">Exhibition</h1>
						<h1 className="text-xl md:text-2xl">Available works</h1>
					</div>
					<p className="text-[14px] md:text-xl  md:w-1/3">
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
