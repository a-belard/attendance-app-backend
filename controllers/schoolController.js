const schoolRepo = require("../repositories/school.repo");
let schoolController = {};

schoolController.getSchools = async (req, res) => {
  let schools = await schoolRepo.getSchools();
  return res.json(schools);
};

schoolController.getSchool = async (req, res) => {
  let school = schoolRepo.getSchoolById(req.params.i);
  if (school) return res.json("No School with that id");
  return res.json(school);
};

schoolController.createSchool = async (req, res) => {
  await schoolRepo.createSchool(req.body).then(
    (newSchool) => res.json({ success: true, school: newSchool }),
    (err) => {
      console.error(err);
      res.status(400).json({ success: false, err });
    }
  );
};

module.exports = schoolController;
