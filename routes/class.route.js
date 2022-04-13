const classController = require("../controllers/class.controller");

const classRouter = require("express").Router();

classRouter.get("/", classController.getClasses);
classRouter.post("/", classController.createClass);

module.exports = classRouter;
