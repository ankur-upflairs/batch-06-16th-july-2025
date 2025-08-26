const express = require("express");
const {
  getAllCourses,
  createCourse,
  getSingleCourse,
} = require("../controllers/courseController");
const router = express.Router();


router.get("/", getAllCourses);
router.post("/", createCourse);
router.get("/:id", getSingleCourse);


module.exports = router;
