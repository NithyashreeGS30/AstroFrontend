"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function ConsultationPaymentPage() {
    const router = useRouter()

    return (
        <div className="relative min-h-screen bg-[url('/background-space.jpg')] bg-cover bg-center text-white">
            {/* Navigation */}
            <nav className="flex items-center justify-between p-6">
                <div className="h-10 w-32">
                    <Image src="/logo.png" alt="JyotisVastu Academy" width={128} height={40} />
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-yellow-500">Consultations</a>
                    <a href="#" className="hover:text-yellow-500">Courses</a>
                    <a href="#" className="hover:text-yellow-500">FAQ</a>
                    <a href="#" className="hover:text-yellow-500">About Us</a>
                    <a href="#" className="hover:text-yellow-500">Contact Us</a>
                </div>
            </nav>

            {/* Payment Card */}
            <div className="container mx-auto flex justify-center py-12">
                <Card className="w-[900px] bg-white text-black rounded-lg shadow-xl p-8 flex">
                    {/* Payment Section */}
                    <div className="w-1/2 flex flex-col items-center justify-center border-r pr-8">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Consult with an Expert</h2>
                        <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-semibold rounded-lg">
                            Payment Gateway
                        </div>
                        <p className="mt-6 text-lg font-semibold">₹2400</p>
                        <Button className="mt-4 w-full bg-[#FFB800] text-black hover:bg-[#E6A500]" onClick={() => router.push("/confirmation")}>
                            CONFIRM & PAY →
                        </Button>
                    </div>

                    {/* Consultation Details */}
                    <div className="w-1/2 pl-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold">A</div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Hi, Priya Sharma</h3>
                                <p className="text-gray-600">You’re almost set with your consultation!</p>
                            </div>
                        </div>

                        <div className="space-y-2 text-gray-700">
                            <p><span className="font-semibold">Consultation:</span> 30 mins Jyotisa</p>
                            <p><span className="font-semibold">Consultant:</span> Acharya Ashutosh Chaawlla</p>
                            <p><span className="font-semibold">Date & Time:</span> 23 June 24, 10:30 AM IST</p>
                            <p><span className="font-semibold">Duration:</span> 30 Min</p>
                        </div>

                        <p className="mt-6 text-sm text-gray-500">
                            <span className="font-semibold">Note:</span> You will receive the zoom link for the consultation on your Email ID.
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    )
}
