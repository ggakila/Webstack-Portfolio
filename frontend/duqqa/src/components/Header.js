import { Comfortaa , Tangerine } from 'next/font/google'


const poppins = Comfortaa({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

const tangerine = Tangerine({
	weight: [ "400", "700"],
	subsets: ["latin"],
});

export default function Header() {
  return (
		<div
			className={`text-gray-200 w-full  py-8 flex justify-between items-center px-3 font-bold ${poppins.className} `}
		>
			<h1 className={`font-bold text-7xl  ${tangerine.className}`}>Duqqa</h1>
			<div className="flex  gap-2 text-2xl text-right">
				<p className="font-semibold text-xl  text-right">
					From inspiration to acquisition.<br></br>
					Showcase your artistic prowess,<br></br>
					connect with fellow creatives, <br></br>
					and captivate potential buyers.
				</p>
			</div>
		</div>
	);
}
