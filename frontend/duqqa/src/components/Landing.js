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
		<div className="h-[90vh]  w-full relative flex flex-col md:flex-row items-start justify-center mt-[10vh] overflow-hidden">
			<div
				data-scroll
				data-scroll-speed="0.01"
				className={`${syne.className} w-full h-full flex flex-col justify-center leading-normal gap-3 items-center px-5 md:px-10`}
			>
				<p className="text-[1.5rem] md:text-[3rem] text-center font-bold tracking-tight">
					A Digital Gallery Where Artists Create and Collectors dicover
				</p>
				<Link
					href="/exhibit"
					className="hover:bg-white text-white mix-blend-difference rounded-md bg-orange-600 hover:text-white text-[14px]"
				>
					<p
						className={` ${syne.className} max-w-[150px] px-3 py-3  font-semibold  text-[14px]`}
					>
						Exhibition
					</p>
				</Link>
			</div>
			<div
				data-scroll
				data-scroll-speed="-0.2"
				//className="absolute w-2/3 lg:w-1/3 h-3/4 top-[50%] md:top-1/3 z-0 left-[5%] md:left-[5%] "
				className=" w-full h-full top-[45%] md:top-[50%] "
			>
				<Image
					src="https://images.pexels.com/photos/2574476/pexels-photo-2574476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt="main hero page"
					style={{ objectFit: "cover" }}
				/>
			</div>
		</div>
	);
}
