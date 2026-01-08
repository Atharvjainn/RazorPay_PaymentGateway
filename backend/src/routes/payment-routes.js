const express = require('express')
const router = express.Router();
const { createOrder,verifypayment } = require('../controllers/razorpay-controller.js')

router.post('/create-order',createOrder);
router.post('/verify-payment',verifypayment);



module.exports = router;