import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function contact() {
	return (
		<div className="flex flex-row-reverse justify-between w-full h-screen  p-10 md:p-20 text-gray-400">
			<div className="flex flex-col justify-end text-left gap-5 md:gap-8  font-light text-[3vw] md:text-[1.2vw]">
				<Link
					href="/exhibition"
					className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
				>
					linkedin.
				</Link>
				<Link
					href="/showcase"
					className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
				>
					twitter.
				</Link>
				<Link
					href="/cart"
					className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
				>
					facebook.
				</Link>
				<Link
					href="/contact"
					className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
				>
					dribble.
				</Link>
				<Link
					href="/profile"
					className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
				>
					artstation.
				</Link>
			</div>
			<div className=" h-[100%] w-full md:w-1/2 flex flex-col items-start  font-light">
				<div className="flex flex-col justify-between h-full pt-[100px] ">
					<h1 className=" text-[3vw] md:text-[1.2vw]">
						<span className=" font-bold">W</span>e value your experience and
						perspective as part of our vibrant art community. Your feedback is a
						crucial brushstroke in shaping the canvas of our platform. Whether
						you&apos;re an artist showcasing your work or an art enthusiast
						exploring the digital gallery, we want to hear your thoughts. Share
						your insights, suggestions, or any aspects you believe we can
						enhance. <br></br>
						<span className="text-7xl text-gray-200">say hello.</span>
					</h1>

					<div className="w-1/3 flex flex-col gap-5">
						<div className="flex flex-col gap-5 text-[3vw] md:text-[1.2vw]">
							<p>gisorehaggai@gmail.com</p>
							<p>+254746875676</p>
							<p>
								123 Nyumbani Street,<br></br>
								Kejani, Nairobi, Kenya
							</p>
							<p>Directions</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
