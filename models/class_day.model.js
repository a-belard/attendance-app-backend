const mongoose = require("mongoose");

const classday_schema = new mongoose.Schema(
  {
    month: { type: String },
    date: { type: Number },
    year: { type: Number },
    status: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

mongoose.model("ClassDay", classday_schema);
