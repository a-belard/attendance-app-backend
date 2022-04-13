const studentRepo = require("../repositories/student.repo");

let studentController = {};

studentController.getStudents = async (req, res) => {
  let students = await studentRepo.getStudents();
  return res.json(students);
};

studentController.getStudent = (req, res) => {
  let student = studentRepo.getStudentById(req.params.i);
  if (student) return res.json("No student with that id");
  return res.json(student);
};

studentController.createStudent = (req,res) => {
  let exist_student = studentRepo.getStudentByStudentId(req.body.studentId)
  if (exist_student) return res.status(400).json({success: false, message: "Student already exists"})
  await studentRepo.createStudent(req.body)
  .then(student => res.json({success: true, student: student}),
  err => {
    console.error(err)
  res.status(400).json({success: false, err})})
}

module.exports = studentController;
