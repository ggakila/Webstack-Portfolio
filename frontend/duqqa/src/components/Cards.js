import Image from "next/image";
import Link from "next/link";

export default function Cards({url, id, productName, description, price}) {
  return (
		<Link
			href={{
				pathname: "/art/[slug]",
				query: { slug: id },
			}}
			className="w-[400px] h-[500px] my-6 border border-gray-700 rounded-lg relative"
		>
			<div className="h-[100%] -z-10 relative overflow-hidden">
				<Image
					src={url}
					fill={true}
					alt="art for sale"
					style={{ objectFit: "cover" }}
					className="rounded overflow-hidden hover:scale-110 transform transition-transform duration-300 ease-in-out"
				/>
			</div>
			<div className="flex justify-between items-center px-5 w-full absolute bottom-0  bg-black opacity-80 py-3">
				<h3 className="w-1/2 text-lg font-semibold tracking-wide">
					{productName}
					<span className="italic font-normal text-sm"> by</span> James Doe
				</h3>
				<p className="price font-bold">${price}</p>
				<button className="border px-3 text-sm min-w-[100px] max-h-[30px] py-2 rounded-full hover:bg-gray-100 hover:text-gray-900">
					Add to Cart
				</button>
			</div>
		</Link>
	);
}
