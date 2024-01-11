import Image from "next/image";
import React from "react";

export default function Loader({ load}) {
	return (
		<div
			className={`w-full h-screen bg-zinc-200 flex flex-col items-center justify-center transition-colors duration-500 ease-in-out ${
				load ? "bg-white" : "bg-black"
			}`}
		>
			<p className=" text-[14px] md:text-[24px] text-gray-800">
				loading experiences...
			</p>
			<div className="relative w-1/5 h-1/6 ">
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
