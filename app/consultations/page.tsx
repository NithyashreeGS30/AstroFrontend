import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Footer from "@/components/ui/footer"

const consultations = [
  {
    title: "30 min Jyotisa Counselling",
    priceRange: "₹2499 - ₹4999",
    color: "bg-orange-100",
    icon: "🕉️",
  },
  {
    title: "General Muhurtha",
    priceRange: "₹2499 - ₹4999",
    color: "bg-pink-100",
    icon: "⏰",
  },
  {
    title: "Compatibility",
    priceRange: "₹2499 - ₹4999",
    color: "bg-blue-100",
    icon: "❤️",
  },
  {
    title: "Vastu Guidance",
    priceRange: "₹2499 - ₹4999",
    color: "bg-orange-100",
    icon: "🏠",
  },
  {
    title: "Detailed Birth Chart Reading",
    priceRange: "₹2499 - ₹4999",
    color: "bg-blue-100",
    icon: "🌟",
  },
  {
    title: "Wedding Muhurtha",
    priceRange: "₹2499 - ₹4999",
    color: "bg-pink-100",
    icon: "💑",
  },
  {
    title: "Vastu Commercial",
    priceRange: "₹2499 - ₹4999",
    color: "bg-orange-100",
    icon: "🏢",
  },
]

export default function ConsultationsPage() {
  return (
    <div className="min-h-screen bg-[#020B2D]">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4">
        <div className="h-10 w-32 bg-white/20" />
        <div className="flex gap-4 text-white">
          <a href="#">Consultations</a>
          <a href="#">Courses</a>
          <a href="#">FAQ</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative mb-12 text-center text-white">
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%209.56.30%E2%80%AFAM-xQQqiLeZMmgylNNg7E6ljZ0XVhj9q1.png')] bg-cover bg-center opacity-10" />
        <div className="relative py-20">
          <h1 className="mb-4 text-5xl font-bold">Consultations</h1>
          <p className="text-lg text-white/80">1-1 Private reading with the most authentic Jyotis & Vastu experts.</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          {/* Sidebar Filters */}
          <aside className="space-y-6">
            <h2 className="text-lg font-semibold text-white">Apply Filter</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="consultant" className="border-white/20">
                <AccordionTrigger className="text-white hover:no-underline">Consultant</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-white/80">
                    <Label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-white/20" /> Achal
                    </Label>
                    <Label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-white/20" /> Acharya Ashutosh ji
                    </Label>
                    <Label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-white/20" /> Acharya Milind ji
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="consult-within" className="border-white/20">
                <AccordionTrigger className="text-white hover:no-underline">Consult-within</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-white/80">
                    <Label className="flex items-center gap-2">
                      <input type="radio" name="consult-within" /> Tomorrow
                    </Label>
                    <Label className="flex items-center gap-2">
                      <input type="radio" name="consult-within" /> In 2 Days
                    </Label>
                    <Label className="flex items-center gap-2">
                      <input type="radio" name="consult-within" /> In 1 Week
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="price" className="border-white/20">
                <AccordionTrigger className="text-white hover:no-underline">Price Range</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-white/80">
                    <Label className="flex items-center gap-2">
                      <input type="radio" name="price" /> High to low
                    </Label>
                    <Label className="flex items-center gap-2">
                      <input type="radio" name="price" /> Low to high
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="type" className="border-white/20">
                <AccordionTrigger className="text-white hover:no-underline">Consultation Type</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-white/80">
                    <Label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-white/20" /> All
                    </Label>
                    <Label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-white/20" /> Jyotisa
                    </Label>
                    <Label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-white/20" /> Vastu
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </aside>

          {/* Main Content */}
          <main>
            <div className="mb-8 flex items-center gap-4">
              <div className="relative flex-1">
                <Input placeholder="Search..." className="bg-white/10 pl-10 text-white placeholder:text-white/60" />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
              </div>
              <div className="h-10 w-10 rounded-full bg-white/20" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {consultations.map((consultation, index) => (
                <Card key={index} className="overflow-hidden bg-white p-6">
                  <div
                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${consultation.color} text-2xl`}
                  >
                    {consultation.icon}
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900">{consultation.title}</h3>
                  <p className="mb-4 text-sm text-gray-600">{consultation.priceRange}</p>
                  <Link href="/consultations/book">
                    <Button className="w-full bg-[#FFB800] text-black hover:bg-[#FFB800]/90">Book Now</Button>
                  </Link>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

