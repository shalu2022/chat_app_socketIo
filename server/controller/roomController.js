const asyncErrorHandler = require("express-async-handler");
const Room = require("../models/roomModel");

const getRoomDetails = asyncErrorHandler(async (req, res) => {
  const result = await Room.find();
  if (result) {
    res.status(200).json({data: result});
  }
});

const addNewRoom = asyncErrorHandler(async (req, res) => {
  const { roomName, groupAdmin } = req.body;
  if (!roomName) {
    res.status(400);
    throw new Error("Room name is required");
  }
  const roomExist = await Room.findOne({ roomName });

  console.log("shale", roomExist);
  if (roomExist) {
    res.status(400);
    throw new Error("Room Name already exist");
  }
  const roomDetails = await Room.create({
    roomName,
    groupAdmin,
    users: new Array(groupAdmin)
  });

  if(roomDetails){
    res.status(200).json({data: "room created succesfully"})
  }
});

module.exports = { addNewRoom, getRoomDetails };
