const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    names: { type: String },
    classId: { type: String },
    email: { type: String },
    studentId: { type: String },
    phone: { type: String },
    gender: { type: String },
    picture: {
      id: { type: String },
      url: { type: String },
    },
    status: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Students", studentSchema);
