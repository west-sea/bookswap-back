import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  exchange: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exchange",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  seen: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Message", messageSchema);