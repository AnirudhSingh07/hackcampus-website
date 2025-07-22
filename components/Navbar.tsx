'use client'

import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { Code } from 'lucide-react'
import Modal from './ui/modals'
import { useAuth } from '@/context/AuthContext'

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [authType, setAuthType] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); 
  const [error, setError] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [telegram, setTelegram] = useState('');
  const [userRole,setUserRole] = useState('');
  const { role, login, logout, token } = useAuth()
  const isLoggedIn = !!token

  const openModal = (type: 'login' | 'signup') => {
    setAuthType(type)
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)


   const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) {
        const error = await res.json()
        console.log(error.error)
        setError(error.error);
        return
      }

      const data = await res.json()
      login(data.token, data.user.role)
      closeModal()
    } catch (err) {
      console.error('Network error:', err)
    }
  }


 const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    console.log(userRole);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password,
          twitterLink,
          role: userRole,
          telegram,
        }),
      })

      const data = await res.json()
      if (!res.ok)
      {
        setError(data.error);
        return;
      }
      login(data.token, data.user.role)
      closeModal()
    } catch (err: any) {
      console.log(err)
    }
  }


  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
            <Code className="w-4 h-4 text-black" />
          </div>
          <span className="text-sm font-mono text-green-400 tracking-wider">HACKCAMPUS</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/bootcamps" className="text-xs font-mono text-gray-500 hover:text-green-400 transition-colors tracking-wider">BOOTCAMPS</Link>
          <Link href="/community" className="text-xs font-mono text-gray-500 hover:text-green-400 transition-colors tracking-wider">COMMUNITY</Link>
          <Link href="/events" className="text-xs font-mono text-gray-500 hover:text-green-400 transition-colors tracking-wider">EVENTS</Link>
          <Link href="/jobs" className="text-xs font-mono text-gray-500 hover:text-green-400 transition-colors tracking-wider">JOBS</Link>

          {!isLoggedIn ? (
            <>
              <button onClick={() => openModal('login')} className="text-xs font-mono text-gray-500 hover:text-green-400">
                LOGIN
              </button>
              <button onClick={() => openModal('signup')} className="text-xs font-mono text-gray-500 hover:text-green-400">
                SIGNUP
              </button>
            </>
          ) : (
            <>
              <button onClick={logout} className="text-xs font-mono text-red-500 hover:text-red-400">
                LOGOUT
              </button>
              <Link href="/profile" className="text-xs font-mono text-green-400 hover:text-green-300">
                PROFILE
              </Link>
            </>
          )}
        </nav>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {authType === 'login' ? (
          <div>
            <h2 className="text-xl text-green-500 font-bold mb-4">Login</h2>
            <form onSubmit={handleLoginSubmit} className="flex flex-col space-y-3">
              <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" className="border p-2 rounded bg-black border-green-500 text-green-400" required />
              <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" className="border p-2 rounded bg-black border-green-500 text-green-400" required />
              <p className="mb-4 justify-center flex text-red-400">{error}</p>
              <button type="submit" className="bg-green-500 text-black py-2 rounded">Login</button>
            </form>
          </div>
        ) : (
          <div>
  <h2 className="text-xl font-bold text-green-500 mb-4">Signup</h2>
  <form onSubmit={handleSignupSubmit} className="flex flex-col space-y-3">
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      type="text"
      placeholder="Name*"
      className="border p-2 rounded bg-black border-green-500 text-green-400"
      required
    />
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      placeholder="Email*"
      className="border p-2 rounded bg-black border-green-500 text-green-400"
      required
    />
    <input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="password"
      placeholder="Password*"
      className="border p-2 rounded bg-black border-green-500 text-green-400"
      required
    />
    <input
      value={twitterLink}
      onChange={(e) => setTwitterLink(e.target.value)}
      type="text"
      placeholder="Twitter Profile Link"
      className="border p-2 rounded bg-black border-green-500 text-green-400"
    />
    <input
      value={telegram}
      onChange={(e) => setTelegram(e.target.value)}
      type="text"
      placeholder="Telegram Username (starting with @)*"
      className="border p-2 rounded bg-black border-green-500 text-green-400"
      required
    />
    <select
      value={userRole}
      onChange={(e) => setUserRole(e.target.value)}
      className="border p-2 rounded bg-black border-green-500 text-green-400"
      required
    >
      <option value="">Select Role*</option>
      <option value="Student">Student</option>
      <option value="Community Lead">Community</option>
      <option value="DevRel / Head of ecosystem">DevRel / Head of Ecosystem</option>
    </select>
    <p className="mb-4 justify-center flex text-red-400">{error}</p>
    <button type="submit" className="bg-green-500 text-white py-2 rounded">Signup</button>
  </form>
</div>

        )}
      </Modal>
    </header>
  )
}

export default Navbar
