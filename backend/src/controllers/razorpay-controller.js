const { RAZORPAY_KEY_SECRET } = require("../config/env");
const razorpay = require("../config/razorpay.js");
const crypto = require('crypto')

const createOrder = async(req,res) => {
    try {
        const { amount } = req.body; 
        const order = await razorpay.orders.create({
            amount : amount * 100,
            currency : 'INR',
            receipt : `receipt_${Date.now()}`
        })
        return res.status(201).json({data : order})

    } catch (error) {
        console.log("error in razorpay controller!");
        return res.status(500).json({message : "Internal Server Error"});
    }
}


const verifypayment = async(req,res) => {
    try {
        const { razorpay_order_id,razorpay_payment_id,razorpay_signature } = req.body;
        const code = razorpay_order_id + "|" + razorpay_payment_id

        const expectedSignature = crypto
            .createHmac('sha256',RAZORPAY_KEY_SECRET)
            .update(code)
            .digest("hex")

        if(expectedSignature == razorpay_signature){
            return res.status(200).json({success : true})
        }

        return res.status(400).json({success : false})

    } catch (error) {
        console.log("error in razorpay controller!");
        return res.status(500).json({message : "Internal Server Error"});
    }
}


module.exports ={
    createOrder,verifypayment
}