import Image from "next/image";
import { Comfortaa} from "next/font/google";
import Link from "next/link";


const comfortaa = Comfortaa({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

export default function Hero() {
	return (
		<div className="w-full h-[100vh] md:h-screen flex flex-col font-light bg-gray-300 text-gray-800 text-[1vw] relative overflow-hidden ">
			<div
				data-scroll
				data-scroll-speed="0.1"
				className="hero-image absolute top-1/5  left-1/3  w-1/2 md:w-1/3 h-[50%]  "
			>
				<Image
					src="https://images.pexels.com/photos/3685210/pexels-photo-3685210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt="main hero page"
					style={{ objectFit: "cover" }}
					className=""
				/>
			</div>
			<div
				data-scroll
				data-scroll-speed="0.3"
				className="hero-image absolute top-1/3 left-3/4 w-[20%] h-[20%] "
			>
				<Image
					src="https://images.pexels.com/photos/1697192/pexels-photo-1697192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt="main hero page"
					style={{ objectFit: "cover" }}
					className=""
				/>
			</div>
			<div
				data-scroll
				data-scroll-speed="0.2"
				className="hero-image absolute top-1/2 left-1/2 w-1/3 md:w-1/4  h-[30%] "
			>
				<Image
					src="https://images.pexels.com/photos/3705512/pexels-photo-3705512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt="main hero page"
					style={{ objectFit: "cover" }}
					className=""
				/>
			</div>
			<div
				data-scroll
				data-scroll-speed="0.3"
				className="hero-image absolute top-1/3 right-3/4 w-1/3 h-1/4 "
			>
				<Image
					src="https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt="main hero page"
					style={{ objectFit: "cover" }}
					className=""
				/>
			</div>
			<div
				data-scroll
				data-scroll-speed="0.4"
				className="hero-image absolute  w-1/3 left-1/5 top-1/4 md:top-1/2 h-[45%] bg-red-200 "
			>
				<Image
					src="https://images.pexels.com/photos/2247151/pexels-photo-2247151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt="main hero page"
					style={{ objectFit: "cover" }}
					className=""
				/>
			</div>

			<div className=" h-full  w-full  flex items-center justify-center  text-center  gap-5 absolute text-xl">
				<Link
					href="/exhibition"
					className="z-10 bg-white  rounded-md hover:bg-purple-600 hover:text-white "
				>
					<p className=" px-3 py-3  font-semibold   min-w-[200px] ">
						See collection
					</p>
				</Link>
			</div>
		</div>
	);
}
