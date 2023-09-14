const { Schema, model, Types } = require("mongoose");

const roomSchema = new Schema(
  {
    roomName: {
      type: String,
    },
    isGroupChat: {
      type: boolean,
      default: false
    }, 
    groupAdmin: {
      type: Types.ObjectId,
      ref: "User",
    },
    users: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
    latestMsg: [{ type: Types.ObjectId, ref: "Message" }],
  },
  { timestamps: true }
);

module.exports = Room = model("Room", roomSchema);
