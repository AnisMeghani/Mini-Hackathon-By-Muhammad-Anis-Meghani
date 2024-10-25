import Link from "next/link";
import Image from "next/image";

export default function SuzukiVitara(){
    return(
        <div className="flex justify-center">
          <div className=" w-8/12 h-96 text-center">{/**flex center columns 8 out of 12 used */}
          <header>
                <h1 className="underline font-bold text-2xl text-center mt-8">Suzuki Vitara 2024 Price in Pakistan, 
                  Images, Reviews & Specs</h1>
            </header>
            <div className="flex justify-center">  {/*image alignment to center */}
            <Image 
             className="object-center place-content-center mt-8"
             src="/images/Suzuki Vitara page pic.jpeg"
             alt="Flex Picture"
             layout="intrinsic"
             height="300"
             width="300"
             />
        </div>
          
          <p className="flex justify-center text-xs text-center mt-5">The **Suzuki Vitara** is a compact SUV known 
            for its rugged build, stylish design, and efficient performance. It offers a comfortable interior, 
            advanced safety features, and user-friendly technology, making it a practical choice for both city and 
            off-road driving. With its all-wheel-drive capability and fuel-efficient engine options, the Vitara 
            delivers a smooth and confident driving experience, appealing to adventure seekers and urban drivers 
            alike.</p>{/*Discription */}

            <div>
              <h1 className="text-green-500 text-2xl italic mt-3">PKR 4,200,000/=</h1>
              <Link href="/make_payment"> {/*Link to Make payment page */}
              <button className="rounded-lg text-white bg-blue-800 text-center py-2 px-3 text-sm mt-3">Make Payment
              
            </button>
            </Link>
            </div>
        </div>
        </div>
    )
}