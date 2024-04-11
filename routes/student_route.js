const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/student_controller")

router.get("/", StudentController.getStudent)
router.get("/:id", StudentController.getStudent);

router.post("/", (req, res) => {
    StudentController.postStudent(req, res);
})

router.put("/", (req, res) => {
    StudentController.putStudent(req, res);
})

router.delete("/", (req, res) => {
    StudentController.deleteStudent(req, res);
})

module.exports = router;