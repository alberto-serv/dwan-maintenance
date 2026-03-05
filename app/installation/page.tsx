"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star } from "lucide-react";

const elevatorTypes = [
  { label: "Hydraulic", desc: "Low-rise, heavy duty", from: "$45,000", stops: "Up to 6 stops" },
  { label: "MRL Traction", desc: "Mid-rise, energy efficient", from: "$75,000", stops: "Up to 12 stops" },
  { label: "Gearless Traction", desc: "High-rise, high-speed", from: "$175,000", stops: "30+ stops" },
  { label: "Freight (Heavy)", desc: "Industrial, large loads", from: "$100,000", stops: "Up to 10 stops" },
  { label: "VPL (Accessibility)", desc: "ADA compliance, small footprint", from: "$12,000", stops: "Up to 2 stops" },
];

export default function InstallationLanding() {
  const router = useRouter();
  const startQuote = () => router.push("/installation/quote");

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-50">
        <button onClick={() => router.push("/")} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src="/images/logo.webp" alt="Dwan Elevator Co." width={48} height={48} className="w-auto h-10" />
        </button>
        <Button onClick={startQuote} variant="default" className="bg-[#EFBF04] text-black hover:bg-[#d4aa03] font-bold">
          Get a Quote
        </Button>
      </nav>

      {/* HERO */}
      <section className="relative bg-black text-white overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0">
          <Image src="/images/hero-background.jpeg" alt="Elevator Installation" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
                Commercial Elevator<br />
                Installation. Done Right<br />
                the First Time.
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light max-w-2xl">
                From hydraulic to high-speed traction — get a preliminary budget in minutes and book a free site survey with a Dwan engineer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button onClick={startQuote} size="lg" className="text-lg font-bold px-8 h-14 bg-[#EFBF04] text-black hover:bg-[#d4aa03] transition-colors">
                  Build Your Quote
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400 font-medium mb-8">
                <span>5 system types available</span>
                <span className="opacity-50">·</span>
                <span>New build & retrofit</span>
                <span className="opacity-50">·</span>
                <span>Free site survey</span>
              </div>
              {/* Social Validation */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 max-w-xl">
                <div className="flex -space-x-3 flex-shrink-0">
                  {["A", "D", "K", "S"].map((initial, idx) => (
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
                    <span className="text-white text-sm font-semibold ml-2">4.8/5</span>
                  </div>
                  <p className="text-gray-400 text-sm">500+ elevators installed across California</p>
                </div>
              </div>
            </div>

            {/* Sidebar — why Dwan */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6">Why Dwan for Installation</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EFBF04] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Licensed C-11 Contractor</p>
                      <p className="text-sm text-gray-400">California's dedicated elevator license since 1919</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EFBF04] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">New Build & Retrofit</p>
                      <p className="text-sm text-gray-400">Ground-up construction or existing building upgrades</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EFBF04] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Transparent Pricing</p>
                      <p className="text-sm text-gray-400">Get a budget range before we even visit your site</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EFBF04] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Maintenance Built In</p>
                      <p className="text-sm text-gray-400">Optional service plans from day one</p>
                    </div>
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
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> Licensed & Insured — California C-11</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> New Construction & Retrofit</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> Cal/OSHA & Seismic Compliant</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> Serving California Since 1919</span>
          </div>
        </div>
      </section>

      {/* ELEVATOR TYPES */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-sm font-bold text-[#EFBF04] uppercase tracking-widest mb-3">Systems We Install</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Five Systems. One Trusted Installer.</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Every building is different. Configure your system, get a budget range, and book a free site survey — all in under five minutes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {elevatorTypes.map((type, idx) => (
              <div key={idx} className={`bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col ${idx === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{type.label}</h3>
                <p className="text-gray-500 text-sm mb-4">{type.desc}</p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="text-xl font-bold text-gray-900">From {type.from}</p>
                  <p className="text-xs text-gray-400">{type.stops}</p>
                </div>
              </div>
            ))}
            {/* CTA card */}
            <div className="bg-black text-white rounded-2xl shadow-2xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3">Not Sure Which System?</h3>
              <p className="text-gray-400 text-sm mb-6">Our quote builder walks you through it step by step.</p>
              <Button onClick={startQuote} className="self-start px-6 h-12 font-bold bg-[#EFBF04] text-black hover:bg-[#d4aa03]">
                Start Your Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-sm font-bold text-[#EFBF04] uppercase tracking-widest mb-3">How It Works</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">From Quote to Installation in 4 Steps</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Configure Online", desc: "Choose your system type, building specs, and features in our quote builder." },
              { step: "2", title: "Get a Budget Range", desc: "See an estimated project cost instantly — no commitment required." },
              { step: "3", title: "Book a Site Survey", desc: "A Dwan engineer visits your site to take measurements and finalize specs." },
              { step: "4", title: "We Install", desc: "Our licensed team handles the full installation with ongoing progress updates." },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-[#EFBF04] text-black rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-sm font-bold text-[#EFBF04] uppercase tracking-widest mb-3">Client Results</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Trusted by Developers and Facility Teams</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { quote: "Dwan came in under budget on a 12-stop MRL install. Their site survey caught issues the architect missed.", name: "David L.", role: "Developer, SF" },
              { quote: "We needed a freight elevator retrofit in a 1960s warehouse. They handled permitting, shaft prep, everything.", name: "Karen P.", role: "Facilities Manager, Oakland" },
              { quote: "From quote to operational in 14 weeks. The online configurator gave us a realistic budget before we even met.", name: "Steven A.", role: "Architect, San Jose" },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EFBF04] text-[#EFBF04]" />
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

      {/* FINAL CTA */}
      <section className="py-20 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #EFBF04 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Get Your Elevator Project Started Today
            </h3>
            <p className="text-lg text-gray-300 mb-10">
              Configure your system and get a budget range in under five minutes. Free site survey included.
            </p>
            <Button onClick={startQuote} size="lg" className="text-lg font-bold px-10 h-16 bg-[#EFBF04] text-black hover:bg-[#d4aa03] transition-colors">
              Build Your Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-900 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-bold text-lg tracking-[0.15em] mb-1">DWAN ELEVATOR CO.</p>
            <p className="text-sm text-gray-500 mb-6">Serving California Since 1919</p>

            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-24 mb-10 text-sm text-gray-600">
              <div className="space-y-1">
                <p className="font-bold text-gray-900 uppercase tracking-wider text-xs">San Francisco Bay Area</p>
                <p>1234 Mission Street, San Francisco, CA 94103</p>
                <p><a href="tel:4154651672" className="hover:text-[#EFBF04] font-medium transition-colors">(415) 465-1672</a></p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-gray-900 uppercase tracking-wider text-xs">Greater Los Angeles</p>
                <p>12701 Van Nuys Blvd, Suite D, Los Angeles, CA 91331</p>
                <p><a href="tel:8002011212" className="hover:text-[#EFBF04] font-medium transition-colors">(800) 201-1212</a></p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 text-xs text-gray-500">
              <p>California Contractor License #140423 (C-11 Elevator) • Cal/OSHA Certified • $5M General Liability Insurance</p>
              <p className="mt-3 text-gray-400">© 2026 Dwan Elevator Company</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
