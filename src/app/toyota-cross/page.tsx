import Link from "next/link";
import Image from "next/image";

export default function ToyotaCross(){
    return(
        <div className="flex justify-center">
          <div className=" w-8/12 h-96 text-center">{/*flex center columns 8 out of 12 used */}
          <header>
                <h1 className="underline font-bold text-2xl text-center mt-8">Toyota Cross 2024 Price in Pakistan, 
                  Images, Reviews & Specs</h1>
            </header>
            <div className="flex justify-center"> {/*image alignment to center */}
            <Image 
             className="object-center place-content-center mt-8"
             src="/images/toyota cross page pic.jpeg"
             alt="Flex Picture"
             layout="intrinsic"
             height="300"
             width="300"
             />
        </div>
          
          <p className="flex justify-center text-xs text-center mt-5">The **Toyota Cross** is a compact SUV known for 
            its versatility, comfort, and fuel efficiency. Designed for both city driving and off-road adventures, 
            it combines Toyota&apos;s renowned reliability with a spacious interior, advanced safety features, and modern 
            technology. With its stylish design, hybrid powertrain options, and smooth ride, the Toyota Cross offers 
            a balanced mix of practicality and performance, making it a great choice for families and urban explorers 
            alike.</p>{/*Discription */}

            <div>
              <h1 className="text-green-500 text-2xl italic mt-3">PKR 9,500,000/=</h1>
              <Link href="/make_payment"> {/*Link to Make payment page */}
              <button className="rounded-lg text-white bg-blue-800 text-center py-2 px-3 text-sm mt-3">Make Payment
              
            </button>
            </Link>
            </div>
            
        </div>
        </div>
    )
}