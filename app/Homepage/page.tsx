"use client"

import Link from "next/link"

import { useState } from "react"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Footer from "@/components/ui/footer"
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react"
import QuickBookPage from "../consultations/quick-book/page"

export default function Page() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#0A1A5D] to-[#F5E6D3]">
            {/* Navigation */}
            <nav className="flex items-center justify-between p-4">
                <div className="h-10 w-32 bg-white/20" />
                <div className="flex gap-4 text-white">
                    <Link href="/consultations">Consultations</Link>
                    <a href="#">Courses</a>
                    <a href="#">FAQ</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="container mx-auto px-4 text-center text-white">
                <p className="mb-4 text-sm uppercase tracking-wider">GUIDANCE FROM THE AUTHENTIC SOURCE OF THE VEDAS</p>
                <h1 className="mb-8 text-4xl font-bold">
                    The Art of Living
                    <br />
                    JyotisVastu Academy
                </h1>
                <div className="mb-16 flex justify-center gap-4">
                    <Button className="bg-[#FFB800] text-black hover:bg-[#FFB800]/90">Download App</Button>
                    <Button variant="outline" className="border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800]/10">
                        Contact Admin
                    </Button>
                </div>

                {/* Stats */}
                <div className="mb-20 flex justify-center gap-8">
                    {[
                        { number: "50k+", label: "Students" },
                        { number: "4.5k+", label: "Avg Rating" },
                        { number: "650k+", label: "Video Views" },
                        { number: "80+", label: "Courses" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-2xl font-bold text-[#FFB800]">{stat.number}</div>
                            <div className="text-sm text-white/80">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Consultations */}
                <section className="mb-20">
                    <h3 className="mb-8 text-2xl font-semibold">Our top consultations</h3>
                    <div className="grid grid-cols-4 gap-6">
                        {[
                            { icon: "🕉️", title: "30 min Jyotish Counselling", time: "30min", price: "1500" },
                            { icon: "🌟", title: "General Muhurtha", time: "15min", price: "1500" },
                            { icon: "❤️", title: "Compatibility", time: "15min", price: "1500" },
                            { icon: "🏠", title: "Vastu Guidance", time: "30min", price: "2500" },
                        ].map((consultation, index) => (
                            <Card key={index} className="overflow-hidden bg-white p-4">
                                <div className="mb-4 h-12 w-12 rounded-full bg-[#FFE4D6] p-3 text-2xl">{consultation.icon}</div>
                                <h4 className="mb-2 font-medium text-gray-900">{consultation.title}</h4>
                                <div className="mb-1 text-sm text-gray-600">Time: {consultation.time}</div>
                                <div className="mb-4 text-sm text-gray-600">Price: ₹{consultation.price}</div>

                                <Button
                                    className="w-full bg-[#FFB800] text-black hover:bg-[#FFB800]/90"
                                    onClick={() => setIsOpen(true)}
                                >
                                    Book Now
                                </Button>
                                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center p-4 bg-black/50">
                                    <DialogPanel className="relative w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                                        <DialogTitle className="text-xl font-semibold text-gray-900 mb-4">Quick Booking</DialogTitle>

                                        {/* Close Button */}
                                        <button
                                            className="absolute top-4 right-4 text-gray-500 hover:text-black"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <X className="w-5 h-5" />
                                        </button>

                                        {/* Quick Booking Component */}
                                        <QuickBookPage />

                                    </DialogPanel>
                                </Dialog>
                            </Card>
                        ))}
                    </div>
                    <Link href="/consultations" className="mt-4 inline-block text-[#FFB800] hover:text-[#FFB800]/80">
                        View All →
                    </Link>
                </section>

                {/* Classes */}
                <section className="mb-20">
                    <h3 className="mb-2 text-2xl font-semibold">Join our classes and start</h3>
                    <p className="mb-8 text-white/80">your learning journey</p>
                    <div className="grid grid-cols-3 gap-6">
                        {[
                            {
                                icon: "🎓",
                                title: "Professional",
                                description: "For those who want to become professional Jyotish and make their career in Vedic Science",
                            },
                            {
                                icon: "📚",
                                title: "Self - Paced",
                                description: "Follow the Skills and learn at your own pace with recorded sessions",
                            },
                            {
                                icon: "📱",
                                title: "Mini Modules",
                                description: "Master a specific topic with our focused mini-modules",
                            },
                        ].map((course, index) => (
                            <Card key={index} className="overflow-hidden bg-white p-6">
                                <div className="mb-4 h-16 w-16 rounded-full bg-[#FFE4D6] p-4 text-3xl">{course.icon}</div>
                                <h4 className="mb-2 text-lg font-semibold text-gray-900">{course.title}</h4>
                                <p className="mb-4 text-sm text-gray-600">{course.description}</p>
                                <Button className="w-full bg-[#FFB800] text-black hover:bg-[#FFB800]/90">Explore Courses</Button>
                            </Card>
                        ))}
                    </div>
                    <Button variant="link" className="mt-4 text-[#FFB800]">
                        Explore More →
                    </Button>
                </section>

                {/* Video Section */}
                <section className="mb-20">
                    <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-lg">
                        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%209.41.30%E2%80%AFAM-90yTBV48ts2WrqUOZFWLo4iGuZvheS.png')] bg-cover bg-center" />
                        <Button
                            size="icon"
                            className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        >
                            <Play className="h-8 w-8 text-white" fill="white" />
                        </Button>
                    </div>
                </section>

                {/* Experts */}
                <section className="mb-20">
                    <h3 className="mb-2 text-2xl font-semibold">Meet Our Experts</h3>
                    <p className="mb-8 text-white/80">Choose your favorite expert</p>
                    <div className="grid grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <Card key={index} className="overflow-hidden bg-white p-4">
                                <div className="mb-4 aspect-square w-full overflow-hidden rounded-lg bg-[#FFE4D6]" />
                                <h4 className="font-medium text-gray-900">Expert Name</h4>
                                <p className="text-sm text-gray-600">Vedic Expert</p>
                                <Button variant="link" className="mt-2 p-0 text-[#FFB800]">
                                    Live Now
                                </Button>
                            </Card>
                        ))}
                    </div>
                    <Button variant="outline" className="mt-6 border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800]/10">
                        Book Consultation
                    </Button>
                </section>

                {/* Testimonials */}
                <section className="mb-20">
                    <h3 className="mb-2 text-2xl font-semibold">Love from customers</h3>
                    <div className="mt-8 grid grid-cols-3 gap-6">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Card key={index} className="overflow-hidden bg-white p-4">
                                <div className="mb-4 aspect-video w-full rounded-lg bg-gray-200">
                                    <Play className="mx-auto h-12 w-12 translate-y-1/2 text-gray-400" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#FFE4D6]" />
                                    <div className="text-left">
                                        <h4 className="font-medium text-gray-900">Customer Name</h4>
                                        <p className="text-sm text-gray-600">2 days ago</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Blog Posts */}
                <section className="mb-20">
                    <h3 className="mb-8 text-2xl font-semibold text-left">Latest From Blogs</h3>
                    <div className="grid grid-cols-3 gap-6">
                        {[
                            { title: "Impact of Fasting", image: "🍽️" },
                            { title: "Spiritual Calendar", image: "📅" },
                            { title: "Divine Signs", image: "✨" },
                        ].map((post, index) => (
                            <Card key={index} className="overflow-hidden bg-white">
                                <div className="aspect-[4/3] bg-[#FFE4D6] p-8 text-4xl">{post.image}</div>
                                <div className="p-4">
                                    <h4 className="font-medium text-gray-900">{post.title}</h4>
                                    <Button variant="link" className="mt-2 p-0 text-[#FFB800]">
                                        Read More →
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Instagram Feed */}
                <section className="mb-20">
                    <h3 className="mb-2 text-2xl font-semibold">Follow us on Instagram</h3>
                    <p className="mb-8 text-white/80">
                        Get insights into your karmic patterns, life purpose and everything spiritual
                    </p>
                    <div className="grid grid-cols-4 gap-4">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="aspect-square rounded-lg bg-[#FFE4D6]" />
                        ))}
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}

