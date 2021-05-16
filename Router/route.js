const express = require("express");
const router = express.Router();
const User = require("../Model/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const db = "mongodb://localhost/SURVDB";
// connect the database

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("error while connecting to database");
    } else {
      console.log("success ful connnection");
    }
  }
);

router.post("/register", async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(401).json({
      error: "User is already present",
    });

    // res.writeHead(400);
  } else {
    //password encoding
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);

      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) return next(err);
        let userData = req.body;
        let user_ = new User(userData);
        user_.password = hash;
        user_._id = new mongoose.Types.ObjectId();
        user_.save();
        // req.flash("error", "Account made , please go to login");
        res.redirect("/login");
      });
    });
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  console.log(user.password);
  const candidatePassword = req.body.password;
  if (user) {
    bcrypt.compare(candidatePassword, user.password, function (err, isMatch) {
      if (err) return "password not matched";
      else {
        res.status(200).json({
          userId: user._id,
          token: "token",
        });
      }
    });
  } else {
    res.redirect("/login");
  }
});

router.get("/home", async (req, res) => {
  user = await User.find({ userName: "sneha025" });

  console.log(user);
  res.send(user);
});
module.exports = router;
