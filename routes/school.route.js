const schoolController = require("../controllers/schoolController");

const schoolRouter = require("express").Router();

schoolRouter.get("/", schoolController.getSchools);
schoolRouter.post("/", schoolController.createSchool);

module.exports = schoolRouter;
