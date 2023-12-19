import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
		<div className="w-full h-screen flex items-center px-20">
			<div className="w-1/2 h-full relative">
				<Image
					src="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt="art display"
					style={{ objectFit: "contain" }}
				/>
			</div>
			<div className="w-1/2 p-10">
				<div className="flex ">
					<p className="w-1/3">Artist</p>
					<p className="w-2/3">haggai gisore</p>
				</div>
				<div className="flex ">
					<p className="w-1/3">Description</p>
					<p className="w-2/3">
						an artist showcasing your work or an art enthusiast exploring the
						digital gallery, we want to hear your thoughts. Share your insights,
						suggestions, or any aspects you believe we can enhance.
					</p>
				</div>
				<div className="flex ">
					<p className="w-1/3">Artist</p>
					<p className="w-2/3">haggai gisore</p>
				</div>
			</div>
		</div>
	);
}
