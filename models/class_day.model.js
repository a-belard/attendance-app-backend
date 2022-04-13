const mongoose = require("mongoose");

const classday_schema = new mongoose.Schema(
  {
    month: { type: String },
    date: { type: Number },
    year: { type: Number },
  },
  {
    timestamps: true,
  }
);

mongoose.model("ClassDays", classday_schema);
