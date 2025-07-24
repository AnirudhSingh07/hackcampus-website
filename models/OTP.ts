// models/OTP.ts
import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  email: { type: String, required: true, index: true },
  otpHash: { type: String, required: true },
  attempts: { type: Number, default: 0 },
  expiresAt: { type: Date, required: true },
  lastSentAt: { type: Date, required: true },
}, { timestamps: true });

// TTL index
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.models.OTP || mongoose.model("OTP", otpSchema);
