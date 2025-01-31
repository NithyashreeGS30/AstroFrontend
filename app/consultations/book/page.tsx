"use client"
import Link from "next/link"
import { Calendar, Clock, Lock, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

export default function BookingPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#020B2D] flex justify-center items-center p-6">
      {/* Booking Card */}
      <Card className="relative max-w-5xl w-full bg-white p-10 shadow-lg rounded-xl">
        {/* Close Button inside the Card */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-4 right-4 flex items-center gap-2 text-black-700 hover:text-black bg-white-400 hover:bg-gray-500 px-5 py-1 rounded-full text-sm transition"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="mb-6 text-3xl font-bold">Consult with an Expert</h1>
            <div className="mb-6 flex items-center gap-6">
              <div className="h-20 w-20 rounded-lg bg-orange-100 p-6 text-3xl">🕉️</div>
              <div>
                <h2 className="text-2xl font-semibold text-[#1a237e]">Jyotiṣa Counselling</h2>
                <p className="text-lg text-gray-600">ONLINE | 30 MIN</p>
                <p className="text-lg text-gray-600">Consultant: Acharya Ashutossh Chaawlla</p>
              </div>
              <Button variant="link" className="ml-auto text-[#FFB800] text-lg">
                EDIT
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-[#FFF8E6] px-5 py-3 text-lg">
            <Lock className="h-5 w-5" />
            Private & Secure
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-[1fr_350px]">
          <div className="space-y-10">
            <div className="grid gap-6">
              <div className="flex gap-6">
                <div className="flex-1">
                  <Label className="mb-2 text-lg">Date</Label>
                  <div className="relative">
                    <Input type="date" className="pl-12 py-3 text-lg" />
                    <Calendar className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <Label className="mb-2 text-lg">Time</Label>
                  <div className="relative">
                    <Input type="time" className="pl-12 py-3 text-lg" />
                    <Clock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold uppercase tracking-wider text-gray-600">
                General Information
              </h3>
              <div className="grid gap-6">
                <div>
                  <Label htmlFor="name" className="text-lg">Name</Label>
                  <Input id="name" placeholder="Your name" className="py-3 text-lg" />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="email" className="text-lg">Email</Label>
                    <Input id="email" type="email" placeholder="Your email address" className="py-3 text-lg" />
                    <p className="mt-1 text-sm text-gray-500">A verification code will be sent to this email</p>
                  </div>
                  <div>
                    <Label htmlFor="gender" className="text-lg">Gender</Label>
                    <Select>
                      <SelectTrigger className="py-3 text-lg">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone" className="text-lg">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+1 234-567-8900" className="py-3 text-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="space-y-8 rounded-xl bg-gray-50 p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-yellow-600" />
                <span className="text-lg font-medium">Discount Code</span>
              </div>
              <div className="flex gap-3">
                <Input placeholder="Enter code" className="py-3 text-lg" />
                <Button variant="secondary" className="px-5 py-3 text-lg">Apply</Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-200" />
                <span className="flex-1 text-lg">Consultant</span>
                <span className="text-lg">₹0</span>
              </div>
              <div className="flex items-center justify-between text-xl font-medium">
                <span>Total</span>
                <span>₹2,400</span>
              </div>
            </div>
            <Link href="../payment/" className="mt-4 inline-block text-[#FFB800] hover:text-[#FFB800]/80">
              <Button className="w-full bg-[#FFB800] text-xl text-black py-4 hover:bg-[#FFB800]/90">
                Continue to Payment →
              </Button></Link>
          </div>
        </div>
      </Card>
    </div>
  )
}
