"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function InstallationConfirmation() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("installationData");
    if (stored) setData(JSON.parse(stored));
  }, []);

  function formatCurrency(n: number) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <button onClick={() => router.push("/")} className="hover:opacity-80 transition-opacity">
              <Image src="/images/logo.webp" alt="Dwan Elevator Co." width={80} height={80} className="w-auto h-16" />
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Site Survey Requested
            </h1>
            <p className="text-xl text-gray-600 max-w-xl mx-auto">
              Thank you for your interest in Dwan Elevator. A specialist will be in touch to schedule your on-site survey.
            </p>
          </div>

          {/* Quote Summary */}
          {data && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold mb-6 pb-4 border-b-2 border-[#EFBF04]">
                Quote Summary
              </h2>

              <div className="mb-8 bg-black text-white rounded-xl p-6">
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Estimated Project Cost</p>
                <p className="text-3xl font-bold">
                  {formatCurrency(data.quote.min)} – {formatCurrency(data.quote.max)}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm mb-8">
                <div>
                  <span className="text-gray-500">System</span>
                  <p className="font-semibold text-gray-900">{data.type}</p>
                </div>
                <div>
                  <span className="text-gray-500">Landings</span>
                  <p className="font-semibold text-gray-900">{data.landings}</p>
                </div>
                <div>
                  <span className="text-gray-500">Building Type</span>
                  <p className="font-semibold text-gray-900">{data.buildingType === "new" ? "New Construction" : "Retrofit"}</p>
                </div>
                <div>
                  <span className="text-gray-500">Capacity</span>
                  <p className="font-semibold text-gray-900">{data.capacity === "standard" ? "Standard" : "Heavy Load"}</p>
                </div>
                {data.features?.length > 0 && (
                  <div className="md:col-span-2">
                    <span className="text-gray-500">Premium Features</span>
                    <p className="font-semibold text-gray-900">{data.features.join(", ")}</p>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Name</span>
                    <p className="font-semibold text-gray-900">{data.name}</p>
                  </div>
                  {data.company && (
                    <div>
                      <span className="text-gray-500">Company</span>
                      <p className="font-semibold text-gray-900">{data.company}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-gray-500">Email</span>
                    <p className="font-semibold text-gray-900">{data.email}</p>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-gray-500">Project Address</span>
                    <p className="font-semibold text-gray-900">{data.address}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold mb-6 pb-4 border-b-2 border-[#EFBF04]">
              What Happens Next
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#EFBF04] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold mb-1">We'll Contact You Within 24 Hours</h3>
                  <p className="text-gray-600">A Dwan specialist will reach out to confirm your project details and schedule the site survey.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#EFBF04] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold mb-1">On-Site Survey</h3>
                  <p className="text-gray-600">Our engineer will assess your building, take measurements, and review shaft specifications.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#EFBF04] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold mb-1">Final Proposal</h3>
                  <p className="text-gray-600">You'll receive a detailed proposal with exact pricing, timeline, and equipment specifications.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#EFBF04] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold mb-1">Installation Begins</h3>
                  <p className="text-gray-600">Once approved, our licensed team handles the full installation with ongoing progress updates.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-black text-white rounded-lg p-8 text-center">
            <h3 className="text-xl font-heading font-bold mb-4 text-[#EFBF04]">Need Immediate Assistance?</h3>
            <p className="text-gray-300 mb-6">Questions about your project? Call us directly.</p>
            <div className="flex justify-center">
              <a href="tel:4154651672" className="flex items-center justify-center gap-2 bg-[#EFBF04] text-black font-semibold px-6 py-3 rounded-[3px] hover:bg-[#EFBF04]/90 transition-colors">
                <Phone className="w-5 h-5" />
                <span>(415) 465-1672</span>
              </a>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button onClick={() => router.push("/")} variant="outline" size="lg" className="font-semibold">
              Return to Home
            </Button>
          </div>
        </div>
      </div>

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
