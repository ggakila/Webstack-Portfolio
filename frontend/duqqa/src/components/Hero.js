import Image from "next/image";
import { Comfortaa} from "next/font/google";
import Link from "next/link";

const comfortaa = Comfortaa({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

export default function Hero() {
	return (
		<div className="w-full h-[75dvh] flex">
			<div className="flex w-1/6  flex-col justify-end text-left gap-2 text-2xl">
				<Link href="/exhibition" className="border-transparent border-b-2 hover:border-white hover:text-white">
					Exhibition
				</Link>
				<Link href="/showcase" className="border-transparent border-b-2 hover:border-white hover:text-white">
					Showcase your work
				</Link>
				<Link href="/cart" className="border-transparent border-b-2 hover:border-white hover:text-white">
					Cart
				</Link>
				<Link href="/contact" className="border-transparent border-b-2 hover:border-white hover:text-white">
					say hello
				</Link>
				<Link href="/profi" className="border-transparent border-b-2 hover:border-white hover:text-white">
					me
				</Link>
			</div>
			<div
				className={`text-neutral-700  w-full h-full flex flex-col gap-5 ${comfortaa.className}`}
			>
				<div className="hero-image relative w-full h-[100%]">
					<Image
						src="/images/herogal.jpg"
						fill={true}
						alt="main hero page"
						style={{ objectFit: "cover" }}
						className="rounded-lg shadow-xl"
					/>
				</div>
			</div>
		</div>
	);
}
