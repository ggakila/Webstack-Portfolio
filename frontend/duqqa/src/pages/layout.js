import Header from '@/components/Header'
import { Syne } from "next/font/google";

const syne = Syne({
	weight: [],
	subsets: ["latin"],
});
 
export default function Layout({ children }) {
  return (
    <div className={`${syne.className}`}>
      <Header />
      <main>{children}</main>
    </div>
  )
}