"use client"

import Link from "next/link"

import { useEffect, useState } from "react"
import { Play, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Footer from "@/components/ui/footer"
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react"
import QuickBookPage from "../consultations/quick-book/page"

export default function Page() {
    const [consultants, setConsultants] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [selectedConsultant, setSelectedConsultant] = useState(null)
    const [showAll, setShowAll] = useState(false)
    const [expandedBios, setExpandedBios] = useState<{ [key: string]: boolean }>({});
    const [selectedConsultantId, setSelectedConsultantId] = useState(null);
    const [selectedConsultantData, setSelectedConsultantData] = useState(null);
    const toggleBio = (id) => {
        setExpandedBios((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle the state for this consultant
        }))
    }
    useEffect(() => {
        const fetchConsultants = async () => {
            try {
                const response = await fetch("http://localhost:3003/api/consultants")
                if (!response.ok) {
                    throw new Error("Failed to fetch consultants.")
                }
                const data = await response.json()
                setConsultants(data.data) // Accessing `data` from API response
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchConsultants()
    }, [])


    const handleBookNow = async (consultantId) => {
        setIsOpen(true); // Open the modal

        try {
            const response = await fetch(`http://localhost:3003/api/consultants/${consultantId}`);
            if (!response.ok) {
                throw new Error("Failed to fetch consultant details.");
            }
            const data = await response.json();
            setSelectedConsultantData(data.data); // Store consultant details
        } catch (err) {
            console.error("Error fetching consultant details:", err);
        }
    };


    const displayedConsultants = showAll ? consultants : consultants.slice(0, 3)
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
                    <h3 className="mb-8 text-2xl font-semibold text-white">Our Top Consultant</h3>

                    {loading ? (
                        <p className="text-center text-white">Loading...</p>
                    ) : error ? (
                        <p className="text-center text-red-500">Error: {error}</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {displayedConsultants.map((consultant) => (
                                <Card key={consultant.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
                                    {/* Profile Placeholder */}
                                    <div className="flex items-center justify-center h-24 w-24 mx-auto mb-4 rounded-full bg-[#FFE4D6]">
                                        <span className="text-3xl font-bold text-gray-700">{consultant.name.charAt(0)}</span>
                                    </div>

                                    {/* Consultant Details */}
                                    <div className="text-center">
                                        <h4 className="font-semibold text-lg text-gray-900">{consultant.name}</h4>
                                        <p className="text-sm text-gray-600 mt-1">
                                            {expandedBios[consultant.id] || consultant.bio.length <= 80
                                                ? consultant.bio
                                                : `${consultant.bio.slice(0, 80)}...`
                                            }                                            {!expandedBios[consultant.id] && consultant.bio.length > 80 && (
                                                <button
                                                    className="text-[#FFB800] ml-1 underline"
                                                    onClick={() => toggleBio(consultant.id)}
                                                >
                                                    Read More
                                                </button>
                                            )}
                                        </p>
                                        <p className="mt-1"><strong>Expertise:</strong> {consultant.expertise.join(", ")}</p>
                                        <p className="mt-1"><strong>Languages:</strong> {consultant.languages.join(", ")}</p>
                                    </div>

                                    {/* Rating & Reviews */}
                                    <div className="flex items-center justify-center gap-2 mt-4">
                                        <Star className="h-4 w-4 text-yellow-500" />
                                        <span className="text-gray-900">{consultant.averageRating?.toFixed(1) || "N/A"}</span>
                                        <span className="text-sm text-gray-600">({consultant.reviewCount} reviews)</span>
                                    </div>

                                    {/* Book Now Button */}
                                    <Button
                                        className="w-full bg-[#FFB800] text-black hover:bg-[#FFB800]/90"
                                        onClick={() => handleBookNow(consultant.id)}
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
                                            <QuickBookPage consultant={selectedConsultantData} />

                                        </DialogPanel>
                                    </Dialog>

                                </Card>
                            ))}
                        </div>
                    )}

                    {/* View All Button */}
                    <Button
                        variant="link"
                        className="mt-4 text-[#FFB800] text-center w-full"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Show Less" : "View All →"}
                    </Button>
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
                {/* Experts Section */}
                <section className="mb-20">
                    <h3 className="mb-2 text-2xl font-semibold text-center text-white">Meet Our Experts</h3>
                    <p className="mb-8 text-center text-white/80">Choose your favorite expert</p>

                    {loading ? (
                        <p className="text-center text-white">Loading experts...</p>
                    ) : error ? (
                        <p className="text-center text-red-500">Error: {error}</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {consultants.map((consultant) => (
                                <Card key={consultant.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
                                    {/* Profile Placeholder */}
                                    <div className="flex items-center justify-center h-24 w-24 mx-auto mb-4 rounded-full bg-[#FFE4D6]">
                                        <span className="text-3xl font-bold text-gray-700">{consultant.name.charAt(0)}</span>
                                    </div>

                                    {/* Expert Details */}
                                    <div className="text-center">
                                        <h4 className="font-semibold text-lg text-gray-900">{consultant.name}</h4>
                                        <p className="text-sm text-gray-600 mt-1">{consultant.bio.slice(0, 80)}...</p>
                                    </div>

                                    {/* Rating & Reviews */}
                                    <div className="flex items-center justify-center gap-2 mt-4">
                                        <Star className="h-4 w-4 text-yellow-500" />
                                        <span className="text-gray-900">{consultant.averageRating?.toFixed(1) || "N/A"}</span>
                                        <span className="text-sm text-gray-600">({consultant.reviewCount} reviews)</span>
                                    </div>

                                    {/* View Profile Button */}
                                    <Button
                                        variant="link"
                                        className="mt-4 text-[#FFB800] text-center w-full"
                                        onClick={() => setSelectedConsultant(consultant)}
                                    >
                                        View Profile
                                    </Button>
                                </Card>
                            ))}
                        </div>
                    )}

                    {/* Consultant Profile Popup */}
                    {selectedConsultant && (
                        <Dialog open={!!selectedConsultant} onClose={() => setSelectedConsultant(null)} className="fixed inset-0 flex items-center justify-center p-4 bg-black/50">
                            <DialogPanel className="relative w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
                                <DialogTitle className="text-xl font-semibold text-gray-900 mb-4">{selectedConsultant.name}</DialogTitle>

                                {/* Close Button */}
                                <button
                                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                                    onClick={() => setSelectedConsultant(null)}
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Profile Content */}
                                <div className="flex gap-6">
                                    {/* Profile Image */}
                                    <div className="w-32 h-32 rounded-lg bg-gray-200 flex items-center justify-center">
                                        <span className="text-4xl font-bold text-gray-700">{selectedConsultant.name.charAt(0)}</span>
                                    </div>

                                    {/* Profile Details */}
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-600">{selectedConsultant.bio}</p>
                                        <p className="mt-3"><strong>Expertise:</strong> {selectedConsultant.expertise.join(", ")}</p>
                                        <p className="mt-1"><strong>Languages:</strong> {selectedConsultant.languages.join(", ")}</p>
                                        <p className="mt-1"><strong>Experience:</strong> {selectedConsultant.experience} years</p>
                                    </div>
                                </div>
                            </DialogPanel>
                        </Dialog>
                    )}
                    <Button variant="outline" className="mt-6 mx-auto block border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800]/10">
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

