"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star } from "lucide-react";

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
      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-gray-900">
              Commercial Elevator<br />
              Installation. Done Right.
            </h1>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
              From hydraulic to high-speed traction — get a budget range in minutes and book a free consultation with a Dwan engineer.
            </p>
            <Button onClick={startQuote} size="lg" className="text-lg font-bold px-8 h-14 bg-[#EFBF04] text-black hover:bg-[#d4aa03] transition-colors mb-6">
              Build Your Quote
            </Button>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400 font-medium">
              <span>5 system types</span>
              <span className="opacity-50">·</span>
              <span>New build & retrofit</span>
              <span className="opacity-50">·</span>
              <span>Free consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-gray-50 border-b border-gray-100 py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm font-semibold text-gray-600">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> Licensed C-11 Contractor</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> New Construction & Retrofit</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> Cal/OSHA & Seismic Compliant</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#EFBF04]" /> Since 1919</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-sm font-bold text-[#EFBF04] uppercase tracking-widest mb-3">How It Works</h2>
            <h3 className="text-3xl font-bold text-gray-900">From Quote to Installation in 4 Steps</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Configure Online", desc: "Choose building type, specs, and features." },
              { step: "2", title: "Get a Budget Range", desc: "See an estimated cost instantly." },
              { step: "3", title: "Book a Consultation", desc: "Video call or on-site survey." },
              { step: "4", title: "We Install", desc: "Full installation with progress updates." },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-10 h-10 bg-[#EFBF04] text-black rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3">
                  {item.step}
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-sm font-bold text-[#EFBF04] uppercase tracking-widest mb-3">Client Results</h2>
            <h3 className="text-3xl font-bold text-gray-900">Trusted by Developers and Facility Teams</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { quote: "Dwan came in under budget on a 12-stop MRL install. Their site survey caught issues the architect missed.", name: "David L.", role: "Developer, SF" },
              { quote: "We needed a freight elevator retrofit in a 1960s warehouse. They handled permitting, shaft prep, everything.", name: "Karen P.", role: "Facilities Manager, Oakland" },
              { quote: "From quote to operational in 14 weeks. The online configurator gave us a realistic budget before we even met.", name: "Steven A.", role: "Architect, San Jose" },
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

      {/* FINAL CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Get Your Elevator Project Started
            </h3>
            <p className="text-gray-400 mb-8">
              Configure your system and get a budget range in under five minutes.
            </p>
            <Button onClick={startQuote} size="lg" className="text-lg font-bold px-8 h-14 bg-[#EFBF04] text-black hover:bg-[#d4aa03] transition-colors">
              Build Your Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-900 py-10 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-bold text-base tracking-[0.15em] mb-1">DWAN ELEVATOR CO.</p>
            <p className="text-sm text-gray-400 mb-5">Serving California Since 1919</p>
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
