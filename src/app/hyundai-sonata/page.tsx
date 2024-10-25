import Link from "next/link";
import Image from "next/image";

export default function HyundaiSonata(){
    return(
        <div className="flex justify-center">
          <div className=" w-8/12 h-96 text-center">{/**flex center columns 8 out of 12 used */}
            <header>
                <h1 className="underline font-bold text-2xl text-center">Hyundai Sonata 2024 Price in Pakistan, 
                    Images, Reviews & Specs</h1>
            </header>
        
        <div className="flex justify-center">  {/*image alignment to center */}
            <Image 
             className="object-center place-content-center mt-8"
             src="/images/Hyundai Sonata page pic.jpeg"
             alt="Flex Picture"
             layout="intrinsic"
             height="300"
             width="300"
             />
        </div>
        <p className="flex justify-center text-xs text-center mt-5">The **Hyundai Sonata** is a midsize sedan that 
            stands out for its sleek design, advanced technology, and comfortable interior. It offers a smooth 
            driving experience with a range of efficient engine options, including hybrid variants. Packed with 
            features like a digital dashboard, touchscreen infotainment, and advanced safety systems, the Sonata 
            combines style, performance, and innovation, making it a top choice for those seeking a premium yet 
            practical sedan.</p>{/*Discription */}

            <div>
              <h1 className="text-green-500 text-2xl italic mt-3">PKR 10,500,000/=</h1>
              <Link href="/make_payment"> {/*Link to Make payment page */}
              <button className="rounded-lg text-white bg-blue-800 text-center py-2 px-3 text-sm mt-3">Make Payment
              
            </button>
            </Link>
            </div>
        </div>
        </div>
    )
}