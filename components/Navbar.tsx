'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import Loader from './Loader'

const Navbar = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [twitterLink, setTwitterLink] = useState('')
  const [telegram, setTelegram] = useState('')
  const [userRole, setUserRole] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoading,setIsLoading] = useState(false);

  const {
    role,
    login,
    logout,
    token,
    openModal,
    closeModal,
    authType,
    isModalOpen,
  } = useAuth()

  const isLoggedIn = !!token

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (!res.ok) return setError(data.error)
      login(data.token, data.user.role, data.user.name, data.user.email)
      closeModal()
      setIsLoading(false)
    } catch (err) {
      console.error('Network error:', err)
      setIsLoading(false)
    }
  }

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password,
          twitterLink,
          telegram,
          role: userRole,
        }),
      })
      const data = await res.json()
      if (!res.ok) return setError(data.error)
      login(data.token, data.user.role, data.user.name, data.user.email)
      closeModal()
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10">
      { isLoading && <Loader />}
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logohtihti.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/bootcamps" className="text-xs font-mono text-gray-400 hover:text-green-400">BOOTCAMPS</Link>
          <Link href="/events" className="text-xs font-mono text-gray-400 hover:text-green-400">EVENTS</Link>
          <Link href="/jobs" className="text-xs font-mono text-gray-400 hover:text-green-400">JOBS</Link>
          {!isLoggedIn ? (
            <>
              <button onClick={() => openModal('login')} className="text-xs font-mono text-gray-400 hover:text-green-400">LOGIN</button>
              <button onClick={() => openModal('signup')} className="text-xs font-mono text-gray-400 hover:text-green-400">SIGNUP</button>
            </>
          ) : (
            <>
              <button onClick={logout} className="text-xs font-mono text-red-500 hover:text-red-400">LOGOUT</button>
              <Link href="/profile" className="text-xs font-mono text-green-400 hover:text-green-300">PROFILE</Link>
            </>
          )}
        </nav>

        <button
          className="md:hidden text-gray-400"
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-black border-t border-gray-800">
          <Link href="/bootcamps" className="block text-sm text-gray-400 hover:text-green-400">BOOTCAMPS</Link>
          <Link href="/events" className="block text-sm text-gray-400 hover:text-green-400">EVENTS</Link>
          <Link href="/jobs" className="block text-sm text-gray-400 hover:text-green-400">JOBS</Link>
          {!isLoggedIn ? (
            <>
              <button onClick={() => { openModal('login'); setIsMobileMenuOpen(false); }} className="block text-sm text-gray-400 hover:text-green-400">LOGIN</button>
              <button onClick={() => { openModal('signup'); setIsMobileMenuOpen(false); }} className="block text-sm text-gray-400 hover:text-green-400">SIGNUP</button>
            </>
          ) : (
            <>
              <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="block text-sm text-red-500 hover:text-red-400">LOGOUT</button>
              <Link href="/profile" className="block text-sm text-green-400 hover:text-green-300">PROFILE</Link>
            </>
          )}
        </div>
      )}

      {/* Centered Modal */}
      {isModalOpen && (
        <div className="relative inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="bg-[#111] rounded-lg p-6 w-full max-w-md space-y-4 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-400 hover:text-white text-2xl"
            >
              &times;
            </button>

            {authType === 'login' ? (
              <div>
                <h2 className="text-xl text-green-500 font-bold mb-4">Login</h2>
                <form onSubmit={handleLoginSubmit} className="flex flex-col space-y-3">
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="p-2 bg-black border border-green-500 rounded text-green-400" required />
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="p-2 bg-black border border-green-500 rounded text-green-400" required />
                  <p className="text-sm text-red-400 text-center">{error}</p>
                  <button type="submit" className="bg-green-500 text-black py-2 rounded">Login</button>
                </form>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold text-green-500 mb-4">Signup</h2>
                <form onSubmit={handleSignupSubmit} className="flex flex-col space-y-3">
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name*" className="p-2 bg-black border border-green-500 rounded text-green-400" required />
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email*" className="p-2 bg-black border border-green-500 rounded text-green-400" required />
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password*" className="p-2 bg-black border border-green-500 rounded text-green-400" required />
                  <input value={twitterLink} onChange={(e) => setTwitterLink(e.target.value)} type="text" placeholder="Twitter Profile Link" className="p-2 bg-black border border-green-500 rounded text-green-400" />
                  <input value={telegram} onChange={(e) => setTelegram(e.target.value)} type="text" placeholder="Telegram Username*" className="p-2 bg-black border border-green-500 rounded text-green-400" required />
                  <select value={userRole} onChange={(e) => setUserRole(e.target.value)} className="p-2 bg-black border border-green-500 rounded text-green-400" required>
                    <option value="">Select Role*</option>
                    <option value="Student">Student</option>
                    <option value="Community Lead">Community Lead</option>
                    <option value="DevRel / Head of ecosystem">DevRel / Head of Ecosystem</option>
                  </select>
                  <div className="text-sm text-green-400">
  <p className="mb-2">
    Join our Telegram community for regular updates:{" "}
    <a
      href="https://t.me/+egERkiX-sikwYTNl"
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-blue-400"
    >
      <br />
      HackTour IND Telegram Community
    </a>
  </p>
  <label className="flex items-center space-x-2">
    <input
      type="checkbox"
      required
    />
    <span>I have joined the Telegram group</span>
  </label>
</div>
                  <p className="text-sm text-red-400 text-center">{error}</p>
                  <button type="submit" className="bg-green-500 text-white py-2 rounded">Signup</button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
