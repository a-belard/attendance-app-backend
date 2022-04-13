const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    names: { type: String },
    classId: { type: String },
    email: { type: String, unique: true },
    studentId: { type: String, unique: true },
    phone: { type: String },
    gender: { type: String },
    picture: {
      id: { type: String },
      url: { type: String },
    },
    status: { type: Boolean },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Students", studentSchema);
