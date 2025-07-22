"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Trophy,
  Rocket,
  Star,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Globe,
  Code,
  Briefcase,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { useAuth } from "@/context/AuthContext"

export default function HomePage() {
  const { openModal } = useAuth()
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Animated Green Orbs */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-green-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-400 rounded-full blur-2xl opacity-15 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-green-600 rounded-full blur-3xl opacity-10 animate-pulse delay-2000"></div>

      {/* Header */}

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Glowing Green Orb */}
            <div className="relative mb-12 flex justify-center">
  <img
    src="/logohtihti.png"
    alt="Logo"
    className="h-[10vh] w-auto sm:h-[12vh] md:h-[15vh] max-w-[80%]"
  />
</div>


            <Badge className="mb-6 bg-gray-900 text-green-400 border border-green-500/30 px-4 py-2 font-mono text-xs tracking-wider">
              🚀 POWERED BY HACKTOUR INDIA
            </Badge>
            <h1 className="text-4xl lg:text-7xl font-bold mb-6 text-white leading-tight font-mono tracking-tight">
              JOIN THE WEB3
              <br />
              <span className="text-green-400">REVOLUTION</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              Master Web3 skills through free bootcamps, earn certifications, and land your dream job in the
              decentralized future
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg"
                onClick={() => openModal('signup')}
                className="bg-green-500 hover:bg-green-400 text-black font-bold px-12 py-4 text-lg shadow-2xl shadow-green-500/25 hover:shadow-green-400/25 transition-all transform hover:scale-105 font-mono tracking-wider"
              >
                JOIN HACKCAMPUS
              </Button>
              <Link href="https://t.me/+lXfUskeOZiZhNGZl">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-500/50 text-green-400 hover:text-white hover:bg-green-500/10 px-12 py-4 text-lg font-mono tracking-wider bg-transparent"
              >
                EXPLORE COMMUNITY
              </Button>
              </Link>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-green-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/50">
                  <BookOpen className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-bold text-green-400 mb-2 font-mono">100% FREE</h3>
                <p className="text-gray-400 text-sm">No hidden costs, ever</p>
              </div>
              <div className="text-center p-6 border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-green-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/50">
                  <Trophy className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-bold text-green-400 mb-2 font-mono">CERTIFIED LEARNING</h3>
                <p className="text-gray-400 text-sm">Industry-recognized certificates</p>
              </div>
              <div className="text-center p-6 border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-green-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/50">
                  <Briefcase className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-bold text-green-400 mb-2 font-mono">REAL JOBS</h3>
                <p className="text-gray-400 text-sm">Direct access to Web3 opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is HackCampus */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white font-mono">WHAT IS HACKCAMPUS?</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              HackCampus is a revolutionary Web3 education platform that bridges the gap between learning and earning.
              We provide structured bootcamps, hands-on projects, and direct pathways to Web3 careers—all completely
              free.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
                <div className="w-10 h-10 bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/50">
                  <CheckCircle className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-green-400 mb-2 font-mono">COMMUNITY-DRIVEN LEARNING</h3>
                  <p className="text-gray-400">
                    Learn alongside peers, mentors, and industry experts in our vibrant community
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
                <div className="w-10 h-10 bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/50">
                  <CheckCircle className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-green-400 mb-2 font-mono">PRACTICAL SKILLS FOCUS</h3>
                  <p className="text-gray-400">
                    Build real projects and gain hands-on experience with cutting-edge Web3 technologies
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
                <div className="w-10 h-10 bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/50">
                  <CheckCircle className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-green-400 mb-2 font-mono">CAREER ACCELERATION</h3>
                  <p className="text-gray-400">
                    Direct access to job opportunities, bounties, and networking with top Web3 companies
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-green-500/30 bg-gray-900/50 backdrop-blur-sm p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/50">
                  <Rocket className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">READY TO START?</h3>
                <p className="text-gray-400 mb-6">Join thousands of students already building their Web3 future</p>
                
                <Button
                onClick={() => openModal('signup')}
                className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 shadow-lg shadow-green-500/25 font-mono tracking-wider">
                  GET STARTED TODAY
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white font-mono">HOW IT WORKS</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Your journey from Web3 beginner to industry professional in three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-green-500/50 transition-all">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-500 flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-green-500/50">
                  <span className="text-2xl font-bold text-black font-mono">1</span>
                </div>
                <CardTitle className="text-xl text-green-400 font-mono">CHOOSE YOUR TRACK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-center">
                  Select from Web3 Basics, Development, DevRel, Content Creation, and more specialized tracks
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-green-500/50 transition-all">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-500 flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-green-500/50">
                  <span className="text-2xl font-bold text-black font-mono">2</span>
                </div>
                <CardTitle className="text-xl text-green-400 font-mono">LEARN & BUILD</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-center">
                  Complete interactive bootcamps, build real projects, and collaborate with the community
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-green-500/50 transition-all">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-500 flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-green-500/50">
                  <span className="text-2xl font-bold text-black font-mono">3</span>
                </div>
                <CardTitle className="text-xl text-green-400 font-mono">GET HIRED</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-center">
                  Earn certifications, apply to exclusive jobs, and start your Web3 career with confidence
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bootcamp Tracks */}
      {/* <section id="bootcamps" className="py-20 border-t border-gray-800"> */}
        {/* <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white font-mono">BOOTCAMP TRACKS</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive learning paths designed to take you from beginner to Web3 professional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
            {/* Web3 Basics */}
            {/* <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-green-500/50 transition-all group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 font-mono text-xs">
                    BEGINNER
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500 font-mono">
                    <Clock className="w-4 h-4 mr-1" />4 WEEKS
                  </div>
                </div>
                <CardTitle className="text-xl text-green-400 font-mono">WEB3 FUNDAMENTALS</CardTitle>
                <CardDescription className="text-gray-400">
                  Master blockchain basics, cryptocurrency, DeFi, and NFTs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-gray-400">
                  <Trophy className="w-4 h-4 mr-2 text-green-500" />
                  Certificate included
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Users className="w-4 h-4 mr-2 text-green-500" />
                  1,234 students enrolled
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold shadow-lg shadow-green-500/25 font-mono tracking-wider">
                  REGISTER NOW
                </Button>
              </CardContent>
            </Card> */}

            {/* Development Track */}
            {/* <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-green-500/50 transition-all group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 font-mono text-xs">
                    INTERMEDIATE
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500 font-mono">
                    <Clock className="w-4 h-4 mr-1" />8 WEEKS
                  </div>
                </div>
                <CardTitle className="text-xl text-green-400 font-mono">SMART CONTRACT DEV</CardTitle>
                <CardDescription className="text-gray-400">
                  Build dApps with Solidity, React, and Web3 libraries
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-gray-400">
                  <Trophy className="w-4 h-4 mr-2 text-green-500" />
                  Certificate included
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Users className="w-4 h-4 mr-2 text-green-500" />
                  892 students enrolled
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold shadow-lg shadow-green-500/25 font-mono tracking-wider">
                  REGISTER NOW
                </Button>
              </CardContent>
            </Card> */}

            {/* DevRel Track */}
            {/* <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-green-500/50 transition-all group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-red-500/20 text-red-400 border border-red-500/30 font-mono text-xs">
                    ADVANCED
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500 font-mono">
                    <Clock className="w-4 h-4 mr-1" />6 WEEKS
                  </div>
                </div>
                <CardTitle className="text-xl text-green-400 font-mono">DEVELOPER RELATIONS</CardTitle>
                <CardDescription className="text-gray-400">
                  Community building, technical writing, and developer advocacy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-gray-400">
                  <Trophy className="w-4 h-4 mr-2 text-green-500" />
                  Certificate included
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Users className="w-4 h-4 mr-2 text-green-500" />
                  456 students enrolled
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold shadow-lg shadow-green-500/25 font-mono tracking-wider">
                  REGISTER NOW
                </Button>
              </CardContent>
            </Card> */}

            {/* Content Creation */}
            {/* <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-green-500/50 transition-all group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 font-mono text-xs">
                    BEGINNER
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500 font-mono">
                    <Clock className="w-4 h-4 mr-1" />5 WEEKS
                  </div>
                </div>
                <CardTitle className="text-xl text-green-400 font-mono">WEB3 CONTENT CREATION</CardTitle>
                <CardDescription className="text-gray-400">
                  Create engaging content for Web3 projects and communities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-gray-400">
                  <Trophy className="w-4 h-4 mr-2 text-green-500" />
                  Certificate included
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Users className="w-4 h-4 mr-2 text-green-500" />
                  678 students enrolled
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold shadow-lg shadow-green-500/25 font-mono tracking-wider">
                  REGISTER NOW
                </Button>
              </CardContent>
            </Card> */}

            {/* DeFi Specialization */}
            {/* <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-green-500/50 transition-all group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-red-500/20 text-red-400 border border-red-500/30 font-mono text-xs">
                    ADVANCED
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500 font-mono">
                    <Clock className="w-4 h-4 mr-1" />
                    10 WEEKS
                  </div>
                </div>
                <CardTitle className="text-xl text-green-400 font-mono">DEFI PROTOCOL DEV</CardTitle>
                <CardDescription className="text-gray-400">
                  Build complex DeFi protocols and financial applications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-gray-400">
                  <Trophy className="w-4 h-4 mr-2 text-green-500" />
                  Certificate included
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Users className="w-4 h-4 mr-2 text-green-500" />
                  234 students enrolled
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold shadow-lg shadow-green-500/25 font-mono tracking-wider">
                  REGISTER NOW
                </Button>
              </CardContent>
            </Card> */}

            {/* NFT & Gaming */}
            {/* <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-green-500/50 transition-all group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 font-mono text-xs">
                    INTERMEDIATE
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500 font-mono">
                    <Clock className="w-4 h-4 mr-1" />7 WEEKS
                  </div>
                </div>
                <CardTitle className="text-xl text-green-400 font-mono">NFT & WEB3 GAMING</CardTitle>
                <CardDescription className="text-gray-400">
                  Create NFT collections and blockchain-based games
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-gray-400">
                  <Trophy className="w-4 h-4 mr-2 text-green-500" />
                  Certificate included
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Users className="w-4 h-4 mr-2 text-green-500" />
                  567 students enrolled
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold shadow-lg shadow-green-500/25 font-mono tracking-wider">
                  REGISTER NOW
                </Button>
              </CardContent>
            </Card> */}
          {/* </div> */}
      {/* <div className="text-center mt-12 z-20">
        <Link href="https://www.hacktour.xyz">
          <Button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold shadow-lg shadow-green-500/25 font-mono tracking-wider">
          REGISTER NOW
          </Button>
        </Link>
          </div>
        </div> */}
      {/* </section> */}
      {/* Community Testimonials */}
      {/* <section id="community" className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white font-mono">COMMUNITY VOICES</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers through HackCampus
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>
                <p className="text-gray-400 mb-4">
                  "HackCampus completely changed my career trajectory. The bootcamps are incredibly well-structured and
                  the community support is amazing!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 flex items-center justify-center mr-3 shadow-lg shadow-green-500/50">
                    <span className="text-black font-bold font-mono">A</span>
                  </div>
                  <div>
                    <p className="font-bold text-green-400 font-mono">ARJUN PATEL</p>
                    <p className="text-sm text-gray-500">Smart Contract Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>
                <p className="text-gray-400 mb-4">
                  "From zero Web3 knowledge to landing my dream job at a DeFi protocol. The practical approach and
                  mentorship made all the difference."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 flex items-center justify-center mr-3 shadow-lg shadow-green-500/50">
                    <span className="text-black font-bold font-mono">P</span>
                  </div>
                  <div>
                    <p className="font-bold text-green-400 font-mono">PRIYA SHARMA</p>
                    <p className="text-sm text-gray-500">DeFi Product Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>
                <p className="text-gray-400 mb-4">
                  "The DevRel bootcamp opened doors I never knew existed. Now I'm building communities for top Web3
                  projects!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 flex items-center justify-center mr-3 shadow-lg shadow-green-500/50">
                    <span className="text-black font-bold font-mono">R</span>
                  </div>
                  <div>
                    <p className="font-bold text-green-400 font-mono">RAHUL KUMAR</p>
                    <p className="text-sm text-gray-500">Developer Relations Lead</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Upcoming Events */}
      {/* <section id="events" className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white font-mono">UPCOMING EVENTS</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join our IRL hackathons, workshops, and networking events across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-green-500/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge className="bg-red-500/20 text-red-400 border border-red-500/30 font-mono text-xs">
                    LIVE EVENT
                  </Badge>
                  <div className="text-right text-sm text-gray-500 font-mono">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      MAR 15-17, 2024
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">WEB3 HACKATHON MUMBAI</h3>
                <p className="text-gray-400 mb-4">
                  48-hour hackathon focused on DeFi and NFT innovations. Build, learn, and win amazing prizes!
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4 font-mono">
                  <MapPin className="w-4 h-4 mr-1" />
                  MUMBAI, MAHARASHTRA
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold shadow-lg shadow-green-500/25 font-mono tracking-wider">
                  REGISTER NOW
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-green-500/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge className="bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono text-xs">
                    WORKSHOP
                  </Badge>
                  <div className="text-right text-sm text-gray-500 font-mono">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      MAR 22, 2024
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">SMART CONTRACT SECURITY</h3>
                <p className="text-gray-400 mb-4">
                  Learn best practices for secure smart contract development with industry experts.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4 font-mono">
                  <MapPin className="w-4 h-4 mr-1" />
                  BANGALORE, KARNATAKA
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold shadow-lg shadow-green-500/25 font-mono tracking-wider">
                  REGISTER NOW
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Partner Showcase */}
      {/* <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white font-mono">ECOSYSTEM PARTNERS</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Collaborating with leading Web3 companies to provide the best learning experience
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6 hover:border-green-500/50 transition-all"
              >
                <div className="w-full h-12 bg-gray-800 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Company Sponsorship CTA */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border border-green-500/30 bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-green-400 font-mono">
                  PARTNER WITH HACKCAMPUS
                </h2>
                <p className="text-xl mb-8 text-gray-400">
                  Sponsor bootcamps, hire top talent, and build your brand in the Web3 community
                </p>
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 border border-gray-800 bg-black/50">
                    <div className="text-3xl font-bold mb-2 text-green-400 font-mono">10K+</div>
                    <div className="text-gray-400 font-mono text-sm">ACTIVE STUDENTS</div>
                  </div>
                  <div className="text-center p-6 border border-gray-800 bg-black/50">
                    <div className="text-3xl font-bold mb-2 text-green-400 font-mono">50+</div>
                    <div className="text-gray-400 font-mono text-sm">PARTNER COMPANIES</div>
                  </div>
                  <div className="text-center p-6 border border-gray-800 bg-black/50">
                    <div className="text-3xl font-bold mb-2 text-green-400 font-mono">95%</div>
                    <div className="text-gray-400 font-mono text-sm">JOB PLACEMENT RATE</div>
                  </div>
                </div> */}
                <div className="max-w-md mx-auto justify-items-center">
                  <div className="flex gap-4 mb-4">
                    {/* <Input
                      placeholder="Company email"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 font-mono"
                    /> */}
                    <Link href={"https://forms.gle/Fq5qR7vyGZ4JCrk47"}>
                    <Button className="bg-green-500 text-black hover:bg-green-400 font-bold font-mono tracking-wider">
                      GET STARTED
                    </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-500 font-mono">JOIN LEADING WEB3 COMPANIES IN SHAPING THE FUTURE</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full">
        <div className="container mx-auto px-6 py-6 flex justify-center">
          <p className="text-xs font-mono text-gray-600 tracking-wider">
            POWERED BY{" "}
            <Link href="https://hacktour.xyz" className="text-green-400 hover:text-green-300 transition-colors">
              HACKTOUR INDIA
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
