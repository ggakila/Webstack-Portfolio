import Image from 'next/image';
import React from 'react'

export default function Landing() {
  return (
		<div className="h-[60svh] sm:h-screen w-full relative flex items-center justify-center ">
			<div
				data-scroll
				data-scroll-speed="0.1"
				className="absolute w-2/3 md:w-1/4 h-3/4 flex justify-center z-0 left-[5%] md:left-[30%]"
			>
				<Image
					src="https://images.pexels.com/photos/14935203/pexels-photo-14935203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt="main hero page"
					style={{ objectFit: "cover" }}
					className="rounded-lg filter brightness-100 "
				/>
			</div>
			<div
				data-scroll
				data-scroll-speed="0.1"
				className="w-3/4 text-white text-[6vw]    tracking-tight p-5 uppercase text-right mix-blend-difference z-10"
			>
				Inspiration &<br></br> Acquisition <br></br> done differently
			</div>
		</div>
	);
}
