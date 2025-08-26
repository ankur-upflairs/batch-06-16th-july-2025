const {Schema , model} = require('mongoose')

const courseSchema = new Schema({
    name:{type:String,required:true},
    code:{type:String,required:true},
    description:{type:String,required:true},
    instructor:{type:String,required:true},
    status:{type:String,required:true,default:'Active',
        enum:['Active','Inactive']
    },
    category:{type:String,},
    credits:{type:Number},
    capacity:{type:Number,default:30},
    enrolled:{type:Number,default:0},
    startDate:{type:Date,},
    endDate:{type:Date,},
    schedule:{type:String,},
},{timestamps:true})

module.exports = model('Course',courseSchema)
/* {
    id: 1,
    name: 'Mathematics 101',
    code: 'MATH101',
    description: 'Introduction to calculus and algebraic concepts',
    instructor: 'Dr. Sarah Wilson',
    credits: 3,
    capacity: 30,
    enrolled: 25,
    startDate: '2024-01-15',
    endDate: '2024-05-15',
    status: 'Active',
    schedule: 'Mon, Wed, Fri - 9:00 AM',
    category: 'Mathematics'
  },
  */