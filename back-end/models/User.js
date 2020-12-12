const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  lname: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  age: {
    type: String,
    required: true,
    max: 255,
    min: 2,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  gender: {
    type: String,
    required: true,
    max: 255,
    min: 4,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
