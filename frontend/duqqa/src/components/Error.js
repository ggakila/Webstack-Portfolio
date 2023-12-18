import Image from "next/image";
import Link from "next/link";

export default function Error() {
	return (
		<div className="flex flex-col w-full h-full items-center justify-center gap-3">
			<h1 className="text-xl pt-5 font-bold">Unexpected Error Occurred</h1>
			<Link
				href="/"
				className="bg-orange-600 text-white px-4 py-2 hover:text-black hover:bg-white border-transparent hover:border-black font-semibold text-sm sm:text-lg"
			>
				Go Home
			</Link>

			<div className="relative w-full h-[60vh]">
				<Image
					src="images/.svg"
					fill={true}
					alt="error message"
				/>
			</div>
		</div>
	);
}
