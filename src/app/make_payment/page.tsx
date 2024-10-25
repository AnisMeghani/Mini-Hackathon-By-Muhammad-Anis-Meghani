import Link from "next/link";

export default function MakePayment (){
    return(
        <div>
            
            <header>
                <h1 className="text-center italic text-3xl mt-5 ">Enter Your Details</h1>
            </header>
            {/*created form*/}
            <form className="flex-col rounded-lg flex justify-center items-center">
                <input type="Name" className="border rounded-sm mt-5 my-4 w-1/5 text-sm h-8 pl-2" placeholder="Enter Your Name" />
                <input type="Email" className="border  rounded-sm my-4 w-1/5 text-sm h-8 pl-2" placeholder="Enter Your Email " />
                <input type="Card Number" className="border  rounded-sm my-4 w-1/5 text-sm h-8 pl-2" placeholder="Card Number" />
                <input type="Address" className="border  rounded-sm my-4 w-1/5 text-sm h-8 pl-2" placeholder="Address" />

            <Link href="/place-order">
            <button className="bg-blue-800 flex justify-center text-white text-xs rounded-sm items-center my-5 h-11 w-32">
                Place Your Order
            </button>
            </Link>
            </form>
        </div>
        
    )
}