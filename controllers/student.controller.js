const studentRepo = require("../repositories/student.repo");

let studentController = {};

studentController.getStudents = async (req, res) => {
  let students = await studentRepo.getStudents();
  return res.json(students);
};

studentController.getStudent = async (req, res) => {
  let student = await studentRepo.getStudentById(req.params.i);
  if (student) return res.json("No student with that id");
  return res.json(student);
};

studentController.createStudent = async (req, res) => {
  let exist_student = await studentRepo.getStudentByStudentId(
    req.body.studentId
  );
  if (exist_student)
    return res
      .status(400)
      .json({ success: false, message: "Student already exists" });
  await studentRepo.createStudent(req.body).then(
    (student) => res.json({ success: true, student: student }),
    (err) => {
      console.error(err);
      res.status(400).json({ success: false, err });
    }
  );
  return;
};

module.exports = studentController;
