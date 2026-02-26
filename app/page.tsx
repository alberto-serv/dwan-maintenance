"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertTriangle, Star } from "lucide-react";

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
        <Button onClick={scrollToPlans} variant="default" className="bg-[#EFBF04] text-black hover:bg-[#d4aa03] font-bold">
          View Plans
        </Button>
      </nav>

      {/* HERO */}
      <section className="relative bg-black text-white overflow-hidden py-16 lg:py-24">
        {/* Background */}
        <div className="absolute inset-0">
          <Image src="/images/hero-background.jpeg" alt="Elevator Service" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block bg-[#EFBF04]/20 border border-[#EFBF04]/50 text-[#EFBF04] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                Bay Area Commercial Elevator Maintenance
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
                Elevator Uptime You<br />
                Don't Have to<br />
                Think About.
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light max-w-2xl">
                Structured maintenance plans for Bay Area buildings — designed to prevent violations, eliminate unplanned downtime, and turn unpredictable repair costs into a fixed line item.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button onClick={scrollToPlans} size="lg" className="text-lg font-bold px-8 h-14 bg-[#EFBF04] text-black hover:bg-[#d4aa03] transition-colors">
                  See Plan Options
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400 font-medium mb-8">
                <span>85% of failures are preventable</span>
                <span className="opacity-50">·</span>
                <span>2hr avg. response</span>
                <span className="opacity-50">·</span>
                <span>98% inspection pass rate</span>
              </div>
              {/* Social Validation */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 max-w-xl">
                <div className="flex -space-x-3 flex-shrink-0">
                  {["M", "R", "J", "T"].map((initial, idx) => (
                    <div key={idx} className="w-10 h-10 rounded-full bg-[#EFBF04] border-2 border-black flex items-center justify-center text-black font-bold text-sm">
                      {initial}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#EFBF04] text-[#EFBF04]" />
                    ))}
                    <span className="text-white text-sm font-semibold ml-2">4.9/5</span>
                  </div>
                  <p className="text-gray-400 text-sm">Trusted by 200+ Bay Area property managers</p>
                </div>
              </div>
            </div>

            {/* Sidebar cost card */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-[#EFBF04]" />
                  <h3 className="text-xl font-bold text-white">What You're Actually Risking Without a Plan</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-gray-300">Emergency callout + repair</span>
                    <span className="font-bold text-white">$2,400–$8,500+</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-gray-300">Failed inspection re-service</span>
                    <span className="font-bold text-white">$1,200–$3,000</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-gray-300">Tenant compensation / lost rent</span>
                    <span className="font-bold text-white">$3,000–$15,000</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-gray-300">Code violation fines</span>
                    <span className="font-bold text-white">$500–$5,000/day</span>
                  </li>
                  <li className="flex justify-between items-center pt-1">
                    <span className="text-gray-300">Legal exposure per incident</span>
                    <span className="font-bold text-red-400">Uncapped</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-gray-50 border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-semibold text-gray-700">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> Licensed & Insured — California Certified</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> 24/7 Emergency Response</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> No Deposit Required</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> Net-30 First Invoice</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> Serving the Bay Area Since 2005</span>
          </div>
        </div>
      </section>

      {/* PLANS SECTION - Moved above pain section */}
      <section id="plans" className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-sm font-bold text-[#EFBF04] uppercase tracking-widest mb-3">Maintenance Plans</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Two Plans. Clear Protection. No Confusing Fine Print.</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              We help you choose based on equipment age, traffic volume, and inspection history. Both plans include proactive maintenance — you choose how much financial risk you want to retain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Standard Protection */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col pt-10 px-10 pb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Standard Protection</h3>
              <p className="text-gray-600 font-medium mb-6">Predictable Maintenance. Repairs When Needed.</p>

              <div className="bg-blue-50/50 text-blue-800 text-sm font-bold px-4 py-2 rounded mb-6 inline-block self-start border border-blue-100">
                Best for newer or lower-traffic buildings.
              </div>

              <div className="mb-6">
                <p className="text-3xl font-bold text-gray-900">$400–$800<span className="text-lg text-gray-500 font-normal">/mo per elevator</span></p>
                <p className="text-gray-500 text-sm">($4,800–$9,600+ annually)</p>
                <p className="font-semibold text-gray-900 mt-2">Repairs billed separately.</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  "Scheduled preventive maintenance visits",
                  "24/7 emergency response",
                  "California inspection coordination & support",
                  "Compliance checks at every visit",
                  "Detailed reporting for property managers"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#EFBF04] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={() => selectPlan("Standard Protection")} variant="outline" className="w-full h-14 text-lg font-bold border-gray-300 hover:bg-gray-50 text-gray-900">
                Select Standard Plan
              </Button>
            </div>

            {/* Full Coverage */}
            <div className="bg-black text-white rounded-2xl shadow-2xl border border-gray-800 flex flex-col relative pt-10 px-10 pb-10 transform md:-translate-y-4">
              <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-[#EFBF04] text-black font-bold uppercase tracking-wider text-xs px-4 py-1.5 rounded-full shadow-lg">
                ★ Most Popular
              </div>

              <h3 className="text-3xl font-bold text-white mb-2">Full Coverage</h3>
              <p className="text-[#EFBF04] font-medium mb-6">Maximum Uptime. Budget Certainty.</p>

              <div className="bg-[#EFBF04]/10 text-[#EFBF04] text-sm font-bold px-4 py-2 rounded mb-6 inline-block self-start border border-[#EFBF04]/20">
                Best for high-traffic buildings or aging equipment.
              </div>

              <div className="mb-6">
                <p className="text-3xl font-bold text-white">$600–$1,200+<span className="text-lg text-gray-400 font-normal">/mo per elevator</span></p>
                <p className="text-gray-400 text-sm">($7,200–$14,400+ annually)</p>
                <p className="font-semibold text-[#EFBF04] mt-2">Most parts included.</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start text-white font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#EFBF04] mr-3 flex-shrink-0" />
                  Everything in Standard, plus:
                </li>
                {[
                  "Most replacement parts covered",
                  "Priority response over Standard customers",
                  "Proactive component replacement before failure",
                  "Long-term asset protection strategy",
                  "Reduced exposure to major repair spikes"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#EFBF04] mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={() => selectPlan("Full Coverage")} className="w-full h-14 text-lg font-bold bg-[#EFBF04] text-black hover:bg-[#d4aa03]">
                Select Full Coverage
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-sm font-bold text-[#EFBF04] uppercase tracking-widest mb-3">The Real Cost of Inaction</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">One Shutdown Can Derail Your Entire Month</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Most elevator failures don't announce themselves. They compound quietly until a single event turns into a cascade of tenant complaints, inspection failures, and emergency repair invoices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Tenant Complaints", desc: "Disruption to residents and commercial occupants damages trust and triggers lease conversations." },
              { title: "Failed Inspections", desc: "California DOSH violations carry daily fines and force operational shutdowns until resolved." },
              { title: "Emergency Invoice Shock", desc: "Unplanned repair costs hit capital budgets without warning, often at the worst possible time." },
              { title: "Legal Exposure", desc: "Documented maintenance gaps create liability. Injuries in poorly maintained equipment can mean uncapped costs." },
              { title: "Ownership Conversations", desc: "Unplanned failures put property managers in difficult positions with building owners." },
              { title: "Lost Productive Time", desc: "Chasing vendors and managing unhappy tenants takes you off higher-value work." }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-black text-white p-10 md:p-14 rounded-2xl max-w-5xl mx-auto text-center shadow-xl">
            <p className="text-2xl md:text-3xl font-bold mb-4 text-[#EFBF04]">
              Most elevator failures are preventable.
            </p>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              The question isn't whether issues will arise — it's whether your building has a documented, structured maintenance program that reduces risk and protects you when they do.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-sm font-bold text-[#EFBF04] uppercase tracking-widest mb-3">What Our Clients Say</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Trusted by Property Managers Across the Bay Area</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "We switched from a national provider and the difference was night and day. Response times dropped from 6 hours to under 2, and we haven't failed a single inspection since.",
                name: "Maria C.",
                role: "Property Manager, SF Financial District",
                rating: 5,
              },
              {
                quote: "Dwan's Full Coverage plan eliminated our surprise repair bills entirely. We used to budget $30K a year for emergencies — now it's a predictable monthly line item.",
                name: "Robert T.",
                role: "Building Owner, Oakland",
                rating: 5,
              },
              {
                quote: "The transition was seamless. They handled all the documentation, coordinated with our previous vendor, and had techs on-site within the first week. Zero downtime.",
                name: "James W.",
                role: "Facilities Director, San Jose",
                rating: 5,
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#EFBF04] text-[#EFBF04]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">"{review.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BILLING ASSURANCE & SWITCHING OVERVIEW */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Billing Assurance */}
            <div>
              <h2 className="text-sm font-bold text-[#EFBF04] uppercase tracking-widest mb-3">Billing Assurance</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">No Deposit. Simple Billing.<br />We Operate Like National Providers.</h3>

              <div className="space-y-6 mt-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 text-xl shadow-sm">🔓</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">No Upfront Deposit</h4>
                    <p className="text-gray-600">Start your plan without any advance payment required.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 text-xl shadow-sm">📅</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">First Invoice Net-30</h4>
                    <p className="text-gray-600">Your first billing cycle begins 30 days after service starts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 text-xl shadow-sm">🔄</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Simple Monthly Billing</h4>
                    <p className="text-gray-600">One predictable invoice per elevator, every month.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 text-xl shadow-sm">🏦</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">ACH Setup Available</h4>
                    <p className="text-gray-600">Automatic payments for fully hands-off billing.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Switching Section */}
            <div className="bg-[#EFBF04] rounded-3xl p-10 md:p-14 text-black flex flex-col justify-center shadow-xl">
              <h2 className="text-sm font-bold text-black/60 uppercase tracking-widest mb-3">Changing Providers?</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Switching Is Easier Than You Think</h3>
              <p className="text-lg font-medium mb-8 leading-relaxed">
                We handle the full transition — including documentation transfers, inspection records, and service scheduling — so your building experiences zero service gap. No awkward overlap. No uncovered periods.
              </p>
              <Button onClick={scrollToPlans} className="self-start h-14 px-8 text-lg font-bold bg-black text-white hover:bg-gray-800">
                Choose a Plan
              </Button>
              <p className="text-sm font-bold mt-6 text-black/70 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black" /> Free transition assessment included.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ASSESSMENT SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-sm font-bold text-[#EFBF04] uppercase tracking-widest mb-3">Free Building Assessment</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Not Sure Which Plan Is Right for You?</h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We'll review your elevators, summarize your risk exposure, compare budget scenarios, and give you a clear plan recommendation — no obligation to move forward.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-md border border-gray-100">
            <ul className="space-y-5">
              {[
                "Elevator condition review",
                "Risk exposure summary",
                "Budget comparison: Standard vs. Full Coverage",
                "Written plan recommendation",
                "Transition roadmap if switching providers"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-lg text-gray-800 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-[#EFBF04] mr-4 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #EFBF04 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-sm font-bold text-[#EFBF04] uppercase tracking-widest mb-4">Don't Wait</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Don't Let the Next Shutdown Force Your Hand
            </h3>
            <p className="text-xl text-gray-300 mb-12">
              Protect your elevators before a minor issue becomes a major emergency. Choosing a plan takes two minutes and costs nothing to get started.
            </p>

            <div className="flex justify-center">
              <Button onClick={scrollToPlans} size="lg" className="text-lg font-bold px-10 h-16 bg-[#EFBF04] text-black hover:bg-[#d4aa03] transition-colors">
                Choose Your Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-900 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-bold text-lg tracking-[0.15em] mb-1">DWAN ELEVATOR CO.</p>
            <p className="text-sm text-gray-500 mb-8">Serving California Since 1919</p>

            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-24 mb-12 text-sm text-gray-600">
              <div className="space-y-2">
                <p className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-xs">San Francisco Bay Area</p>
                <p>1234 Mission Street</p>
                <p>San Francisco, CA 94103</p>
                <p className="pt-2"><a href="tel:4154651672" className="hover:text-[#EFBF04] font-medium transition-colors">(415) 465-1672</a></p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-xs">Greater Los Angeles</p>
                <p>12701 Van Nuys Blvd, Suite D</p>
                <p>Los Angeles, CA 91331</p>
                <p className="pt-2"><a href="tel:8002011212" className="hover:text-[#EFBF04] font-medium transition-colors">(800) 201-1212</a></p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 text-xs text-gray-500 space-y-2">
              <p>California Contractor License #140423 (C-11 Elevator) • Cal/OSHA Certified</p>
              <p>$5M General Liability Insurance • Workers' Compensation Insured</p>
              <p className="mt-6 text-gray-400">© 2026 Dwan Elevator Company</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
