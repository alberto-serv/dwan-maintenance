"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Building2,
  CheckCircle2,
  Phone,
  Star,
  Shield,
  Clock,
  FileText,
} from "lucide-react";

export default function Home() {
  const router = useRouter();

  const navigateToForm = () => {
    router.push("/customer-info");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* HERO SECTION */}
      <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background.jpeg"
            alt="Dwan Elevator Service"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/80"></div>
        </div>

        <div className="absolute inset-0 opacity-10 z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #EFBF04 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 text-center">
              <div className="inline-block">
                <Image
                  src="/images/logo.webp"
                  alt="Dwan Elevator Co."
                  width={200}
                  height={200}
                  className="w-auto h-20 md:h-28 mx-auto"
                  priority
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Protect Your Elevators. <br />
              <span className="text-[#EFBF04]">Control Your Budget.</span> <br />
              Avoid Costly Surprises.
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed font-light">
              Commercial elevator maintenance built for Bay Area buildings — designed to reduce shutdowns, prevent violations, and stabilize operating costs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={navigateToForm}
                size="lg"
                className="text-lg font-bold px-8 h-14 bg-[#EFBF04] text-black hover:bg-[#d4aa03] transition-colors"
              >
                Request a Maintenance Proposal
              </Button>
              <Button
                onClick={navigateToForm}
                variant="outline"
                size="lg"
                className="text-lg font-bold px-8 h-14 border-white text-black hover:bg-white/10 transition-colors"
              >
                Schedule a Building Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-gray-900">
              Elevator Problems Get Expensive Fast
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              One shutdown can mean:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-left">
              {[
                "Tenant complaints",
                "Failed inspections",
                "Emergency repair invoices",
                "Legal exposure",
                "Strained ownership conversations",
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full bg-[#EFBF04] flex-shrink-0" />
                  <p className="text-lg font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-black text-white p-10 rounded-xl shadow-2xl">
              <p className="text-2xl font-semibold mb-4 text-[#EFBF04]">
                Most elevator failures are preventable with structured maintenance.
              </p>
              <p className="text-xl text-gray-300 font-light">
                The question isn't if issues arise — it's whether your building is protected when they do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Two Protection Plans. One Smart Decision.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Choose the level of financial and operational protection that fits your building's risk tolerance.
            </p>
            <p className="text-xl font-medium text-gray-800 bg-gray-50 py-4 px-8 rounded-full inline-block">
              No confusing tiers. No stripped-down packages. Just clear protection.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING + PLAN SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            {/* Standard Plan */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col transition-transform hover:-translate-y-1 duration-300">
              <div className="p-10 border-b border-gray-100 bg-gray-50/50">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Standard Protection Plan</h3>
                <p className="text-[#EFBF04] font-semibold text-lg mb-6">Predictable Maintenance. Repairs Billed As Needed.</p>
                <div className="mb-6">
                  <p className="text-sm text-gray-500 font-medium tracking-wide uppercase mb-1">Starting at</p>
                  <p className="text-4xl font-bold text-gray-900">$4,800–$9,600</p>
                  <p className="text-gray-500">per elevator / year</p>
                  <p className="text-sm text-gray-400 mt-1">(Approx. $400–$800 per month)</p>
                </div>
                <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-md text-sm font-medium">
                  Best for newer or lower-traffic buildings.
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <p className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Includes:</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {[
                    "Scheduled preventive maintenance",
                    "24/7 emergency response",
                    "Inspection coordination support",
                    "Compliance checks",
                    "Detailed reporting for property managers"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 p-6 rounded-xl mt-auto">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold text-gray-900">Note:</span> Repairs and replacement parts are billed separately.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Ideal for buildings comfortable managing repair costs as they arise.
                  </p>
                </div>
              </div>
            </div>

            {/* Full Coverage Plan */}
            <div className="bg-black rounded-2xl shadow-2xl overflow-hidden border border-gray-800 flex flex-col relative transition-transform hover:-translate-y-1 duration-300">
              <div className="absolute top-0 right-0 bg-[#EFBF04] text-black font-bold text-xs px-4 py-1.5 rounded-bl-lg uppercase tracking-wider">
                Recommended
              </div>
              <div className="p-10 border-b border-gray-800 bg-white/5">
                <h3 className="text-2xl font-bold mb-2 text-white">Full Coverage Protection Plan</h3>
                <p className="text-[#EFBF04] font-semibold text-lg mb-6">Maximum Uptime. Budget Certainty. Fewer Surprises.</p>
                <div className="mb-6">
                  <p className="text-sm text-gray-400 font-medium tracking-wide uppercase mb-1">Starting at</p>
                  <p className="text-4xl font-bold text-white">$7,200–$14,400+</p>
                  <p className="text-gray-400">per elevator / year</p>
                  <p className="text-sm text-gray-500 mt-1">(Approx. $600–$1,200+ per month)</p>
                </div>
                <div className="bg-[#EFBF04]/10 text-[#EFBF04] px-4 py-2 rounded-md text-sm font-medium border border-[#EFBF04]/20">
                  Best for high-traffic buildings or aging equipment.
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <p className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Includes everything in Standard, plus:</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {[
                    "Most parts included",
                    "Reduced exposure to major repair spikes",
                    "Priority response",
                    "Proactive component replacement",
                    "Long-term asset protection strategy"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-[#EFBF04] mt-2 mr-3 flex-shrink-0 shadow-[0_0_8px_rgba(239,191,4,0.6)]" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white/5 p-6 rounded-xl mt-auto">
                  <p className="text-sm text-gray-300 font-medium">
                    Designed to stabilize your operating budget and reduce unexpected capital events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS STRUCTURE WORKS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-widest text-gray-400 text-sm">
              Why This Structure Works
            </h2>
            <p className="text-4xl font-bold mb-12 text-gray-900">
              Maintenance Is About Risk Allocation
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12 text-left">
              <div className="p-8 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-xl font-semibold mb-2 text-gray-900 border-b border-gray-200 pb-2">Standard Plan</p>
                <p className="text-gray-600 mt-4">Lower fixed cost, variable repair exposure</p>
              </div>
              <div className="p-8 bg-[#EFBF04]/10 rounded-xl border border-[#EFBF04]/30">
                <p className="text-xl font-semibold mb-2 text-gray-900 border-b border-[#EFBF04]/30 pb-2">Full Coverage</p>
                <p className="text-gray-800 mt-4 font-medium">Higher fixed cost, lower financial volatility</p>
              </div>
            </div>

            <p className="text-xl text-gray-600">
              We help you choose based on equipment age, traffic volume, and inspection history.
            </p>
          </div>
        </div>
      </section>

      {/* CONVERSION BOOSTER */}
      <section className="py-16 bg-[#EFBF04] text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Switching From Another Provider?</h2>
            <p className="text-xl font-medium opacity-90">
              We handle transition planning and inspection documentation so your building experiences no service gap.
            </p>
          </div>
        </div>
      </section>

      {/* STRONG CLOSE STRATEGY SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">No Deposit Required</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We operate like established national providers.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "No upfront deposit",
                    "First invoice billed Net-30",
                    "Simple monthly billing",
                    "Optional ACH setup for seamless payments"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#EFBF04] mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xl font-bold text-gray-900">
                  Professional. Predictable. Straightforward.
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Not Sure Which Plan Is Right?</h3>
                <p className="text-gray-600 mb-8">
                  We provide a no-obligation building assessment including:
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Elevator condition review",
                    "Risk exposure summary",
                    "Budget comparison",
                    "Plan recommendation"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <div className="w-2 h-2 rounded-full bg-black mr-4" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={navigateToForm}
                  className="w-full h-14 text-lg font-bold bg-black text-white hover:bg-gray-800"
                >
                  Book Building Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">500+</div>
                <div className="text-gray-500 font-medium text-sm uppercase tracking-wider">Buildings Serviced</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">{"<"}2 Hr</div>
                <div className="text-gray-500 font-medium text-sm uppercase tracking-wider">Avg Response Time</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">98%</div>
                <div className="text-gray-500 font-medium text-sm uppercase tracking-wider">Inspection Pass Rate</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">24/7</div>
                <div className="text-gray-500 font-medium text-sm uppercase tracking-wider">Support Availability</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: "Dwan saved us after our previous provider left us red-tagged. Within 60 days, all violations cleared.",
                  author: "Property Manager",
                  location: "San Francisco",
                },
                {
                  text: "We actually see our technician every month, and he knows our equipment inside and out. True professionals.",
                  author: "Facility Director",
                  location: "Oakland",
                },
                {
                  text: "Emergency response in under 2 hours. Our old provider made us wait until the next day minimum.",
                  author: "HOA Board President",
                  location: "Los Angeles",
                },
              ].map((review, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl relative">
                  <div className="text-[#EFBF04] text-4xl font-serif absolute top-4 left-6 opacity-40">"</div>
                  <div className="flex gap-1 mb-4 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#EFBF04] text-[#EFBF04]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 relative z-10 font-medium italic">
                    {review.text}
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">{review.author}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #EFBF04 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Don't Wait for the Next Shutdown to Make the Switch
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Protect your elevators before minor issues become expensive emergencies.
            </p>

            <p className="text-2xl font-semibold text-[#EFBF04] mb-8">
              Request Your Maintenance Proposal Today
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                onClick={navigateToForm}
                size="lg"
                className="text-lg font-bold px-10 h-16 bg-white text-black hover:bg-gray-200 transition-colors"
              >
                Get My Proposal
              </Button>
              <Button
                onClick={navigateToForm}
                size="lg"
                variant="outline"
                className="text-lg font-bold px-10 h-16 border-[#EFBF04] text-[#EFBF04] hover:bg-[#EFBF04] hover:text-black transition-colors"
              >
                Book Building Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-900 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-bold text-lg tracking-[0.15em] mb-1">
              DWAN ELEVATOR CO.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Serving California Since 1919
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-24 mb-12 text-sm text-gray-600">
              <div className="space-y-2">
                <p className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-xs">San Francisco Bay Area</p>
                <p>1234 Mission Street</p>
                <p>San Francisco, CA 94103</p>
                <p className="pt-2"><a href="tel:4154651672" className="hover:text-[#EFBF04] font-medium">(415) 465-1672</a></p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-xs">Greater Los Angeles</p>
                <p>12701 Van Nuys Blvd, Suite D</p>
                <p>Los Angeles, CA 91331</p>
                <p className="pt-2"><a href="tel:8002011212" className="hover:text-[#EFBF04] font-medium">(800) 201-1212</a></p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 text-xs text-gray-500 space-y-2">
              <p>California Contractor License #140423 (C-11 Elevator) • Cal/OSHA Certified</p>
              <p>$5M General Liability Insurance • Workers' Compensation Insured</p>
              <p className="mt-6 text-gray-400">
                © 2026 Dwan Elevator Company
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
