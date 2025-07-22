 "use client"

import { useState } from "react"
import Link from "next/link"
import {
  User,
  Settings,
  Trophy,
  BookOpen,
  Calendar,
  Award,
  Code,
  Edit3,
  MapPin,
  Mail,
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
  Clock,
  CheckCircle,
  Circle,
} from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock user data
  const user = {
    name: "Alex Chen",
    username: "@alexchen",
    email: "alex.chen@example.com",
    location: "Mumbai, India",
    bio: "Full-stack developer passionate about Web3 and DeFi. Building the future of decentralized applications.",
    avatar: "/placeholder.svg?height=120&width=120&text=AC",
    joinDate: "March 2024",
    level: "Advanced",
    xp: 2850,
    nextLevelXp: 3000,
    walletAddress: "0x742d35Cc6634C0532925a3b8D404d3aABF5F2681",
    social: {
      github: "alexchen",
      twitter: "alexchen_dev",
      linkedin: "alexchen",
    },
  }

  const stats = [
    { label: "Bootcamps Completed", value: "12", icon: BookOpen },
    { label: "Bounties Earned", value: "₹45,000", icon: Trophy },
    { label: "Projects Built", value: "8", icon: Code },
    { label: "Community Rank", value: "#127", icon: Award },
  ]

  const completedBootcamps = [
    {
      title: "DeFi Development Mastery",
      completion: "100%",
      grade: "A+",
      date: "Dec 2024",
      skills: ["Solidity", "Uniswap", "Compound"],
    },
    {
      title: "Smart Contract Security",
      completion: "100%",
      grade: "A",
      date: "Nov 2024",
      skills: ["Security", "Auditing", "Testing"],
    },
    {
      title: "NFT Marketplace Development",
      completion: "100%",
      grade: "A+",
      date: "Oct 2024",
      skills: ["ERC-721", "IPFS", "React"],
    },
  ]

  const currentBootcamps = [
    {
      title: "Advanced DeFi Protocols",
      progress: 75,
      nextDeadline: "Jan 15, 2025",
      status: "In Progress",
    },
    {
      title: "Layer 2 Solutions",
      progress: 30,
      nextDeadline: "Jan 20, 2025",
      status: "In Progress",
    },
  ]

  const achievements = [
    {
      title: "First Smart Contract",
      description: "Deployed your first smart contract",
      date: "Mar 2024",
      rarity: "Common",
    },
    {
      title: "DeFi Expert",
      description: "Completed 5 DeFi bootcamps",
      date: "Nov 2024",
      rarity: "Rare",
    },
    {
      title: "Bug Hunter",
      description: "Found critical security vulnerability",
      date: "Dec 2024",
      rarity: "Epic",
    },
    {
      title: "Community Leader",
      description: "Helped 50+ students in forums",
      date: "Dec 2024",
      rarity: "Legendary",
    },
  ]

  const projects = [
    {
      title: "DeFi Yield Aggregator",
      description: "Multi-protocol yield farming optimizer with automated rebalancing",
      tech: ["Solidity", "React", "Web3.js"],
      status: "Live",
      link: "https://github.com/alexchen/defi-aggregator",
    },
    {
      title: "NFT Marketplace",
      description: "Decentralized marketplace for digital art with royalty distribution",
      tech: ["Next.js", "IPFS", "Polygon"],
      status: "In Development",
      link: "https://github.com/alexchen/nft-marketplace",
    },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "text-gray-400 border-gray-400"
      case "Rare":
        return "text-blue-400 border-blue-400"
      case "Epic":
        return "text-purple-400 border-purple-400"
      case "Legendary":
        return "text-yellow-400 border-yellow-400"
      default:
        return "text-gray-400 border-gray-400"
    }
  }
    return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-8">
        {/* Profile Header */}
        <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-8 mt-10 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <img
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                className="w-24 h-24 rounded-full border-2 border-green-400"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                {user.level}
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{user.name}</h1>
                <span className="text-gray-400">{user.username}</span>
              </div>

              <p className="text-gray-300 mb-4 max-w-2xl">{user.bio}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {user.location}
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {user.email}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined {user.joinDate}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href={`https://github.com/${user.social.github}`}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`https://twitter.com/${user.social.twitter}`}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`https://linkedin.com/in/${user.social.linkedin}`}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="text-right">
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors mb-4">
                <Edit3 className="w-4 h-4" />
                Edit Profile
              </button>
                            {/* XP Progress */}
              <div className="bg-gray-800 rounded-lg p-4 min-w-[200px]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Experience</span>
                  <span className="text-sm font-bold">{user.xp} XP</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className="bg-green-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(user.xp / user.nextLevelXp) * 100}%` }}
                  />
                </div>
                <div className="text-xs text-gray-400">{user.nextLevelXp - user.xp} XP to next level</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-8 h-8 text-green-400" />
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-900/50 rounded-xl p-1 mb-8 overflow-x-auto">
          {[
            { id: "overview", label: "Overview", icon: User },
            { id: "bootcamps", label: "Bootcamps", icon: BookOpen },
            { id: "projects", label: "Projects", icon: Code },
            { id: "achievements", label: "Achievements", icon: Trophy },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === tab.id ? "bg-green-600 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
                {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Current Bootcamps */}
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-400" />
                  Current Bootcamps
                </h3>
                <div className="space-y-4">
                  {currentBootcamps.map((bootcamp, index) => (
                    <div key={index} className="border border-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">{bootcamp.title}</h4>
                        <span className="text-xs bg-blue-600 px-2 py-1 rounded-full">{bootcamp.status}</span>
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{bootcamp.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-green-400 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${bootcamp.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">Next deadline: {bootcamp.nextDeadline}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Achievements */}
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-400" />
                  Recent Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border border-gray-700 rounded-lg">
                      <Trophy className={`w-5 h-5 mt-1 ${getRarityColor(achievement.rarity).split(" ")[0]}`} />
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{achievement.title}</h4>
                        <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{achievement.date}</span>
                          <span
                            className={`text-xs px-2 py-1 rounded-full border ${getRarityColor(achievement.rarity)}`}
                          >
                            {achievement.rarity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
                    {activeTab === "bootcamps" && (
            <div className="space-y-8">
              {/* Completed Bootcamps */}
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Completed Bootcamps
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedBootcamps.map((bootcamp, index) => (
                    <div
                      key={index}
                      className="border border-gray-700 rounded-lg p-6 hover:border-green-400/50 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-semibold">{bootcamp.title}</h4>
                        <span className="text-lg font-bold text-green-400">{bootcamp.grade}</span>
                      </div>
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Completion: {bootcamp.completion}</div>
                        <div className="text-sm text-gray-500">Completed: {bootcamp.date}</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {bootcamp.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs bg-gray-800 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Bootcamps */}
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Circle className="w-5 h-5 text-blue-400" />
                  In Progress
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentBootcamps.map((bootcamp, index) => (
                    <div key={index} className="border border-gray-700 rounded-lg p-6">
                      <h4 className="font-semibold mb-4">{bootcamp.title}</h4>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{bootcamp.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div
                            className="bg-blue-400 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${bootcamp.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">Next deadline: {bootcamp.nextDeadline}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
                    {activeTab === "projects" && (
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code className="w-5 h-5 text-green-400" />
                My Projects
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="border border-gray-700 rounded-lg p-6 hover:border-green-400/50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-semibold text-lg">{project.title}</h4>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          project.status === "Live" ? "bg-green-600" : "bg-blue-600"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-gray-800 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-green-400" />
                All Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="border border-gray-700 rounded-lg p-6 hover:border-green-400/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <Trophy className={`w-8 h-8 ${getRarityColor(achievement.rarity).split(" ")[0]}`} />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-lg">{achievement.title}</h4>
                          <span
                            className={`text-xs px-2 py-1 rounded-full border ${getRarityColor(achievement.rarity)}`}
                          >
                            {achievement.rarity}
                          </span>
                        </div>
                        <p className="text-gray-400 mb-3">{achievement.description}</p>
                        <div className="text-sm text-gray-500">Earned: {achievement.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}