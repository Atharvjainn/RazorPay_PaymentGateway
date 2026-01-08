const razorpay = require("../config/razorpay.js");

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