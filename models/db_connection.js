const mongoose = require("mongoose");

const connect = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Mongodb connection established successfully.."))
    .catch((err) => console.log(err));

  require("./student.model");
  require("./school.model");
  require("./class.model");
  require("./teacher.model");
  require("./class_day.model");
  require("././attendance.model");
};

connect();
