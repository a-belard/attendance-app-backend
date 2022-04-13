const classRepo = require("../repositories/class.repo");

let classController = {};

classController.getClasses = async (req, res) => {
  let classes = await classRepo.getClasses();
  return res.json(classes);
};

classController.getClass = async (req, res) => {
  let _class = await classRepo.getClassById(req.params.i);
  if (!_class) return res.json("No class with that id");
  return res.json(_class);
};

classController.createClass = async (req, res) => {
  await classRepo.createClass(req.body).then(
    (newClass) => res.json({ success: true, class: newClass }),
    (err) => {
      console.error(err);
      res.status(400).json({ success: false, err });
    }
  );
  return;
};

module.exports = classController;
