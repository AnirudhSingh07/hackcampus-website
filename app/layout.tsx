import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { AuthProvider } from "@/context/AuthContext" 

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HackCampus - Join the Web3 Revolution",
  description: "Free Web3 education platform by HackTour India. Master blockchain, DeFi, NFTs and land your dream Web3 job.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
