import { Comfortaa } from "next/font/google";
import Link from "next/link";
import TasteCards from "./TasteCards";

const comfortaa = Comfortaa({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

export default function Hero() {
	return (
		<div className="w-full h-[60vh] md:h-screen flex flex-col font-light bg-white text-black">
			<p className="text-[6vw] text-end font-bold">taste matters, we have it</p>
			<div className=" px-10 flex flex-col md:flex-row justify-between">
				<div className="w-1/2 h-full flex flex-col justify-between">
					<TasteCards />
					<TasteCards />
					<TasteCards />
					<TasteCards />
					<TasteCards />
					<TasteCards />
				</div>
				<div className="w-1/2 bg-black ">
					
				</div>
			</div>
		</div>
	);
}
