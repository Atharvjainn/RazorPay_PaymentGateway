const express = require('express')
const router = express.Router();

router.post('/create-order',(req,res) => {
    return res.status(200).json({
        message : "success",
    })
})

module.exports = router;