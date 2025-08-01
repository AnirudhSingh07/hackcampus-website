'use client'

import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Modal from './ui/modals'
import { useAuth } from '@/context/AuthContext'
import { set } from 'mongoose'
import Loader from './Loader'

const RESEND_COOLDOWN = 60; // seconds

const Navbar = () => {
  const {
    role,
    login,
    logout,
    token,
    isModalOpen,
    authType,
    closeModal,
    openModal,
  } = useAuth();

  const isLoggedIn = !!token;

  // Shared state
  const [error, setError] = useState<string>('');

  // Login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Signup state
  const [name, setName] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [telegram, setTelegram] = useState('');
  const [userRole, setUserRole] = useState('');

  // OTP state
  const [signupStep, setSignupStep] = useState<'form' | 'otp'>('form');
  const [otp, setOtp] = useState('');
  const [resendSecondsLeft, setResendSecondsLeft] = useState(0);
  const [loading, setLoading] = useState(false);

  // Reset form every time modal opens
  useEffect(() => {
    if (isModalOpen) {
      setError('');
      setSignupStep('form');
      setOtp('');
      setResendSecondsLeft(0);
    }
  }, [isModalOpen]);

  // Resend cooldown timer
  useEffect(() => {
    if (!resendSecondsLeft) return;
    const id = setInterval(() => {
      setResendSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [resendSecondsLeft]);

  // ------------------ LOGIN ------------------
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        setError(data.error || 'Login failed');
        return;
      }

      login(data.token, data.user.role, data.user.name, data.user.email);
      closeModal();
    } catch (err) {
      console.error(err);
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  // ------------------ SIGNUP (STEP 1 → send OTP) ------------------
  const handleSignupSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to send OTP');
        return;
      }

      setSignupStep('otp');
      setResendSecondsLeft(RESEND_COOLDOWN);
    } catch (err) {
      console.error(err);
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  // ------------------ SIGNUP (STEP 2 → verify OTP & complete signup) ------------------
  const handleVerifyOtpAndSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1) Verify OTP
      const verifyRes = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const verifyData = await verifyRes.json();

      if (!verifyRes.ok) {
        setError(verifyData.error || 'Invalid or expired OTP');
        return;
      }

      // 2) Finish signup (your existing signup API)
      const signupRes = await fetch('/api/auth/signup', {
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
      });

      const signupData = await signupRes.json();

      if (!signupRes.ok) {
        setError(signupData.error || 'Signup failed');
        return;
      }

      login(signupData.token, signupData.user.role, signupData.user.name, signupData.user.email);
      closeModal();
    } catch (err) {
      console.error(err);
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    if (resendSecondsLeft > 0) return;
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to resend OTP');
        return;
      }

      setResendSecondsLeft(RESEND_COOLDOWN);
    } catch (err) {
      console.error(err);
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="absolute top-0 z-50 w-full">
      {loading && <Loader />}
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logohtihti.png" alt="" className='h-[5vh] w-[8vw]' />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/bootcamps" className="text-xs font-mono text-gray-500 hover:text-green-400 transition-colors tracking-wider">BOOTCAMPS</Link>
          <Link href="/bounty" className="text-xs font-mono text-gray-500 hover:text-green-400 transition-colors tracking-wider">BOUNTIES</Link>
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
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="p-2 bg-black border border-green-500 rounded text-green-400" required />
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="p-2 bg-black border border-green-500 rounded text-green-400" required />
              {error && <p className="text-sm text-red-400 text-center">{error}</p>}
              <button disabled={loading} type="submit" className="bg-green-500 text-black py-2 rounded disabled:opacity-50">
                Sign in
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold text-green-500 mb-4">Signup</h2>

            {signupStep === 'form' && (
              <form onSubmit={handleSignupSendOtp} className="flex flex-col space-y-3">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name*" className="p-2 bg-black border border-green-500 rounded text-green-400" required />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email*" className="p-2 bg-black border border-green-500 rounded text-green-400" required />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password*" className="p-2 bg-black border border-green-500 rounded text-green-400" required />
                <input value={twitterLink} onChange={(e) => setTwitterLink(e.target.value)} type="text" placeholder="Twitter Profile Link" className="p-2 bg-black border border-green-500 rounded text-green-400" />
                <input value={telegram} onChange={(e) => setTelegram(e.target.value)} type="text" placeholder="Telegram Username (starting with @)*" className="p-2 bg-black border border-green-500 rounded text-green-400" required />
                <select value={userRole} onChange={(e) => setUserRole(e.target.value)} className="p-2 bg-black border border-green-500 rounded text-green-400" required>
                  <option value="">Select Role*</option>
                  <option value="Student">Student</option>
                  <option value="Community Lead">Community Lead</option>
                  <option value="DevRel / Head of ecosystem">DevRel / Head of Ecosystem</option>
                </select>

                {error && <p className="text-sm text-red-400 text-center">{error}</p>}

                <button disabled={loading} type="submit" className="bg-green-500 text-white py-2 rounded disabled:opacity-50">
                  Send OTP
                </button>
              </form>
            )}

            {signupStep === 'otp' && (
              <form onSubmit={handleVerifyOtpAndSignup} className="flex flex-col space-y-3">
                <p className="text-xs text-gray-400">
                  We sent an OTP to <span className="text-green-400">{email}</span>
                </p>
                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  type="text"
                  placeholder="Enter OTP"
                  className="p-2 bg-black border border-green-500 rounded text-green-400"
                  required
                />

                <button
                  type="button"
                  onClick={resendOtp}
                  className="text-xs text-blue-400 underline disabled:opacity-50"
                  disabled={resendSecondsLeft > 0 || loading}
                >
                  {resendSecondsLeft > 0 ? `Resend in ${resendSecondsLeft}s` : 'Resend OTP'}
                </button>

                {error && <p className="text-sm text-red-400 text-center">{error}</p>}

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="text-xs text-gray-400 underline"
                    onClick={() => {
                      setSignupStep('form');
                      setOtp('');
                      setError('');
                    }}
                  >
                    Change email / details
                  </button>

                  <button disabled={loading} type="submit" className="bg-green-500 text-white py-2 px-4 rounded disabled:opacity-50">
                    Verify & Signup
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </Modal>
    </header>
  )
}

export default Navbar
