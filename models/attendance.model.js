const mongoose = require("mongoose");

const attendance_schema = new mongoose.Schema(
  {
    class_day_id: { type: String },
    class_id: { type: String },
    attendance_pic: {
      id: { type: String },
      url: { type: String },
    },
    available_students: [],
    unavailable_students: [],
    schoolId: { type: String },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Attendances", attendance_schema);
