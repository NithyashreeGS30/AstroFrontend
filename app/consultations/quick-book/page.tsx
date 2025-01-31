"use client"

import { Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function QuickBookPage() {
  return (
    <Card className="max-w-lg bg-white p-6 shadow-md rounded-lg">
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-left text-sm font-medium text-gray-600">Consultation</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Jyotisa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jyotisa">Jyotisa</SelectItem>
              <SelectItem value="vastu">Vastu</SelectItem>
              <SelectItem value="muhurtha">Muhurtha</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="mb-2 block text-left text-sm font-medium text-gray-600">Consultant</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Consultant" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="acharya">Acharya Ashutosh ji</SelectItem>
              <SelectItem value="milind">Acharya Milind ji</SelectItem>
              <SelectItem value="achal">Achal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-left text-sm font-medium text-gray-600">Date</label>
            <div className="relative">
              <Input type="date" className="pl-10" />
              <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-left text-sm font-medium text-gray-600">Time</label>
            <div className="relative">
              <Input type="time" className="pl-10" />
              <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-2 text-sm text-gray-600">ONLINE | 30 MIN</div>
          <div className="mb-4 text-xl font-semibold text-gray-900">₹2499</div>
          <Link href="/consultations/book" className="mt-4 inline-block text-[#FFB800] hover:text-[#FFB800]/80">
            <Button className="w-full bg-[#FFB800] text-black hover:bg-[#FFB800]/90">BOOK NOW →</Button></Link>
        </div>
      </div>
    </Card>
  )
}
