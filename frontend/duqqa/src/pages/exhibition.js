import Cards from "@/components/Cards";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../utils/helperFunctions";
import { useAuth } from "@/utils/AuthContext";

export default function Exhibition() {
	const { token } = useAuth(); 

	const { data: products, isLoading } = useQuery({
		queryFn: () => fetchAllProducts(token),
		queryKey: ["products"],
	});
	console.log(products);

	if (isLoading) {
		return <div>is Loading...</div>;
	}
	return (
		<div className="exhibition  h-screen p-10 lg:px-20 font-light">
			<div className="flex items-start gap-10 py-5">
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
				<div className="flex flex-col gap-5">
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
			<div className="slider flex h-[70dvh] items-center  w-full overflow-hidden relative">
				<div className="slider-wrapper absolute top-0 w-[8000px] py-0 px-[600px]  flex items-end   ">
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
							<Cards
								key={product._id}
								url={product.imageUrl}
								id={product._id}
								productName={product.productName}
								description={product.description}
								price={product.price}
								className="slide "
							/>
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
		</div>
	);
}
