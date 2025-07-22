import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { connectToDatabase } from '@/lib/mongoose'
import User from '@/models/User'

const JWT_SECRET = process.env.JWT_SECRET || 'hackcampus_secret'

export async function POST(req: NextRequest) {
  await connectToDatabase()

  const { name, email, telegram, password, twitterLink,role } = await req.json()
  console.log('Received data:', { name, email, telegram, password, twitterLink, role })
  if (!name || !email || !password || !twitterLink || !role) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    return NextResponse.json({ error: 'Email already exists.' }, { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    twitterLink,  
    telegram,
    role
  })

  const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '7d' })

  return NextResponse.json({
    token,
    user: { role: newUser.role, name: newUser.name, email: newUser.email },
  }, { status: 201 })
}
