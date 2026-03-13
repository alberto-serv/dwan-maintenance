"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star } from "lucide-react";

export default function Home() {
  const router = useRouter();

  const scrollToPlans = () => {
    const el = document.getElementById("plans");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const selectPlan = (plan: string) => {
    router.push(`/checkout?plan=${encodeURIComponent(plan)}`);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-50">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src="/images/logo.webp" alt="Dwan Elevator Co." width={48} height={48} className="w-auto h-10" />
        </button>
        <div className="flex items-center gap-3">
          <a href="tel:4154651672" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">(415) 465-1672</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-black text-white overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0">
          <Image src="/images/hero-background.jpeg" alt="Elevator Service" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
              California's Trusted<br />
              Elevator Partner.
            </h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed font-light max-w-2xl mx-auto">
              Installation, maintenance, and repair — all from one licensed C-11 contractor. Serving California since 1919.
            </p>
            {/* Social Validation */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="flex -space-x-2">
                {["M", "R", "J", "T"].map((initial, idx) => (
                  <div key={idx} className="w-8 h-8 rounded-full bg-[#EFBF04] border-2 border-black flex items-center justify-center text-black font-bold text-xs">
                    {initial}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#EFBF04] text-[#EFBF04]" />
                ))}
                <span className="text-white text-sm font-semibold ml-1">4.9/5</span>
              </div>
              <span className="text-gray-400 text-sm">500+ projects completed</span>
            </div>

            {/* 3 Entry Points */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <button
                onClick={() => router.push("/installation/quote")}
                className="group bg-white border-2 border-gray-200 hover:border-[#EFBF04] rounded-2xl p-8 text-left transition-all hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Installation</h3>
                <p className="text-sm text-gray-500 mb-4">New construction or retrofit. Get a budget range in minutes.</p>
                <span className="text-sm font-bold text-[#EFBF04] group-hover:underline">Get a Quote</span>
              </button>

              <button
                onClick={scrollToPlans}
                className="group bg-white border-2 border-gray-200 hover:border-[#EFBF04] rounded-2xl p-8 text-left transition-all hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Maintenance</h3>
                <p className="text-sm text-gray-500 mb-4">Structured plans that prevent failures and keep you compliant.</p>
                <span className="text-sm font-bold text-[#EFBF04] group-hover:underline">View Plans</span>
              </button>

              <button
                onClick={() => router.push("/repair")}
                className="group bg-white border-2 border-gray-200 hover:border-[#EFBF04] rounded-2xl p-8 text-left transition-all hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Repair</h3>
                <p className="text-sm text-gray-500 mb-4">Doors stuck? Elevator down? Get a repair estimate fast.</p>
                <span className="text-sm font-bold text-[#EFBF04] group-hover:underline">Get Help Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-gray-50 border-b border-gray-200 py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm font-semibold text-gray-600">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> Licensed C-11 Contractor</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> 24/7 Emergency Response</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> Cal/OSHA Compliant</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> Since 1919</span>
          </div>
        </div>
      </section>

      {/* PLANS SECTION */}
      <section id="plans" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h2 className="text-sm font-bold text-[#EFBF04] uppercase tracking-widest mb-3">Maintenance Plans</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Two Plans. Clear Protection.</h3>
            <p className="text-lg text-gray-500 leading-relaxed">
              Choose based on equipment age, traffic volume, and how much financial risk you want to retain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Protection */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col pt-8 px-8 pb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Standard Protection</h3>
              <p className="text-gray-500 text-sm mb-5">Predictable maintenance. Repairs billed separately.</p>

              <div className="bg-gray-50 text-gray-700 text-xs font-bold px-3 py-1.5 rounded mb-5 inline-block self-start border border-gray-100">
                Best for newer or lower-traffic buildings
              </div>

              <div className="mb-5">
                <p className="text-2xl font-bold text-gray-900">$400–$800<span className="text-base text-gray-400 font-normal">/mo per elevator</span></p>
                <p className="text-gray-400 text-xs">($4,800–$9,600+ annually)</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Scheduled preventive maintenance visits",
                  "24/7 emergency response",
                  "California inspection coordination",
                  "Compliance checks at every visit",
                  "Detailed reporting for property managers"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#EFBF04] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={() => selectPlan("Standard Protection")} variant="outline" className="w-full h-12 text-base font-bold border-gray-300 hover:bg-gray-50 text-gray-900">
                Select Standard
              </Button>
            </div>

            {/* Full Coverage */}
            <div className="bg-gray-900 text-white rounded-2xl shadow-lg border border-gray-800 flex flex-col relative pt-8 px-8 pb-8">
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

              <ul className="space-y-3 mb-8 flex-grow">
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
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#EFBF04] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={() => selectPlan("Full Coverage")} className="w-full h-12 text-base font-bold bg-[#EFBF04] text-black hover:bg-[#d4aa03]">
                Select Full Coverage
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-sm font-bold text-[#EFBF04] uppercase tracking-widest mb-3">What Our Clients Say</h2>
            <h3 className="text-3xl font-bold text-gray-900">Trusted by Property Managers Across California</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { quote: "Response times dropped from 6 hours to under 2. Haven't failed a single inspection since.", name: "Maria C.", role: "Property Manager, SF" },
              { quote: "Full Coverage eliminated our surprise repair bills entirely. Now it's a predictable line item.", name: "Robert T.", role: "Building Owner, Oakland" },
              { quote: "The transition was seamless. They handled all documentation and had techs on-site within a week.", name: "James W.", role: "Facilities Director, San Jose" },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#EFBF04] text-[#EFBF04]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{review.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-900 py-10 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-bold text-base tracking-[0.15em] mb-1">DWAN ELEVATOR CO.</p>
            <p className="text-sm text-gray-400 mb-5">Serving California Since 1919</p>

            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-20 mb-8 text-sm text-gray-500">
              <div className="space-y-0.5">
                <p className="font-bold text-gray-700 uppercase tracking-wider text-xs">San Francisco Bay Area</p>
                <p>1234 Mission Street, San Francisco, CA 94103</p>
                <p><a href="tel:4154651672" className="hover:text-[#EFBF04] font-medium transition-colors">(415) 465-1672</a></p>
              </div>
              <div className="space-y-0.5">
                <p className="font-bold text-gray-700 uppercase tracking-wider text-xs">Greater Los Angeles</p>
                <p>12701 Van Nuys Blvd, Suite D, Los Angeles, CA 91331</p>
                <p><a href="tel:8002011212" className="hover:text-[#EFBF04] font-medium transition-colors">(800) 201-1212</a></p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-5 text-xs text-gray-400">
              <p>California Contractor License #140423 (C-11 Elevator) · Cal/OSHA Certified · $5M General Liability Insurance</p>
              <p className="mt-2">© 2026 Dwan Elevator Company</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
