import CartItem from "@/components/CartItem";
import Image from "next/image";


export default function cart() {
  return (
		<div className="flex">
			<div className="relative w-2/3 h-screen">
				<Image
					src="https://4.bp.blogspot.com/_0u4v0vUqHLE/SsUR7vP6xII/AAAAAAAABgg/rAWy_QhGQEI/s1600/Red+Cart.jpg"
					fill={true}
					alt="cart item"
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div className=" bg-white flex justify-center w-1/3 flex-col items-center p-10 gap-5 h-screen">
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
			</div>
		</div>
	);
}

