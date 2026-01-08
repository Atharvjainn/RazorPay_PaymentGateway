const express = require('express');
const app = express();
const { PORT,CLIENT_URL } = require('./config/env.js')
const PaymentRoutes = require('./routes/payment-routes.js')
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(cors({
    origin: CLIENT_URL,
    credentials: true,
}))

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/api/payments",PaymentRoutes);

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})