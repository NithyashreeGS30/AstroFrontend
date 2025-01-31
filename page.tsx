import { Card, Button } from "@nextui-org/react"
import Link from "next/link"

function ConsultationCard({ consultation, index }: any) {
  return (
    <Card key={index} className="overflow-hidden bg-white p-4">
      <div className="mb-4 h-12 w-12 rounded-full bg-[#FFE4D6] p-3 text-2xl">{consultation.icon}</div>
      <h4 className="mb-2 font-medium text-gray-900">{consultation.title}</h4>
      <div className="mb-1 text-sm text-gray-600">Time: {consultation.time}</div>
      <div className="mb-4 text-sm text-gray-600">Price: ₹{consultation.price}</div>
      <Link href="/consultations/quick-book">
        <Button className="w-full bg-[#FFB800] text-black hover:bg-[#FFB800]/90">Book Now</Button>
      </Link>
    </Card>
  )
}

export default ConsultationCard

