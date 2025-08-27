const express = require("express");

const { getAllAssignments, createAssignment, getSingleAssignment } = require("../controllers/assignmentController");
const router = express.Router();


router.get("/", getAllAssignments);
router.post("/", createAssignment);
router.get("/:id", getSingleAssignment);


module.exports = router;