'use client'
import { createContext, useState, useEffect, useContext, ReactNode } from 'react'

type AuthContextType = {
  role: string | null
  token: string | null
  name: string | null
  email: string | null
  login: (token: string, role: string, name: string, email: string) => void
  logout: () => void
  isModalOpen: boolean,
  openModal: (type: 'login' | 'signup') => void
  closeModal: () => void
  authType: 'login' | 'signup'
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<string | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [name, setName] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    const savedRole = localStorage.getItem('role')
    if (savedToken && savedRole) {
      setToken(savedToken)
      setRole(savedRole)
    }
  }, [])

  const login = (token: string, role: string, name: string, email: string) => {
    localStorage.setItem('token', token)
    localStorage.setItem('role', role)
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    setToken(token)
    setRole(role)
    setName(name)
    setEmail(email)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    setToken(null)
    setRole(null)
    setName(null)
    setEmail(null)
  }

  const openModal = (type: 'login' | 'signup') => {
  setAuthType(type);
  setIsModalOpen(true);
  };

const closeModal = () => {
  setIsModalOpen(false);
};

  return (
    <AuthContext.Provider value={{ role, token, login, logout, openModal, closeModal, isModalOpen, authType, name, email }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
