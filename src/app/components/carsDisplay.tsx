import Image from "next/image"
import Link from "next/link"
export default function CarsDisplay(){
    return(
        <div>
            <header>
            <div className="flex w-full ">
                <h1 className="font-semibold pl-2">Featured New Cars</h1>
                <h1 className="flex justify-end w-3/4 pr-8 text-xs pt-1 ">View all new cars</h1>
            </div>
            <br />

            <div className="flex gap-10 mb-2 text-xs pl-2">
                <h1>Popular</h1>
                <h1>Upcoming</h1>
                <h1>Newly Launched</h1>
            </div>
            </header>

            <nav className="flex justify-center bg-slate-200 h-36 mx-2 pt-0.5 mb-3">{/*Cars images flex*/}

            <div className=" h-40 w-1/6 mx-2 "> {/*Toyota Cross Details */ }
            <Link href="/toyota-cross">{/*Created Image Link*/}
            <Image
             
                        className="object-center place-items-center"
                        src="/images/toyota cross.jpg"
                        alt="Flex Picture"
                        layout="intrinsic"
                        height="90"
                        width="210"
                    />
                    
                    {/*Toyota Cross Wordings*/}
                    <p className="bg-white text-center text-blue-800 text-[10px] font-semibold">Toyota Cross</p>
                    <p className="bg-white text-[8px] text-green-500 text-center">PKR-80.5 - 100.5 lacs</p>
                    <p className="bg-white text-[8px] text-black text-center pt-1">500+ Reviews</p>
                    </Link>
            </div>
            <div className=" h-40 w-1/6 mx-2 pb-10"> {/*Honda Civic Details */ }
            <Link href="/honda-civic"> {/*Created Image Link */}
            <Image 
                        className="object-center place-items-center"
                        src="/images/Honda Civic.jpeg"
                        alt="Flex Picture"
                        layout="intrinsic"
                        height="90"
                        width="210"
                    />
                    
                    {/*HOnda Civic Wordings*/}
                    <p  className="bg-white text-center text-blue-800 text-[10px] font-semibold pt-1 ">Honda Civic</p>
                    <p className="bg-white text-[8px] text-green-500 text-center">PKR-35.5 - 85.5 lacs</p>
                    <p className="bg-white text-[8px] text-black text-center pt-1">300+ Reviews</p>
                    </Link>
            </div>
            
            <div className=" h-40 w-1/6 mx-2 pb-10"> {/*Suzuki Vitara Details */ }
            <Link href="/suzuki-vitara"> {/*Created Image Link */}
            <Image 
                        className="object-center place-items-center"
                        src="/images/suzuki vitara.jpeg"
                        alt="Flex Picture"
                        layout="intrinsic"
                        height="90"
                        width="210"
                    />
                    {/*Suzuki Vitara Wordings*/}
                    <p  className="bg-white text-center text-blue-800 text-[10px] font-semibold pt-1 ">Suzuki Vitara</p>
                    <p className="bg-white text-[8px] text-green-500 text-center">PKR-40.5 - 45.5 lacs</p>
                    <p className="bg-white text-[8px] text-black text-center pt-1">150+ Reviews</p>
                    </Link>
            </div>
            <div className=" h-40 w-1/6 mx-2 pb-10"> {/*Hyundai Sonata Details */ }
            <Link href="/hyundai-sonata"> {/*Created Image Link */}
            <Image 
                        className="object-center place-items-center"
                        src="/images/Hyundai Sonata.jpeg"
                        alt="Flex Picture"
                        layout="intrinsic"
                        height="90"
                        width="210"
                    />
                    {/*Hyundai Sonata Wordings*/}
                    <p  className="bg-white text-center text-blue-800 text-[10px] font-semibold pt-1 ">Hyundai Sonata</p>
                    <p className="bg-white text-[8px] text-green-500 text-center">PKR-99.95 - 112.200 lacs</p>
                    <p className="bg-white text-[8px] text-black text-center pt-1">150+ Reviews</p>
                    </Link>
            </div>
            </nav>
        </div>
    )
}