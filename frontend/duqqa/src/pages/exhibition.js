import Cards from "@/components/Cards";
import Link from "next/link";
import Image from "next/image";


export default function Exhibition() {
	return (
		<div className="exhibition  h-full p-10 lg:px-20 font-light">
			<div className="flex flex-col items-start gap-10 py-5">
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
				<div>
					<h1 className="text-6xl text-white z-10">Exhibition</h1>
					<h1 className="text-5xl">Available works</h1>
				</div>
				<p className="text-2xl  md:w-1/3">
					Our goal is to democratize art, providing a space where talents are
					celebrated, stories are shared, and connections are forged{" "}
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 h-full w-full gap-10 lg:gap-30">
				<div className="flex justify-center items-center ">
					<Cards
						url={
							"https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=600"
						}
						id={1}
					/>
				</div>
				<div className="flex justify-center items-center">
					<Cards
						url={
							"https://images.pexels.com/photos/3778080/pexels-photo-3778080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						}
					/>
				</div>
				<div className="flex justify-center items-center">
					<Cards
						url={
							"https://images.pexels.com/photos/3094218/pexels-photo-3094218.jpeg?auto=compress&cs=tinysrgb&w=600"
						}
					/>
				</div>
				<div className="flex justify-center items-center">
					<Cards
						url={
							"https://images.wallpaperscraft.com/image/single/child_river_dreams_127495_1280x720.jpg"
						}
					/>
				</div>
				<div className="flex justify-center items-center">
					<Cards
						url={
							"https://images.wallpaperscraft.com/image/single/art_surface_grunge_119898_1280x720.jpg"
						}
					/>
				</div>
				<div className="flex justify-center items-center">
					<Cards
						url={
							"https://images.wallpaperscraft.com/image/single/optical_illusion_stripes_lines_10492_1280x720.jpg"
						}
					/>
				</div>
				<div className="flex justify-center items-center">
					<Cards
						url={
							"https://images.wallpaperscraft.com/image/single/paint_stains_spots_298443_1280x720.jpg"
						}
					/>
				</div>
				<div className="flex justify-center items-center">
					<Cards
						url={
							"https://images.wallpaperscraft.com/image/single/astronaut_portal_neon_141352_1280x720.jpg"
						}
					/>
				</div>
				<div className="flex justify-center items-center">
					<Cards
						url={
							"https://images.wallpaperscraft.com/image/single/man_cube_boat_1061914_1280x720.jpg"
						}
					/>
				</div>
				<div className="flex justify-center items-center">
					<Cards
						url={
							"https://images.wallpaperscraft.com/image/single/shapes_glow_abstraction_535238_1280x720.jpg"
						}
					/>
				</div>
			</div>
		</div>
	);
}
