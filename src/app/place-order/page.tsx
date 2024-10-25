import Link from "next/link";

export default function PlaceOrder(){
    return(
        <div>
            <header>
                <h1 className="text-blue-400 italic text-center pt-40 text-5xl">Thankyou for Shopping!!!</h1>
                <h1 className="text-center mt-5">Your order will be delivered in 7 business days...</h1>
                
                </header>
            <div className="flex justify-center">
                <Link href="/">
            <button className="bg-blue-800 flex-col flex justify-center w-28 h-12 my-8 text-white rounded-md text-sm">
                    Continue Shopping
                </button>
                </Link>
                </div>
                
        </div>
    )
}