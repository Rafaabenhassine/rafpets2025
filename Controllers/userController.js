const jwt = require("jsonwebtoken");
const user = require("../Models/userModel");
const bcrypt = require("bcrypt");

//register
exports.register = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    const findUser = await user.findOne({ username });
    if (!findUser) {
      const newUser = new user({ username, email, password, phone });
      const salt = 10;
      const hashedpass = await bcrypt.hash(password, salt);
      newUser.password = hashedpassword;

      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY);
      res.status(200).send({ msg: "registered successfully!", newUser, token });
    } else {
      res.status(400).send({ msg: "username already exists" });
    }
  } catch (error) {
    // si register a echoué affiche error
    res.status(500).send({ msg: "cannot register ", error });
  }
};

exports.getall = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).send({ msg: "users found successfully!", users });
  } catch (error) {
    res.status(500).send({ msg: "error on getting all users", error });
  }
};

exports.deleteuser = async (req, res) => {
  try {
    const { _id } = req.params;
    await user.findByIdAndDelete({ _id });
    res.status(200).send({ msg: "deleted successfully!" });
  } catch (error) {
    res.status(400).send({ msg: "error on delete user", error });
  }
};

exports.upuser = async (req, res) => {
  try {
    const { _id } = req.params;
    const newuser = req.body;
    const users = await user.updateOne({ _id }, { $set: newuser });
    //user.findByIdAndUpdate({_id},newuser)
    res.status(200).send({ msg: "user updated successfully!", users });
  } catch (error) {
    res.status(400).send({ msg: "error on updating user!", error });
  }
};
