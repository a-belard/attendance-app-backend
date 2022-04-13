const Student = require("mongoose").model("Students");

let getStudents = async () => {
  return await Student.find();
};

let getStudentById = async (id) => {
  return await Student.findById(id);
};

let getStudentsByClass = async (classId) => {
  return await Student.find({ classId });
};
