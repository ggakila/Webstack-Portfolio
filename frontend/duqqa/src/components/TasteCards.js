import { useState } from "react";
import Image from "next/image";

export default function TasteCards() {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseMove = (e) => {
		setCursorPosition({ x: e.clientX, y: e.clientY });
	};

	return (
		<div
			className="group z-10 border-b border-dashed border-black relative"
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<p className="text-[3vw] font-medium leading-tight">Abstract</p>
			<p className="text-[2vw] leading-tight italic">əbsdrákt ɑ́ːt</p>
			{isHovered && (
				<div
					className="hidden absolute w-[300px] h-[600px] bg-white shadow-md p-2 group-hover:block"
					style={{
						left: `${cursorPosition.x - (30 * window.innerWidth) / 100}px`,
						top: `${cursorPosition.y - (60 * window.innerHeight) / 100}px`,
						zIndex: 20,
					}}
				>
					<Image
						src="https://images.pexels.com/photos/2693208/pexels-photo-2693208.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="hovering image"
						fill={true}
						className="w-full h-full"
						style={{ objectFit: "cover" }}
					/>
				</div>
			)}
		</div>
	);
}
