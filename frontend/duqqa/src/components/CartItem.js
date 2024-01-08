import Image from "next/image";

export default function CartItem({imageUrl, price, productName}) {
  return (
		<div className="flex justify-between w-full items-center border-b border-gray-800 text-white p-3 shadow-lg">
			<div className="flex items-center gap-5">
				<div className="relative w-[80px] h-[100px]">
					{imageUrl ? (
						<Image
							src={imageUrl}
							fill={true}
							alt="cart item"
							style={{ objectFit: "cover" }}
							className="rounded shadow-md"
						/>
					) : (
						<p>hi there</p>
					)}
				</div>
				<h1 className="font-semibold text-xl">
					{productName} <span className="font-light italic ">by</span> Haggai
					Gisore
				</h1>
			</div>
			<p className="font-bold">
				$<span>{price}</span>
			</p>
		</div>
	);
}
