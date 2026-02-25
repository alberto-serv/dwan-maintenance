"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, CheckCircle2, Award, Clock, Shield } from "lucide-react";

export default function CustomerInfo() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    elevatorCount: "",
    preferredDate: "",
    preferredTime: "",
    source: "",
    brands: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in sessionStorage
    sessionStorage.setItem("customerInfo", JSON.stringify(formData));
    // Navigate to confirmation page
    router.push("/confirmation");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button onClick={() => router.push("/")} className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/logo.webp"
                alt="Dwan Elevator Co."
                width={80}
                height={80}
                className="w-auto h-16"
              />
            </button>
            <a href="tel:4154651672" className="flex items-center gap-2 text-[#EFBF04] hover:text-[#EFBF04]/80 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(415) 465-1672</span>
            </a>
          </div>
        </div>
      </header>

      {/* Two Column Layout */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div>
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                  Get Your Free Assessment
                </h1>
                <p className="text-gray-600 mb-8">
                  Tell us about your building and we'll be in touch within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information Section */}
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-1 pb-3 border-b-2 border-[#EFBF04]">
                      Contact Information
                    </h3>
                    <div className="space-y-6 mt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold mb-2">Name *</label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Smith"
                          />
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-sm font-semibold mb-2">Company *</label>
                          <Input
                            id="company"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email *</label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@company.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone *</label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Building Information Section */}
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-1 pb-3 border-b-2 border-[#EFBF04]">
                      Building Information
                    </h3>
                    <div className="space-y-6 mt-6">
                      <div>
                        <label htmlFor="addressLine1" className="block text-sm font-semibold mb-2">Street Address *</label>
                        <Input
                          id="addressLine1"
                          required
                          value={formData.addressLine1}
                          onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                          placeholder="123 Main Street"
                        />
                      </div>

                      <div>
                        <label htmlFor="addressLine2" className="block text-sm font-semibold mb-2">Address Line 2 (Optional)</label>
                        <Input
                          id="addressLine2"
                          value={formData.addressLine2}
                          onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                          placeholder="Suite 100, Floor 5, etc."
                        />
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label htmlFor="city" className="block text-sm font-semibold mb-2">City *</label>
                          <Input
                            id="city"
                            required
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            placeholder="San Francisco"
                          />
                        </div>

                        <div>
                          <label htmlFor="state" className="block text-sm font-semibold mb-2">State *</label>
                          <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="CA">California</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label htmlFor="zip" className="block text-sm font-semibold mb-2">ZIP Code *</label>
                          <Input
                            id="zip"
                            required
                            value={formData.zip}
                            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                            placeholder="94103"
                            maxLength={5}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="elevatorCount" className="block text-sm font-semibold mb-2">Number of Elevators *</label>
                        <Select value={formData.elevatorCount} onValueChange={(value) => setFormData({ ...formData, elevatorCount: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2-5">2-5</SelectItem>
                            <SelectItem value="6-10">6-10</SelectItem>
                            <SelectItem value="11+">11+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-semibold mb-2">Preferred Date *</label>
                      <Input
                        id="preferredDate"
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-semibold mb-2">Preferred Time *</label>
                      <Select value={formData.preferredTime} onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8:00 AM">8:00 AM</SelectItem>
                          <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                          <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                          <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                          <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                          <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                          <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                          <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                          <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                          <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Information Section */}
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-1 pb-3 border-b-2 border-[#EFBF04]">
                      Additional Information
                    </h3>
                    <div className="space-y-6 mt-6">
                      <div>
                        <label htmlFor="source" className="block text-sm font-semibold mb-2">How did you hear about us? *</label>
                        <Select value={formData.source} onValueChange={(value) => setFormData({ ...formData, source: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="google">Google</SelectItem>
                            <SelectItem value="referral">Referral</SelectItem>
                            <SelectItem value="event">Industry Event</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full text-xl font-bold h-14">
                      Submit Request
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column - Summary/Info */}
            <div className="lg:sticky lg:top-32 h-fit">
              <div className="bg-black text-white rounded-lg p-8 mb-6">
                <h2 className="text-2xl font-heading font-bold mb-6 text-[#EFBF04]">
                  Your First Year is Free
                </h2>
                <p className="text-gray-300 mb-8">
                  Switch to Dwan Elevator and pay nothing for 12 months of full-service commercial elevator maintenance.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#EFBF04] rounded-full p-2 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Monthly Maintenance</h3>
                      <p className="text-sm text-gray-400">Union-certified technicians visit monthly</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#EFBF04] rounded-full p-2 flex-shrink-0">
                      <Shield className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Cal/OSHA Compliance</h3>
                      <p className="text-sm text-gray-400">Full inspection prep and compliance support</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#EFBF04] rounded-full p-2 flex-shrink-0">
                      <Clock className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Fast Response</h3>
                      <p className="text-sm text-gray-400">Same-day response, 2-hour emergency target</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-6">
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Need help right away?</strong>
                </p>
                <a
                  href="tel:4154651672"
                  className="flex items-center gap-2 text-black font-semibold hover:text-[#EFBF04] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(415) 465-1672</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
