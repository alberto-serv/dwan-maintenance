"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Shield, CreditCard, CheckCircle2 } from "lucide-react";

const planDetails: Record<string, { name: string; price: string; annual: string; desc: string }> = {
  "Standard Protection": {
    name: "Standard Protection",
    price: "$400–$800/mo per elevator",
    annual: "$4,800–$9,600+ annually",
    desc: "Predictable Maintenance. Repairs When Needed.",
  },
  "Full Coverage": {
    name: "Full Coverage",
    price: "$600–$1,200+/mo per elevator",
    annual: "$7,200–$14,400+ annually",
    desc: "Maximum Uptime. Budget Certainty.",
  },
};

export default function Checkout() {
  return (
    <Suspense>
      <CheckoutContent />
    </Suspense>
  );
}

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan") || "Standard Protection";
  const plan = planDetails[planParam] || planDetails["Standard Protection"];

  const [formData, setFormData] = useState({
    // Customer info
    name: "",
    email: "",
    phone: "",
    // Property info
    propertyAddress: "",
    propertyAddress2: "",
    propertyCity: "",
    propertyState: "",
    propertyZip: "",
    elevatorCount: "",
    manufacturer: "",
    yearInstalled: "",
    elevatorType: "",
    numberOfStops: "",
    // Payment
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem(
      "checkoutData",
      JSON.stringify({ ...formData, plan: plan.name })
    );
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

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <button
            onClick={() => router.push("/")}
            className="text-gray-600 hover:text-gray-900 mb-8 font-medium transition-colors"
          >
            &larr; Back to Plans
          </button>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Form (2/3 width) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                  Complete Your Order
                </h1>
                <p className="text-gray-600 mb-8">
                  Fill in your details below to get started with your {plan.name} plan.
                </p>

                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Customer Information */}
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-1 pb-3 border-b-2 border-[#EFBF04]">
                      Customer Information
                    </h3>
                    <div className="space-y-6 mt-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name *</label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="John Smith"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email *</label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
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
                            onChange={(e) => handleChange("phone", e.target.value)}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Property Information */}
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-1 pb-3 border-b-2 border-[#EFBF04]">
                      Property Information
                    </h3>
                    <div className="space-y-6 mt-6">
                      <div>
                        <label htmlFor="propertyAddress" className="block text-sm font-semibold mb-2">Property Address *</label>
                        <Input
                          id="propertyAddress"
                          required
                          value={formData.propertyAddress}
                          onChange={(e) => handleChange("propertyAddress", e.target.value)}
                          placeholder="123 Main Street"
                        />
                      </div>

                      <div>
                        <label htmlFor="propertyAddress2" className="block text-sm font-semibold mb-2">Address Line 2 (Optional)</label>
                        <Input
                          id="propertyAddress2"
                          value={formData.propertyAddress2}
                          onChange={(e) => handleChange("propertyAddress2", e.target.value)}
                          placeholder="Suite 100, Floor 5, etc."
                        />
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label htmlFor="propertyCity" className="block text-sm font-semibold mb-2">City *</label>
                          <Input
                            id="propertyCity"
                            required
                            value={formData.propertyCity}
                            onChange={(e) => handleChange("propertyCity", e.target.value)}
                            placeholder="San Francisco"
                          />
                        </div>
                        <div>
                          <label htmlFor="propertyState" className="block text-sm font-semibold mb-2">State *</label>
                          <Select value={formData.propertyState} onValueChange={(value) => handleChange("propertyState", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="CA">California</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label htmlFor="propertyZip" className="block text-sm font-semibold mb-2">ZIP Code *</label>
                          <Input
                            id="propertyZip"
                            required
                            value={formData.propertyZip}
                            onChange={(e) => handleChange("propertyZip", e.target.value)}
                            placeholder="94103"
                            maxLength={5}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Elevator Details */}
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-1 pb-3 border-b-2 border-[#EFBF04]">
                      Elevator Details
                    </h3>
                    <div className="space-y-6 mt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="elevatorCount" className="block text-sm font-semibold mb-2">Number of Elevators *</label>
                          <Select value={formData.elevatorCount} onValueChange={(value) => handleChange("elevatorCount", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5">5</SelectItem>
                              <SelectItem value="6-10">6–10</SelectItem>
                              <SelectItem value="11+">11+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label htmlFor="manufacturer" className="block text-sm font-semibold mb-2">Manufacturer</label>
                          <Input
                            id="manufacturer"
                            value={formData.manufacturer}
                            onChange={(e) => handleChange("manufacturer", e.target.value)}
                            placeholder="e.g. Otis, ThyssenKrupp, KONE"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label htmlFor="yearInstalled" className="block text-sm font-semibold mb-2">Year Installed</label>
                          <Input
                            id="yearInstalled"
                            value={formData.yearInstalled}
                            onChange={(e) => handleChange("yearInstalled", e.target.value)}
                            placeholder="e.g. 2005"
                            maxLength={4}
                          />
                        </div>

                        <div>
                          <label htmlFor="elevatorType" className="block text-sm font-semibold mb-2">Type</label>
                          <Select value={formData.elevatorType} onValueChange={(value) => handleChange("elevatorType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Traction">Traction</SelectItem>
                              <SelectItem value="Hydraulic">Hydraulic</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label htmlFor="numberOfStops" className="block text-sm font-semibold mb-2">Number of Stops</label>
                          <Select value={formData.numberOfStops} onValueChange={(value) => handleChange("numberOfStops", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5">5</SelectItem>
                              <SelectItem value="6">6</SelectItem>
                              <SelectItem value="7">7</SelectItem>
                              <SelectItem value="8">8</SelectItem>
                              <SelectItem value="9">9</SelectItem>
                              <SelectItem value="10">10</SelectItem>
                              <SelectItem value="11+">11+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-1 pb-3 border-b-2 border-[#EFBF04] flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-[#EFBF04]" />
                      Payment Information
                    </h3>
                    <p className="text-sm text-gray-500 mt-3 mb-6">Your card will not be charged until your service agreement is finalized.</p>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-semibold mb-2">Card Number *</label>
                        <Input
                          id="cardNumber"
                          required
                          value={formData.cardNumber}
                          onChange={(e) => handleChange("cardNumber", e.target.value)}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="cardExpiry" className="block text-sm font-semibold mb-2">Expiration Date *</label>
                          <Input
                            id="cardExpiry"
                            required
                            value={formData.cardExpiry}
                            onChange={(e) => handleChange("cardExpiry", e.target.value)}
                            placeholder="MM / YY"
                            maxLength={7}
                          />
                        </div>
                        <div>
                          <label htmlFor="cardCvc" className="block text-sm font-semibold mb-2">CVC *</label>
                          <Input
                            id="cardCvc"
                            required
                            value={formData.cardCvc}
                            onChange={(e) => handleChange("cardCvc", e.target.value)}
                            placeholder="123"
                            maxLength={4}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full text-xl font-bold h-14 bg-[#EFBF04] text-black hover:bg-[#d4aa03]">
                      Complete Order
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      By completing your order, you agree to our terms of service. A Dwan Elevator specialist will confirm your plan details within 24 hours.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:sticky lg:top-32 h-fit">
              <div className="bg-black text-white rounded-lg p-8 mb-6">
                <h2 className="text-sm font-bold text-[#EFBF04] uppercase tracking-widest mb-4">Your Plan</h2>
                <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.desc}</p>

                <div className="border-t border-white/10 pt-6 mb-6">
                  <p className="text-2xl font-bold text-white mb-1">{plan.price}</p>
                  <p className="text-sm text-gray-400">{plan.annual}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EFBF04] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">Scheduled preventive maintenance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EFBF04] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">24/7 emergency response</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EFBF04] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">California inspection coordination</span>
                  </div>
                  {plan.name === "Full Coverage" && (
                    <>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#EFBF04] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">Most replacement parts covered</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#EFBF04] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">Priority response</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#EFBF04] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">Licensed & Insured</p>
                    <p className="text-xs text-gray-500">CA License #140423 (C-11)</p>
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

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-sm tracking-[0.15em] mb-1">DWAN ELEVATOR CO.</p>
          <p className="text-xs text-gray-500 mb-4">Serving California Since 1919</p>
          <div className="text-xs text-gray-500 space-y-1">
            <p>California Contractor License #140423 (C-11 Elevator) • Cal/OSHA Certified</p>
            <p className="mt-3 text-gray-600">© 2026 Dwan Elevator Company</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
