const {Schema , model, default: mongoose} = require('mongoose')
const assignmentSchema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    submissionType:{type:String,required:true},
    courseId:{type:mongoose.Types.ObjectId,required:true ,
        Ref:'Course'
    },
     status:{type:String,required:true,default:'Active',
        enum:['Active','Inactive']
    },
    points:{
        type:Number , default:100
    },
    dueDate:{
        type:Date
    }
},{timestamps:true})
module.exports = model('Assignment' , assignmentSchema)

// {
//     id: 1,
//     title: 'Calculus Problem Set 1',
//     description: 'Complete problems 1-10 from Chapter 3',
//     courseId: 1,
//     dueDate: '2024-02-15',
//     points: 100,
//     status: 'Active',
//     submissionType: 'File Upload',
//     createdAt: '2024-01-20'
//   }