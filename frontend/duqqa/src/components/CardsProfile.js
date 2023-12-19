import Image from "next/image";
import Link from "next/link";

export default function Cards({ url, id }) {
	return (
		<div className="w-full h-[300px] my-6 border border-gray-500 rounded-lg">
			<Link
				href={{
					pathname: "/art/[slug]",
					query: { slug: id },
				}}
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
			</Link>
			<div className="flex py-5 justify-between p-5">
				<h3 className="text-lg font-semibold tracking-wide">Girrafe</h3>
				<p className="font-bold">$1200.00</p>
				<button className="border-b px-3 text-sm   hover:bg-gray-100 hover:text-gray-900">
					Edit
				</button>
				<button className="border-b px-3 text-sm text-red-500  hover:bg-gray-100 hover:text-gray-900">
					delete
				</button>
			</div>
		</div>
	);
}
