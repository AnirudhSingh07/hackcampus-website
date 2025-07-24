// app/api/auth/otp/send/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { Resend } from 'resend';
import { connectToDatabase } from "@/lib/mongoose";
import OTP from "@/models/OTP";
import User from "@/models/User";

export async function POST(req: Request) {
  await connectToDatabase();
  const { email } = await req.json();
  const resend = new Resend('re_2jUq6Eei_Br8MuCBCBrNXRTLV9GvLZULM');
  if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

  // Block if already a user (optional, depending on flow)
  const existing = await User.findOne({ email });
  if (existing) return NextResponse.json({ error: "Email already exists" }, { status: 409 });

  // Rate limit: allow resend only every 60s
  const existingOtp = await OTP.findOne({ email });
  const now = new Date();
  if (existingOtp && now.getTime() - existingOtp.lastSentAt.getTime() < 60_000) {
    return NextResponse.json({ error: "Please wait before requesting another OTP." }, { status: 429 });
  }

  const otp = crypto.randomInt(100000, 999999).toString();
  const otpHash = await bcrypt.hash(otp, 10);

  await OTP.findOneAndUpdate(
    { email },
    {
      email,
      otpHash,
      attempts: 0,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
      lastSentAt: now,
    },
    { upsert: true }
  );

   await resend.emails.send({
    from: 'noreply@hackcampus.hacktour.xyz',
    to: [email],
    subject: "Your HackCampus OTP",
    text: `Your OTP is ${otp}. It expires in 10 minutes.`,
  });

  return NextResponse.json({ message: "OTP sent" });
}
