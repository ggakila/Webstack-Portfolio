import Image from "next/image";
import React from "react";

export default function Loader({ load}) {
	return (
		<div
			className={`w-full h-screen bg-black flex flex-col items-center justify-center transition-colors duration-500 ease-in-out`}
		>
			<p className=" text-[14px] md:text-[24px] text-gray-200">
				loading experiences...
			</p>
			<div className="relative w-2/5 h-2/6 ">
				<Image
					src="/images/ballload.svg"
					alt="loader"
					fill={true}
					style={{ objectFit: "contain" }}
				/>
			</div>
		</div>
	);
}
