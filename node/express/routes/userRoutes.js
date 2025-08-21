const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json('all users data')
})



module.exports = router