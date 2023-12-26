'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Hero2 from "@/components/Hero2";
import SayHello from "@/components/SayHello";
import { Poppins} from "next/font/google";

import { useEffect } from 'react';
import Landing from '@/components/Landing';


const poppins = Poppins({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

export default function Home() {
useEffect(() =>{
	(
		async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;
			const  locomotivescroll  = new LocomotiveScroll();
		}
		)();
},[])

  return (
		<main
			className={`flex h-full flex-col items-center px-5 md:px-0 text w-full `}
		>
			<Header />
			<Landing />
			<Hero />
			<Hero2 />
			<SayHello />
		</main>
	);
}
