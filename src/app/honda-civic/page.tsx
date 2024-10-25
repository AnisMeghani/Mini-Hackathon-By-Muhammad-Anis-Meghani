import Link from "next/link";
import Image from "next/image";

export default function HondaCivic(){
    return(
        <div className="flex justify-center">
          <div className=" w-8/12 h-96 text-center">{/**flex center columns 8 out of 12 used */}
            <header>
                <h1 className="underline font-bold text-2xl text-center">Honda Civic 2024 Price in Pakistan, Images, 
                    Reviews & Specs</h1>
            </header>
        
        <div className="flex justify-center"> {/*image alignment to center */}
            <Image 
             className="object-center place-content-center mt-8"
             src="/images/honda civic page pic.jpeg"
             alt="Flex Picture"
             layout="intrinsic"
             height="300"
             width="300"
             />
        </div>
        <p className="flex justify-center text-xs text-center mt-5">The **Honda Civic** is a popular compact car 
            known for its reliability, sleek design, and excellent fuel efficiency. It offers a range of engine 
            options, including efficient turbocharged models, delivering a balance of power and economy. With its 
            modern, sporty exterior and tech-rich interior—featuring touchscreen infotainment, Apple CarPlay/Android 
            Auto, and advanced safety features—the Civic is perfect for both daily commutes and dynamic driving 
            experiences. It combines style, comfort, and performance, making it a top choice in its class.
            </p>{/*Discription */}

            <div>
              <h1 className="text-green-500 text-2xl italic mt-3">PKR 8,000,000/=</h1>
              <Link href="/make_payment"> {/*Link to Make payment page */}
              <button className="rounded-lg text-white bg-blue-800 text-center py-2 px-3 text-sm mt-3">Make Payment
              
            </button>
            </Link>
            </div>
        </div>
        </div>
    )
}