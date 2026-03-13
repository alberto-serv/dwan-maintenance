"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, CheckCircle2 } from "lucide-react";

const problems = [
  { id: "doors", label: "Doors not closing", range: "$900–$1,800" },
  { id: "stuck", label: "Elevator stuck", range: "$1,200–$3,500" },
  { id: "unresponsive", label: "Elevator not responding", range: "$1,500–$4,000" },
  { id: "shutdowns", label: "Random shutdowns", range: "$1,000–$3,000" },
  { id: "leveling", label: "Leveling issues", range: "$900–$2,500" },
  { id: "other", label: "Other", range: "Varies" },
];

export default function RepairPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // Step 1: Problem
  const [selectedProblem, setSelectedProblem] = useState("");
  const [otherDescription, setOtherDescription] = useState("");

  // Step 2: Elevator info
  const [elevatorInfo, setElevatorInfo] = useState({
    manufacturer: "",
    yearInstalled: "",
    type: "",
    stops: "",
  });

  // Step 3: Booking
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const problemProfile = problems.find((p) => p.id === selectedProblem);

  const canProceed = () => {
    switch (step) {
      case 1: return !!selectedProblem && (selectedProblem !== "other" || !!otherDescription);
      case 2: return true; // elevator info is optional
      case 3: return !!booking.name && !!booking.email && !!booking.address;
      default: return false;
    }
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    sessionStorage.setItem("repairData", JSON.stringify({
      problem: problemProfile?.label || "Other",
      problemRange: problemProfile?.range || "Varies",
      otherDescription: selectedProblem === "other" ? otherDescription : "",
      elevatorInfo,
      ...booking,
    }));
    router.push("/repair/confirmation");
  };

  const stepLabels = ["Problem", "Elevator Info", "Book Visit"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button onClick={() => router.push("/")} className="hover:opacity-80 transition-opacity">
              <Image src="/images/logo.webp" alt="Dwan Elevator Co." width={80} height={80} className="w-auto h-12" />
            </button>
            <a href="tel:4154651672" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold text-sm">(415) 465-1672</span>
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {stepLabels.map((label, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-1 ${
                    step > idx + 1 ? "bg-[#EFBF04] text-black" :
                    step === idx + 1 ? "bg-gray-900 text-white" :
                    "bg-gray-200 text-gray-400"
                  }`}>
                    {step > idx + 1 ? "✓" : idx + 1}
                  </div>
                  <span className={`text-[10px] font-medium hidden sm:block ${step === idx + 1 ? "text-gray-900" : "text-gray-400"}`}>{label}</span>
                </div>
              ))}
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#EFBF04] transition-all duration-300 rounded-full" style={{ width: `${(step / 3) * 100}%` }} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">

            {/* ── Step 1: Problem Selection ── */}
            {step === 1 && (
              <div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">What's the problem?</h1>
                <p className="text-gray-500 text-sm mb-8">Select the issue you're experiencing. We'll provide a repair estimate.</p>

                <div className="space-y-3">
                  {problems.map((problem) => (
                    <button
                      key={problem.id}
                      onClick={() => setSelectedProblem(problem.id)}
                      className={`w-full flex items-center justify-between p-5 rounded-xl border-2 text-left transition-all ${
                        selectedProblem === problem.id
                          ? "border-[#EFBF04] bg-[#EFBF04]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="font-semibold text-gray-900">{problem.label}</span>
                      <span className="text-sm font-bold text-gray-400">{problem.range}</span>
                    </button>
                  ))}
                </div>

                {selectedProblem === "other" && (
                  <div className="mt-4">
                    <label className="block text-sm font-semibold mb-1.5">Describe the problem *</label>
                    <Input
                      value={otherDescription}
                      onChange={(e) => setOtherDescription(e.target.value)}
                      placeholder="Tell us what's happening with your elevator"
                    />
                  </div>
                )}
              </div>
            )}

            {/* ── Step 2: Elevator Info ── */}
            {step === 2 && (
              <div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">Elevator Information</h1>
                <p className="text-gray-500 text-sm mb-8">Help us prepare for your visit. All fields are optional.</p>

                <div className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-1.5">Manufacturer</label>
                      <Input
                        value={elevatorInfo.manufacturer}
                        onChange={(e) => setElevatorInfo({ ...elevatorInfo, manufacturer: e.target.value })}
                        placeholder="e.g. Otis, ThyssenKrupp"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5">Year Installed</label>
                      <Input
                        value={elevatorInfo.yearInstalled}
                        onChange={(e) => setElevatorInfo({ ...elevatorInfo, yearInstalled: e.target.value })}
                        placeholder="e.g. 2015"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-1.5">Elevator Type</label>
                      <Select value={elevatorInfo.type} onValueChange={(val) => setElevatorInfo({ ...elevatorInfo, type: val })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="traction">Traction</SelectItem>
                          <SelectItem value="hydraulic">Hydraulic</SelectItem>
                          <SelectItem value="mrl">Machine Room-Less (MRL)</SelectItem>
                          <SelectItem value="freight">Freight</SelectItem>
                          <SelectItem value="unknown">Not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5">Number of Stops</label>
                      <Input
                        type="number"
                        min={2}
                        value={elevatorInfo.stops}
                        onChange={(e) => setElevatorInfo({ ...elevatorInfo, stops: e.target.value })}
                        placeholder="e.g. 5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Step 3: Book Visit ── */}
            {step === 3 && (
              <div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">Book a Repair Visit</h1>
                <p className="text-gray-500 text-sm mb-2">A Dwan technician will come to diagnose and repair your elevator.</p>

                {problemProfile && (
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Estimated Repair Cost</p>
                        <p className="font-bold text-gray-900">{problemProfile.label}</p>
                      </div>
                      <p className="text-lg font-bold text-gray-900">{problemProfile.range}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-1.5">Full Name *</label>
                      <Input
                        id="name"
                        required
                        value={booking.name}
                        onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-1.5">Phone</label>
                      <Input
                        id="phone"
                        type="tel"
                        value={booking.phone}
                        onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                        placeholder="(415) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-1.5">Email *</label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={booking.email}
                      onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold mb-1.5">Building Address *</label>
                    <Input
                      id="address"
                      required
                      value={booking.address}
                      onChange={(e) => setBooking({ ...booking, address: e.target.value })}
                      placeholder="123 Main Street, San Francisco, CA"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors"
                >
                  &larr; Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="px-6 h-11 font-bold bg-[#EFBF04] text-black hover:bg-[#d4aa03] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="px-6 h-11 font-bold bg-[#EFBF04] text-black hover:bg-[#d4aa03] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Book Repair Visit
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-sm tracking-[0.15em] text-gray-700 mb-0.5">DWAN ELEVATOR CO.</p>
          <p className="text-xs text-gray-400">Serving California Since 1919</p>
        </div>
      </footer>
    </div>
  );
}
