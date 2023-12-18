import Image from "next/image";
import Link from "next/link";

export default function Cards({url, id}) {
  return (
		<Link
			href={{
				pathname: "/art/[slug]",
				query: { slug: id },
			}}
			className="w-full h-[300px] my-6 border border-gray-500 rounded-lg"
		>
			<div className="h-[80%] relative overflow-hidden">
				<Image
					src={url}
					fill={true}
					alt="art for sale"
					style={{ objectFit: "cover" }}
					className="rounded overflow-hidden hover:scale-110 transform transition-transform duration-300 ease-in-out"
				/>
			</div>
			<div className="flex py-5 justify-between p-5">
				<h3 className="text-lg font-semibold tracking-wide">
					Girrafe<span className="italic font-normal text-sm"> by</span> James
					Doe
				</h3>
				<p className="font-bold">$1200.00</p>
				<button className="border px-3 text-sm py-2 rounded-full hover:bg-gray-100 hover:text-gray-900">
					Add to Cart
				</button>
			</div>
		</Link>
	);
}
