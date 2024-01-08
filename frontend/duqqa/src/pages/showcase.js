import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";


const schema = yup
	.object({
		productName: yup.string().required("Enter valid product name"),
		description: yup.string().required('Enter product description'),
		imageUrl: yup.string().url().required('Enter product image URL'),
		price: yup.number().required("Please enter a price"),
	})
	.required();

export default function ProductForm() {
	const { token, userId } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!token) {
			router.push("/login");
		}
	}, [token, router]);

	const {
		register,
		handleSubmit,
    reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		try {
			
			const response = await fetch("http://localhost:5000/api/products/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data), // Send the product data with the userId
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			console.log("Product successfully submitted:", data);
			reset();
		} catch (error) {
			console.error("Error submitting product:", error);
		}
	};


	return (
		<div className="text-white   h-screen flex flex-col items-start justify-start gap-10 p-10 md:p-20">
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
			<h1 className="text-5xl md:text-7xl font-light">
				showcase your work<br></br> the world awaits your canvas
			</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-7 md:gap-10 w-full md:w-2/3 lg:w-1/2"
			>
				<div className="">
					<input
						{...register("productName")}
						placeholder="title"
						className="w-full bg-transparent border-b border-gray-800 outline-none text-3xl py-3 text-gray-300"
						autoComplete="off"
					/>
					<p className="text-red-500">{errors.productName?.message}</p>
				</div>

				<div>
					<input
						{...register("description")}
						placeholder="description"
						className="w-full bg-transparent border-b border-gray-800 outline-none text-3xl py-3 text-gray-300"
						autoComplete="off"
					/>
					<p className="text-red-500">{errors.description?.message}</p>
				</div>

				<div>
					<input
						{...register("imageUrl")}
						placeholder="image url"
						className="w-full bg-transparent border-b border-gray-800 outline-none text-3xl py-3 text-gray-300"
						autoComplete="off"
					/>
					<p className="text-red-500">{errors.imageUrl?.message}</p>
				</div>


				<div>
					<input
						{...register("price")}
						placeholder="price"
						className="w-full bg-transparent border-b border-gray-800 outline-none text-3xl py-3 text-gray-300"
						autoComplete="off"
					/>
					<p className="text-red-500">{errors.price?.message}</p>
				</div>

				<input
					type="submit"
					className=" py-3 px-5 w-[200px] rounded-full bg-gray-300 text-gray-900 text-lg font-semibold cursor-pointer  hover:bg-white hover:shadow-white shadow-md"
				/>
			</form>
		</div>
	);
}
