// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { connectToDatabase } from '@/lib/mongoose'
import User from '@/models/User'

const JWT_SECRET = process.env.JWT_SECRET || 'hackcampus_secret'

export async function POST(req: NextRequest) {
  await connectToDatabase()

  const { email, password } = await req.json()

  const user = await User.findOne({ email })
  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 })

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch)
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' })

  return NextResponse.json({ token, user: { role: user.role, name: user.name, email: user.email }, }, { status: 200 })
}
