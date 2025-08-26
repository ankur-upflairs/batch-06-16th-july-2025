const Course  = require('../models/courseModel')


exports.getAllCourses = async (req,res)=>{
    let courses = await Course.find({})
    res.json({courses})
}
exports.createCourse = async (req,res)=>{
    let course = new  Course(req.body)
    await course.save()
    res.json({message:'course created',course})
}
exports.getSingleCourse = async (req,res)=>{
    let {id} = req.params
    let course =await Course.findById(id)    
    res.json({course})
}




