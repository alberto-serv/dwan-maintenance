"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, CheckCircle2, Video, MapPin } from "lucide-react";

// ── Data Models ──────────────────────────────────────────────────────────────

const buildingHeights = [
  { id: "highrise", label: "High-Rise", desc: "20+ floors", elevatorType: "gearless", defaultStops: 10 },
  { id: "midrise", label: "Mid-Rise", desc: "5–20 floors", elevatorType: "mrl", defaultStops: 5 },
  { id: "lowrise", label: "Low-Rise", desc: "2–5 floors", elevatorType: "hydraulic", defaultStops: 3 },
  { id: "residential", label: "Residential", desc: "Private home or duplex", elevatorType: "vpl", defaultStops: 2 },
];

const elevatorTypes = [
  { id: "hydraulic",  label: "Hydraulic",        base: 45000,  perStop: 15000, maxStops: 6,  desc: "Low-rise, heavy duty" },
  { id: "mrl",        label: "MRL Traction",     base: 75000,  perStop: 20000, maxStops: 12, desc: "Mid-rise, energy efficient" },
  { id: "gearless",   label: "Gearless Traction", base: 175000, perStop: 35000, maxStops: 40, desc: "High-rise, high-speed" },
  { id: "vpl",        label: "VPL (Accessibility)", base: 12000, perStop: 3000, maxStops: 2, desc: "ADA compliance, small footprint" },
];

const premiumFeatures = [
  { id: "dispatch",  label: "Smart Dispatch (AI-optimized flow)", cost: 15000 },
  { id: "finishes",  label: "Glass / Custom Finishes",           cost: 12000 },
  { id: "ups",       label: "Backup UPS (Emergency Power)",      cost: 8000 },
  { id: "seismic",   label: "Seismic / Earthquake Safety Kit",   cost: 10000 },
];

// ── Pricing Algorithm ────────────────────────────────────────────────────────

