const express = require('express')
const {data} = require('./data.js')

var taskRouter = require('./routes/taskRoutes.js')
var studentRouter = require('./routes/studentsRoutes.js')
var userRouter = require('./routes/userRoutes.js')
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
app.use('/tasks',taskRouter)
app.use('/students',studentRouter)
app.use('/users',userRouter)

app.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000')
})
//mongodb atlas account create / mongodb shell msi download / mongodb compass download
//mongodb community edition




