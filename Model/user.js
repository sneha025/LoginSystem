const mongoose = require("mongoose");

//defining the schema
const Schema = mongoose.Schema;

const UserModel = new Schema({
  userId: "",
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
});
