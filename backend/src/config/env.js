const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    RAZORPAY_KEY_ID : process.env.RAZORPAY_KEY_ID,
    RAZORPAY_KEY_SECRET : process.env.RAZORPAY_KEY_SECRET,
    CLIENT_URL : process.env.CLIENT_URL,
}