import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Code } from "lucide-react"

export default function EventsPage() {
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
          <h1 className="text-4xl lg:text-6xl font-mono font-bold mb-6 tracking-wider">EVENTS</h1>
          <p className="text-gray-500 font-mono text-sm tracking-wider max-w-2xl mx-auto">
            IRL HACKATHONS • WORKSHOPS • NETWORKING
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <Card className="border border-gray-900 bg-black/50 backdrop-blur-sm hover:border-green-500/30 transition-all">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <Badge className="bg-red-500/10 text-red-400 border border-red-500/20 font-mono text-xs tracking-wider">
                    LIVE
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500 font-mono">
                    <Calendar className="w-3 h-3 mr-1" />
                    MAR 15-17, 2024
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-500 font-mono">
                  <MapPin className="w-3 h-3 mr-1" />
                  MUMBAI, MAHARASHTRA
                </div>
              </div>
              <h3 className="text-2xl font-mono font-bold text-green-400 mb-4 tracking-wider">WEB3 HACKATHON MUMBAI</h3>
              <p className="text-gray-400 font-mono text-sm mb-6 leading-relaxed">
                48-HOUR HACKATHON FOCUSED ON DEFI AND NFT INNOVATIONS. BUILD, LEARN, AND WIN AMAZING PRIZES.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-500 hover:bg-green-400 text-black font-mono font-bold px-8 tracking-wider">
                  REGISTER NOW
                </Button>
                <Button className="bg-gray-900 hover:bg-gray-800 text-green-400 border border-gray-800 hover:border-green-500/30 font-mono tracking-wider">
                  LEARN MORE
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-900 bg-black/50 backdrop-blur-sm hover:border-green-500/30 transition-all">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono text-xs tracking-wider">
                    WORKSHOP
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500 font-mono">
                    <Calendar className="w-3 h-3 mr-1" />
                    MAR 22, 2024
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-500 font-mono">
                  <MapPin className="w-3 h-3 mr-1" />
                  BANGALORE, KARNATAKA
                </div>
              </div>
              <h3 className="text-2xl font-mono font-bold text-green-400 mb-4 tracking-wider">
                SMART CONTRACT SECURITY
              </h3>
              <p className="text-gray-400 font-mono text-sm mb-6 leading-relaxed">
                LEARN BEST PRACTICES FOR SECURE SMART CONTRACT DEVELOPMENT WITH INDUSTRY EXPERTS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-500 hover:bg-green-400 text-black font-mono font-bold px-8 tracking-wider">
                  REGISTER NOW
                </Button>
                <Button className="bg-gray-900 hover:bg-gray-800 text-green-400 border border-gray-800 hover:border-green-500/30 font-mono tracking-wider">
                  LEARN MORE
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-900 bg-black/50 backdrop-blur-sm hover:border-green-500/30 transition-all">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <Badge className="bg-purple-500/10 text-purple-400 border border-purple-500/20 font-mono text-xs tracking-wider">
                    NETWORKING
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500 font-mono">
                    <Calendar className="w-3 h-3 mr-1" />
                    APR 05, 2024
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-500 font-mono">
                  <MapPin className="w-3 h-3 mr-1" />
                  DELHI, NCR
                </div>
              </div>
              <h3 className="text-2xl font-mono font-bold text-green-400 mb-4 tracking-wider">WEB3 BUILDERS MEETUP</h3>
              <p className="text-gray-400 font-mono text-sm mb-6 leading-relaxed">
                CONNECT WITH FELLOW BUILDERS, INVESTORS, AND INNOVATORS IN THE WEB3 SPACE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-500 hover:bg-green-400 text-black font-mono font-bold px-8 tracking-wider">
                  REGISTER NOW
                </Button>
                <Button className="bg-gray-900 hover:bg-gray-800 text-green-400 border border-gray-800 hover:border-green-500/30 font-mono tracking-wider">
                  LEARN MORE
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
