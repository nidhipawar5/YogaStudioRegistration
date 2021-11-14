const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 18 && value > 65) {
        throw new Error("Age Must Be Between 18-65");
      }
    },
  },
  batch: {
    type: String,
  },
  bank: {
    type: String,
  },
  cardNumber: {
    type: String,
  },
  cardHolder: {
    type: String,
  },
  date: {
    type: String,
  },
  cvv: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
