const School = require("mongoose").model("School");

let getSchools = async () => {
  return await School.find();
};

let getSchoolById = async (_id) => {
  return await School.findById(_id);
};

let createSchool = async (school) => {
  let newSchool = new School(school);
  return await newSchool.save();
};

let updateSchool = async (_id, school) => {
  return await School.updateOne({ _id }, school);
};

let schoolRepo = {
  getSchools,
  getSchoolById,
  createSchool,
  updateSchool,
};

module.exports = schoolRepo;
