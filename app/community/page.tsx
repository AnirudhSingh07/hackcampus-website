import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Star, Code, MessageCircle } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>


      <div className="container mx-auto px-6 py-20">
        {/* Page Title */}
        <div className="text-center mb-20">
          <div className="w-16 h-16 mx-auto bg-green-500 rounded-full blur-xl opacity-60 animate-pulse mb-8"></div>
          <h1 className="text-4xl lg:text-6xl font-mono font-bold mb-6 tracking-wider">COMMUNITY</h1>
          <p className="text-gray-500 font-mono text-sm tracking-wider max-w-2xl mx-auto">
            JOIN THE WEB3 BUILDERS COLLECTIVE
          </p>
        </div>

        {/* Community Stats */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto">
          <div className="text-center p-8 border border-gray-900 bg-black/50">
            <div className="text-3xl font-mono font-bold text-green-400 mb-2">10K+</div>
            <div className="text-xs font-mono text-gray-500 tracking-wider">ACTIVE MEMBERS</div>
          </div>
          <div className="text-center p-8 border border-gray-900 bg-black/50">
            <div className="text-3xl font-mono font-bold text-green-400 mb-2">500+</div>
            <div className="text-xs font-mono text-gray-500 tracking-wider">PROJECTS BUILT</div>
          </div>
          <div className="text-center p-8 border border-gray-900 bg-black/50">
            <div className="text-3xl font-mono font-bold text-green-400 mb-2">95%</div>
            <div className="text-xs font-mono text-gray-500 tracking-wider">SUCCESS RATE</div>
          </div>
        </div> */}

        {/* Community Testimonials */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          <Card className="border border-gray-900 bg-black/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-green-500 text-green-500" />
                ))}
              </div>
              <p className="text-gray-400 text-sm font-mono mb-6 leading-relaxed">
                "HACKCAMPUS TRANSFORMED MY CAREER. THE COMMUNITY SUPPORT IS INCREDIBLE."
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 flex items-center justify-center mr-3">
                  <span className="text-black font-bold font-mono text-xs">A</span>
                </div>
                <div>
                  <p className="font-bold text-green-400 font-mono text-sm">ARJUN PATEL</p>
                  <p className="text-xs text-gray-600 font-mono">SMART CONTRACT DEV</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-900 bg-black/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-green-500 text-green-500" />
                ))}
              </div>
              <p className="text-gray-400 text-sm font-mono mb-6 leading-relaxed">
                "FROM ZERO TO DEFI EXPERT. THE MENTORSHIP PROGRAM IS GAME-CHANGING."
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 flex items-center justify-center mr-3">
                  <span className="text-black font-bold font-mono text-xs">P</span>
                </div>
                <div>
                  <p className="font-bold text-green-400 font-mono text-sm">PRIYA SHARMA</p>
                  <p className="text-xs text-gray-600 font-mono">DEFI PRODUCT MANAGER</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-900 bg-black/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-green-500 text-green-500" />
                ))}
              </div>
              <p className="text-gray-400 text-sm font-mono mb-6 leading-relaxed">
                "THE DEVREL BOOTCAMP OPENED DOORS I NEVER KNEW EXISTED."
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 flex items-center justify-center mr-3">
                  <span className="text-black font-bold font-mono text-xs">R</span>
                </div>
                <div>
                  <p className="font-bold text-green-400 font-mono text-sm">RAHUL KUMAR</p>
                  <p className="text-xs text-gray-600 font-mono">DEVREL LEAD</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}

        {/* Join Community CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto p-12 border border-gray-900 bg-black/50">
            <div className="w-12 h-12 bg-green-500 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-2xl font-mono font-bold text-green-400 mb-4 tracking-wider">JOIN THE REVOLUTION</h2>
            <p className="text-gray-500 font-mono text-sm mb-8 tracking-wider">
              CONNECT WITH BUILDERS, MENTORS, AND INNOVATORS
            </p>
            <Button className="bg-green-500 hover:bg-green-400 text-black font-mono font-bold px-12 py-3 tracking-wider">
              JOIN TELEGRAM
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
