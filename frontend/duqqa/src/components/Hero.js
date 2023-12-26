import Image from "next/image";
import { Comfortaa} from "next/font/google";
import Link from "next/link";


const comfortaa = Comfortaa({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

export default function Hero() {
	return (
		<div className="w-full h-[60vh] md:h-screen flex flex-col font-light bg-gray-200 text-gray-800 text-[1vw] relative overflow-hidden ">
			<div
				data-scroll
				data-scroll-speed="0.2"
				className="hero-image absolute top-1/4  left-1/3  w-1/3 h-[70%] brightness-50"
			>
				<Image
					src="https://images.pexels.com/photos/3685210/pexels-photo-3685210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt="main hero page"
					style={{ objectFit: "contain" }}
					className=""
				/>
			</div>
			<div
				data-scroll
				data-scroll-speed="0.2"
				className="hero-image absolute top-0 left-3/4 w-1/5 h-[50%] brightness-50"
			>
				<Image
					src="https://images.pexels.com/photos/1697192/pexels-photo-1697192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt="main hero page"
					style={{ objectFit: "contain" }}
					className=""
				/>
			</div>
			<div
				data-scroll
				data-scroll-speed="0.2"
				className="hero-image absolute top-1/2 left-1/2 w-1/3 h-full brightness-50"
			>
				<Image
					src="https://images.pexels.com/photos/3705512/pexels-photo-3705512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt="main hero page"
					style={{ objectFit: "contain" }}
					className=""
				/>
			</div>
			<div
				data-scroll
				data-scroll-speed="0.6"
				className="hero-image absolute top-1/5 right-3/4 w-1/5 h-full brightness-50"
			>
				<Image
					src="https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt="main hero page"
					style={{ objectFit: "contain" }}
					className=""
				/>
			</div>
			<div
				data-scroll
				data-scroll-speed="0.3"
				className="hero-image absolute  w-1/3 left-1/5 top-1/4 md:top-1/2 h-[50%] brightness-50"
			>
				<Image
					src="https://images.pexels.com/photos/2247151/pexels-photo-2247151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt="main hero page"
					style={{ objectFit: "contain" }}
					className=""
				/>
			</div>

			<div className=" h-full flex flex-col items-center justify-start  text-center  gap-5">
				<p className="leading-normal tracking-normal font-extrathin text-[2vw] md:text-[2vw]  w-2/3 z-10 py-20 mix-blend-difference text-white">
					From the spark of inspiration to the final acquisition, immerse
					yourself in a journey that transcends artistic boundaries. Unleash the
					full spectrum of your creative prowess as you showcase your
					masterpieces. Forge meaningful connections with fellow art entusiasts
					in the realm of creativity, and let the synergy of collaboration
					elevate your craft.
				</p>
				<Link
					href="/exhibition"
					className="z-10 bg-white mix-blend-difference"
				>
					<p className="border-b border-gray-600 max-w-[200px] p-4 rounded font-bold hover:border-zinc-300 ">
						See available works
					</p>
				</Link>
			</div>
		</div>
	);
}
