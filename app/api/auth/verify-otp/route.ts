// app/api/auth/otp/verify/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/mongoose";
import OTP from "@/models/OTP";

const MAX_ATTEMPTS = 5;

export async function POST(req: Request) {
  await connectToDatabase();
  const { email, otp } = await req.json();
  if (!email || !otp) return NextResponse.json({ error: "Email & OTP required" }, { status: 400 });

  const entry = await OTP.findOne({ email });
  if (!entry) return NextResponse.json({ error: "OTP expired or not found" }, { status: 400 });

  if (entry.attempts >= MAX_ATTEMPTS) {
    await OTP.deleteOne({ _id: entry._id });
    return NextResponse.json({ error: "Too many attempts. Please request a new OTP." }, { status: 429 });
  }
  const match = await bcrypt.compare(otp, entry.otpHash);
  if (!match) {
    entry.attempts += 1;
    await entry.save();
    return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
  }

  await OTP.deleteOne({ _id: entry._id });

  return NextResponse.json({ message: "OTP verified" });
}
