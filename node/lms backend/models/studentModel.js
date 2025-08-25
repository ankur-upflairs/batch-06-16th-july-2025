const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true,
       
    },
    phone:{
        type:String,        
    },
    enrollmentDate:{
        type:Date,
        required:true,
    },
    status:{
        type:String,
        enum:['Active','Inactive']
    },
    courses:{
        type:Array,
        default:[]
    },
    gpa:{
        type:Number
    },
    avatar:{
        type:String,
        default:'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png'
    }
})


const StudentModel = mongoose.model('Student',studentSchema)

module.exports = StudentModel

/*
  {
    id: 1,
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@email.com',
    phone: '+1 (555) 123-4567',
    enrollmentDate: '2024-01-15',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    courses: [1, 2], // Course IDs
    gpa: 3.8
  },
  */