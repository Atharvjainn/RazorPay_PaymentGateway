const express = require('express');
const app = express();
const { PORT } = require('./config/env.js')

app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})