const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    names: { type: String },
    email: { type: String, unique: true },
    teacherId: { type: String, unique: true },
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

mongoose.model("Teachers", teacherSchema);
