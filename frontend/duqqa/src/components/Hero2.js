import { Comfortaa } from "next/font/google";
import Link from "next/link";
import { Syne } from "next/font/google";

const syne = Syne({
	weight: [],
	subsets: ["latin"],
});

export default function Hero() {
	return (
		<div className="w-full h-[100vh] md:h-screen flex flex-col justify-center items-center font-light bg-black">
			<p
				className={` ${syne.className} leading-normal tracking-normal font-thin text-[20px]   md:text-[4vh]   p-10 mix-blend-difference text-white text-center w-full md:w-4/5`}
			>
				From the spark of inspiration to the final acquisition, immerse yourself
				in a journey that transcends artistic boundaries. Unleash the full
				spectrum of your creative prowess as you showcase your masterpieces.
				Forge meaningful connections with fellow art entusiasts in the realm of
				creativity, and let the synergy of collaboration elevate your craft.
			</p>
			<div className="  flex flex-col items-center justify-start  text-center  gap-5">
				<Link
					href="/showcase"
					className="z-10 bg-white text-black mix-blend-difference rounded-md hover:bg-orange-600 hover:text-white text-[14px]"
				>
					<p
						className={` ${syne.className} min-w-[150px] px-3 py-3  font-semibold  text-[14px]`}
					>
						Share your work
					</p>
				</Link>
			</div>
		</div>
	);
}
