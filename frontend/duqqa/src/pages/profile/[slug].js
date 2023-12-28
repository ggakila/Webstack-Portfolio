import React from 'react'
import Link from "next/link";
import CardsProfile from "@/components/CardsProfile";
import Image from "next/image";
import { useRouter } from "next/router";



export default function Profile() {
	const router = useRouter();
	const username = router.query.slug;
  return (
		<div className="flex gap-10 py-10 px-10 lg:px-20 h-screen">
			<Link
				href="/"
				className="w-[40px] h-[40px] relative"
			>
				<Image
					src="/images/back.svg"
					fill={true}
					alt="back button home"
				/>
			</Link>
			<div className="flex flex-col justify-between">
				<h1 className="text-8xl font-light ">{username}</h1>
				<div className="flex flex-col  items-start justify-end text-left gap-3 text-2xl">
					<Link
						href="/exhibition"
						className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
					>
						Exhibition
					</Link>
					<Link
						href="/showcase"
						className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
					>
						Showcase
					</Link>
					<Link
						href="/cart"
						className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
					>
						Cart
					</Link>
					<Link
						href="/contact"
						className="border-transparent border-b-2 hover:border-gray-200 hover:text-gray-200"
					>
						say hello
					</Link>
				</div>
			</div>
			<div className="w-full border-l border-neutral-900 p-10">
				<h1 className="text-2xl">Your works.</h1>
				<div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 h-full w-full gap-10 lg:gap-30">
						<div className="flex justify-center items-center ">
							<CardsProfile
								url={
									"https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=600"
								}
								id={1}
							/>
						</div>
						<div className="flex justify-center items-center">
							<CardsProfile
								url={
									"https://images.pexels.com/photos/3778080/pexels-photo-3778080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								}
							/>
						</div>
						<div className="flex justify-center items-center">
							<CardsProfile
								url={
									"https://images.pexels.com/photos/3094218/pexels-photo-3094218.jpeg?auto=compress&cs=tinysrgb&w=600"
								}
							/>
						</div>
						<div className="flex justify-center items-center">
							<CardsProfile
								url={
									"https://images.wallpaperscraft.com/image/single/child_river_dreams_127495_1280x720.jpg"
								}
							/>
						</div>
						<div className="flex justify-center items-center">
							<CardsProfile
								url={
									"https://images.wallpaperscraft.com/image/single/art_surface_grunge_119898_1280x720.jpg"
								}
							/>
						</div>
						<div className="flex justify-center items-center">
							<CardsProfile
								url={
									"https://images.wallpaperscraft.com/image/single/optical_illusion_stripes_lines_10492_1280x720.jpg"
								}
							/>
						</div>
						<div className="flex justify-center items-center">
							<CardsProfile
								url={
									"https://images.wallpaperscraft.com/image/single/paint_stains_spots_298443_1280x720.jpg"
								}
							/>
						</div>
						<div className="flex justify-center items-center">
							<CardsProfile
								url={
									"https://images.wallpaperscraft.com/image/single/astronaut_portal_neon_141352_1280x720.jpg"
								}
							/>
						</div>
						<div className="flex justify-center items-center">
							<CardsProfile
								url={
									"https://images.wallpaperscraft.com/image/single/man_cube_boat_1061914_1280x720.jpg"
								}
							/>
						</div>
						<div className="flex justify-center items-center">
							<CardsProfile
								url={
									"https://images.wallpaperscraft.com/image/single/shapes_glow_abstraction_535238_1280x720.jpg"
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
