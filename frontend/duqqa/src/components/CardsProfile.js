import Image from "next/image";
import Link from "next/link";
import { deleteProductById } from "@/utils/helperFunctions";

export default function Cards({ url, id, productName, price}) {
const handleDelete = async () => {
    try {
      await deleteProductById(id);
    } catch (error) {

      console.error(error);
    }
  };

  const handleEdit = async () => {

  }

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
				<h3 className="text-lg font-semibold tracking-wide">{productName}</h3>
				<p className="font-bold">${price}</p>
				<Link
					href={{
						pathname: "/edit/[slug]",
						query: { slug: id },
					}}
					className="border-b px-3 text-sm   hover:bg-gray-100 hover:text-gray-900"
				>
					Edit
				</Link>
				<button
					onClick={handleDelete}
					className="border-b px-3 text-sm text-red-500  hover:bg-gray-100 hover:text-gray-900"
				>
					delete
				</button>
			</div>
		</div>
	);
}
