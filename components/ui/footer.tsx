import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
    return (
        <footer className="bg-[#020B2D] text-white py-12">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12 px-6">

                {/* Logo & About Section */}
                <div className="md:w-1/4">
                    <div className="mb-4 h-10 w-32 bg-white/20"></div>
                    <p className="text-sm text-white/80 leading-relaxed">
                        We are the official source of all things spiritual and the most authentic source of Vedic knowledge.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="md:w-1/5">
                    <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/courses">Courses</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Legal Section */}
                <div className="md:w-1/5">
                    <h4 className="mb-4 font-semibold text-white">Legal</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/terms-of-use">Terms of Use</Link></li>
                        <li><Link href="/cookie-policy">Cookie Policy</Link></li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div className="md:w-1/4">
                    <h4 className="mb-4 font-semibold text-white">Newsletter</h4>
                    <p className="mb-2 text-sm text-white/80">Subscribe to our newsletter</p>
                    <div className="flex flex-col gap-2">
                        <Input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full rounded-md bg-white/10 px-4 py-2 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
                        />
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-md bg-white/10 px-4 py-2 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
                        />
                        <Button className="w-full bg-[#FFB800] text-black font-semibold px-4 py-2 rounded-md hover:bg-[#FFB800]/90">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Section with Login Button */}
            <div className="mt-12 border-t border-white/10 pt-6 flex justify-between items-center px-6 text-sm text-white/60">
                <p>© {new Date().getFullYear()} JyotisVastu Academy. All rights reserved.</p>
                <Button className="bg-white/10 px-4 py-2 rounded-md text-white hover:bg-white/20">
                    Login
                </Button>
            </div>
        </footer>
    )
}
