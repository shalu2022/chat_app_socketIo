const asyncErrorHandler = require("express-async-handler");
const User = require("../models/userModel");
const getToken = require("../utils/getToken");

const userAuth = asyncErrorHandler(async (req, res) => {
  res.status(200).json({ message: "auth user called" });
});

const registerUser = asyncErrorHandler(async (req, res) => {
  const { userName, password, profilePic } = req.body;
  if (!userName || !password) {
    res.status(400);
    throw new Error("Name and Password are required fields");
  }

  const existUser = await User.findOne({ userName });

  if (existUser) {
    res.status(400).json({
      message: "Username already exist",
    });
  }

  const user = await User.create({
    userName,
    plainPassword: password,
    password,
    profilePic,
  });

  if (user) {
    res.status(201).json({
      data: {
        _id: user._id,
        userName: user.userName,
        password: user.password,
        profilePic: user.profilePic,
        token: getToken({ id: user._id }),
      },
      message: "user Created Successfully!",
    });
  } else {
    res.status(400).json({ message: "User not created" });
  }
});

const loginUser = asyncErrorHandler(async (req, res) => {
  const { userName, password } = req.body;

  const user = await User.findOne({ userName });

  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      data: {
        _id: user._id,
        userName: user.userName,
        password: user.password,
        profilePic: user.profilePic,
        token: getToken({ id: user._id }),
      },
      message: "Login Success",
    });
  } else {
    res.status(401);
    throw new Error("Invalid User Name or Password");
  }
});

module.exports = { registerUser, loginUser };
