const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
//defining the schema
const Schema = mongoose.Schema;

const UserModel = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

// Compile model from schema
//export model
//name,Model,collection
module.exports = mongoose.model("user", UserModel, "users");
