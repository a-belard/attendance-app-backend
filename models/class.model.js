const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    name: { type: String },
    classTeacherId: { type: String },
    schoolId: { type: String },
    status: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Class = mongoose.model("Classe", classSchema);
module.exports = Class;
