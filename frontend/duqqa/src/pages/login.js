import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/AuthContext";

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

	const onSubmit = async (data) => {
		try {
			const response = await fetch("http://localhost:5000/api/auth/login", {
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
			console.log("Response data:", responseData.token);
			login(responseData.token);
			reset();
			router.push("/");
		} catch (error) {
			console.error(
				"Login failed:",
				error.response ? error.response.data.message : error.message
			);
		}
	};

	return (
		<div className="h-screen  flex flex-col items-center justify-center relative px-[10px] md:px-[40px] ">
			{/* header section */}
			<div className="w-full  absolute top-0 flex justify-between  px-[20px] md:px-[100px] py-[40px] items-center">
				<h1 className="text-2xl sm:text-3xl md:text-5xl flex items-center text-center">
					Duqqa
				</h1>
				<h1 className="text-[10px] sm:text-xl"></h1>
			</div>
			{/* form section */}
			<div className="flex flex-col w-full lg:w-2/3 items-center gap-[30px] sm:gap-[0px] justify-center  h-full">
				<div className="w-full p-[10px] sm:p-[30px] flex flex-col items-center justify-center gap-[10px] sm:gap-[30px]">
					<h1 className="text-4xl flex items-center text-center  ">
						Welcome back
					</h1>
					<div className="flex flex-col gap-[5px] sm:gap-[10px] text-center ">
						<p className="text-4xl sm:text-5xl">Where artists</p>
						<p className="text-4xl sm:text-5xl">discover and get discovered</p>
						<p className="text-xl sm:text-2xl mt-[20px] text-neutral-400">
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
								placeholder="Enter email..."
								className="w-full bg-transparent border-b min-w-[350px] border-gray-800 outline-none text-3xl py-3 text-gray-300"
								autoComplete="off"
							/>
							<p className="text-red-500">{errors.email?.message}</p>
						</div>

						<div className="">
							<input
								{...register("password")}
								placeholder="Enter password"
								className="w-full bg-transparent border-b min-w-[350px] border-gray-800 outline-none text-3xl py-3 text-gray-300"
								autoComplete="off"
								type="password"
							/>
							<p className="text-red-500">{errors.password?.message}</p>
						</div>
						<p className="text-neutral-500 px-[0px] sm:p-[10px] text-center">
							By signing in you agree to the{" "}
							<span className="underline">Privacy Policy</span> and{" "}
							<span className="underline">Terms of Service</span>.
						</p>
						<input
							type="submit"
							className=" py-3 px-5 w-[200px] rounded-full bg-gray-300 text-gray-900 text-lg font-semibold cursor-pointer  hover:bg-white hover:shadow-white shadow-md"
						/>
					</div>
					<p className="m-5 text-neutral-500">
						Don&apos;t have an account?{" "}
						<span
							className="text-neutral-300 cursor-pointer hover:text-blue-400 text-lg"
							onClick={() => router.push("/register")}
						>
							Register
						</span>
					</p>
				</form>
			</div>
		</div>
	);
}
