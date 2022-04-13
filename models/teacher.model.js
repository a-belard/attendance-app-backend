const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    names: { type: String },
    email: { type: String },
    teacherId: { type: String },
    phone: { type: String },
    gender: { type: String },
    picture: {
      id: { type: String },
      url: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Teachers", teacherSchema);
