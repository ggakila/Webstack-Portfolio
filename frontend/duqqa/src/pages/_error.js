import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

function Error({ statusCode }) {
	return (
		<div className="w-full h-screen  flex flex-col items-center justify-center gap-5 bg-black">
            <Header/>
			<p className="text-lg  text-gray-300">
				{statusCode
					? `Error ${statusCode} occurred`
					: "An error occurred on client"}
			</p>
            <Link href='/' className="bg-gray-100 text-black  text-lg font-medium min-w-[100px] text-center px-3 py-2 hover:bg-green-400 hover:text-white">Home</Link>
			<div className="relative w-3/4  h-[80vh]">
				<Image
					src="/images/robot.svg"
					alt="error image"
					fill={true}
				/>
			</div>
		</div>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
