import CartItem from "@/components/CartItem";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "@/utils/helperFunctions";

export default function Cart() {
	const { token, userId } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!token) {
			router.push("/login");
		}
	}, [token, router]);

	const { data: cart, isLoading } = useQuery({
		queryFn: () => getCart(userId),
		queryKey: ["cart"],
	});
	console.log(cart);
	const cartnum = cart?.length;

	if (isLoading) {
		return <div>is Loading...</div>;
	}

	return (
		<div className="flex flex-col-reverse sm:flex-row items-center justify-center p-10">
			<div className=" flex justify-start w-full sm:w-3/4 lg:w-1/2 flex-col items-center p-10 gap-5 h-screen">
				<div className="flex flex-col justify-start items-start w-full gap-3  ">
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
					<h1 className="text-3xl font-bold">Cart.</h1>
					<h1 className="text-left text-xl ">
						You are about to acquire the ({cartnum}) work(s)
					</h1>
				</div>
				<div className="w-full">
					{cart?.map((item) => (
						<>
							<CartItem
								key={item._id}
								imageUrl={item.imageUrl}
								price={item.price}
								productName={item.productName}
							/>
						</>
					))}
				</div>
				<div className="flex w-full justify-between p-3">
					<h3>Total Price</h3>
					<p>
						$<span>48000</span>
					</p>
				</div>
				<div className="flex justify-evenly w-full">
					<Link
						href="/exhibition"
						className=" py-3 px-5 w-[150px] text-center rounded-full border border-gray-500 text-gray-300 hover:bg-gray-200 hover:text-black font-semibold"
					>
						continue shopping
					</Link>
					<button className=" py-3 px-5 w-[150px] rounded-full border border-gray-500 text-gray-300 hover:bg-gray-200 hover:text-black font-semibold">
						Checkout
					</button>
				</div>
			</div>
			{/* <div className="sm:w-1/2 xl:w-2/3 h-[200px] sm:h-screen relative md:fixed right-0">
				<Image
					src="https://4.bp.blogspot.com/_0u4v0vUqHLE/SsUR7vP6xII/AAAAAAAABgg/rAWy_QhGQEI/s1600/Red+Cart.jpg"
					fill={true}
					alt="userCart"
					style={{ objectFit: "cover" }}
				/>
			</div> */}
		</div>
	);
}
