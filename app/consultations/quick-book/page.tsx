"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function QuickBookPage({ consultant }) {
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  // Reset state every time the modal is reopened
  useEffect(() => {
    setSelectedConsultation(null);
    setPrice("");
    setDuration("");
  }, [consultant]);

  if (!consultant) {
    return (
      <Card className="max-w-lg bg-white p-6 shadow-md rounded-lg">
        <p className="text-center text-gray-600">Please select a consultant to proceed with booking.</p>
      </Card>
    );
  }

  return (
    <Card className="max-w-lg bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Booking</h2>

      {/* Consultant Name */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">Consultant</label>
        <div className="p-2 border rounded-md bg-gray-100 text-gray-700">{consultant.name}</div>
      </div>

      {/* Consultation Type Dropdown */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">Consultation Type</label>
        <Select
          onValueChange={(value) => {
            const selectedType = consultant.consultationTypes.find((type) => type.id === value);
            if (selectedType) {
              setSelectedConsultation(selectedType);
              setPrice(selectedType.price);
              setDuration(selectedType.duration);
            }
          }}
        >
          <SelectTrigger className="w-[250px] border border-gray-300 rounded-md py-2 px-3">
            <SelectValue placeholder="Select Consultation Type" />
          </SelectTrigger>
          <SelectContent className="absolute z-50 bg-white shadow-lg rounded-md w-[250px]">
            {consultant.consultationTypes?.map((type) => (
              <SelectItem key={type.id} value={type.id} className="p-2 hover:bg-gray-100">
                {type.name} - ₹{type.price} ({type.duration} min)
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

      </div>

      {/* Date & Time Selection */}
      <div className="grid gap-4 md:grid-cols-2 mb-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Date</label>
          <div className="relative">
            <Input type="date" className="pl-10 border-gray-300 rounded-md" />
            <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Time</label>
          <div className="relative">
            <Input type="time" className="pl-10 border-gray-300 rounded-md" />
            <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Price & Duration Display */}
      <div className="text-center mt-4">
        <div className="mb-2 text-sm text-gray-600">
          {duration ? `ONLINE | ${duration} MIN` : "Select a consultation type"}
        </div>
        <div className="mb-4 text-xl font-semibold text-gray-900">
          {price ? `₹${price}` : "₹—"}
        </div>
        <Link href="/consultations/book">
          <Button
            className={`w-full ${price ? "bg-[#FFB800] text-black hover:bg-[#FFB800]/90" : "bg-gray-400 text-white cursor-not-allowed"
              } py-3 rounded-lg text-lg font-medium`}
            disabled={!price}
          >
            BOOK NOW →
          </Button>
        </Link>
      </div>
    </Card>
  );
}
