const express = require('express');
const app = express();
const { PORT } = require('./config/env.js')

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})