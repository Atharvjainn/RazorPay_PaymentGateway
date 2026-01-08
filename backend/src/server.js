const express = require('express');
const app = express();
const { PORT } = require('./config/env.js')
const PaymentRoutes = require('./routes/payment-routes.js')

app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/api/payments",PaymentRoutes);

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})