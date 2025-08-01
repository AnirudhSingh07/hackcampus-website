import mongoose, { Schema, models } from "mongoose";

const ThreadSchema = new Schema({
  link: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Thread = models.Thread || mongoose.model("Thread", ThreadSchema);
export default Thread;
