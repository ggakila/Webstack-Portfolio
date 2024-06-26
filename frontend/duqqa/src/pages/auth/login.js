'use client'
import { useForm } from "react-hook-form";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/AuthContext";
import { Syne } from "next/font/google";
import Header from "@/components/Header";

const syne = Syne({
	weight: [],
	subsets: ["latin"],
});

const schema = yup
	.object({
		email: yup
			.string()
			.email("Please enter a valid email")
			.required("Required"),
		password: yup.string().required("Password is required"),
	})
	.required();

export default function Login() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const { login } = useAuth();

	const router = useRouter();
	const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

	const onSubmit = async (data) => {
		try {
			const response = await fetch(`${BASE_URL}/auth/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			// Access headers
			for (let [key, value] of response.headers.entries()) {
				console.log(`${key}: ${value}`);
			}

			// Continue handling the response
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const responseData = await response.json();
			console.log("Credentials successfully submitted:", data);
			console.log("Response data:", responseData);
			login(responseData.token, {
				userId: responseData.userId, 
				username: responseData.username, 
			});
			reset();
			router.push("/exhibition");
		} catch (error) {
			console.error(
				"Login failed:",
				error.response ? error.response.data.message : error.message
			);
		}
	};

	return (
		<div
			className={` ${syne.className} h-screen  flex flex-col items-center justify-center relative px-[10px] md:px-[40px] `}
		>
			{/* header section */}
			<div className="w-full  absolute top-0 flex justify-between  px-[20px] md:px-[100px] py-[40px] items-center">
				<Link
					href="/"
					className={`font-extrabold uppercase text-[14px] md:text-[18px] bg-orange-500 hover:bg-purple-500 px-3 py-1 rounded-full text-white ${syne.className}`}
				>
					duqqa
				</Link>
			</div>
			{/* form section */}
			<div className="flex flex-col w-full lg:w-2/3 items-center gap-[30px] sm:gap-[0px] justify-center  h-full">
				<div className="w-full p-[10px] sm:p-[30px] flex flex-col items-center justify-center gap-[10px] sm:gap-[30px]">
					{/* <h1 className="text-3xl flex items-center text-center  ">
						Welcome back
					</h1> */}
					<div className="flex flex-col gap-[5px] sm:gap-[10px] text-center ">
						<p className="text-[16px] sm:text-[24px]">Where artists</p>
						<p className="text-[16px] sm:text-[24px]">
							discover and get discovered
						</p>
						<p className="text-[12px] sm:text-[20px] mt-[20px] text-neutral-400">
							Experience art how it was meant to be experienced
						</p>
					</div>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col items-center w-full px-10 lg:w-2/3"
				>
					{/* inputs */}
					<div className="w-full lg:w-4/5 flex flex-col items-center gap-[15px]">
						<div className="">
							<input
								{...register("email")}
								placeholder="Enter email...(user@test.com)"
								className="w-full  border-b min-w-[350px] border-gray-800 outline-none text-[14px] py-3 bg-neutral-900 rounded-full text-center text-gray-300"
								autoComplete="off"
							/>
							<p className="text-red-500">{errors.email?.message}</p>
						</div>

						<div className="">
							<input
								{...register("password")}
								placeholder="Enter password (UserTest@123}"
								className="w-full  border-b min-w-[350px] border-gray-800 outline-none text-[14px] py-3 bg-neutral-900 rounded-full text-center text-gray-300"
								autoComplete="off"
								type="password"
							/>
							<p className="text-red-500">{errors.password?.message}</p>
						</div>
						<p className="text-neutral-500 px-[0px] sm:p-[10px] text-center text-[12px]">
							By signing in you agree to the{" "}
							<span className="underline">Privacy Policy</span> and{" "}
							<span className="underline">Terms of Service</span>.
						</p>
						<input
							type="submit"
							className=" py-2 px-3 w-[200px] rounded-full bg-gray-300 text-gray-900 text-[14px] font-semibold cursor-pointer  hover:bg-white "
						/>
					</div>
					<p className="m-5 text-neutral-500 text-[12px]">
						Don&apos;t have an account?{" "}
						<span
							className="text-neutral-300 cursor-pointer hover:text-blue-400"
							onClick={() => router.push("/auth/register")}
						>
							Register
						</span>
					</p>
				</form>
			</div>
		</div>
	);
}
