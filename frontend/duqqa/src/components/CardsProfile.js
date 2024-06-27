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
		<div className="w-full md:w-[400px] h-[300px] my-6 border border-gray-700 rounded-lg overflow-hidden">
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
						className="rounded overflow-hidden hover:scale-105 transform transition-transform duration-700 ease-in-out"
					/>
				</div>
			</Link>
			<div className="flex py-5 justify-between items-center p-2">
				<h3 className="text-[14px] font-semibold tracking-wide truncate">
					{productName}
				</h3>
				<p className="font-medium text-[14px] text-green-600 mx-1">${price}</p>
				<Link
					href={{
						pathname: "/edit/[slug]",
						query: { slug: id },
					}}
					className=" px-2 py-1 text-xs text-center   hover:text-blue-500"
				>
					Edit
				</Link>
				<button
					onClick={handleDelete}
					className=" px-2 py-1 text-xs text-red-700  hover:text-red-500 "
				>
					delete
				</button>
				<ToastContainer limit={1} />
			</div>
		</div>
	);
}
