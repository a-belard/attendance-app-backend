const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
  {
    name: { type: String },
    location: { type: String },
    head_master: { type: String },
    status: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Schools", schoolSchema);
