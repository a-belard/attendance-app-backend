const Student = require("mongoose").model("Students");

let getStudents = async () => {
  return await Student.find();
};

let getStudentById = async (_id) => {
  return await Student.findById(_id);
};

let getStudentByStudentId = async (studentId) => {
  return await Student.findOne(studentId);
};

let getStudentsByClass = async (classId) => {
  return await Student.find({ classId });
};

let createStudent = async (student) => {
  let newStudent = new Student(student);
  return await newStudent.save();
};

let updateStudent = async (_id, student) => {
  return await Student.findByIdAndUpdate();
};
