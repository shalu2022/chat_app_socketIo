const { Schema, model, Types } = require("mongoose");

const messageSchema = new Schema(
  {
    sender: { type: Types.ObjectId, ref: "User" },
    message: { type: String, trim: true },
    room: { type: Types.ObjectId, ref: "Room" },
  },
  { timestamps: true }
);

module.exports = Message = model("Message", messageSchema);
