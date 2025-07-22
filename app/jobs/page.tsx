"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Briefcase, MapPin, Clock, Code } from "lucide-react"
import {useState,useEffect} from "react";
import { useAuth } from "@/context/AuthContext";

export default function JobsPage() {
  const { role } = useAuth();
  
    const showButton = role === "DevRel / Head of ecosystem" || role === "Community Lead";
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="container mx-auto px-6 py-20">
        {/* Page Title */}
        <div className="text-center mb-20">
          <div className="w-16 h-16 mx-auto bg-green-500 rounded-full blur-xl opacity-60 animate-pulse mb-8"></div>
          <h1 className="text-4xl lg:text-6xl font-mono font-bold mb-6 tracking-wider">JOBS</h1>
          <p className="text-gray-500 font-mono text-sm tracking-wider max-w-2xl mx-auto">
            EXCLUSIVE WEB3 OPPORTUNITIES FOR HACKCAMPUS GRADUATES
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-6 max-w-4xl mx-auto ">
          
          {/* <Card className="border border-gray-900 bg-black/50 backdrop-blur-sm hover:border-green-500/30 transition-all">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center space-x-4 mb-3">
                    <Badge className="bg-green-500/10 text-green-400 border border-green-500/20 font-mono text-xs tracking-wider">
                      FULL-TIME
                    </Badge>
                    <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono text-xs tracking-wider">
                      REMOTE
                    </Badge>
                  </div>
                  <h3 className="text-xl font-mono font-bold text-green-400 mb-2 tracking-wider">
                    SMART CONTRACT DEVELOPER
                  </h3>
                  <p className="text-gray-400 font-mono text-sm">DEFI PROTOCOL • SERIES A STARTUP</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-mono font-bold text-green-400 mb-1">$80K-120K</div>
                  <div className="text-xs text-gray-500 font-mono">USD/YEAR</div>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-xs text-gray-500 font-mono mb-6">
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  GLOBAL
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  POSTED 2D AGO
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-3 h-3 mr-1" />
                  2-4 YRS EXP
                </div>
              </div>
              <p className="text-gray-400 font-mono text-sm mb-6 leading-relaxed">
                BUILD AND MAINTAIN SMART CONTRACTS FOR NEXT-GEN DEFI PROTOCOLS. WORK WITH CUTTING-EDGE TECHNOLOGY.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-500 hover:bg-green-400 text-black font-mono font-bold px-8 tracking-wider">
                  APPLY NOW
                </Button>
                <Button className="bg-gray-900 hover:bg-gray-800 text-green-400 border border-gray-800 hover:border-green-500/30 font-mono tracking-wider">
                  VIEW DETAILS
                </Button>
              </div>
            </CardContent>
          </Card> */}

          {/* <Card className="border border-gray-900 bg-black/50 backdrop-blur-sm hover:border-green-500/30 transition-all">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center space-x-4 mb-3">
                    <Badge className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 font-mono text-xs tracking-wider">
                      CONTRACT
                    </Badge>
                    <Badge className="bg-purple-500/10 text-purple-400 border border-purple-500/20 font-mono text-xs tracking-wider">
                      HYBRID
                    </Badge>
                  </div>
                  <h3 className="text-xl font-mono font-bold text-green-400 mb-2 tracking-wider">
                    DEVELOPER RELATIONS LEAD
                  </h3>
                  <p className="text-gray-400 font-mono text-sm">L1 BLOCKCHAIN • WELL-FUNDED</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-mono font-bold text-green-400 mb-1">$60K-90K</div>
                  <div className="text-xs text-gray-500 font-mono">USD/YEAR</div>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-xs text-gray-500 font-mono mb-6">
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  SINGAPORE
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  POSTED 1W AGO
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-3 h-3 mr-1" />
                  3-5 YRS EXP
                </div>
              </div>
              <p className="text-gray-400 font-mono text-sm mb-6 leading-relaxed">
                LEAD DEVELOPER COMMUNITY INITIATIVES AND BUILD RELATIONSHIPS WITH TOP WEB3 DEVELOPERS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-500 hover:bg-green-400 text-black font-mono font-bold px-8 tracking-wider">
                  APPLY NOW
                </Button>
                <Button className="bg-gray-900 hover:bg-gray-800 text-green-400 border border-gray-800 hover:border-green-500/30 font-mono tracking-wider">
                  VIEW DETAILS
                </Button>
              </div>
            </CardContent>
          </Card> */}

          {/* <Card className="border border-gray-900 bg-black/50 backdrop-blur-sm hover:border-green-500/30 transition-all">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center space-x-4 mb-3">
                    <Badge className="bg-green-500/10 text-green-400 border border-green-500/20 font-mono text-xs tracking-wider">
                      FULL-TIME
                    </Badge>
                    <Badge className="bg-red-500/10 text-red-400 border border-red-500/20 font-mono text-xs tracking-wider">
                      URGENT
                    </Badge>
                  </div>
                  <h3 className="text-xl font-mono font-bold text-green-400 mb-2 tracking-wider">
                    WEB3 CONTENT CREATOR
                  </h3>
                  <p className="text-gray-400 font-mono text-sm">NFT MARKETPLACE • GROWING FAST</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-mono font-bold text-green-400 mb-1">$40K-70K</div>
                  <div className="text-xs text-gray-500 font-mono">USD/YEAR</div>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-xs text-gray-500 font-mono mb-6">
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  REMOTE
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  POSTED 3D AGO
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-3 h-3 mr-1" />
                  1-3 YRS EXP
                </div>
              </div>
              <p className="text-gray-400 font-mono text-sm mb-6 leading-relaxed">
                CREATE ENGAGING CONTENT FOR WEB3 PROJECTS. VIDEO, WRITING, AND SOCIAL MEDIA EXPERTISE REQUIRED.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-500 hover:bg-green-400 text-black font-mono font-bold px-8 tracking-wider">
                  APPLY NOW
                </Button>
                <Button className="bg-gray-900 hover:bg-gray-800 text-green-400 border border-gray-800 hover:border-green-500/30 font-mono tracking-wider">
                  VIEW DETAILS
                </Button>
              </div>
            </CardContent>
          </Card> */}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto p-12 border border-gray-900 bg-black/50">
            <h2 className="text-2xl font-mono font-bold text-green-400 mb-4 tracking-wider">COMPANIES HIRING</h2>
            <p className="text-gray-500 font-mono text-sm mb-8 tracking-wider">
              POST YOUR WEB3 JOBS AND FIND TOP TALENT
            </p>
            {showButton && <Button className="mb-6 bg-green-500 hover:bg-green-400 rounded-xl h-[5vh] text-black font-mono font-bold px-8 py-3 tracking-wider">
            POST A JOB
          </Button>}
          </div>
        </div>
      </div>
    </div>
  )
}
