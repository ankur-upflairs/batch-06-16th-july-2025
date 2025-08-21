const express = require('express')
const {data} = require('./data.js')

// console.log(data)
const app = express()


// app.use('/tasks',(req,res,next)=>{
//     next()
// })
app.use(express.json())
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.send('hello world!!!')
})
app.get('/tasks',(req,res)=>{
    res.json({tasks:data})
})
app.post('/tasks',(req,res)=>{
    // console.log(req.body)
    data.push(req.body) 
    res.json({message:'task created success fully'})
})
app.put('/tasks/:id',(req,res)=>{
    let {id} = req.params
    let index = data.findIndex(v=>v.id == id)
    data[index] = req.body
    res.json({message:'task update success fully'})

})
app.delete('/tasks/:id',(req,res)=>{
    let params = req.params
    let index = data.findIndex(v=>v.id == params.id)
    data.splice(index,1)
    res.json({message:'task deleted success fully'})
})

app.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000')
})





