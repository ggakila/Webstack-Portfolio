import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import Link from "next/link";

const schema = yup
	.object({
		productName: yup.string().required(),
		description: yup.string().required(),
		quantity: yup.number().positive().integer().required(),
		imageUrl: yup.string().url().required(),
		price: yup.number().positive().required("Please enter a price"),
	})
	.required();

export default function ProductForm() {
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
			const response = await fetch(
				"https://webstack-backend.onrender.com/api/products/",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

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
					<p className="text-red-500 px-5">{errors.productName?.message}</p>
				</div>

				<div>
					<input
						{...register("description")}
						placeholder="description"
						className="w-full bg-transparent border-b border-gray-800 outline-none text-3xl py-3 text-gray-300"
						autoComplete="off"
					/>
					<p>{errors.description?.message}</p>
				</div>

				<div>
					<input
						{...register("imageUrl")}
						placeholder="image url"
						className="w-full bg-transparent border-b border-gray-800 outline-none text-3xl py-3 text-gray-300"
						autoComplete="off"
					/>
					<p>{errors.imageUrl?.message}</p>
				</div>

				<div>
					<input
						{...register("quantity")}
						placeholder="quantity"
						className="w-full bg-transparent border-b border-gray-800 outline-none text-3xl py-3 text-gray-300"
						autoComplete="off"
					/>
					<p>{errors.quantity?.message}</p>
				</div>

				<div>
					<input
						{...register("price")}
						placeholder="price"
						className="w-full bg-transparent border-b border-gray-800 outline-none text-3xl py-3 text-gray-300"
						autoComplete="off"
					/>
					<p>{errors.price?.message}</p>
				</div>

				<input
					type="submit"
					className=" py-3 px-5 w-[200px] rounded-full text-gray-900 text-lg font-semibold cursor-pointer bg-white"
				/>
			</form>
		</div>
	);
}
