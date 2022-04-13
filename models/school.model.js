const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    location: { type: String },
    head_master: { type: String },
    status: { type: Boolean },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Schools", schoolSchema);
