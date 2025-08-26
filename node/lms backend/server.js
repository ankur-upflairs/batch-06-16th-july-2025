const express = require('express')
const {data} = require('./data.js')
const mongoose = require('mongoose')
const cors = require('cors')
var taskRouter = require('./routes/taskRoutes.js')
var studentRouter = require('./routes/studentsRoutes.js')
var userRouter = require('./routes/userRoutes.js')
var courseRouter = require('./routes/courseRoutes.js')
// console.log(data)
const app = express()
mongoose.connect('mongodb+srv://lead:lead123@cluster0.mk94png.mongodb.net/testing')
.then(()=>console.log('db connected'))
.catch(err=>console.log(err))

// app.use('/tasks',(req,res,next)=>{
//     next()
// })
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.send('hello world!!!')
})
app.use('/students',studentRouter)
app.use('/tasks',taskRouter)
app.use('/users',userRouter)
app.use('/courses',courseRouter)

app.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000')
})
//mongodb atlas account create / mongodb shell msi download / mongodb compass download
//mongodb community edition




