import Image from 'next/image';
import React from 'react'
import Link from "next/link";
import { Syne } from 'next/font/google';

const syne = Syne({
	weight: [],
	subsets: ["latin"]
})

export default function Landing() {
  return (
		<div className="h-[120vh] md:h-[150vh]  w-full relative flex items-start justify-center bg-black overflow-hidden">
			<div
				data-scroll
				data-scroll-speed="0.5"
				//className="absolute w-2/3 lg:w-1/3 h-3/4 top-[50%] md:top-1/3 z-0 left-[5%] md:left-[5%] "
				className="absolute w-full h-full top-[45%] md:top-[50%] "
			>
				<Image
					src="https://images.pexels.com/photos/2574476/pexels-photo-2574476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt="main hero page"
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div
				data-scroll
				data-scroll-speed="0.2"
				className={`${syne.className} w-full md:w-2/3 text-gray-200 text-[24px] md:text-[40px] leading-normal p-5 md:p-10  text-center mix-blend-difference z-10 font-bold`}
			>
				Duqqa, a digital art gallery where creativity meets commerce. Here,
				every piece of art tells a story, waiting to be discovered and
				appreciated.
				<Link
					href="/exhibition"
					className="z-10  text-gray-200 mix-blend-difference rounded-md hover:text-orange-600  text-[16px]"
				>
					<p className="min-w-[200px] px-3 py-3 font-semibold">
						go to exhibition <span className="font-bold text-xl">→</span>
					</p>
				</Link>
			</div>
		</div>
	);
}
