import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import Thread from "@/models/Thread";

export async function POST(req: Request) {
  try {
    const { link } = await req.json();

    if (!link || !link.startsWith("http")) {
      return NextResponse.json({ error: "Valid link is required" }, { status: 400 });
    }

    await connectToDatabase();

    // Save link in DB
    const newThread = await Thread.create({ link });

    return NextResponse.json({ message: "Thread saved successfully", thread: newThread }, { status: 201 });
  } catch (error: any) {
    console.error("Error saving thread:", error);
    return NextResponse.json({ error: "Failed to save thread" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const threads = await Thread.find().sort({ createdAt: -1 }).limit(50);
    return NextResponse.json(threads);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch threads" }, { status: 500 });
  }
}
