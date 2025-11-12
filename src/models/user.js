const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  emailId: { type: String },
  passWord: { type: String },
  age: { type: String },
  gender: { type: String },
});

//while refering to mongoose model always start name with capital i-e User not user, because each model is supposed to be a class. we will use instance of that class.
// each model will create it's own instances. Here, each User will be in insatnce of class Model user.

module.exports = mongoose.model("User", userSchema);
