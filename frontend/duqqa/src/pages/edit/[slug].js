import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { updateProductById, fetchProductById } from "@/utils/helperFunctions";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const schema = yup
	.object({
		productName: yup.string().required('Enter a valid title'),
		description: yup.string().required('Enter a valid description'),
		imageUrl: yup.string().url().required('Enter a valid url'),
		price: yup.number().required('Enter a valid number'),
	})
	.required();

export default function Edit() {
	const { token, userName } = useAuth();
	const router = useRouter();
    const productId = router.query.slug;

	useCallback(() => {
		if (!token) {
			router.push("/auth/login");
		}
	}, [token, router]);

    const {
		data: product,
		isLoading,
		isError,
	} = useQuery({
		queryFn: () => fetchProductById(productId),
		queryKey: ["product", productId],
	});

    {isLoading ? <div>loading...</div> : null}

	const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm({
  resolver: yupResolver(schema),
});

	const onSubmit = async (data) => {
		const success = updateProductById(productId, data);
    if (success) {
      notify();
    }
    router.replace(`/exhibition`)
		reset();
	};

   const notify = () => {
			toast.success("Changes saved successfully", {
				theme: "dark",
				pauseOnFocusLoss: false,
				position: toast.POSITION.TOP_CENTER,
				autoClose: 200,
				hideProgressBar: true,
			});
		};


	return (
		<div className="text-white h-screen flex flex-col items-center justify-start gap-10 p-10 py-28">
			<Link
				href="/"
				className="w-[40px] h-[40px] absolute top-10 left-10"
			>
				<Image
					src="/images/back.svg"
					fill={true}
					alt="back button home"
				/>
			</Link>
			<h1 className="text-5xl md:text-7xl font-light text-center">
				As the artist grows,
				<br /> so does the art
			</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-7 md:gap-10 w-full md:w-2/3 lg:w-1/2"
			>
				{/* Input fields */}
				{[
					{ name: "productName", placeholder: product?.productName },
					{ name: "description", placeholder: product?.description },
					{ name: "imageUrl", placeholder: product?.imageUrl },
					{ name: "price", placeholder: `${product?.price}` },
				].map((field) => (
					<div key={field.name}>
						<input
							{...register(field.name)}
							defaultValue={field.placeholder}
							className="w-full bg-transparent border-b border-gray-800 outline-none text-3xl py-3 text-gray-300"
							autoComplete="off"
						/>
						<p className="text-red-500">{errors[field.name]?.message}</p>
					</div>
				))}
				{/* Submit button */}
				<input
					type="submit"
					value="Save"
					className="py-3 px-5 w-[100px] rounded-full bg-green-300 text-gray-900 text-lg font-semibold cursor-pointer hover:bg-white"
				/>
				<ToastContainer limit={1} />
			</form>
		</div>
	);

		

}
