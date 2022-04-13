const classRepo = require("../repositories/class.repo");

let classController = {};

classController.getClasses = async (req, res) => {
  let classes = await classRepo.getClasses();
  return res.json(classes);
};

classController.getClass = (req, res) => {
  let _class = classRepo.getClassById(req.params.i);
  if (!_class) return res.json("No class with that id");
  return res.json(_class);
};

classController.createClass = (req,res) => {
  let exist_class = classRepo.getClassById(req.body.classId)
  if (exist_class) return res.status(400).json({success: false, message: "class already exists"})
  await classRepo.createclass(req.body)
  .then(newClass => res.json({success: true, class: newClass}),
  err => {
    console.error(err)
  res.status(400).json({success: false, err})})
}

module.exports = classController;
