import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Syne } from "next/font/google";

const syne = Syne({
	weight: [],
	subsets: ["latin"],
});

export default function contact() {
	return (
		<div
			className={`flex flex-row-reverse justify-between w-full h-screen  p-5 md:p-10 text-gray-200 ${syne.className}`}
		>
			<div className="flex flex-col justify-end text-left gap-3  font-light text-[12px] md:text-[14px]">
				<Link
					href="https://www.linkedin.com/in/haggai-gisore-a5529b170/"
					className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
				>
					linkedin.
				</Link>
				<Link
					href="https://twitter.com/gisore_akila"
					className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
				>
					twitter(X).
				</Link>
				<Link
					href="https://www.facebook.com/"
					className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
				>
					facebook.
				</Link>
				<Link
					href="https://dribbble.com/following"
					className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
				>
					dribble.
				</Link>
				<Link
					href="https://www.artstation.com/?sort_by=community&dimension=all"
					className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
				>
					artstation.
				</Link>
			</div>
			<div className=" h-[100%] w-full  flex flex-col items-start  font-light">
				<div className="flex flex-col w-full justify-between h-full pt-10 ">
					<div className="w-full flex flex-col md:flex-row justify-between gap-5 ">
						<h1 className="text-7xl text-gray-200 text-start md:text-end">say hello.</h1>
						<h1 className=" text-[3vw] md:text-[18px] w-full gap-10 max-w-[600px]">
							<span className=" font-bold">W</span>e value your experience and
							perspective as part of our vibrant art community. Your feedback is
							a crucial brushstroke in shaping the canvas of our platform.
							Whether you&apos;re an artist showcasing your work or an art
							enthusiast exploring the digital gallery, we want to hear your
							thoughts. Share your insights, suggestions, or any aspects you
							believe we can enhance. <br></br>
						</h1>
					</div>

					<div className="w-1/3 flex flex-col gap-5">
						<div className="flex flex-col gap-5 text-[12px] md:text-[14px]">
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
