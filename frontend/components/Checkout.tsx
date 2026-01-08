"use client"
import axiosInstance from "@/utils/axios"
import { useRouter } from "next/navigation"
import { useState } from "react"


const Checkout = () => {
  const router = useRouter()
  const [Amount,setAmount] = useState(0)
  const [isloading,setIsloading] = useState(false)
  const pay = async () => {
    const data = { amount : Amount }
      try{
        setIsloading(true);
        const order = await axiosInstance.post('/payments/create-order',data)
        const options = {
        key : process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount : order.data.amount,
        currency : order.data.currency,
        name : "TEST PAYMENT",
        order_id : order.data.id,
        handler : async function (response : any) {
            const verification = await axiosInstance.post('/payments/verify-payment',response)
            const isverified = verification.data.success
            if(isverified){
              router.push('/payment-success')
            }
            else{
              router.push('/payment-failed')
            }
        },
        theme : { color : "#3399cc"}

        };

        const rzp = new window.Razorpay(options);
        rzp.on("payment.failed", () => {
            router.push("/payment-failed");
        });
        rzp.open();
      }
      catch(error){
        console.log("error in payment",error);
      } finally { setIsloading(false) }
  }

  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black">
  <form
    className="w-full max-w-md rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 shadow-2xl"
  >
    <h2 className="text-2xl font-semibold text-white text-center mb-6">
      Checkout
    </h2>

    <div className="mb-5">
      <label className="block text-sm text-gray-300 mb-2">
        Amount
      </label>
      <input
        type="text"
        value={Amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter amount"
        className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    <button
      type="button"
      onClick={pay}
      className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-500 transition py-3 font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      disabled = {isloading || Amount <= 0}
    >
      {isloading ? "Loading...." : "Pay Now" }
      
    </button>
  </form>
</div>

  )
}

export default Checkout