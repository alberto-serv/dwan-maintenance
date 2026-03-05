"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, CheckCircle2 } from "lucide-react";

// ── Data Models ──────────────────────────────────────────────────────────────

const elevatorTypes = [
  { id: "hydraulic",  label: "Hydraulic",        base: 45000,  perStop: 15000, maxStops: 6,  desc: "Low-rise, heavy duty" },
  { id: "mrl",        label: "MRL Traction",     base: 75000,  perStop: 20000, maxStops: 12, desc: "Mid-rise, energy efficient" },
  { id: "gearless",   label: "Gearless Traction", base: 175000, perStop: 35000, maxStops: 40, desc: "High-rise, high-speed" },
  { id: "freight",    label: "Freight (Heavy)",   base: 100000, perStop: 25000, maxStops: 10, desc: "Industrial, large loads" },
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

export default function Installation() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // Step 1
  const [selectedType, setSelectedType] = useState("");
  // Step 2
  const [landings, setLandings] = useState("");
  const [buildingType, setBuildingType] = useState<"new" | "retrofit">("new");
  const [capacity, setCapacity] = useState<"standard" | "heavy">("standard");
  // Step 3
  const [features, setFeatures] = useState<string[]>([]);
  // Step 5
  const [booking, setBooking] = useState({ name: "", company: "", email: "", address: "" });

  const typeProfile = elevatorTypes.find((t) => t.id === selectedType);
  const maxStops = typeProfile?.maxStops || 40;
  const stopsNum = Math.min(Math.max(parseInt(landings) || 2, 2), maxStops);

  const quote = calculateQuote(
    selectedType,
    stopsNum,
    buildingType === "retrofit",
    capacity === "heavy",
    features
  );

  const canProceed = () => {
    switch (step) {
      case 1: return !!selectedType;
      case 2: return !!landings && parseInt(landings) >= 2;
      case 3: return true;
      case 4: return true;
      case 5: return !!booking.name && !!booking.email && !!booking.address;
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
      type: typeProfile?.label,
      landings: stopsNum,
      buildingType,
      capacity,
      features: premiumFeatures.filter((f) => features.includes(f.id)).map((f) => f.label),
      quote,
      ...booking,
    }));
    router.push("/installation/confirmation");
  };

  const toggleFeature = (id: string) => {
    setFeatures((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button onClick={() => router.push("/")} className="hover:opacity-80 transition-opacity">
              <Image src="/images/logo.webp" alt="Dwan Elevator Co." width={80} height={80} className="w-auto h-16" />
            </button>
            <a href="tel:4154651672" className="flex items-center gap-2 text-[#EFBF04] hover:text-[#EFBF04]/80 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(415) 465-1672</span>
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              {["System", "Site & Scale", "Features", "Quote", "Book Survey"].map((label, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-1 ${
                    step > idx + 1 ? "bg-[#EFBF04] text-black" :
                    step === idx + 1 ? "bg-black text-white" :
                    "bg-gray-200 text-gray-500"
                  }`}>
                    {step > idx + 1 ? "✓" : idx + 1}
                  </div>
                  <span className={`text-xs font-medium hidden sm:block ${step === idx + 1 ? "text-gray-900" : "text-gray-400"}`}>{label}</span>
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#EFBF04] transition-all duration-300 rounded-full" style={{ width: `${(step / 5) * 100}%` }} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">

            {/* ── Step 1: System Selection ── */}
            {step === 1 && (
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Choose Your Elevator System</h1>
                <p className="text-gray-600 mb-8">Select the type of elevator you need for your project.</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {elevatorTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`text-left p-6 rounded-xl border-2 transition-all ${
                        selectedType === type.id
                          ? "border-[#EFBF04] bg-[#EFBF04]/5 shadow-md"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{type.label}</h3>
                      <p className="text-sm text-gray-500 mb-3">{type.desc}</p>
                      <p className="text-sm font-semibold text-gray-700">From {formatCurrency(type.base)}</p>
                      <p className="text-xs text-gray-400">Up to {type.maxStops} stops</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── Step 2: Site & Scale ── */}
            {step === 2 && (
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Site & Scale</h1>
                <p className="text-gray-600 mb-8">Tell us about your building requirements.</p>

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Number of Landings *</label>
                    <Input
                      type="number"
                      min={2}
                      max={maxStops}
                      required
                      value={landings}
                      onChange={(e) => setLandings(e.target.value)}
                      placeholder={`2 – ${maxStops}`}
                    />
                    <p className="text-xs text-gray-400 mt-1">{typeProfile?.label} supports up to {maxStops} stops.</p>
                  </div>

                  <div>
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
              </div>
            )}

            {/* ── Step 3: Performance & Compliance ── */}
            {step === 3 && (
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Performance & Compliance</h1>
                <p className="text-gray-600 mb-8">Select any premium features for your installation.</p>

                <div className="space-y-4">
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
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                          features.includes(feature.id)
                            ? "bg-[#EFBF04] border-[#EFBF04]"
                            : "border-gray-300"
                        }`}>
                          {features.includes(feature.id) && (
                            <CheckCircle2 className="w-4 h-4 text-black" />
                          )}
                        </div>
                        <span className="font-semibold text-gray-900">{feature.label}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-500">+{formatCurrency(feature.cost)}</span>
                    </button>
                  ))}
                </div>

                <p className="text-sm text-gray-400 mt-6">All features are optional. You can skip this step.</p>
              </div>
            )}

            {/* ── Step 4: Dynamic Quote ── */}
            {step === 4 && (
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Your Estimated Quote</h1>
                <p className="text-gray-600 mb-8">Based on your configuration. Final pricing confirmed after site survey.</p>

                <div className="bg-black text-white rounded-2xl p-8 md:p-10 mb-8">
                  <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Estimated Project Cost</p>
                  <p className="text-4xl md:text-5xl font-bold mb-1">
                    {formatCurrency(quote.min)} – {formatCurrency(quote.max)}
                  </p>
                  <p className="text-sm text-gray-400 mb-8">Range accounts for market and site conditions.</p>

                  <div className="border-t border-white/10 pt-6">
                    <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Estimated Annual Maintenance</p>
                    <p className="text-2xl font-bold text-[#EFBF04]">
                      {formatCurrency(quote.maintenance.min)} – {formatCurrency(quote.maintenance.max)}<span className="text-base font-normal text-gray-400"> / year</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">4%–6% of total project cost. Maintenance plans available at checkout.</p>
                  </div>
                </div>

                {/* Config Summary */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Configuration Summary</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">System</span>
                      <p className="font-semibold">{typeProfile?.label}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Landings</span>
                      <p className="font-semibold">{stopsNum}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Building</span>
                      <p className="font-semibold">{buildingType === "new" ? "New Construction" : "Retrofit"}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Capacity</span>
                      <p className="font-semibold">{capacity === "standard" ? "Standard (≤3,500 lbs)" : "Heavy Load (4,000+ lbs)"}</p>
                    </div>
                    {features.length > 0 && (
                      <div className="sm:col-span-2">
                        <span className="text-gray-500">Premium Features</span>
                        <p className="font-semibold">{premiumFeatures.filter((f) => features.includes(f.id)).map((f) => f.label).join(", ")}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ── Step 5: Booking ── */}
            {step === 5 && (
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Book Your Site Survey</h1>
                <p className="text-gray-600 mb-8">A Dwan engineer will visit your site to finalize specifications and pricing.</p>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name *</label>
                      <Input
                        id="name"
                        required
                        value={booking.name}
                        onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2">Company</label>
                      <Input
                        id="company"
                        value={booking.company}
                        onChange={(e) => setBooking({ ...booking, company: e.target.value })}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">Email *</label>
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
                    <label htmlFor="address" className="block text-sm font-semibold mb-2">Project Address *</label>
                    <Input
                      id="address"
                      required
                      value={booking.address}
                      onChange={(e) => setBooking({ ...booking, address: e.target.value })}
                      placeholder="123 Main Street, San Francisco, CA"
                    />
                  </div>

                  <div>
                    <label htmlFor="upload" className="block text-sm font-semibold mb-2">Upload Architectural Drawings / Shaft Specs (Optional)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#EFBF04] transition-colors cursor-pointer">
                      <input type="file" id="upload" accept=".pdf,.dwg,.dxf" className="hidden" />
                      <label htmlFor="upload" className="cursor-pointer">
                        <p className="text-gray-500 font-medium">Click to upload or drag files here</p>
                        <p className="text-xs text-gray-400 mt-1">PDF, DWG, or DXF — max 25 MB</p>
                      </label>
                    </div>
                  </div>

                  {/* Maintenance plan upsell */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-lg font-heading font-bold mb-1 pb-3 border-b-2 border-[#EFBF04]">
                      Add a Maintenance Plan
                    </h3>
                    <p className="text-sm text-gray-600 mt-4 mb-4">Protect your new elevator from day one with a Dwan maintenance plan.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="border-2 border-gray-200 rounded-xl p-5">
                        <h4 className="font-bold text-gray-900 mb-1">Standard Protection</h4>
                        <p className="text-sm text-gray-500 mb-2">$400–$800/mo per elevator</p>
                        <p className="text-xs text-gray-400">Preventive maintenance. Repairs billed separately.</p>
                      </div>
                      <div className="border-2 border-[#EFBF04] bg-[#EFBF04]/5 rounded-xl p-5 relative">
                        <div className="absolute -top-2 right-4 bg-[#EFBF04] text-black font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full">Popular</div>
                        <h4 className="font-bold text-gray-900 mb-1">Full Coverage</h4>
                        <p className="text-sm text-gray-500 mb-2">$600–$1,200+/mo per elevator</p>
                        <p className="text-xs text-gray-400">Most parts included. Priority response.</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-3">Maintenance details will be discussed during your site survey.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-gray-100">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  &larr; Back
                </button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="px-8 h-12 text-lg font-bold bg-[#EFBF04] text-black hover:bg-[#d4aa03] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="px-8 h-12 text-lg font-bold bg-[#EFBF04] text-black hover:bg-[#d4aa03] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Book Site Survey
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-sm tracking-[0.15em] mb-1">DWAN ELEVATOR CO.</p>
          <p className="text-xs text-gray-500 mb-4">Serving California Since 1919</p>
          <p className="text-xs text-gray-600">© 2026 Dwan Elevator Company</p>
        </div>
      </footer>
    </div>
  );
}
