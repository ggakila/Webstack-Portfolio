'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Hero2 from "@/components/Hero2";
import SayHello from "@/components/SayHello";
import { Poppins} from "next/font/google";
import { useEffect } from 'react';
import Landing from '@/components/Landing';
import { Syne } from "next/font/google";

const syne = Syne({
	weight: [],
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
			className={`flex h-full flex-col items-center text w-full bg-white text-black ${syne.className} `}
		>
			<Header />
			<Landing />
			<Hero2 />
			<Hero />
			<SayHello />
		</main>
	);
}
