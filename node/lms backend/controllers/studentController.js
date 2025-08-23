const Students = require('../models/studentModel')

exports.createStudent =async (req,res)=>{
    // console.log(req.body)
    let student = new Students(req.body)
    await student.save()
    res.json({message:'student created',student:req.body})
}

exports.getAllStudents = async (req,res)=>{
    let students = await Students.find({})
    res.json({students})
}
exports.getSingleStudent= async (req,res) =>{
    let {id} = req.params
    let student = await Students.findById(id)
    res.json({student})
}


