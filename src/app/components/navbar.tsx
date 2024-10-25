import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div>
        {/* Thin white Line with Sign In | Sign Up */}
        <div className="flex justify-between items-center bg-blue-950 text-white px-44 py-1">
            <nav className="flex text-sm">Download App via SMS</nav> {/* Empty space on the left */}
            <nav className="text-sm">
                <span>Sign In</span> | <span>Sign Up</span>
            </nav>
        </div>
        {/* Border Line */}
        <div className="border-b border-gray-700 mx-44 mt-[-2px]"></div> {/* Centered border line just below the text */}


            <header>
                <nav className="flex bg-blue-950 w-full h-20 items-center justify-between px-16">
                    {/* Space before logo */}
                    <div className="mr-5"></div>

                    {/* Logo */}
                    <div className=" h-16 w-24 font-bold text-white flex justify-center items-center mb-8">
                    <Image 
             className="object-center place-content-center mt-8 rounded-lg"
             src="/images/logo pak wheels.png"
             alt="Flex Picture"
             layout="intrinsic"
             height="12"
             width="300"
             />
                    </div>

                    {/* Menu Items */}
                    <div className="flex items-center gap-5 ml-10 mt-5"> {/* Adjusted gap and margin */}
                        <div className="h-10 text-white text-sm">Used Cars</div>
                        <div className="h-10 text-white text-sm">New Cars</div>
                        <div className="h-10 text-white text-sm">Bikes</div>
                        <div className="h-10 text-white text-sm">Auto Stores</div>
                        <div className="h-10 text-white text-sm">Videos</div>
                        <div className="h-10 text-white text-sm">Forums</div>
                        <div className="h-10 text-white text-sm">Blog</div>
                        <Link href="/"> {/**Created Home Link */}
                        <div className="h-10 text-white text-sm">Home</div>
                        </Link>
                    </div>

                    {/* Button - Aligned to the right */}
                    <div className="flex items-center pr-5"> {/* Adjusted padding for right space */}
                        <button className="h-8 px-4 flex items-center justify-center rounded-lg bg-red-600 text-white leading-none whitespace-nowrap">
                            Post an Ad
                        </button>
                    </div>

                    {/* Space after button */}
                    <div className="ml-5"></div>
                </nav>
            </header>
        </div>
    );
}
