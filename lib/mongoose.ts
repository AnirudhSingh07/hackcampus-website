// lib/mongoose.ts
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || ''

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in .env.local')
}

let cached = (global as any).mongoose || { conn: null, promise: null }

export async function connectToDatabase() {
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'hackcampus',
      bufferCommands: false,
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}
