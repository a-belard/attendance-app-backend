const Class = require("mongoose").model("Classes");

let getClasses = async () => {
  return await Class.find();
};

let getClassById = async (_id) => {
  return await Class.findById(_id);
};

let createClass = async (new_class) => {
  let newClass = new Class(new_class);
  return await newClass.save();
};

let updateClass = async (_id, u_class) => {
  return await Class.updateOne({ _id }, u_class);
};

let classRepo = {
  getClasses,
  getClassById,
  createClass,
  updateClass,
};

module.exports = classRepo;
