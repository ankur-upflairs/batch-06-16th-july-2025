const express = require('express')
const router = express.Router()
const {data} = require('../data.js')

router.get('/',(req,res)=>{
    res.json({tasks:data})
})
router.post('/',(req,res)=>{
    // console.log(req.body)
    data.push(req.body) 
    res.json({message:'task created success fully'})
})
router.put('/:id',(req,res)=>{
    let {id} = req.params
    let index = data.findIndex(v=>v.id == id)
    data[index] = req.body
    res.json({message:'task update success fully'})

})
router.delete('/:id',(req,res)=>{
    let params = req.params
    let index = data.findIndex(v=>v.id == params.id)
    data.splice(index,1)
    res.json({message:'task deleted success fully'})
})

module.exports = router