const studentController = require("../controllers/student.controller");

const studentRouter = require("express").Router();

studentRouter.get("/", studentController.getStudents);
studentRouter.post("/", studentController.createStudent);

module.exports = studentRouter;
