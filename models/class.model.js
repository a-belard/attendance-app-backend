const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    name: { type: String },
    classTeacherId: { type: String },
    schoolId: { type: String },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Classes", classSchema);
