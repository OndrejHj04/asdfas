const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
}, {timestamps: true});

module.exports = mongoose.model("Users", userSchema);
