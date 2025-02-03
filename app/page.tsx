"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Lock, Mail, Phone, User } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  })

  // verification code:
  const [verificationCode, setVerificationCode] = useState("")

  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  // Handle Verification Code Change
  const handleVerificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value)
  }


  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    // 🚨 Basic Input Validation Before Sending Request
    if (isSignUp) {
      if (!formData.name || !formData.email || !formData.phone || !formData.password) {
        setMessage("All fields are required!")
        setLoading(false)
        return
      }
    } else {
      if (!formData.email || !formData.password) {
        setMessage("Email and password are required!")
        setLoading(false)
        return
      }
    }

    const endpoint = isSignUp ? "http://localhost:3003/api/auth/register" : "http://localhost:3003/api/auth/login"

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong. Please try again.")
      }

      setMessage(isSignUp ? "🎉 Registration successful! Please log in." : "✅ Login successful! Redirecting...")

      // If sign up, display verification input (and optionally store the token if you want to compare)
      if (isSignUp) {
        setMessage("🎉 Registration successful! Please check your email for the verification code.")
        setIsVerifying(true)
      } else {
        setMessage("✅ Login successful! Redirecting...")
        // Simulate redirect after successful login
        setTimeout(() => {
          router.push("/Homepage")
        }, 500)
      }

    } catch (error: any) {
      setMessage(`❌ Error: ${error.message}`)
    }

    setLoading(false)
  }

  // handle verify email
  const handleVerifyEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    // Basic check: require a non-empty verification code
    if (!verificationCode) {
      setMessage("Please enter your verification code")
      setLoading(false)
      return
    }

    try {
      const response = await fetch("http://localhost:3003/api/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, verificationCode }),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Verification failed. Please try again.")
      }

      setMessage("✅ Email verified! Please log in.")
      // Optionally reset verification state and form fields here
      setIsVerifying(false)
      setIsSignUp(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
      })
      setVerificationCode("")
    } catch (error: any) {
      setMessage(`❌ Error: ${error.message}`)
    }
    setLoading(false)
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#020B2D] via-[#0A1A5D] to-[#F5E6D3]">
      <Card className="w-full max-w-md p-8 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900">
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </h2>
        <p className="mb-6 text-center text-gray-600">
          {isSignUp ? "Sign up to get started" : "Sign in to continue"}
        </p>

        {message && (
          <p className={`mb-4 text-center text-sm ${message.includes("Error") ? "text-red-600" : "text-green-600"}`}>
            {message}
          </p>
        )}

        {/* Show either the main auth form or the verification form */}
        {isVerifying ? (
          <form className="space-y-4" onSubmit={handleVerifyEmail}>
            <div className="relative">
              <CheckCircle className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <Input
                type="text"
                name="verificationCode"
                value={verificationCode}
                onChange={handleVerificationChange}
                placeholder="Enter Verification Code"
                className="pl-10"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-[#FFB800] text-black hover:bg-[#FFB800]/90" disabled={loading}>
              {loading ? "Verifying..." : "Verify Email"}
            </Button>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="pl-10"
                  required
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="pl-10"
                required
              />
            </div>

            {isSignUp && (
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="pl-10"
                  required
                />
              </div>
            )}

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="pl-10"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-[#FFB800] text-black hover:bg-[#FFB800]/90" disabled={loading}>
              {loading ? "Processing..." : isSignUp ? "Sign Up" : "Login"}
            </Button>
          </form>
        )}

        <div className="mt-4 text-center text-sm text-gray-600">
          {isVerifying
            ? null
            : isSignUp
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
          {isVerifying ? null : (
            <button
              className="font-medium text-[#FFB800] hover:text-[#FFB800]/80"
              onClick={() => {
                // Reset any verification state when switching between sign up and login
                setIsSignUp(!isSignUp)
                setMessage("")
              }}
            >
              {isSignUp ? "Login" : "Sign Up"}
            </button>
          )}
        </div>
      </Card>
    </div>
  )

}
