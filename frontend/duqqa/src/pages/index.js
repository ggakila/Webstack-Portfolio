
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center px-5 md:px-20 gap-5 text bg-black ${poppins.className}`}
    >
      <Header/>
      <Hero/>
    </main>
  )
}
