const express = require('express')
const { createStudent, getAllStudents, getSingleStudent } = require('../controllers/studentController')
const router = express.Router()

router.get('/',getAllStudents)
router.get('/:id',getSingleStudent)

router.post('/',createStudent)

module.exports = router