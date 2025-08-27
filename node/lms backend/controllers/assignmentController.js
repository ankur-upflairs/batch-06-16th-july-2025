const Assignment  = require('../models/assignmentModel')


exports.getAllAssignments = async (req,res)=>{
    let assignments = await Assignment.find({})
    res.json({assignments})
}
exports.createAssignment = async (req,res)=>{
    let assignment = new  Assignment(req.body)
    await assignment.save()
    res.json({message:'Assignment created',assignment})
}
exports.getSingleAssignment = async (req,res)=>{
    let {id} = req.params
    let assignment =await Assignment.findById(id)    
    res.json({assignment})
}




