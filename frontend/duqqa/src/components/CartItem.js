import Image from "next/image";

export default function CartItem() {
  return (
		<div className="flex justify-between w-full items-center border-b border-gray-800 text-white p-3 shadow-lg">
			<div className="flex items-center gap-5">
				<div className="relative w-[80px] h-[100px]">
					<Image
						src="https://images.pexels.com/photos/8517088/pexels-photo-8517088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						fill={true}
						alt="cart item"
						style={{ objectFit: "cover" }}
                        className="rounded shadow-md"
					/>
				</div>
				<h1 className="font-semibold text-xl">
					The Girrafe <span className="font-light italic ">by</span> Haggai
					Gisore
				</h1>
			</div>
			<p className="font-bold">
				$<span>12000</span>
			</p>
		</div>
	);
}
