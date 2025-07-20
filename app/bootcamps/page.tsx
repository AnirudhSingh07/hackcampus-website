import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Clock, Users, Trophy, Code } from "lucide-react"

export default function BootcampsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-900 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
              <Code className="w-4 h-4 text-black" />
            </div>
            <span className="text-sm font-mono text-green-400 tracking-wider">HACKCAMPUS</span>
          </Link>
          <Link href="/" className="flex items-center space-x-2 text-gray-500 hover:text-green-400 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs font-mono tracking-wider">BACK</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-20">
        {/* Page Title */}
        <div className="text-center mb-20">
          <div className="w-16 h-16 mx-auto bg-green-500 rounded-full blur-xl opacity-60 animate-pulse mb-8"></div>
          <h1 className="text-4xl lg:text-6xl font-mono font-bold mb-6 tracking-wider">BOOTCAMPS</h1>
          <p className="text-gray-500 font-mono text-sm tracking-wider max-w-2xl mx-auto">
            COMPREHENSIVE LEARNING PATHS FOR WEB3 MASTERY
          </p>
        </div>

        {/* Bootcamp Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Web3 Fundamentals */}
          <Card className="border border-gray-900 bg-black/50 backdrop-blur-sm hover:border-green-500/30 transition-all group">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-green-500/10 text-green-400 border border-green-500/20 font-mono text-xs tracking-wider">
                  BEGINNER
                </Badge>
                <div className="flex items-center text-xs text-gray-600 font-mono">
                  <Clock className="w-3 h-3 mr-1" />
                  4W
                </div>
              </div>
              <CardTitle className="text-lg text-green-400 font-mono tracking-wider">WEB3 FUNDAMENTALS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-500 text-sm font-mono">BLOCKCHAIN • DEFI • NFTS</p>
              <div className="flex items-center justify-between text-xs text-gray-600 font-mono">
                <div className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  1.2K
                </div>
                <div className="flex items-center">
                  <Trophy className="w-3 h-3 mr-1 text-green-500" />
                  CERT
                </div>
              </div>
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-green-400 border border-gray-800 hover:border-green-500/30 font-mono text-xs tracking-wider">
                ENROLL
              </Button>
            </CardContent>
          </Card>

          {/* Smart Contract Development */}
          <Card className="border border-gray-900 bg-black/50 backdrop-blur-sm hover:border-green-500/30 transition-all group">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 font-mono text-xs tracking-wider">
                  INTERMEDIATE
                </Badge>
                <div className="flex items-center text-xs text-gray-600 font-mono">
                  <Clock className="w-3 h-3 mr-1" />
                  8W
                </div>
              </div>
              <CardTitle className="text-lg text-green-400 font-mono tracking-wider">SMART CONTRACTS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-500 text-sm font-mono">SOLIDITY • REACT • WEB3</p>
              <div className="flex items-center justify-between text-xs text-gray-600 font-mono">
                <div className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  892
                </div>
                <div className="flex items-center">
                  <Trophy className="w-3 h-3 mr-1 text-green-500" />
                  CERT
                </div>
              </div>
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-green-400 border border-gray-800 hover:border-green-500/30 font-mono text-xs tracking-wider">
                ENROLL
              </Button>
            </CardContent>
          </Card>

          {/* Developer Relations */}
          <Card className="border border-gray-900 bg-black/50 backdrop-blur-sm hover:border-green-500/30 transition-all group">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-red-500/10 text-red-400 border border-red-500/20 font-mono text-xs tracking-wider">
                  ADVANCED
                </Badge>
                <div className="flex items-center text-xs text-gray-600 font-mono">
                  <Clock className="w-3 h-3 mr-1" />
                  6W
                </div>
              </div>
              <CardTitle className="text-lg text-green-400 font-mono tracking-wider">DEVELOPER RELATIONS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-500 text-sm font-mono">COMMUNITY • ADVOCACY • GROWTH</p>
              <div className="flex items-center justify-between text-xs text-gray-600 font-mono">
                <div className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  456
                </div>
                <div className="flex items-center">
                  <Trophy className="w-3 h-3 mr-1 text-green-500" />
                  CERT
                </div>
              </div>
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-green-400 border border-gray-800 hover:border-green-500/30 font-mono text-xs tracking-wider">
                ENROLL
              </Button>
            </CardContent>
          </Card>

          {/* Content Creation */}
          <Card className="border border-gray-900 bg-black/50 backdrop-blur-sm hover:border-green-500/30 transition-all group">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-green-500/10 text-green-400 border border-green-500/20 font-mono text-xs tracking-wider">
                  BEGINNER
                </Badge>
                <div className="flex items-center text-xs text-gray-600 font-mono">
                  <Clock className="w-3 h-3 mr-1" />
                  5W
                </div>
              </div>
              <CardTitle className="text-lg text-green-400 font-mono tracking-wider">CONTENT CREATION</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-500 text-sm font-mono">WRITING • VIDEO • SOCIAL</p>
              <div className="flex items-center justify-between text-xs text-gray-600 font-mono">
                <div className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  678
                </div>
                <div className="flex items-center">
                  <Trophy className="w-3 h-3 mr-1 text-green-500" />
                  CERT
                </div>
              </div>
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-green-400 border border-gray-800 hover:border-green-500/30 font-mono text-xs tracking-wider">
                ENROLL
              </Button>
            </CardContent>
          </Card>

          {/* DeFi Protocol Development */}
          <Card className="border border-gray-900 bg-black/50 backdrop-blur-sm hover:border-green-500/30 transition-all group">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-red-500/10 text-red-400 border border-red-500/20 font-mono text-xs tracking-wider">
                  ADVANCED
                </Badge>
                <div className="flex items-center text-xs text-gray-600 font-mono">
                  <Clock className="w-3 h-3 mr-1" />
                  10W
                </div>
              </div>
              <CardTitle className="text-lg text-green-400 font-mono tracking-wider">DEFI PROTOCOLS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-500 text-sm font-mono">YIELD • LENDING • AMM</p>
              <div className="flex items-center justify-between text-xs text-gray-600 font-mono">
                <div className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  234
                </div>
                <div className="flex items-center">
                  <Trophy className="w-3 h-3 mr-1 text-green-500" />
                  CERT
                </div>
              </div>
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-green-400 border border-gray-800 hover:border-green-500/30 font-mono text-xs tracking-wider">
                ENROLL
              </Button>
            </CardContent>
          </Card>

          {/* NFT & Gaming */}
          <Card className="border border-gray-900 bg-black/50 backdrop-blur-sm hover:border-green-500/30 transition-all group">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 font-mono text-xs tracking-wider">
                  INTERMEDIATE
                </Badge>
                <div className="flex items-center text-xs text-gray-600 font-mono">
                  <Clock className="w-3 h-3 mr-1" />
                  7W
                </div>
              </div>
              <CardTitle className="text-lg text-green-400 font-mono tracking-wider">NFT & GAMING</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-500 text-sm font-mono">NFTS • GAMEFI • METAVERSE</p>
              <div className="flex items-center justify-between text-xs text-gray-600 font-mono">
                <div className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  567
                </div>
                <div className="flex items-center">
                  <Trophy className="w-3 h-3 mr-1 text-green-500" />
                  CERT
                </div>
              </div>
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-green-400 border border-gray-800 hover:border-green-500/30 font-mono text-xs tracking-wider">
                ENROLL
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
