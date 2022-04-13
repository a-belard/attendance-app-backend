require("dotenv").config();
require("./models/db_connection");
const express = require("express");
const cors = require("cors");
const app = express();

const studentRouter = require("./routes/student.route");
const classRouter = require("./routes/class.route");

app.use(cors());
app.use(express.urlencoded({ limit: "50mb", extended: "true" }));
app.use(express.json({ limit: "50mb" }));

app.use("/students", studentRouter);
app.use("/classes", classRouter);

app.listen(
  process.env.PORT || 5000,
  console.log("Server running on port " + process.env.PORT)
);
