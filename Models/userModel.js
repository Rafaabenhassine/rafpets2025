//importation
const mongoose = require("mongoose");

//create schema
const schema = mongoose.Schema;

const userSchema = new schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

//export
module.exports = mongoose.model("user", userSchema);
