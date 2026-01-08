import React from 'react'
import Script from 'next/script'
import Checkout from '@/components/Checkout'
const page = () => {
  return (
    <>
        <Script src='https://checkout.razorpay.com/v1/checkout.js'/>
        <Checkout />
    </>
  )
}

export default page