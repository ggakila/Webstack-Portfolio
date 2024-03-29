import Image from "next/image";
import Link from "next/link";
import { deleteProductById } from "@/utils/helperFunctions";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cards({ url, id, productName, price, onRemove}) {
const handleDelete = async () => {
    try {
      const success = await deleteProductById(id);
	  if (success) {
			notify();
		}
		onRemove(id);
    } catch (error) {

      console.error(error);
    }
  };

  const notify = () => {
		toast.success("Deleted successfully", {
			theme: "dark",
			pauseOnFocusLoss: false,
			position: toast.POSITION.TOP_CENTER,
			autoClose: 200,
			hideProgressBar: true,
		});
	};


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
						priority
						alt="art for sale"
						style={{ objectFit: "cover" }}
						className="rounded overflow-hidden hover:scale-110 transform transition-transform duration-300 ease-in-out"
					/>
				</div>
			</Link>
			<div className="flex py-5 justify-between items-center p-5">
				<h3 className="text-sm font-semibold tracking-wide truncate">{productName}</h3>
				<p className="font-medium">${price}</p>
				<Link
					href={{
						pathname: "/edit/[slug]",
						query: { slug: id },
					}}
					className=" p-2 text-xs text-center text-green-700  hover:bg-green-500 hover:text-gray-100"
				>
					Edit
				</Link>
				<button
					onClick={handleDelete}
					className=" p-2 text-xs text-red-500  hover:bg-red-500 hover:text-gray-100"
				>
					delete
				</button>
				<ToastContainer limit={1} />
			</div>
		</div>
	);
}
