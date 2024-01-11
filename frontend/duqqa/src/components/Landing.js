import Image from 'next/image';
import React from 'react'

export default function Landing() {
  return (
		<div className="h-[100vh]  w-full relative flex items-center justify-center bg-zinc-900 overflow-hidden">
			<div
				data-scroll
				data-scroll-speed="0.7"
				className="absolute w-2/3 lg:w-1/3 h-3/4 top-[50%] md:top-1/3 z-0 left-[5%] md:left-[5%] bg-red-200"
			>
				<Image
					src="https://images.pexels.com/photos/14935203/pexels-photo-14935203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt="main hero page"
					style={{ objectFit: "cover" }}
					className="rounded-lg  "
				/>
			</div>
			<div
				data-scroll
				data-scroll-speed="0.2"
				className="w-4/5 text-white text-[5vh] md:text-[10vh] absolute top-[10%] md:top-1/4  tracking-tight p-5 uppercase text-right mix-blend-difference z-10 font-bold"
			>
				Inspiration, <br></br> Acquisition, <br></br> done differently
			</div>
		</div>
	);
}