function calculateQuote(
  typeId: string,
  stops: number,
  isRetrofit: boolean,
  isHeavy: boolean,
  features: string[]
) {
  const type = elevatorTypes.find((t) => t.id === typeId);
  if (!type) return { min: 0, max: 0, maintenance: { min: 0, max: 0 } };

  let base = type.base;
  if (isHeavy) base *= 1.15;

  const travel = (stops - 1) * type.perStop;
  let subtotal = base + travel;

  const featureCost = premiumFeatures
    .filter((f) => features.includes(f.id))
    .reduce((sum, f) => sum + f.cost, 0);
  subtotal += featureCost;

  if (isRetrofit) {
    subtotal = (subtotal + 30000) * 1.2;
  }

  return {
    min: Math.round(subtotal * 0.9),
    max: Math.round(subtotal * 1.15),
    maintenance: {
      min: Math.round(subtotal * 0.04),
      max: Math.round(subtotal * 0.06),
    },
  };
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

// ── Component ────────────────────────────────────────────────────────────────

export default function InstallationQuote() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // Step 1: Building Height + Type + Capacity
  const [selectedHeight, setSelectedHeight] = useState("");
  const [buildingType, setBuildingType] = useState<"new" | "retrofit" | "">("");
  const [capacity, setCapacity] = useState<"standard" | "heavy" | "">("");
  // Step 2: Features
  const [features, setFeatures] = useState<string[]>([]);
  // Step 3: Maintenance Plan
  const [maintenancePlan, setMaintenancePlan] = useState("");
  // Step 4: Quote (display only)
  // Step 5: Booking
  const [consultationType, setConsultationType] = useState<"video" | "visit" | "">("");
  const [booking, setBooking] = useState({ name: "", company: "", email: "", phone: "", address: "" });

  // Derived
  const heightProfile = buildingHeights.find((h) => h.id === selectedHeight);
  const selectedType = heightProfile?.elevatorType || "";
  const typeProfile = elevatorTypes.find((t) => t.id === selectedType);
  const stopsNum = heightProfile?.defaultStops || 2;

  const quote = calculateQuote(
    selectedType,
    stopsNum,
    buildingType === "retrofit",
    capacity === "heavy",
    features
  );

  const videoDiscount = 400;

  const canProceed = () => {
    switch (step) {
      case 1: return !!selectedHeight && !!buildingType && !!capacity;
      case 2: return true;
      case 3: return true;
      case 4: return true;
      case 5: return !!consultationType && !!booking.name && !!booking.email && !!booking.address;
      default: return false;
    }
  };

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    sessionStorage.setItem("installationData", JSON.stringify({
      buildingHeight: heightProfile?.label,
      type: typeProfile?.label,
      landings: stopsNum,
      buildingType,
      capacity,
      features: premiumFeatures.filter((f) => features.includes(f.id)).map((f) => f.label),
      maintenancePlan: maintenancePlan || "None selected",
      consultationType,
      videoDiscount: consultationType === "video" ? videoDiscount : 0,
      quote,
      ...booking,
    }));
    router.push("/installation/confirmation");
  };

  const toggleFeature = (id: string) => {
    setFeatures((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);
  };

  const stepLabels = ["Building", "Features", "Maintenance", "Quote", "Book"];

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
        <div className="max-w-4xl mx-auto">
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
              <div className="h-full bg-[#EFBF04] transition-all duration-300 rounded-full" style={{ width: `${(step / 5) * 100}%` }} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">

            {/* ── Step 1: Building Height + Type + Capacity ── */}
            {step === 1 && (
              <div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">Tell us about your building</h1>
                <p className="text-gray-500 text-sm mb-8">This determines the right elevator system for your project.</p>

                <div className="mb-8">
                  <label className="block text-sm font-semibold mb-3">Building Height *</label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {buildingHeights.map((height) => {
                      const matchedType = elevatorTypes.find((t) => t.id === height.elevatorType);
                      return (
                        <button
                          key={height.id}
                          onClick={() => setSelectedHeight(height.id)}
                          className={`text-left p-6 rounded-xl border-2 transition-all ${
                            selectedHeight === height.id
                              ? "border-[#EFBF04] bg-[#EFBF04]/5 shadow-sm"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <h3 className="text-lg font-bold text-gray-900 mb-0.5">{height.label}</h3>
                          <p className="text-sm text-gray-400 mb-3">{height.desc}</p>
                          {matchedType && (
                            <p className="text-xs text-gray-500">
                              <span className="font-semibold text-gray-700">{matchedType.label}</span> · From {formatCurrency(matchedType.base)}
                            </p>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold mb-3">Building Type *</label>
                  <div className="grid grid-cols-2 gap-4">
                    {(["new", "retrofit"] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setBuildingType(t)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          buildingType === t
                            ? "border-[#EFBF04] bg-[#EFBF04]/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <p className="font-bold text-gray-900">{t === "new" ? "New Construction" : "Retrofit"}</p>
                        <p className="text-sm text-gray-500">{t === "new" ? "Building from scratch" : "Existing building"}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Capacity *</label>
                  <div className="grid grid-cols-2 gap-4">
                    {(["standard", "heavy"] as const).map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setCapacity(c)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          capacity === c
                            ? "border-[#EFBF04] bg-[#EFBF04]/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <p className="font-bold text-gray-900">{c === "standard" ? "Standard" : "Heavy Load"}</p>
                        <p className="text-sm text-gray-500">{c === "standard" ? "Up to 3,500 lbs" : "4,000 lbs+"}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── Step 2: Features ── */}
            {step === 2 && (
              <div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">Premium Features</h1>
                <p className="text-gray-500 text-sm mb-8">Optional add-ons for your installation.</p>

                <div className="space-y-3">
                  {premiumFeatures.map((feature) => (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => toggleFeature(feature.id)}
                      className={`w-full flex items-center justify-between p-5 rounded-xl border-2 text-left transition-all ${
                        features.includes(feature.id)
                          ? "border-[#EFBF04] bg-[#EFBF04]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                          features.includes(feature.id)
                            ? "bg-[#EFBF04] border-[#EFBF04]"
                            : "border-gray-300"
                        }`}>
                          {features.includes(feature.id) && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                          )}
                        </div>
                        <span className="font-semibold text-gray-900 text-sm">{feature.label}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-400">+{formatCurrency(feature.cost)}</span>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">All features are optional. You can skip this step.</p>
              </div>
            )}

            {/* ── Step 3: Maintenance Plan ── */}
            {step === 3 && (
              <div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">Add a Maintenance Plan</h1>
                <p className="text-gray-500 text-sm mb-8">Protect your new elevator from day one. Optional — you can discuss during your consultation.</p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Standard Protection */}
                  <button
                    onClick={() => setMaintenancePlan(maintenancePlan === "Standard Protection" ? "" : "Standard Protection")}
                    className={`text-left rounded-2xl border-2 p-8 transition-all flex flex-col ${
                      maintenancePlan === "Standard Protection"
                        ? "border-[#EFBF04] bg-[#EFBF04]/5 shadow-sm"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Standard Protection</h3>
                    <p className="text-gray-500 text-sm mb-5">Predictable maintenance. Repairs billed separately.</p>

                    <div className="bg-gray-50 text-gray-700 text-xs font-bold px-3 py-1.5 rounded mb-5 inline-block self-start border border-gray-100">
                      Best for newer or lower-traffic buildings
                    </div>

                    <div className="mb-5">
                      <p className="text-2xl font-bold text-gray-900">$400–$800<span className="text-base text-gray-400 font-normal">/mo per elevator</span></p>
                      <p className="text-gray-400 text-xs">($4,800–$9,600+ annually)</p>
                    </div>

                    <ul className="space-y-3 flex-grow">
                      {[
                        "Scheduled preventive maintenance visits",
                        "24/7 emergency response",
                        "California inspection coordination",
                        "Compliance checks at every visit",
                        "Detailed reporting for property managers"
                      ].map((f, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#EFBF04] mr-2.5 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </button>

                  {/* Full Coverage */}
                  <button
                    onClick={() => setMaintenancePlan(maintenancePlan === "Full Coverage" ? "" : "Full Coverage")}
                    className={`text-left rounded-2xl border-2 p-8 transition-all flex flex-col relative ${
                      maintenancePlan === "Full Coverage"
                        ? "border-[#EFBF04] bg-gray-900 shadow-lg"
                        : "bg-gray-900 border-gray-800 hover:border-gray-700"
                    }`}
                  >
                    <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#EFBF04] text-black font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full">
                      Most Popular
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-1">Full Coverage</h3>
                    <p className="text-[#EFBF04] text-sm mb-5">Maximum uptime. Budget certainty.</p>

                    <div className="bg-[#EFBF04]/10 text-[#EFBF04] text-xs font-bold px-3 py-1.5 rounded mb-5 inline-block self-start border border-[#EFBF04]/20">
                      Best for high-traffic or aging equipment
                    </div>

                    <div className="mb-5">
                      <p className="text-2xl font-bold text-white">$600–$1,200+<span className="text-base text-gray-400 font-normal">/mo per elevator</span></p>
                      <p className="text-gray-500 text-xs">($7,200–$14,400+ annually)</p>
                    </div>

                    <ul className="space-y-3 flex-grow">
                      <li className="flex items-start text-sm font-semibold text-white">
                        <CheckCircle2 className="w-4 h-4 text-[#EFBF04] mr-2.5 flex-shrink-0 mt-0.5" />
                        Everything in Standard, plus:
                      </li>
                      {[
                        "Most replacement parts covered",
                        "Priority response over Standard",
                        "Proactive component replacement",
                        "Long-term asset protection",
                        "Reduced exposure to repair spikes"
                      ].map((f, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#EFBF04] mr-2.5 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </button>
                </div>

                <p className="text-xs text-gray-400 mt-4">Maintenance plan selection is optional. You can add one later.</p>
              </div>
            )}

            {/* ── Step 4: Quote ── */}
            {step === 4 && (
              <div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">Your Estimated Quote</h1>
                <p className="text-gray-500 text-sm mb-8">Final pricing confirmed after consultation.</p>

                <div className="bg-gray-900 text-white rounded-xl p-8 mb-6">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Estimated Project Cost</p>
                  <p className="text-3xl md:text-4xl font-bold mb-1">
                    {formatCurrency(quote.min)} – {formatCurrency(quote.max)}
                  </p>
                  <p className="text-xs text-gray-500">Range accounts for market and site conditions.</p>

                  {maintenancePlan && (
                    <div className="border-t border-white/10 mt-5 pt-5">
                      <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Maintenance Plan</p>
                      <p className="text-lg font-bold text-[#EFBF04]">{maintenancePlan}</p>
                    </div>
                  )}
                </div>

                {/* Config Summary */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 mb-6">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Configuration</h3>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400 text-xs">Building</span>
                      <p className="font-semibold text-gray-900">{heightProfile?.label}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs">System</span>
                      <p className="font-semibold text-gray-900">{typeProfile?.label}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs">Type</span>
                      <p className="font-semibold text-gray-900">{buildingType === "new" ? "New Construction" : "Retrofit"}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs">Capacity</span>
                      <p className="font-semibold text-gray-900">{capacity === "standard" ? "Standard" : "Heavy Load"}</p>
                    </div>
                    {features.length > 0 && (
                      <div className="sm:col-span-2">
                        <span className="text-gray-400 text-xs">Features</span>
                        <p className="font-semibold text-gray-900">{premiumFeatures.filter((f) => features.includes(f.id)).map((f) => f.label).join(", ")}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Dual CTA */}
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => { setConsultationType("video"); handleNext(); }}
                    className="border-2 border-[#EFBF04] bg-[#EFBF04]/5 rounded-xl p-6 text-left hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Video Consultation</h3>
                    <p className="text-sm text-gray-500 mb-3">Review your quote and technical details with an engineer on video.</p>
                    <div className="bg-[#EFBF04] text-black text-sm font-bold px-3 py-1.5 rounded inline-block">
                      Save ${videoDiscount} — Book Video Call
                    </div>
                  </button>

                  <button
                    onClick={() => { setConsultationType("visit"); handleNext(); }}
                    className="border-2 border-gray-200 rounded-xl p-6 text-left hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-1">In-Person Site Visit</h3>
                    <p className="text-sm text-gray-500 mb-3">A Dwan engineer visits your site to take measurements and finalize specs.</p>
                    <span className="text-sm font-bold text-gray-600">Book Site Survey</span>
                  </button>
                </div>
              </div>
            )}

            {/* ── Step 5: Booking ── */}
            {step === 5 && (
              <div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                  {consultationType === "video" ? "Book Your Video Consultation" : "Book Your Site Survey"}
                </h1>
                <p className="text-gray-500 text-sm mb-2">
                  {consultationType === "video"
                    ? "A Dwan engineer will review your project details on video."
                    : "A Dwan engineer will visit your site to finalize specifications."}
                </p>
                {consultationType === "video" && (
                  <div className="bg-[#EFBF04]/10 border border-[#EFBF04]/20 text-[#EFBF04] text-sm font-bold px-4 py-2 rounded-lg mb-6 inline-block">
                    ${videoDiscount} discount applied to your project
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
                      <label htmlFor="company" className="block text-sm font-semibold mb-1.5">Company</label>
                      <Input
                        id="company"
                        value={booking.company}
                        onChange={(e) => setBooking({ ...booking, company: e.target.value })}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
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
                    <label htmlFor="address" className="block text-sm font-semibold mb-1.5">Project Address *</label>
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

            {/* Navigation buttons */}
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

              {step < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="px-6 h-11 font-bold bg-[#EFBF04] text-black hover:bg-[#d4aa03] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                </Button>
              ) : step === 4 ? (
                <div />
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="px-6 h-11 font-bold bg-[#EFBF04] text-black hover:bg-[#d4aa03] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {consultationType === "video" ? "Book Video Call" : "Book Site Survey"}
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
