import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import Link from "next/link";
import { Syne } from "next/font/google";
import Image from "next/image";

const syne = Syne({
	weight: [],
	subsets: ["latin"],
});

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const schema = yup
.object({
    email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
    username: yup.string().required(),
    password: yup
    .string()
    .matches(passwordRules, {
        message: "Please create a stronger password",
    })
    .required("Required"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
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

	const router = useRouter();

	const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

	const onSubmit = async (data) => {
		try {
			const response = await fetch(`${BASE_URL}/auth/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			console.log("Credentials successfully submitted:", data);
			reset();
            router.push('/auth/login')
		} catch (error) {
			console.error("Error submitting credentials:", error);
		}
	};

	return (
		<div className="register h-screen bg-back-image flex flex-col items-center justify-center relative px-[10px] md:px-[40px] bg-neutral-950">
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
			<div className="flex flex-col w-full lg:w-2/3 items-center gap-[30px] sm:gap-[0px] justify-center bg-neutral-950 h-full">
				<div className="w-full p-[10px] sm:p-[30px] sm:pt-[50px] flex flex-col items-center justify-center gap-[10px] sm:gap-[30px]">
					<div className="flex flex-col gap-[5px] sm:gap-[10px] text-center font-medium ">
						<p className="ext-[16px] sm:text-[24px]">Where artists</p>
						<p className="ext-[16px] sm:text-[24px]">discover and get discovered</p>
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
								placeholder="Enter email..."
								className="w-full  border-b min-w-[350px] border-gray-800 outline-none text-[14px] py-3 bg-neutral-900 rounded-full text-center text-gray-300"
								autoComplete="off"
							/>
							<p className="text-red-500">{errors.email?.message}</p>
						</div>
						<div className="">
							<input
								{...register("username")}
								placeholder="Enter username..."
								className="w-full  border-b min-w-[350px] border-gray-800 outline-none text-[14px] py-3 bg-neutral-900 rounded-full text-center text-gray-300"
								autoComplete="off"
							/>
							<p className="text-red-500">{errors.username?.message}</p>
						</div>

						<div className="">
							<input
								{...register("password")}
								placeholder="Enter password"
								className="w-full  border-b min-w-[350px] border-gray-800 outline-none text-[14px] py-3 bg-neutral-900 rounded-full text-center text-gray-300"
								autoComplete="off"
								type="password"
							/>
							<p className="text-red-500">{errors.password?.message}</p>
						</div>
						<div className="">
							<input
								{...register("confirmPassword")}
								placeholder="Confirm password"
								className="w-full  border-b min-w-[350px] border-gray-800 outline-none text-[14px] py-3 bg-neutral-900 rounded-full text-center text-gray-300"
								autoComplete="off"
								type="password"
							/>
							<p className="text-red-500">{errors.confirmPassword?.message}</p>
						</div>
						<p className="text-neutral-500 px-[0px] sm:p-[10px] text-center text-[12px]">
							By signing in you agree to the{" "}
							<span className="underline">Privacy Policy</span> and{" "}
							<span className="underline">Terms of Service</span>.
						</p>
						<input
							type="submit"
							className=" py-2  text-center px-3 w-[200px] rounded-full bg-gray-300 text-gray-900 text-[14px] font-semibold cursor-pointer  hover:bg-white "
						/>
					</div>
					<p className="text-neutral-400 m-5 text-[12px]">
						Already have an account?{" "}
						<span
							className="text-gray-300 hover:text-blue-300 cursor-pointer"
							onClick={() => router.push("/auth/login")}
						>
							Login
						</span>
					</p>
				</form>
			</div>
		</div>
	);
}
